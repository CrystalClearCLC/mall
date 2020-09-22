<template>
  <div id="detail-params-info">
    <div class="good-detail-info" ref = 'info'>
      <div class="title">{{goodInfo.goodinfo.key}}</div>
      <table class="rule-table">
        <tr v-for="(item, index) in goodInfo.goodinfo.set" :key = 'index'>
          <td>
            {{item.key}}
          </td>
          <td style="color: var(--color-high-text);">
            <div style="margin-left: 30px;">
               {{item.value}}
            </div>
          </td>
         <!-- <td v-for="(citem, index) in item" :key = 'index' >
            {{citem}}
          </td> -->
        </tr>
      </table>
    </div>
    <div class="good-detail-rule">
       <div class="title">{{goodInfo.goodrule.key}}</div>
        <table class="rule-table">
          <tr v-for="(item, index) in goodInfo.goodrule.tables" :key = 'index'>
            <td v-for="(citem, index) in item" :key = 'index' >
              {{citem}}
            </td>
          </tr>
        </table>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'detailParamsInfo',
    props: {
      goodInfo:Object
    }
	}
</script>

<style scoped>
  #detail-params-info .title {
    /* background-color: skyblue; */
    height: 30px;
    line-height: 30px;
    font-weight: 600;
    box-shadow: 0 2px 0 0 rgba(100,100,100,0.2);
  }

  .good-detail-rule {
    margin-bottom: 5px;
  }
  .rule-table {
    width: 100%;
    margin: 10px;
  }
   .rule-table tr{

     text-align: left;
     font-size: smaller;
     height: 25px;
     box-shadow: 0 1px 0 0 rgba(100,100,100,0.2);
   }
</style>
