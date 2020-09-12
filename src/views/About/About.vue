<template>
  <div id="about" class="about" >
    <img src="../../assets/img/tabber/CLC.jpg" alt="" v-show="false">
    <nav-bar class="app-nav">
      <template v-slot:mid>
        <div>购物车</div>
      </template>
    </nav-bar>
    <img src="" alt="">
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load = "false"
            @pullingDown = "RefreshPage"
            >
						<!-- @pullingUp="loadMore" -->
             <!-- @pullingDown = "RefreshPage" -->

      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"/>
      <good-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>

   <!-- <good-list :goods="showGoods"/> -->

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl'
  import Scroll from 'components/common/scroll/Scroll'
  import GoodList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import TestGoods from '@/utils/test'
  //import TestBRs from '@/utils/test2'
  import {getAboutmultidata,getAboutGoods} from 'network/about'

  export default {
    name: 'About',
    inject:['reload'],//注入App里的reload方法
    components:{
      NavBar,
      TabControl,
      Scroll,
      GoodList,
      BackTop,

      HomeSwiper,
      RecommendView,
      FeatureView,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        testgoods: TestGoods,
        scoll:null
      }
    },
    created() {
      //获取多个数据
      // 1.请求多个数据
      this.getAboutmultidata(),

      // 2.请求商品数据
      this.getAboutGoods('pop'),
      this.getAboutGoods('new'),
      this.getAboutGoods('sell')
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 200
      },
     RefreshPage() {
        console.log('refresh');
        this.reload();
        this.$refs.scroll.scroll.finishPullDown()
      },
      loadMore() {
        this.getAboutGoods(this.currentType)
      },
      /**
       * 网络请求相关的方法
       */
      getAboutmultidata() {
        getAboutmultidata().then(res => {
          // this.result = res;
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getAboutGoods(type) {
        const page = this.goods[type].page + 1
        getAboutGoods(type, page).then(res => {
          console.log(res),
          //console.log(this.testgoods.[type]),
          /* this.goods[type].list.push(...res.data.data.list), */
          this.goods[type].list.push(...this.testgoods.[type]),
          this.goods[type].page += 1,
          setTimeout(() => {
            this.$refs.scroll.finishPullUp()
          },2000)
        })
      }

      //模拟网络请求
      /* getAboutmultidata() {

          this.banners = TestBRs.banners;
          this.recommends = TestBRs.recommend;
      },
      getAboutGoods(type) {
        console.log(this.testgoods.[type]),
        this.goods[type].list.push(...this.testgoods.[type]),
        this.goods[type].page += 1
      } */
    },

    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #about {
    height: 100vh;
    position: relative;
    top: 0;
    bottom: 0;
  }
  .app-nav{
    background-color: var(--color-tint);/*  pink; */
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    /*
      z-index 属性设置元素的堆叠顺序。
      拥有更高堆叠顺序的元素总是会处于
      堆叠顺序较低的元素的前面。
     */
    z-index: 9;
  }

  .tab-control {
    /*
      父元素不能overflow:hidden或者overflow:auto属性
      必须指定top、bottom、left、right4个值之一，否则只会处于相对定位
      父元素的高度不能低于sticky元素的高度
    */
    position: sticky;
    top: 0;
    z-index: 9;
  }

  .content {
    /* 解决移动端fixed布局晃动穿模问题*/
    overflow: hidden;
    position: absolute;

    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    /*
      解决fixed布局父元素导致子元素无法滚动的问题
    */
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
