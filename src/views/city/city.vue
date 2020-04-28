<template>
    <div>
        <TopHead goBack="true" class="head_top">
            <span class="cityName" slot="city">{{cityName}}</span>
            <router-link to="/" class="changeCity" slot="changeCity">切换城市</router-link>
        </TopHead>
        <div class="input_form">
            <input class="location" v-model="location" placeholder="输入学校、商务楼、地址"/>
            <button class="btn" @click="submit">提交</button>
        </div>
        <div class="search_history">
            <p>搜索历史</p>
            <ul>
                <li>
                    <p class="main_loc">三银大厦</p>
                    <p class="detail_loc">广东省</p>
                </li>
            </ul>
            <div class="history_btn">
                <button class="clean_btn">清空所有</button>
            </div>
        </div>
    </div>
</template>

<script>
import TopHead from "../../components/header";
import { searchCityById,searchPlace } from "../../common/api";

export default {
    data() {
        return {
            cityName: "", //城市名
            cityId: '',   //城市id
            location: "" //输入地址
        };
    },
    components: {
        TopHead
    },
    methods: {
        async getCityName() {
            this.cityId = this.$route.params.cityId;
            let res = await searchCityById(this.cityId);
            this.cityName = res.data.name;
        },
        async submit(){
            let res = await searchPlace(this.cityId,this.location)
            console.log(res)
        }
    },
    mounted() {
        this.getCityName();
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
    padding: .4rem .3rem;
    margin-top: .5rem;
    border-top: 1px solid $bd;
    border-bottom: 1px solid $bd;
    .location {
        border: 1px solid $bd;
        width: 95%;
        height: 1.5rem;
        line-height: 1.5rem;
        border-radius: .1rem;
        padding-left: .3rem;
    }
    .btn {
        width: 95%;
        background-color: $blue;
        height: 1.5rem;
        margin-top: .5rem;
        border-radius: .1rem;
        @include sc(.7rem,#fff);
    }
}
.search_history {
    p {
        margin: .3rem;
        @include sc(.6rem,#333)
    }
    ul {
        background-color: #fff;
        border-top: 1px solid $bd;
        border-bottom: 1px solid $bd;
        li {
            padding: .5rem;
            border-bottom: 1px solid $bd;
            .main_loc {
                margin-bottom: .3rem; 
                @include sc(.7rem,#333)
            }
            .detail_loc {
                @include sc(.5rem,#666)
            }
        }
    }
    .history_btn {
        display: flex;
        justify-content: center;
        background-color: #fff;
        .clean_btn {
            width: 90%;
            margin: .3rem 0;
            background-color: inherit;
            @include sc(.8rem,#333)
        }
    }
}
</style>