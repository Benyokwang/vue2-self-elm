import {
    GET_USERINFO
} from './mutations-type'

export default {
    // 存储用户信息到vuex
    [GET_USERINFO](state,info){
        state.userInfo = info,
        state.login = true
    }
}