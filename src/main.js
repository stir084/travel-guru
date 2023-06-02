import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import store from './store'
import router from './router'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexChart', VueApexCharts)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
