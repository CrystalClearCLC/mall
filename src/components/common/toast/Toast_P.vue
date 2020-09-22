<template>
  <div class="toast">
    <transition name="fade">
      <div v-show="toastParams.toastIsShow">{{toastParams.message}}</div>
    </transition>
  </div>
</template>

<script>
	export default {
    name: 'Toast_P',
      props: {},
      data() {
        return {
          toastParams: {
           message: '',
           toastIsShow: false
          }
        }
      },
      methods: {

        toastShow(message = '默认Message', duration = 1000) {
            //ES5默认值
            // duration = duration || 2000
          this.toastParams.message = message
          this.toastParams.toastIsShow = true
          setTimeout(() => {
            this.toastParams.toastIsShow = false
          }, duration)
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
    text-align: center;
    transform: translate( -50%, -50%);
    color: ghostwhite;
    background-color: rgba(10, 10, 10, 0.6);
    border-radius: 5%
  }
</style>
