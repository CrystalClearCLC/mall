<template>
  <div class="toast">
    <div v-show="toastParams.toastIsShow">{{toastParams.message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
      props: {
        toastParams: {
          type: Object,
          default: () => ({
            message: '',
            toastIsShow: false
          })
        }
      }
    }
</script>

<style scoped>
  .toast {
    position:  fixed;
    /* width: 80%; */
    top: 50%;
    left: 50%;
    width: 60%;
    line-height: 30px;

    transform: translate( -50%, -50%);
    color: ghostwhite;
    background-color: rgba(10, 10, 10, 0.6);
    border-radius: 5%
  }
</style>
