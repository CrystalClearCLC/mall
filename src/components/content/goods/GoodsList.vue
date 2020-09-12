<template>
  <div class="goods">
    <!-- <div v-for="item in goods" v-bind:key="item" >item: {{item}} <br></div> -->
    <goods-list-item v-for="item in goods" :key="item.uuid()" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }


</style>
