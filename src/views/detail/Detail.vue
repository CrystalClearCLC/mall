<template>
  <div id="detail" class="wrapper">
    <detail-nav-bar @navTitleClick = "navTitleClick"
                    ref = "nav"
                    style = ''>
    </detail-nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            >
            <!--  @pullingUp="loadMore"
            @pullingDown='reloadPage'-->
      <div>
        <detail-swiper :banners="banners" /><!-- @swiperImageLoad = "swiperImageLoad" -->
        <detail-item-info :testDetailsInfo="detailsinfo"></detail-item-info>
        <detail-shop-info :shopInfo = 'shopInfo'></detail-shop-info>
        <detail-goods-info :goodInfo="goodInfo" @goodsImgLoad= 'goodsImgLoad'></detail-goods-info>
        <detail-params-info :goodInfo="goodInfo" ref = 'paramsInfo'></detail-params-info>
        <detail-comment-info
            :commentInfo="commentInfo"
            ref = 'commentInfo'>
        </detail-comment-info>
        <div class="recommendTitle" >推荐商品</div>
        <goods-list :goods = "recommendInfo" ref = 'revommendInfo'></goods-list>

       <!-- <div>title: {{title}}</div> -->
      </div>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart= 'addToCart'></detail-bottom-bar>

    <toast :toastParams = 'toastParams'></toast>
  </div>
</template>

<script>

  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Toast from 'components/common/toast/Toast.vue'

  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailItemInfo from './childComps/DetailItemInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'

  import TestBanners from '@/utils/details'
  import TestDetailsInfo from '@/utils/detailsinfo.js'
  import {testGoodsInfo, goodinfo} from '@/utils/detailGoodInfo.js'
  import TestrecommendInfo from '@/utils/recommendInfo.js'

//将store中的actions 中的方法映射到 methods中
  import { mapActions } from 'vuex'

	export default {
		name: 'Detail',

    components: {
      Scroll,
      BackTop,
      GoodsList,
      Toast,

      DetailSwiper,
      DetailNavBar,
      DetailItemInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      DetailBottomBar
    },
    data() {
      return {
        isShowBackTop: false,
        banners: [],
        title: null,
        detailsinfo: null,
        shopInfo: {},
        goodInfo: {},
        commentInfo: {},
        recommendInfo: {},
        indexY: [],
        currentIndex: 0,
        toastParams: {
          message: '',
          toastIsShow: false
        }

      }
    },
    created() {
      this.getBanners()
      this.getDetailsInfo()
      this.getShopInfo()
      this.getGoodInfo()
      this.getCommentInfo()
      this.getrecommendInfo()

      this.title = this.$route.query.title
      console.log(this.title)
      /* this.$refs.scroll.refresh() */
    },
    activated() {

    },
    mounted() {
        this.$bus.$on('itemImageLoad',() => {
        this.setIndexY()
      })
    },
    methods: {
      //映射
      ...mapActions(['addCart']),

      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      navTitleClick(index) {
        console.log(index)

        this.$refs.scroll.scrollTo(0, -this.indexY[index], 100)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 500

        let length = this.indexY.length

        for(let i = 0; i< length; i++) {
          if(this.currentIndex !== i && (i < length-1 && -position.y >= this.indexY[i] &&
          - position.y < this.indexY[i+1]) || ( i === length - 1 && -position.y > this.indexY[i])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      //获取组件位置数组
      setIndexY() {

        let lrefs = this.$refs
        if(lrefs.paramsInfo && lrefs.commentInfo &&
            lrefs.revommendInfo && lrefs.scroll) {
          this.indexY = []
          this.indexY.push(0)
          this.indexY.push(this.$refs.paramsInfo.$el.offsetTop)
          this.indexY.push(this.$refs.commentInfo.$el.offsetTop)
          this.indexY.push(this.$refs.revommendInfo.$el.offsetTop)
          this.$refs.scroll.refresh()
        }
      },
      //详情图加载事件
      goodsImgLoad() {
        this.setIndexY()
      },
      //添加购物车
      addToCart() {
        //获取购物车页面需要展示的信息并封装
        //图片 描述 价格
        const product = {}
        product.image = this.banners[0]
        product.info = this. detailsinfo.iteminfo.info
        product.price = this.detailsinfo.iteminfo.nowprice
        product.iid = this.title

        //添加到购物车
        /* this.$store.dispatch('addCart', product).then(res =>{
          console.log(res)
        }) */
        //映射后直接调用
        this.addCart(product).then(res =>{
          this.toastParams.message = res
          this.toastParams.toastIsShow = true
          setTimeout(() => {
            this.toastParams.toastIsShow = false
          }, 1000)
        })
      },
      getBanners() {
        this.banners = TestBanners.banners
      },
      getDetailsInfo() {
        this.detailsinfo = TestDetailsInfo
        console.log(this.detailsinfo)
      },
      getShopInfo() {
        this.shopInfo = testGoodsInfo.shopInfo
      },
      getGoodInfo() {
        this.goodInfo = new goodinfo(testGoodsInfo.detailInfo,testGoodsInfo.itemParams)
      },
      getCommentInfo() {
        this.commentInfo = testGoodsInfo.rate
      },
      getrecommendInfo() {
        this.recommendInfo = TestrecommendInfo
      }
    }
	}
</script>

<style scoped>
  #detail {
    z-index: 1;
    height: 100vh;
    background-color: #fff;
    position: relative;
  }
  .detail-nav {
      background-color: skyblue;
   }

   .content {
     overflow: hidden;

     position: absolute;
     top: 44px;
     bottom: 49px;
     left: 0;
     right: 0;
   }
  .recommendTitle {
    height: 35px;
    line-height: 30px;
    font-weight: 600;
    box-shadow: 0 2px 0 0 rgba(100,100,100,0.2);
    margin: 15px;
  }
</style>
