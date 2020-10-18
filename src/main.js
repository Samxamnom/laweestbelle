import Vue from 'vue'
import VueRouter from 'vue-router'

import './assets/normalize.css' //load css before app -> else it overrides
import App from './App.vue'

import routes from './scripts/routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);//setup gsap


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
