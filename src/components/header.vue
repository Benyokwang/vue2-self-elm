<template>
    <header class="header">
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zuojiantou" />
            </svg>
        </section>
        <section class="search" v-if="search" :to="'/seachPage'">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo" />
            </svg>
        </section>
        <slot name="logo"></slot>
        <slot name="search"></slot>
        <slot name="city"></slot>
        <router-link :to="userInfo? '/profile' : '/login'" class="head_login" v-if="isLogin">
            <svg class="icon" aria-hidden="true" v-if="userInfo">
                <use xlink:href="#icon-touxiang" />
            </svg>
            <span v-else>登录 | 注册</span>
        </router-link>
        <section class="title_head" v-if="title_head">
            <span>{{title_head}}</span>
        </section>
        <slot name="changeCity"></slot>
    </header>
</template>

<script>
// 取出用户数据
import { mapActions, mapState } from "vuex";

export default {
    props: ["title_head", "goBack", "isLogin", "search","city"],
    mounted() {
        this.getUserInfo();
    },
    computed: {
        ...mapState(["userInfo"])
    },
    methods: {
        ...mapActions(["getUserInfo"])
    }
};
</script>

<style lang="scss" scoped>
@import "../style/sCommon.scss";
.header {
    display: flex;
    padding: 0 0.5rem;
    justify-content: space-between;
    align-items: center;
    background: $blue;
    height: 2.2rem;
    @include wh(100%, 2.2rem);
}
.head_login {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-touxiang {
        @include sc(1rem, #fff);
    }
    span {
        @include sc(0.7rem, #fff);
    }
}
.head_goback {
    float: left;
    left: 0.4rem;
    line-height: 2.2rem;
    @include wh(0.6rem, 1rem);
    @include sc(0.65rem, #fff);
}
.title_head {
    position: absolute;
    right: 38%;
    span {
        font-weight: bold;
        @include sc(0.9rem, #fff);
    }
}
.icon-zuojiantou {
    @include sc(0.7rem, #fff);
}
</style>