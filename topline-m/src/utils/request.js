
/**
 * 封装 axios 请求模块
 */

import axios from 'axios'
import jsonBig from 'json-bigint'

// axios.create 方法：复制一个 axios
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在这里设置请求头
    // config.headers.Authorization = sessionStorage.getItem('token')
    return config
  },
  function (error) {
    // Do something with request error  返回请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

// 创建处理 大型整数方法
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (err) {
    return console.log(err)
  }
}]

export default request
