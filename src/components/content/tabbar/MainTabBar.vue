<template>
	<div>
		<tab-bar>
			<tab-bar-item activeColor='pink'></tab-bar-item>
			<tab-bar-item path="/g_idle">
				<template v-slot:item-icon><img src="~assets/img/tabber/(G)-IDLE.jpg" alt=""></template>
				<template v-slot:item-text><div>(G)-IDLE</div></template>
			</tab-bar-item>
			
			<tab-bar-item path="/about">
				<template v-slot:item-text><div>About</div></template>
			</tab-bar-item>		
			<tab-bar-item path="/home"></tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style scoped>
</style>
