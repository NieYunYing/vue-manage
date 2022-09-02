/*
 * @Author: NYY
 * @Date: 2022-08-29 17:19:07
 * @LastEditTime: 2022-09-01 15:50:16
 * @LastEditors: NYY
 * @Description: 
 */
import Mock from 'mock.js'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'

Mock.mock('/home/getData',homeApi.getStatisticalData)
Mock.mock(/user\/add/,'post',userApi.createUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)

Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/del/,'post',userApi.deleteUser)

