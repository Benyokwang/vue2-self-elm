import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import './config/rem'
import './style/common.scss'
import './style/sCommon.scss'
import 'element-ui/lib/theme-chalk/index.css';


//注册组件库
Vue.use(ElementUI);

Vue.config.productionTip = false

axios.defaults.baseURL = "https://elm.cangdu.org"

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
