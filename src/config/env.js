/**
 * 配置 测试环境和线上环境之间切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由地址
 * imgBaseUrl: 图片域名地址
 * 
 */

let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl = '';

if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = '/img/';
} else if (process.env.NODE_ENV == 'production') {
    baseUrl = '//elm.cangdu.org';
    imgBaseUrl = '//elm.cangdu.org/img/';
}

export {
    baseUrl,
    imgBaseUrl,
    routerMode
}