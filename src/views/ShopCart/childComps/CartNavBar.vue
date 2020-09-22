<template>
  <div id= 'cart-nav-bar'>
    <nav-bar class="cart-nav">
      <template v-slot:left >
        <div @click="returnClick" class="back">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="nav-title">
          <div>购物车</div>
          <div v-show='goodsnum'>({{goodsnum}})</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

	export default {
		name: 'CartNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        currentIndex: 0,
        goodsnum: 0
      }
    },
    methods: {
      returnClick() {
       this.$emit('returnClick')
      }
    }
	}
</script>

<style scoped>
  #cart-nav-bar {
    background-color: skyblue;
  }
  .nav-title{
    font-size: 15px;
    text-align: center;
    
  }
  .nav-title div{
    display: inline;
  }
  .active {
    color: var(--color-high-text);
  }
  .back {
    margin-top: 5px;
  }
</style>
