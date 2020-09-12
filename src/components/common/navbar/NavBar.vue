<template>
  <div class="nav-bar">

    <div class="left"><slot name="left"></slot></div>

    <div class="mid"><slot name="mid"></slot></div>

    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
	export default {
		name: 'NavBar',
    /* props: {
      bgColor: String
    },
    computed: {
      bgColorStyle() {
        return {'background-color': this.bgColor};
      }
    } */
	}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    text-align: center;
    line-height: 44px;
    height: 44px;
    box-shadow: 0 2px 1px rgba(100, 100, 100, .5);
  }
  .left, .right {
    width: 60px;
  }
  .mid {
    flex: 1;
  }
</style>
