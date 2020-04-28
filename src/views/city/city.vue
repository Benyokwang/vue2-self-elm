<template>
    <div>
        <TopHead goBack="true" class="head_top">
            <span class="cityName" slot="city">{{cityName}}</span>
            <router-link to="/" class="changeCity" slot="changeCity">切换城市</router-link>
        </TopHead>
        <div class="input_form">
            <input class="location" v-model="location" placeholder="输入学校、商务楼、地址" />
            <button class="btn" @click="submit">提交</button>
        </div>
        <div class="search_history" v-if="!searchList">
            <p>搜索历史</p>
            <ul>
                <li
                v-for="(item,key) in search_history"
                :key="key"
                @click="toDestine(item)"
                >
                    <p class="main_loc">{{item.name}}</p>
                    <span class="detail_loc">{{item.address}}</span>
                </li>
            </ul>
            <div class="history_btn">
                <button class="clean_btn" @click="clean">清空所有</button>
            </div>
        </div>
        <div class="search_list" v-else>
            <ul>
                <li 
                v-for="(item,key) in searchList" 
                :key="key"
                @click="toDestine(item,'flag')"
                >
                    <p class="main_loc">{{item.name}}</p>
                    <span class="detail_loc">{{item.address}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TopHead from "../../components/header";
import { searchCityById, searchPlace } from "../../common/api";
import {getStorage,setStorage,removeStorage} from '../../config/utils';

export default {
    data() {
        return {
            cityName: "", //城市名
            cityId: "", //城市id
            location: "", //输入地址
            searchList: null, //搜索列表
            search_history: [], //搜索历史
        };
    },
    components: {
        TopHead
    },
    methods: {
        // 获取跳转城市信息
        async getCityName() {
            this.cityId = this.$route.params.cityId;
            let res = await searchCityById(this.cityId);
            this.cityName = res.data.name;
        },
        // 搜索地址
        async submit() {
            if(!this.location){
                return
            }else {
                let res = await searchPlace(this.cityId, this.location);
                this.searchList = res.data;
            }
        },
        // 跳转到目的地:
        // 1. 如果是搜索出来的地址,则 - 判断选中地址是否已在历史中,有则不添加,无则添加到本地储存
        // 2. 如果是选择历史地址, 则直接跳转 - 由flag控制
        toDestine(city,flag){
            if(flag){
                let res = getStorage('cityHistory')
                console.log(res)
                if(!res)res=[];
                if(res){
                    let checkRepeat = false;
                    res.forEach(e=>{
                        if(e.name == city.name){
                            checkRepeat = true
                        }
                    })
                    if(checkRepeat==false)res.push({name:city.name,address:city.address,geohash:city.geohash})
                }
                setStorage('cityHistory',res)
                console.log(getStorage('cityHistory'))
            }
            this.$router.push(`/shopList/?geohash=${city.geohash}`)
        },
        // 页面初始化获取搜索历史
        initHistory(){
            let res = getStorage('cityHistory')
            console.log(res)
            this.search_history = res;
        },
        // 清除搜索历史
        clean(){
            this.search_history = []
            removeStorage('cityHistory')
        }
    },
    mounted() {
        this.getCityName();
        this.initHistory();
    }
};
</script>

<style lang="scss" scoped>
@import "../../style/sCommon.scss";
.head_top {
    .cityName {
        font-weight: bold;
        @include sc(0.9em, #fff);
    }
    .changeCity {
        @include sc(0.65rem, #fff);
    }
}
.input_form {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.4rem 0.3rem;
    margin-top: 0.5rem;
    border-top: 1px solid $bd;
    border-bottom: 1px solid $bd;
    .location {
        border: 1px solid $bd;
        width: 95%;
        height: 1.5rem;
        line-height: 1.5rem;
        border-radius: 0.1rem;
        padding-left: 0.3rem;
    }
    .btn {
        width: 95%;
        background-color: $blue;
        height: 1.5rem;
        margin-top: 0.5rem;
        border-radius: 0.1rem;
        @include sc(0.7rem, #fff);
    }
}
.search_history {
    p {
        margin: 0.3rem;
        @include sc(0.6rem, #333);
    }
    ul {
        background-color: #fff;
        border-top: 1px solid $bd;
        border-bottom: 1px solid $bd;
        li {
            padding: 0.5rem;
            border-bottom: 1px solid $bd;
            .main_loc {
                margin-bottom: 0.3rem;
                @include sc(0.7rem, #333);
            }
            .detail_loc {
                @include sc(0.5rem, #666);
            }
        }
    }
    .history_btn {
        display: flex;
        justify-content: center;
        background-color: #fff;
        .clean_btn {
            width: 90%;
            margin: 0.3rem 0;
            background-color: inherit;
            @include sc(0.8rem, #333);
        }
    }
}
.search_list {
    ul li {
        padding: .5rem;
        background-color: #fff;
        border-bottom: 1px solid $bd;
        .main_loc {
            @include sc(0.6rem, #333);
        }
        .detail_loc {
            @include sc(0.5rem, #888);
        }
    }
}
</style>