<template>
  <div class="detail-shop-info">
    <!-- 店铺名/logo-->
    <div class="shop-name">
      <img :src="testshopInfo.logoimg" alt="">
      {{testshopInfo.name}}
    </div>
    <!-- 店铺总销量/全部商品-->
    <div class='shop-info'>
      <div class="sells-goods">
        <div class="item">
          <div class="sells">{{getCSells(testshopInfo.cSells)}}</div>
          总销量
        </div>
        <div class="item">
          <div class="goods">{{testshopInfo.cGoods}}</div>
          全部宝贝
        </div>
      </div>
      <!-- 评价-->
      <div class="scores">
        <div class="item" v-for="item in testshopInfo.score" :key='item.name'>
          <div>{{item.name}}</div>
          <div :style="[item.isBetter?{color:'firebrick'}:{color:'seagreen'},{width:'20px'}]">{{item.score}}</div>
          <div :class="item.isBetter?'better':'unbetter'">{{getIsBetter(item.isBetter)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'DetailShopInfo',
    props:{
      shopInfo: Object
    },
    data() {
      return {
        /* isBetter:'', */
        testshopInfo:this.shopInfo
      }
    },
    methods: {
      getIsBetter(isBetter) {
        return isBetter?'高':'低'
      },
      getCSells(cSells) {
        if(cSells >= 10000){
          let num =cSells/10000
          return num.toFixed(1)+'万'
        }else {
          return cSells
        }

      }
    }
	}
</script>

<style scoped>
  .shop-name {
    text-align: left;
    font-weight: 800;
    line-height: 50px;
    height: 50px;
    display: flex;
    margin: 20px 20px;
  }
  .shop-name img{
    margin-right: 10px;
    height: 48px;
    width: 48px;
    border-radius:100%;
    border: darkgrey .1px solid;
  }

  .shop-info {
    display: flex;
    font-size: x-small;
  }


  .sells-goods {
    flex: 1;
    display: flex;
    justify-content: center;
    box-shadow: 3px 0 0 rgba(100,100,100,0.2);
  }
  .sells-goods .item {
    margin: 11px;

  }
  .sells-goods .item div {
    font-size: large;
    font-weight: 600;
    margin: 5px;
  }

  .scores {
    flex: 1;
    padding-left: 10px;

  }
  .scores .item {
    display: flex;
    justify-content:space-around;
    margin: 8px;
  }

  .better {
    background-color: firebrick;
    color: white;
  }
  .unbetter {
    background-color: seagreen;
    color: white;
  }
</style>
