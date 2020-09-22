<template>
  <div id="detail-bottom-bar">
    <div class="bottom-bar-item">
      <img src="~assets/img/tabber/(G)-IDLE.jpg" alt="">
      <div>客服</div>
    </div>
    <div class="bottom-bar-item">
      <img src="~assets/img/tabber/(G)-IDLE.jpg" alt="">
      <div>店铺</div>
    </div>
    <div class="bottom-bar-item">
      <img src="~assets/img/tabber/(G)-IDLE.jpg" alt="">
      <div>收藏</div>
    </div>



    <div class="shopping-cart" @click="addToCart">加入购物车</div>

    <div class="purchase">购买</div>

  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  #detail-bottom-bar{
    /* height: 200px; */
    display: flex;
    background-color: papayawhip;
    position:fixed ;
    left: 0;
    right: 0;
    bottom: 0;
    /* 边框阴影 */
    box-shadow: 0 -2px 1px rgba(100,100,100,0.5);
    display: flex;
  }
  .bottom-bar-item {
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
  .bottom-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .shopping-cart {
    line-height: 49px;
    background-color: gold;
    flex: 2;
  }
  .purchase {
    line-height: 49px;
    background-color: var(--color-high-text);
    color: white;
    flex: 2
  }

</style>
