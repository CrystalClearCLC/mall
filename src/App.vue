<template>
  <div id="app" class="wrapper">
  
      <keep-alive exclude="Detail">
        <router-view v-if="isRouterAlive" />
      </keep-alive>
   <!-- <transition name="fade">
   </transition> -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
	import MainTabBar from 'components/content/tabbar/MainTabBar.vue'

	export default {
		name: 'App',
		components:{
			MainTabBar
		},
    provide() {//父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true,
      }
    },
    
    //store数据持久化在SessionStorage中
   
    created() {
     let sessionStore = sessionStorage.getItem('cart_store');
     //replaceState 替换store的跟状态，仅用状态合并或时光旅行调试
      sessionStore && this.$store.replaceState(JSON.parse(sessionStore))
    },
    mounted() {
      //onbeforeunload事件  离开当前页面  刷新或关闭
      window.onbeforeunload = (e) => {
        console.log(e)
         //页面刷新后将数据存储在sessionStorage中
        sessionStorage.setItem('cart_store', JSON.stringify(this.$store.state))
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(function() {
          this.isRouterAlive = true;
        })
      }
    }
	}

</script>
<style>
	@import "assets/css/base.css";
</style>
