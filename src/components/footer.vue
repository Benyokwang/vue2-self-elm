<template>
    <section class="footer">
        <div class="navBar">
            <div class="item call" @click="activeTab('0')">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-SSS"/>
                </svg>
                <span>外卖</span>
            </div>
            <div class="item search" @click="activeTab('1')">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tansuo"/>
                </svg>
                <span>搜索</span>
            </div>
            <div class="item order" @click="activeTab('2')">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-order"/>
                </svg>
                <span>订单</span>
            </div>
            <div class="item mine" @click="activeTab('3')">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wode"/>
                </svg>
                <span>我的</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods: {
        activeTab(index){
            console.log(`点了第${index}tab`)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/sCommon.scss';
    .footer {
        position: absolute;
        padding: .2rem;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        .navBar {
            display: flex;
            width: 100%;
            .item {
                display: flex;
                width: 25%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                @include sc(.4rem,#444);
                span {
                    margin-top: .2rem;
                }
            }
        }
        .active {
            .icon {
                color: $blue;
            }
        }
    }
</style>