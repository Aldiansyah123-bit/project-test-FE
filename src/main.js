import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Import Assets
import './assets/bs5/dist/css/bootstrap.min.css'
import './assets/css/body.css'
import './assets/css/navbar.css'
import './assets/css/responsive.css'
//Import JS
import './assets/js/onscroll.js'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
