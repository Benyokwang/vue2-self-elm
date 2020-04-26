import axios from 'axios'
import {GET_USERINFO} from './mutations-type'

export default {
    // 获取验证码
    async getCaptcha(){
        return await axios.post('/v1/captchas')
    },
    // 登录
    async login({commit},data){
        console.log(data)
        let res = await axios.post('/v2/login',data)
        commit(GET_USERINFO,res.data)
        return res.data
    },
    // 获取用户信息
    async getUserInfo(){
        let res = await axios('/v1/user')
        console.log(res)
    }
}