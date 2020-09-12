<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBar',
	}
</script>

<style scoped>
	/* @import url("../../assets/css/tabber/tabber.css"); */
	#tab-bar {
		/* height: 200px; */
		display: flex;
		background-color: papayawhip;
		position:fixed ;
		left: 0;
		right: 0;
		bottom: 0;
		/* 边框阴影 */
		box-shadow: 0 -2px 1px rgba(100,100,100,0.5);
	}
</style>
