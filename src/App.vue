<template>
  <div id="app" class="wrapper">
   <transition name="fade">
       <router-view v-if="isRouterAlive" />
   </transition> 
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
