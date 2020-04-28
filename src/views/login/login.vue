<template>
    <div>
        <!-- head -->
        <TopHead :title_head="'密码登录'" goBack="true"></TopHead>
        <form class="loginForm">
            <section class="login_item">
                <input v-model="account" class="login_input" type="text" placeholder="账号" />
            </section>
            <section class="login_item">
                <input
                    class="login_input"
                    v-model="pwd"
                    :type="showPassWord? 'text': 'password'"
                    placeholder="密码"
                />
                <div class="switch_button" @click="switch_type">
                    <div class="backImg" :class="{showPass: showPassWord}">abc..</div>
                    <div class="circle" :class="{to_right: showPassWord}"></div>
                </div>
            </section>
            <section class="login_item">
                <div class="captcha_item">
                    <input v-model="captcha_code" class="login_input" type="text" placeholder="验证码" />
                    <img class="captcha" :src="captchaCode" alt />
                    <span class="changeImg" @click="getCaptcha">看不清 换一张</span>
                </div>
            </section>
        </form>
        <el-row class="login">
            <button class="login_btn" @click="login">登录</button>
        </el-row>
    </div>
</template>

<script>
import TopHead from "../../components/header";
import {captcha} from '../../common/api'

export default {
    data() {
        return {
            showPassWord: false, //是否显示密码
            captchaCode: "", //验证码地址
            account: '', //账号
            pwd: '', //密码
            captcha_code: '', //验证码
        };
    },
    components: {
        TopHead
    },
    methods: {
        switch_type() {
            this.showPassWord = !this.showPassWord;
        },
        async getCaptcha() {
            let res = await captcha()
            this.captchaCode = res.data.code
        },
        async login(){
            let data = {
                username: this.account,
                password: this.pwd,
                captcha_code: this.captcha_code
            }
            for(var a in data){
                if(data[a]==''){
                    this.$message({
                        message: '请补全信息',
                        type: 'warning',
                        offset: 0
                    })
                    return
                }
            }
            console.log(data)
            let res = await this.$store.dispatch('login',data)
            console.log(res)
            if(res && res.status==0){
                this.$message({message:res.message,type:'warning'})
                return;
            }else {
                this.$message({message:'登录成功',type:'success'})
                this.$router.push('/')
            }
        }
    },
    mounted() {
        this.getCaptcha();
    }
};
</script>

<style lang="scss" scoped>
@import "../../style/sCommon.scss";
.loginForm {
    margin-top: 0.5rem;
    .login_item {
        position: relative;
        width: 100%;
        border-bottom: 1px solid #f1f1f1;
        .login_input {
            width: 100%;
            padding: 0.66rem;
            height: 2rem;
            line-height: 2rem;
            @include sc(0.7rem, #666);
        }
        .captcha_item {
            display: flex;
            align-items: center;
            .changeImg {
                @include sc(0.55rem, $blue);
            }
        }
    }
}
.switch_button {
    position: absolute;
    top: 30%;
    right: 5%;
    .backImg {
        width: 1.5rem;
        height: 0.75rem;
        padding-left: 0.2rem;
        border-radius: 0.4rem;
        background-color: #ccc;
        @include sc(0.4rem, #fff);
        &.showPass {
            background-color: #4cd964;
        }
    }
    .circle {
        position: absolute;
        top: -0.2rem;
        left: -0.3rem;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 1rem;
        background-color: #f1f1f1;
        transition: all 0.3s;
        &.to_right {
            transform: translateX(1rem);
        }
    }
}
.login {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .login_btn {
        width: 80%;
        height: 2rem;
        border-radius: .3rem;
        background-color: #4cd964;
        font-size: .7rem;
        color: #fff;
    }
}
</style>