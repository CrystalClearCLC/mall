import {ADD_COUNTER, ADD_CART} from './mutations-types.js'

export default {
  addCart(context, payLoad) {

    return new Promise((resolve) => { //, reject
      let oldProduct = context.state.cartList.find(function (item) {
        return item.iid === payLoad.iid
      })

      if(oldProduct) {
        context.commit(ADD_COUNTER,oldProduct.iid)
        resolve('商品添加成功')
      }else {
        payLoad.count = 1
        context.commit(ADD_CART ,payLoad)
        resolve('商品添加成功')
      }
    })
},
  subCount(context, iid) {
    let oldProduct = context.state.cartList.find(function (item) {
      return item.iid === iid
    })
    if(oldProduct.count !== 1) {
      context.commit('subCount',iid)
    }else {
      context.commit('removeCart',oldProduct)
    }
  },
  allCheckChange(context,isChecked) {
		context.commit('checkedChange_p',isChecked)
	}
}
