import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
