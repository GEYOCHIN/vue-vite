/*
 * @Author: gao
 * @Date: 2022-02-17 14:07:07
 * @LastEditTime: 2022-02-18 14:41:26
 */
import axios from 'axios'

//创建axios实例
const Request = axios.create({
  timeout: 10000
})

//请求拦截器
Request.interceptors.request.use(
  (config) => {
    console.log(config, 'config')
    // 增加时间戳防止服务器缓存
    config.params = {
      ...config.params,
      ts: new Date().getTime()
    }
    return config
  },
  (error) => Promise.reject(error)
)

//响应拦截器
Request.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default Request