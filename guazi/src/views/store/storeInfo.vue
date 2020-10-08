<template>
    <div :data1="data1" class="storeInfo">
        <h1>{{data1.name}}</h1>
        <span>店面在售:{{data1.car_num}}&nbsp;辆车</span>
        <div class="address">
        <van-icon name="location" size='.12rem'></van-icon>
        <p>{{data1.address}}</p>
        </div>
        <router-link to='/storeAllCar' tag='div' class="allCar">全部车源&nbsp;></router-link >

        
    </div>

    
</template>

<script>
import Vue from 'vue'
import {Icon} from 'vant'
import http from '../../utils/http'
Vue.use(Icon)
export default {
    data(){
        return {
            data1:{},
        }
    },
    mounted(){
        this.loadData()
        
    },
    
        
    
    methods:{
        async loadData(){
            //https://api.guazi.com/clientUc/baoMai/getCarParkNew?city_id=12
            let result=await http.get("/aaa/clientUc/baoMai/getCarParkNew",{city_id:this.$store.state.id})
            
            this.data1=result.data
            this.$store.dispatch('changeShopping',result.data)
            // this.$store.state.shopping=result.data
            // console.log(this.data1)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .storeInfo
        width 100%
        height 1.4rem
        >h1 
            width 100%
            padding 0 .2rem
            font-family: PingFangSC-Medium;
            font-size: .19rem;
            color: #303741;
            font-weight normal
            line-height: .24rem;
            padding-top: .16rem;
        >span 
            display block
            margin-top: .12rem;
            height: .12rem;
            line-height: .12rem;
            padding 0 .2rem
            color: #5f6670;
            font-size .12rem
        .address
            padding 0 .18rem
            height: .12rem;
            line-height: .12rem;
            margin-top: .12rem;
            p
                display inline   
                font-size .12rem
                line-height .12rem
                color: #5f6670;
        .allCar
            width 100%
            text-align center
            font-size .12rem
            line-height .5rem
            color: #5f6670;
        
</style>