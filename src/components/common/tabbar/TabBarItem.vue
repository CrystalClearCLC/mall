<template>
	<div class="tab-bar-item" @click="itemClick">

		<slot name="item-icon" v-if="isActive">
			<img src="~assets/logo.png" width="49px"/>
		</slot>

		<slot name="item-icon-active" v-else>
			<img src="~assets/img/tabber/girl.jpg" alt="">
		</slot>

		<div :style="activeStyle">
			<slot name="item-text">
				<div>CLC</div>
			</slot>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: {
				type: String,
				default: '/clc'
			},
			activeColor:{
				type: String,
				default: 'blue'
			}
		},
		data() {
			return {
				//isActive: true
			}
		},
		computed:{
			isActive() {
				return this.$route.path.indexOf(this.path)
			},
			activeStyle() {
				return !this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods:{
			itemClick(){
				if(this.isActive && !(this.$route.path == '/' && this.path == '/home')) {
            console.log('this.path');
            console.log(this.path);
             this.$router.push(this.path);
				}
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item {
		/* flex布局 */
		flex: 1;
		background: aliceblue;
		font-size: small;
		/* line-height: 49px; */
		text-align: center;
		/* 49移动端常用 */
		height: 49px;
		/* border: 1px solid black; */
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 2px;
	}
</style>
