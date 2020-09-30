/*
 * @Author: your name
 * @Date: 2020-09-28 19:54:01
 * @LastEditTime: 2020-09-29 19:10:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \program\guazi\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';

Vue.config.productionTip = false

import './assets/reset.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
