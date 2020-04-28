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
            <div class="guess_city" @click="toCity">
                <span>{{guessCity}}</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </nav>
        <!-- hotCities -->
        <div class="hot_city">
            <div class="hot_title">热门城市</div>
            <ul>
                <!-- <li v-for="(value,key) in hotCities" :key="key">{{value}}</li> -->
                <router-link tag="li" v-for="(value,key) in hotCities" :key="key" :to="'/city/'+value.id">{{value.name}}</router-link>
            </ul>
        </div>
        <!-- allCity -->
        <div class="all_cities">
            <div class="item_title" v-for="(value,key) in sortCity" :key="key">
                <span class="city_sort">{{key}}</span>
                <ul>
                    <router-link class="city_li" tag="li" v-for="(value2,key2) in value" :key="key2" :to="'/city/'+value2.id">{{value2.name}}</router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import TopHead from "../components/header";
import {getHotCities,getAllCities} from '../common/api'

export default {
    data(){
        return {
            guessCity: null,    //定位城市
            guessCityId: null,  //定位城市id
            hotCities: [],      //热门城市
            allCities: [],      //所有城市
        }
    },
    components: {
        TopHead
    },
    computed: {
        // 因为vue遍历对象时顺序会错乱,因此将对象转为数组再遍历, unicode中A为65,并顺序往下排
        sortCity(){
            let sortObj = {}
            for(var i = 65;i<=90;i++){
                if(this.allCities[String.fromCharCode(i)]){
                    sortObj[String.fromCharCode(i)] = this.allCities[String.fromCharCode(i)]
                }
            }
            return sortObj
        }
    },
    methods: {
        toManManBuy() {
            window.location.reload()
        },
        // 获取城市定位
        async getCity(){
            let res = await this.$store.dispatch('cityInfos','guess')
            this.guessCity = res.data.name
            this.guessCityId = res.data.id
        },
        // 获取热门城市
        async hotCity(){
            let res = await getHotCities()
            this.hotCities = res.data
        },
        // 获取所有城市
        async allCity(){
            let res = await getAllCities()
            this.allCities = res.data;
        },
        toCity(){
            this.$router.push(`/city/`+this.guessCityId)
        }
    },
    mounted(){
        this.getCity()
        this.hotCity()
        this.allCity()
    }
};
</script>

<style lang="scss" scoped>
@import "../style/sCommon";
.header {
    .logo {
        @include sc(0.8rem, #fff);
    }
}
.city {
    background-color: #fff;
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
.guess_city {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .3rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    span {
        @include sc(.8rem,$blue)
    }
    .iconfont {
        @include sc(.7rem,#ccc)
    }
}
.hot_city {
    background-color: #fff;
    margin-top: .8rem;
    .hot_title {
        padding: .3rem;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        @include sc(.6rem,#666)
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .5rem;
            border: 1px solid #e4e4e4;
            border-right: 1px solid #fff;
            margin-top: -1px;
            flex: 1;
            width: 25%;
            min-width: 25%;
            max-width: 25%;
            @include sc(.6rem,$blue)
        }
        li:nth-child(1),li:nth-child(5) {
            border-left: 1px solid #fff;
        }
    }
}
.item_title {
    .city_sort {
        padding: .3rem;
        @include sc(.8rem,#999)
    }
    ul{
        padding-left: .3rem;
        background-color: #fff;
        .city_li {
            padding: .3rem 0;
            border-bottom: 1px solid #e4e4e4;
            @include sc(.8rem,#666)
        }
    }
}
</style>
