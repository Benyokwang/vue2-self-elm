import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const home = r => require.ensure([],()=> r(require('../views/Home')),'home')
const about = r => require.ensure([],()=> r(require('../views/About.vue')),'about')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/about',
    name: 'About',
    component: about
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
