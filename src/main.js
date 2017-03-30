// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vuex from 'vuex'
import ElemenUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routes from './router.config.js'
Vue.use(ElemenUI)
Vue.use(VueRouter)
const router = new VueRouter ({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
