<template>
  <div class="detail-item-info">
    <div class="box">
      <div class="iteminfo">{{DetailsInfo.iteminfo.info}}</div>
      <div class="price">
        <div class="nowprice">{{DetailsInfo.iteminfo.nowprice}}</div>
        <div class="oldprice">{{DetailsInfo.iteminfo.oldprice}}</div>
      </div>

      <div class="iteminfo-mid">
         <div class="item">销量 {{DetailsInfo.mid.salesVolume}}</div>
         <div class="item">收藏 {{DetailsInfo.mid.Collection}}人</div>
         <div class="item">退货补运费</div>
      </div>
    </div>
    <div class="box">
      <div class="iteminfo-footer">
        <div class="item">
          <img :src=DetailsInfo.footer.icon alt="">
          {{DetailsInfo.footer.returngoods}}
        </div>
        <div class="item">
          <img :src=DetailsInfo.footer.icon alt="">
          {{DetailsInfo.footer.delivergoods}}
        </div>
      </div>
    </div>

  </div>

</template>

<script>
	export default {
		name: 'DetailItemInfo',
    props:{
      testDetailsInfo: Object
    },
    data() {
      return {
        DetailsInfo:this.testDetailsInfo
      }
    }
	}
</script>

<style scoped>
  .detail-item-info {
  }
  .box {
    padding: 10px;
    box-shadow: 0 1px 0 0 rgba(100,100,100,0.2);
  }
  .iteminfo {
    font-size: large;
    font-weight: 600;
    text-align: left;
  }
  .price {
    margin-top: 10px;
    display: flex;
    text-align: ;
  }
  .price .nowprice{
    color: var(--color-high-text);
    line-height: 20px;
    font-weight: 600;
  }
  .price .oldprice{
    font-size: small;
    line-height: 20px;
    text-decoration:line-through;
    color: darkgray;
  }
  .iteminfo-mid, .iteminfo-footer{
    margin-top: 20px;
    display: flex;
    justify-content:space-between;
    font-size: small;

  }
  .iteminfo-footer {
    margin: 10px 0;
  }
  .iteminfo-mid .item {
    color: darkgrey;
    /* flex: 1; */
  }
  .iteminfo-footer .item img {
    margin-top: 1px;
    height:10px;
  }
</style>
