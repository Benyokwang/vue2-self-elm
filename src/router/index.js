import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const home = r => require.ensure([],()=> r(require('../views/Home')),'home')
const about = r => require.ensure([],()=> r(require('../views/About.vue')),'about')
const login = r => require.ensure([],()=> r(require('../views/login/login')),'login')

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
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
