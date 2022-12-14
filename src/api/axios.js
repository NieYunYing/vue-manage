/*
 * @Author: NYY
 * @Date: 2022-08-29 16:12:36
 * @LastEditTime: 2022-08-29 17:04:59
 * @LastEditors: NYY
 * @Description: 
 */
import axios from 'axios'
import config from '../config'
const baseUrl = process.env.NODE_ENV === 'development'?config.baseUrl.dev:config.baseUrl.pro

class HttpRequest{
  constructor(baseUrl){
    this.baseUrl=baseUrl
  }
  getInsideConfig(){
    const config = {
      baseUrl:this.baseUrl,
      header:{}
    }
    return config
  }
  intercepters(instance){
    // 添加拦截器
    instance.interceptors.request.use(function(config){
      return config;
    },function(error){
      return Promise.reject(error);
    })

    //添加响应拦截器
    instance.interceptors.response.use(function(response){
      console.log(response,'response')
      return response;
    },function(error){
      console.log(error,'error')
      return Promise.reject(error)
    })
  }
  request(options){
    const instance = axios.create()
    options = {...this.getInsideConfig(),...options}
    this.intercepters(instance)
    return instance(options)
  }
}
export default new HttpRequest(baseUrl)