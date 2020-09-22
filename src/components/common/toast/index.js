import Toast from './Toast_P.vue'

const obj = {

}

obj.install = function (Vue) {

  /* Vue.extend(Toast) */

  /* document.body.appendChild(Toast.$el)

  Vue.prototype.$toast = Toast */
  //1 创建组件构造期
    const toastContrustor = Vue.extend(Toast)
  //2 根据组件构造器new一个组件对象
    const toast = new toastContrustor()
  //3 将组件对象，手动挂载盗墓一个元素上
    toast.$mount(document.createElement('div'))
  //4 toast.$el 对应的就是div
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}

export default obj
