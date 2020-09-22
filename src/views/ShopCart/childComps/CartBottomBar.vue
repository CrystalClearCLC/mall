<template>
  <div id="cart-bottom-bar">

    <div class="checkAll">
      <check-button :isChecked='bottomBarParams.isChecked'
                    @click.native = 'allCheckedClick'
                    class="checkbtn">
      </check-button>
      全选
    </div>
    <div class="total">合计：￥{{bottomBarParams.totalPrice}}</div>
    <div class="calculation">去计算({{bottomBarParams.checkedNum}})</div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton.vue'

	export default {
		name: 'CartBottomBar',
    props: {
      bottomBarParams: Object
    },
    components: {
      CheckButton
    },
    methods: {
      allCheckedClick() {
        this.$emit('allCheckedClick')
      }
    }
	}
</script>

<style scoped>
    #cart-bottom-bar {
      position: absolute;
      bottom:51px; /* calc(100% - 49px -49px); */
      left: 0;
      right: 0;
      height: 40px;
      z-index: 9;

      display: flex;
      justify-content: space-between;

      line-height: 40px;

      background-color: lightgrey;
      text-align: left;
    }

    .checkAll {
      margin:0 5px;
    }
    .checkbtn {
      margin-top: 11px;
      margin-right: 5px;
      float: left;
      line-height: 15px;
    }
     .total {
       width: 35%;
     }
    .calculation {
      width: 30%;
      background-color: skyblue;
      text-align: center;
    }
</style>
