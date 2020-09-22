<template>
  <div>
    <nav-bar class="detail-nav">
      <template v-slot:left >
        <div @click="returnClick" class="back">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="nav-title">
          <div v-for="(item ,index) in navTitle"
                :key="index"
                class='nav-title-item'
                :class="{active: index === currentIndex}"
                @click="navTitleClick(index)">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

	export default {
		name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        navTitle: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      returnClick() {
       this.$router.go(-1)
      },
      navTitleClick(index) {
        this.currentIndex = index
        this.$emit('navTitleClick', index)
      }
    }
	}
</script>

<style scoped>
  .nav-title{
    display: flex;
    font-size: 15px;
  }
  .nav-title-item{
     flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .back {
    margin-top: 5px;
  }
</style>
