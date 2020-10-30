import Home from '../components/Home.vue'
import About from '../components/About.vue'
import EureZeremonie from '../components/EureZeremonie.vue'

export default [
  { path: '/', component: Home },
  { path: '/About', component: About},
  { path: '/Zeremonie', component: EureZeremonie},
  { path: '*', redirect: '/'}
]
