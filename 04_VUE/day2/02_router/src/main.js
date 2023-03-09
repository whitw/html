import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import router from './router/index'와 동일
//import router from './router/index.js'와도 동일
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
