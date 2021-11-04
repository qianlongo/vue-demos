import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

Vue.config.productionTip = false

Vue.config.keyCodes = {
  q: 81
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
