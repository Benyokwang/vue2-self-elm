/**
 * api 文档
 */
import axios from 'axios';

// 获取验证码
async function captcha(){
    return await axios.post('/v1/captchas')
}
// 获取热门城市
async function getHotCities(){
    return await axios('/v1/cities?type=hot')
}
// 获取所有城市
async function getAllCities(){
    return await axios('/v1/cities?type=group')
}
// 根据id搜索城市
async function searchCityById(id){
    return await axios(`/v1/cities/${id}`)
}
// 搜索地址
async function searchPlace(id,keyword){
    return await axios(`/v1/pois?city_id=${id}&keyword=${keyword}&type=search`)
}

export {
    captcha,
    getHotCities,
    getAllCities,
    searchCityById,
    searchPlace
}