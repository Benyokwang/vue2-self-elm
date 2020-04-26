<template>
    <div class="home">
        <!-- head -->
        <TopHead class="header" isLogin="true">
            <span slot="logo" class="logo" @click="toManManBuy">muaMai</span>
        </TopHead>
        <!-- location -->
        <nav class="city">
            <div class="right_location">
                <span>当前定位城市:</span>
                <span>定位不准时,请在城市列表中选择</span>
            </div>
        </nav>
    </div>
</template>

<script>
import TopHead from "../components/header";

export default {
    name: "Home",
    components: {
        TopHead
    },
    methods: {
        toManManBuy() {
            window.location.reload()
        }
    },
    mounted(){

    }
};
</script>

<style lang="scss" scoped>
@import "../style/sCommon";
.header {
    .logo {
        position: absolute;
        top: 25%;
        left: 0.5rem;
        @include sc(0.8rem, #fff);
    }
}
.city {
    .right_location {
        display: flex;
        justify-content: space-between;
        margin-top: 0.3rem;
        padding: 0.3rem;
        span:nth-child(1) {
            @include sc(0.6rem, #444);
        }
        span:nth-child(2) {
            @include sc(0.5rem, #666);
        }
    }
}
</style>
