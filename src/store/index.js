import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  //mutations 一个方法应该只干一件事,比较单一  复杂方法放在actions 然后调用mutations的单一方法
  mutations,
  //this.$store.dispatch调用
  actions,
	getters
})

export default store
