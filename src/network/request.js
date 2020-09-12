import axios from 'axios'

/* export function test(config){
  const instance = axios.create({
    //实例默认值  优先于全局
      baseURL: 'http://localhost:80/travel_ssm',
      timeout: 3000
  })
  return instance(config)
} */

export function request(config){
	//创建实例
	const instance = axios.create({
		//实例默认值  优先于全局
		baseURL: 'http://123.207.32.32:8000',
		timeout: 3000
	})

	instance.interceptors.request.use(
		cf =>{
			/* console.log('请求拦截');
			console.log(cf); */
			return cf
			},
		//err请求错误拦截
		err =>{
			console.log(err);
			return Promise.reject(err)
			}
	)
	instance.interceptors.response.use(
		cf =>{
		/* 	console.log('响应拦截');
			console.log(cf.data); */
			return cf
			},
		err =>{
			console.log(err);
			return Promise.reject(err)
			}
	)
	return instance(config)


}
