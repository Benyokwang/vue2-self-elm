import {
    GET_USERINFO,
    GET_CITY
} from './mutations-type'

export default {
    // 存储用户信息到vuex
    [GET_USERINFO](state,info){
        state.userInfo = info,
        state.login = true
    },
    // 储存定位城市
    [GET_CITY](state,info){
        state.city = info
    }
}