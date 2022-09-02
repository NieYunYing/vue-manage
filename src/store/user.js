/*
 * @Author: NYY
 * @Date: 2022-09-01 16:41:14
 * @LastEditTime: 2022-09-01 16:48:53
 * @LastEditors: NYY
 * @Description: 
 */
import Cookie from 'js-cookie'
export default{
  state:{
    token:""
  },
  mutations:{
    setToken(state,val){
      state.token=val
      Cookie.set('token',val)
    },
    clearToken(state){
      state.token = ''
      Cookie.remove('token')
    },
    getToken(state){
      state.token=state.token||Cookie.get('token')
    }
  }
}