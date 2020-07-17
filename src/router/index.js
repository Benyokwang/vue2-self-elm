import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const home = r => require.ensure([],()=> r(require('../views/Home')),'home')  //主页
const about = r => require.ensure([],()=> r(require('../views/About.vue')),'about') //
const login = r => require.ensure([],()=> r(require('../views/login/login')),'login') //登录
const profile = r => require.ensure([],()=> r(require('../views/admin/profile')),'profile') //个人信息
const city = r => require.ensure([],()=> r(require('../views/city/city')),'city') //城市列表
const shopList = r => require.ensure([],()=> r(require('../views/shop/shopList.vue')),'shopList') //商铺列表
const searchPage = r => require.ensure([],()=> r(require('../views/search/search.vue')),'searchPage') //搜索页

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
  },
  {
    path: '/profile',
    name: 'Profile',
    component: profile
  },
  {
    path: '/city/:cityId',
    name: 'City',
    component: city
  },
  {
    path: '/shopList/',
    name: 'shopList',
    component: shopList
  },
  {
    path: '/searchPage/',
    name: 'searchPage',
    component: searchPage
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
