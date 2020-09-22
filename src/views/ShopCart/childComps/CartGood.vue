<template>
    <div id="cartGood">
     <check-button :is-checked="item.checked"
                   @click.native = 'checkedClick(item)'
                   class="chekckBtn">
     </check-button>
      <img :src="item.image.image" alt="">
      <div >
        <div class='info'>{{item.info}}</div>
        <div class='price-count'>
          <div class = 'price'>{{item.price}}</div>
          <div class = 'count'>
           <div @click = 'subClick(item.iid)' class="addsub"> - </div>
           <div>{{item.count}}</div>
           <div @click = 'addClick(item.iid)' class="addsub"> + </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
   import CheckButton from './CheckButton.vue'

	export default {
		name: 'CartGood',
    props: {
      item: Object
    },
    components: {
      CheckButton
    },
    methods: {
      addClick(iid) {
        this.$emit('addClick',iid)
      },
      subClick(iid) {
        this.$emit('subClick',iid)
      },
      checkedClick(iid) {
        this.$emit('checkedClick',iid)
      }
    }
	}
</script>

<style scoped>
  #cartGood {
    position: relative;
    top: 5px;
    height: 70px;
    display: flex;
  }
  #cartGood .chekckBtn {
    margin: auto;
  }
  #cartGood img {
    width: 70px;
    height: 70px;
    margin-left: 5px;
  }
  #cartGood .info {
    margin: 5px;
    text-align: left;
    line-height: 15px;
  }
  #cartGood .price-count {
    margin-top: 0.3125rem;
    display: flex;
    justify-content:space-between;
  }
  #cartGood .price-count div {
    flex: 1;
  }
  #cartGood .price-count .price {
    text-align: left;
  }
  #cartGood .price-count .count {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  #cartGood .price-count .count .addsub{
    font-size: large;
  }
  #cartGood .price-count .price {
    color: var(--color-high-text);
  }
</style>
