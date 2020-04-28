import axios from 'axios'
import {GET_USERINFO,GET_CITY} from './mutations-type'

export default {
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
    },
    // 获取城市 type: guess(定位),hot(热门城市),group(所有城市)
    async cityInfos({commit},type){
        let res = await axios(`/v1/cities?type=${type}`)
        console.log(res)
        commit(GET_CITY,res)
        return res
    }
}