<template>
    <div>
        <TopHead search="true" isLogin="true">
            <span slot="city" class="location">{{location}}</span>
        </TopHead>
        <nav class="swiper">
            <swiper>
                
            </swiper>
        </nav>
        <Footer></Footer>
    </div>
</template>

<script>
import TopHead from '../../components/header'
import Footer from '../../components/footer'
import {exactLocation} from '../../common/api'
import swiper from '../../components/slide'

export default {
    components: {
        TopHead,
        Footer,
        swiper
    },
    data(){
        return {
            location: null, //定位位置
        }
    },
    methods: {
        async getLoc(){
            let geohash = this.$route.query.geohash
            let res = await exactLocation(geohash)
            console.log(res)
            this.location = res.data.name
        }
    },
    mounted(){
        this.getLoc()
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/sCommon.scss';
    .location {
        width: 60%;
        display: -webkit-box;
        overflow: hidden;
        white-space: normal!important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        @include sc(.8rem,#fff)
    }
</style>