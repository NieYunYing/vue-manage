/*
 * @Author: NYY
 * @Date: 2022-08-29 16:56:58
 * @LastEditTime: 2022-09-01 11:35:51
 * @LastEditors: NYY
 * @Description: 
 */
import axios from "./axios";
export const getMenu = (param) =>{
  return axios.request({
    url:"/permission/getMenu",
    method:'post',
    data:param
  })
}
export const getData = () =>{
  return axios.request({
    url:"/home/getData",
    method:'get'
  })
}
export const getUser = (params) =>{
  return axios.request({
    url:"/home/getData",
    method:'get',
    params
  })
}