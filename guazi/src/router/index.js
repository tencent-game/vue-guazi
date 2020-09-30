/*
 * @Author: your name
 * @Date: 2020-09-28 19:54:01
 * @LastEditTime: 2020-09-30 10:29:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \program\guazi\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '/index',
    name: 'index',
    component: ()=>import(/* webpackChunkName: "idnex" */ '../views/index.vue')
  },
  {
    path: '/Cardeckill',
    name: 'Cardeckill',
    component: ()=>import(/* webpackChunkName: "idnex" */ '../views/deckill.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
