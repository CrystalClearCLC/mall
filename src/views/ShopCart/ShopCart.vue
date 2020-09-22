<template>

  <div id = 'shop-cart'>
    <cart-nav-bar @returnClick='returnClick' ref='nav'></cart-nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            >
      <div class="cartGoods" v-for= 'item in cartList' :key='item.iid'>
        <cart-good :item = 'item'
                    @addClick = 'addClick'
                    @subClick = 'subClick'
                    @checkedClick = 'checkedClick'>
        </cart-good>
      </div>
    </scroll>


    <cart-bottom-bar @allCheckedClick = 'allCheckedClick'
                     :bottomBarParams = 'bottomBarParams'>

    </cart-bottom-bar>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import CartNavBar from './childComps/CartNavBar.vue'
  import CartGood from './childComps/CartGood.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'

	export default {
		name: 'ShopCart',
    components: {
      Scroll,

      CartNavBar,
      CartGood,
      CartBottomBar
    },
    data() {
      return {
        cartList: [],
        isShowBackTop:false,
        bottomBarParams: {
          checkedNum: 0,
          isChecked: false,
          totalPrice: 0
        }
      }
    },
    computed: {

    },
    created() {
    },
    activated() {
      console.log('activated')
      this.cartList = this.$store.state.cartList
      this.$refs.nav.goodsnum = this.cartList.length
    },
    updated() {
      this.getTotal()
      this.getIsChecked()
    },
    methods: {
      returnClick() {
        this.$router.go(-1)
      },
      //商品数量+1
      addClick(iid) {
        this.$store.commit('addCount',iid)
        this.getTotal()
      },

      //商品数量-1
      subClick(iid) {
        this.$store.dispatch('subCount',iid)
        this.$refs.nav.goodsnum = this.cartList.length
        this.getTotal()
      },

      //选择事件
      checkedClick(item) {
        //提交 修改store
        this.$store.commit('checkedChange',item.iid)
        //修改选定商品数量和全选状态
        if(item.checked) {
          this.bottomBarParams.checkedNum += 1
        }else {
          this.bottomBarParams.checkedNum -= 1
        }
        //计算总价
        this.getTotal()
        this.getIsChecked()
      },

      //
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 500
      },

      //全选事件
      allCheckedClick() {
        if(!this.bottomBarParams.isChecked) {
           this.$toast.toastShow('全选')
        }
        //修改按钮全选按钮状态（class）
        this.bottomBarParams.isChecked = !this.bottomBarParams.isChecked
        //提交
        this.$store.dispatch('allCheckChange',this.bottomBarParams.isChecked)
        //计算总价
        this.getTotal()

        if(this.bottomBarParams.isChecked) {
          this.bottomBarParams.checkedNum = this.cartList.length
        }else {
          this.bottomBarParams.checkedNum = 0
        }


      },

      //获取是否全选
      getIsChecked() {

        if(this.cartList.length !== 0 && this.bottomBarParams.checkedNum === this.cartList.length) {
          this.bottomBarParams.isChecked = true
        }else {
          this.bottomBarParams.isChecked = false
        }
      },
      //获取选中商品数量和总价
      getTotal() {
        let cNum = 0

        let totalPrice = 0
        let price

        this.cartList.forEach(item => {
          if(item.checked) {
            cNum += 1
            price = item.price.split('￥')[1]
            price = parseInt(price)
            totalPrice += price * item.count
          }
        })

        this.bottomBarParams.checkedNum = cNum
        this.bottomBarParams.totalPrice = totalPrice
      }
    }
	}
</script>

<style scoped>
  #shop-cart {
    /* z-index: 1;
    background-color: #FFFFFF;
    height: 100vh;
    position: relative; */
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 91px;
    left: 0;
    right: 0;
  }
  .cartGoods {
    height: 80PX;
    margin: 5px;
    background-color: #FFFFFA;
    border: #FFFFe0 1px solid;
    font-size: smaller;
    line-height: 15px;
  }

</style>
