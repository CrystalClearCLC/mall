<template>
  <div id="detail-good-info">
    <div class="good-detail-img">
      <div class="title">
        {{goodInfo.detailImage[0].key}}
      </div>
      <div class="goodimgs"
          v-if="goodInfo.detailImage[0].list">
          <!-- 如果商品数据没有图片则不显示
            另外可以监听load事件 确定图片夹在完成 调用refresh 刷新scroll
          -->
        <div  v-for=" item in goodInfo.detailImage[0].list"
          :key="item">
           <!-- <img :src="item" alt="" @load="goodsImgLoad"> -->
           <img v-lazy ="item" alt="" @load="goodsImgLoad">
           <!-- 懒加载-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'DetailGoodsInfo',
    props: {
      goodInfo:Object
    },
    data() {
      return {
        imgList: [
          '/CLC.jpg',
          '/CLC2.jpg',
          '/CLC3.jpg',
          '/CLC4.jpg',
        ]
      }
    },
    methods: {
      goodsImgLoad() {
        this.$emit('goodsImgLoad')
      }
    }

	}
</script>

<style scoped>
  #detail-good-info {
    margin: 20px 0;
  }
  #detail-good-info .title {
    /* background-color: skyblue; */
    height: 30px;
    line-height: 30px;
    font-weight: 600;
    box-shadow: 0 2px 0 0 rgba(100,100,100,0.2);
  }


  .goodimgs{
    margin-top: 20px;
  }
  .goodimgs img {
    width: 100%;
    border-radius:3%;
  }


</style>
