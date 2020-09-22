<template>
  <div id="check-button">
    <div :class="isChecked?'checked':'unchecked'">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
	export default {
		name: 'CheckButton',
    props: {
      isChecked: Boolean
    }
	}
</script>

<style scoped>
  #check-button {
  }
  #check-button img{
    height: 15px;
    width: 15px;
  }
  .checked {
     background-color: pink;
  }
  .unchecked {
     background-color: white;
  }
</style>
