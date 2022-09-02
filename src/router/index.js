/*
 * @Author: NYY
 * @Date: 2022-08-27 10:35:30
 * @LastEditTime: 2022-09-02 09:22:30
 * @LastEditors: NYY
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: ()=>import('../views/Main.vue'),
    children:[
      // {
      //   path:'/home',
      //   name:'home',
      //   component:()=>import('../views/home')
      // },
      // {
      //   path:'/user',
      //   name:'user',
      //   component:()=>import('../views/User')
      // },
      // {
      //   path:'/mall',
      //   name:'mall',
      //   component:()=>import('../views/mall')
      // },
      // {
      //   path:'/page1',
      //   name:'page1',
      //   component:()=>import('../views/other/pageOne')
      // },
      // {
      //   path:'/page2',
      //   name:'page2',
      //   component:()=>import('../views/other/pageTwo')
      // }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
