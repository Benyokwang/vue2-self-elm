export default {
    // 获取验证码
    async getCaptcha(){
        return await this.$axios.post('/v1/captchas')
    }
}