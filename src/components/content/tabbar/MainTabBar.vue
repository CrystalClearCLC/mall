<template>
	<div>
		<tab-bar>
      <tab-bar-item path="/home">
          <template v-slot:item-text><div>Home</div></template>
      </tab-bar-item>
			<tab-bar-item path="/g_idle">
				<template v-slot:item-icon><img src="~assets/img/tabber/(G)-IDLE.jpg" alt=""></template>
				<template v-slot:item-text><div>(G)-IDLE</div></template>
			</tab-bar-item>
			<tab-bar-item path="/about">
				<template v-slot:item-text><div>商城</div></template>
			</tab-bar-item>
      <tab-bar-item activeColor='pink' path = '/shopcart'>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <!-- <span v-for="item in testdata" v-bind:key="item">
       <tab-bar-item path="/g_idle">
          <template v-slot:item-icon><img src="~assets/img/tabber/(G)-IDLE.jpg" alt=""></template>
          <template v-slot:item-text><div>{{item.cname}}</div></template>
        </tab-bar-item>
      </span> -->
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

  //import {gettest} from 'network/test.js'

	export default {
		name: 'MainTabBar',
    data() {
      return {
          testdata: null
      }
    },
		components: {
			TabBar,
			TabBarItem
		}
    /* methods:{
      getTest() {
        gettest()
        .then(res => {
          this.testdata = res.data,
          console.log(res)
        })
        .catch()
      }
    }, */
   /* created() {
      this.getTest()
    } */
	}
</script>

<style scoped>
</style>
