import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import Antd from 'ant-design-vue'
Vue.use(Antd) */
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'



Vue.config.productionTip = false

//移动端300ms延迟
FastClick.attach(document.body)


Vue.use(VueLazyLoad, {
  //加载占位图
  loading: require('./assets/img/common/placeholder.png')
})
Vue.use(toast)

//事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
