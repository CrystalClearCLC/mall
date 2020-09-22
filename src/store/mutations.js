
export default  {
  addCart(state, payLoad) {
    payLoad.checked = true
    state.cartList.push(payLoad)
  },
  removeCart(state, payLoad) {
    let index = state.cartList.findIndex(function (item) {
      return item.iid === payLoad.iid
    })
    //开始下标，删除个数
    state.cartList.splice(index, 1)
  },
  addCount(state,iid) {
    let oldProduct = state.cartList.find(function (item) {
      return item.iid === iid
    })
    oldProduct.count +=1
  },
  subCount(state,iid) {
    let oldProduct = state.cartList.find(function (item) {
      return item.iid === iid
    })
    oldProduct.count -=1
  },
  checkedChange(state, iid) {
    let oldProduct = state.cartList.find(function (item) {
      return item.iid === iid
    })
    oldProduct.checked = !oldProduct.checked
  },
  checkedChange_p(state, isChecked) {
    state.cartList.forEach(item => {
      item.checked = isChecked
    })
  }
}
