import Home from '../components/Home.vue'
import About from '../components/About.vue'

export default [
  { path: '/', component: Home },
  { path: '/About', component: About},
  { path: '*', redirect: '/'}
]
