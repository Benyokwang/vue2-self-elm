<template>
    <header class="header">
        <slot name="logo"></slot>
        <slot name="search"></slot>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <!-- <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon-zuojiantou"/>
            </svg>-->
            <i class="iconfont icon-zuojiantou"></i>
        </section>
        <router-link :to="userInfo? '/profile' : '/login'" class="head_login" v-if="isLogin">
            <i class="iconfont icon-touxiang" v-if="userInfo"></i>
            <span v-else>登录 | 注册</span>
        </router-link>
        <section class="title_head" v-if="title_head">
            <span>{{title_head}}</span>
        </section>
    </header>
</template>

<script>
// 取出用户数据
import { mapActions,mapState } from "vuex";

export default {
    props: ["title_head", "goBack", "isLogin"],
    mounted(){
        this.getUserInfo()
    },
    computed: {
        ...mapState([
            'userInfo'
        ])
    },
    methods: {
        ...mapActions([
            'getUserInfo'
        ])
    }
};
</script>

<style lang="scss" scoped>
@import "../style/sCommon.scss";
.header {
    position: fixed;
    left: 0;
    top: 0;
    background: $blue;
    height: 2.2rem;
    @include wh(100%, 2.2rem);
}
.head_login {
    right: -1rem;
    @include ct;
    .icon-touxiang {
        position: absolute;
        right: -.5rem;
        top: -.5rem;
        @include sc(1rem,#fff)
    }
    span {
        @include sc(.7rem,#fff)
    }
}
.head_goback {
    float: left;
    left: 0.4rem;
    line-height: 2.2rem;
    margin-left: 0.4rem;
    @include wh(0.6rem, 1rem);
    @include sc(0.65rem, #fff);
}
.title_head {
    text-align: center;
    line-height: 2.2rem;
    span {
        font-weight: bold;
        @include sc(0.9rem, #fff);
    }
}
.icon-zuojiantou {
    @include sc(0.7rem, #fff);
}
</style>