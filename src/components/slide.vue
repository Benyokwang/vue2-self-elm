<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,key) in foodType" :key="key">
                <div class="slide-container" v-for="(item2,key2) in item" :key="key2">
                    <figure class="item">
                        <img :src="imgBaseUrl + item2.image_url" alt />
                        <span>{{item2.title}}</span>
                    </figure>
                </div>
            </div>
        </div>
        <div class="swiper-pagination paginationDot"></div>
    </div>
</template>

<script>
import { recCategory } from "../common/api";
import "../common/utils/swiper-3.4.2.min.js";
import "../common/utils/swiper-3.4.2.min.css";

export default {
    data() {
        return {
            foodType: [], //食品分类
            imgBaseUrl: "https://fuss10.elemecdn.com" //图片域名地址
        };
    },
    methods: {
        async makeSwiper() {
            let res = await recCategory();
            this.foodType = [res.data.slice(0, 8), res.data.slice(8, 16)]; // 重整数组用以展示轮播图
            console.log(this.foodType); 
            // 需要先获取数据, 等dom渲染完毕后才加载swiper实例, 否则会出bug
            this.$nextTick(() => {
                new Swiper(".swiper-container", {
                    pagination: ".swiper-pagination",
                    paginationClickable: true,
                    loop: true
                });
            });
        }
    },
    mounted() {
        this.makeSwiper();
    }
};
</script>

<style lang="scss" scoped>
@import "../style/sCommon.scss";
.swiper-container {
    background-color: #fff;
    .swiper-wrapper {
        width: 100%;
        margin-bottom: 1rem;
        .swiper-slide {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .slide-container {
                padding: 0.5rem;
                width: 25%;
                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    img {
                        margin-bottom: 0.3rem;
                        @include wh(2rem, 2rem);
                    }
                    span {
                        @include sc(0.6rem, #666);
                    }
                }
            }
        }
    }
}
</style>