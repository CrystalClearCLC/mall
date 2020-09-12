import {request} from './request.js'

 export function getAboutMultidata() {
  return request({
    url: '/home/multidata'
  })
 }

export function getAboutGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
