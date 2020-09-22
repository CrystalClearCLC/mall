<template>
  <div id="home" class="wrapper">
    <template ><img src="../../assets/img/tabber/CLC.jpg" alt="" v-show="showimg"></template>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control"
                 :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 ref="topTabControl"
                 :class="{fixed:isTabFixed}"
                 v-show="isTabFixed"
                 />

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
            @pullingDown='reloadPage'
            >
      <home-swiper :banners="banners" @swiperImageLoad = "swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl"
                   :class="{fixed:isTabFixed}"/>
      <good-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
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
  import {getAboutMultidata,getAboutGoods} from 'network/about'

  export default {
    name: "Home",
    inject: ['reload'],
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodList,
      Scroll,
      BackTop
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
        showimg: false,
        taboffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY)
      this.$refs.scroll.refresh()
    },
    created() {
      // 1.请求多个数据
      this.getAboutMultidata()

      // 2.请求商品数据
      this.getAboutGoods('pop')
      this.getAboutGoods('new')
      this.getAboutGoods('sell')
    },
    deactivated() {
      //console.log('deactivated')
      this.saveY = this.$refs.scroll.scroll.y
      //console.log(this.saveY)
      this.$bus.$off('itemImgaLoad',this.itemImgListener)
    },
    mounted() {
      //图片加载完成的事件监听
      const scroll = this.$refs.scroll
      /* const rf = function(){
        if(scroll){
          scroll.refresh
        }
      } */

      //duirefresh进行防抖操作
      const refresh = this.debounce(scroll.refresh, 50)
      //img虽然被挂载，但是其中的图片还没有占据高度
      this.$bus.$on('itemImageLoad', () => {
          if(scroll){
             refresh()
          }
      })
    },
    methods: {
      /*
          防抖/节流 函数
      */
      debounce(func, delay) {
        let timer = null
        return function (...args) {
          if(timer) clearTimeout(timer)
          timer = setTimeout(() => {
            console.log('refresh')
            func.apply(this, args)
          },delay)
        }
      },
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

        /* this.showGoods = this.good[this.currentType].list */
        //让两个TabControl的currentIndex保持一致
        this.$refs.tabControl.currentIndex = index
        this.$refs.topTabControl.currentIndex = index

      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {

        this.isShowBackTop = (-position.y) > 500
        //决定tabControl师傅吸顶（positon：fixed）
        this.isTabFixed = (-position.y) >this.taboffsetTop
      },
      loadMore() {
        this.getAboutGoods(this.currentType)
      },
      reloadPage() {
        this.reload();
        this.$refs.scroll.scroll.finishPullDown()
      },
      swiperImageLoad() {
        //获取tab_con  的taboffsetTop
        //所有组件都有属性$el：用于获取组件中的元素tabControl

        this.taboffsetTop=this.$refs.tabControl.$el.offsetTop
      },


      /**
       * 网络请求相关的方法
       */
      getAboutMultidata() {
        getAboutMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getAboutGoods(type) {
        const page = this.goods[type].page + 1
        getAboutGoods(type, page).then(res => {
          /* this.goods[type].list.push(...res.data.list) */
          res == null,
          this.goods[type].list.push(...this.testgoods.[type]),
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* 原生滚动时定位*/
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .tab-control {
    /* position: sticky;
    top: 44px;*/
    z-index: 9;
  }
  .fixed {
    position: fixed;

    left: 0;
    right: 0;
    top: 44px
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>
