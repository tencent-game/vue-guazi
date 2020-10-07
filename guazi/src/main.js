import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'


Vue.config.productionTip = false

import './assets/reset.css'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
