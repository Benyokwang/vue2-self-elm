import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    userInfo: null, //用户信息
    login: false,   //登录
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})