/* 
	该文件是对axios这个库的二次封装，完成：
		1.配置请求的基础路径
		2.配置超时时间
		3.统一处理post请求json编码问题（转为urlencoded）
		4.统一返回真正的数据data，而不是response对象
		5.统一处理错误
*/

import axios from 'axios' 
import qs from 'querystring' //用于将对象转为urlencoded字符串
import Nprogress from 'nprogress'//引入nprogress制作进度条
import 'nprogress/nprogress.css'

//因为有多个服务器接口,就不统一配置请求的基础路径了
// axios.defaults.baseURL='/api'

// 配置超时时间
axios.defaults.timeout=2000

// 请求拦截器
axios.interceptors.request.use((config)=>{
  Nprogress.start()
  const {method,data} =config
  // 统一处理post请求json编码问题(转为urlencoded)
  if(method.toLowerCase()==='post' && data instanceof Object){
    config.data=qs.stringify(data)
  }

  return config
})

// 响应拦截器
axios.interceptors.response.use(
  response=>{
    Nprogress.done()
    return response.data
  },
  error=>{
    Nprogress.done()
    // 统一处理请求错误
    console.log('请求出错了')
    return Promise.reject(error) //返回失败的promise 具体请求可以处理
  }
)

export default axios