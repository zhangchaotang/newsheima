import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 载入 vant 模块
import './utils/register-vant.js'
// axios
import Axios from './utils/request'

Vue.prototype.$http = Axios
Vue.prototype.$xx = 1

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
