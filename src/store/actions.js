import axios from 'axios'

export default {
    // 获取验证码
    async getCaptcha(){
        return await axios.post('/v1/captchas')
    },
    // 登录
    async login({commit},data){
        console.log(data)
        let res = await axios.post('/v2/login',data)
        commit('setUserInfo',res.data)
        return res.data
    }
}