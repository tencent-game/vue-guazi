<template>
    <div class="choose_city" :class="{active:this.$store.state.bool}">
        <div class="header">将从全国为您挑选可以购买的车辆</div>
        <van-index-bar :index-list="indexList"  >
            <van-index-anchor index="当前定位城市"></van-index-anchor>
            <div class="position-city">
                定位失败
            </div>
            <van-index-anchor index="历史浏览"></van-index-anchor>
            <div class="history-city">北京</div>
            <van-index-anchor index="热门城市"></van-index-anchor>
            <ul class="hot-city-ul"> <li  v-for="city in hotCityList"  :key="city.id"  class="hot-city" @click=handleClick(city)>{{city.name}} </li></ul>
           
            <section v-for="(value,key) in allCityList" :key="value[0].id">
                <van-index-anchor ><div >{{key}}</div></van-index-anchor>
                <ul class="all-city-ul"><li v-for="city1 in value" :key="city1.id" class="all-city">{{city1.name}}</li></ul>
            </section>
        </van-index-bar>
    </div>
</template>

<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor, IndexCell } from 'vant';
import http from '../../utils/http';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
export default {
    data(){
        return {
            
            hotCityList:[],
            allCityList:[],
        }
    },
    
    computed:{
        indexList() {
            return ['定位', '最近', '热门', ...Object.keys(this.allCityList)]
    }
    },
    mounted(){
        this.loadData()
    },
    methods:{
        async loadData(){
            let result = await http.get('/aps/ajax.php',{dir:'vehicle',module:'GetSelectCity'})
            console.log(result);
            this.hotCityList.push(...result.hotCityList)
            // console.log(this.hotCityList)
            this.allCityList=result.allCityList
            // console.log(this.allCityList)
            console.log(this.$store.state.bool)
            
        },
        handleClick(city){
            console.log(city)
            let {name, id,  domain} = city
            this.$store.dispatch('changeCityName',{name,id,domain})
            // this.$router.push(`/${city.domain}`)
            console.log(this.$store.state)
        }
    }
}
</script>

<style lang="stylus" scoped>
.choose_city
    width 100%    
    height 90%
    position absolute
    bottom 0
    background-color: #f5f7fa;
    color: #8f96a0;
    z-index 999
    display none 
    overflow-y scroll
    .header
        opacity: .8;
        background: rgba(34,172,56,.8);
        height: .4rem;
        line-height: .4rem;
        font-family: PingFangSC-Regular;
        font-size: .12rem;
        color: #fff;
        letter-spacing: 0;
        text-align: center;
        border-radius: .04rem .04rem 0 0;
        -webkit-border-radius: .04rem .04rem 0 0;
    .position-city
        height .48rem
        font-size: 1em;
        line-height .48rem
        background-color: #fff;
        overflow: hidden;
        padding-left: .2rem;
        padding-right: .29rem;
    .history-city
        line-height .48rem
        height .48rem
        font-size: 1em;
        background-color: #fff;
        overflow: hidden;
        padding-left: .2rem;
        padding-right: .29rem;
    .hot-city-ul
        overflow: hidden;
        padding-left: .1rem;
        padding-right: .29rem;
        background #fff
        .hot-city
            width: 25%;
            text-align: center;
            float: left;
            line-height: .48rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #303741;
            font-size: .14rem;
            position: relative;
            text-align: center;
            padding-right: 0;
            overflow: inherit;
            font-weight: 300;
    .all-city-ul
        overflow: hidden;
        padding-left: .1rem;
        padding-right: .29rem;
        background #fff
        .all-city
            width: 25%;
            text-align: center;
            float: left;
            line-height: .48rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #303741;
            font-size: .14rem;
            position: relative;
            text-align: center;
            padding-right: 0;
            overflow: inherit;
            font-weight: 300;
</style>

<style lang="stylus" scoped>
    .active
        display block
</style>