
/*
* @Author: NYY
* @Date: 2022-08-29 11:21:00
 * @LastEditTime: 2022-09-02 09:35:08
 * @LastEditors: NYY
* @Description: 
*/
// import router from '../router'
import Cookie from 'js-cookie'
export default{
  state:{
    isCollapse:false,
    tabsList:[{
      path:'/',
      name:'home',
      label:'首页',
      icon:'home'}
    ],
    currentMenu:null
  },
  mutations:{
    collapseMenu(state){
      state.isCollapse=!state.isCollapse
    }, 
    selectMenu(state,val){
      if(val.name != 'home'){
        state.currentMenu = val
        const result = state.tabsList.findIndex(item => item.name === val.name)
        if(result == -1){
          state.tabsList.push(val)
        }
      }else{
        state.currentMenu = null
      }
    },
    closeTag(state,val){
      const result = state.tabsList.findIndex(item=>item.name===val.name)
      state.tabsList.splice(result,1)
    },
    clearMenu(state,router){
      state.menu = []
      // Cookie.remove('menu'){
      //   return
      // }
      const menu = JSON.stringify(Cookie.get('menu'))
      state.menu=menu
      const menuArray = []
      menu.forEach(item => {
        if(item.children){
          item.children = item.children.map(item =>{
            item.component =()=>import('../views/${item.url}')
            return item
          })
          menuArray.push(...item.children)
        }else{
          item.component=()=>import(`../views/${item.url}`)
          menuArray.push(item)
        }
      });
      menuArray.forEach(item=>{
        router.addRoute('Main',item)
      })
    }
  }
}