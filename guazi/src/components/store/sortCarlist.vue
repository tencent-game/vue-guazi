<template>
    <van-list v-model="loading"
        @load="onLoad"
        :finished="finished"
        finished-text="我也是有底线的">
    <ul>
        <li v-for="car in carList" :key='car.attributes.track_local'>
            <a>
                <div class="car_left">
                    <img :src="car.attributes.thumb_img" alt="">
                    <span class="prcie_reduce" :class="{hidden:car.attributes.promotion===0}">急降<br>{{car.attributes.promotion}}元</span>
                    <span class="transfer" :class="{hidden:car.attributes.diff_transfer==0}">{{car.attributes.diff_transfer}}过户</span>
                </div>
                <div class="car_right">
                    <h3>{{car.attributes.title}}</h3>
                    <span>{{car.attributes.license_date}}/{{road_haul(car.attributes.road_haul)}}万公里</span>
                    <div class="car_price">
                        <strong>{{price(car.attributes.price)}}万</strong>
                        <i :class="{hidden:car.attributes.first_pay===0}">首付&nbsp;{{firstPrice(car.attributes.first_pay)}}万</i>
                    </div>
                </div>
            </a>
        </li>
        
    </ul>
    </van-list>

</template>

<script>
import Vue from 'vue'
import {List} from 'vant'
import http from '../../utils/http'
Vue.use(List)

export default {
    
    data(){
        return {
            loading: false,
            finished: false,
            carList:[],
            user_city_id:12,
            domain:'bj',
            currentIndex:this.index
        }
    },
    props:['index'],
    created(){
        this.page=1,
        this.num=20
    },
    // computed:{
    //     road_haul(trip){
    //         console.log(trip)
    //         // return (trip/10000).toFixed(2)
    //     }
    // },
    computed:{
        logindex(){
            console.log(this.index)
        }
    },
    methods:{
        async loadData(){
            // this.page++
            let result=await http.get('/aaa/clientUc/post/postList',{domain:this.$store.state.domain,type:5,num:20,platform:2,page:this.page,parkingLotId:826,user_city_id:this.$store.state.id})
            // console.log(result.data)
            !this.carList?this.carList.push(...this.carList).push(...result.data):this.carList.push(...result.data)
            this.loading = false
            this.page++
            if(this.carList.length>80){
                this.loading=true
                this.finished=true
            }
            // console.log(this.carList)
            // console.log(this.carList[0])
            
        },
        road_haul(trip){
            // console.log(trip)
            return (trip/10000).toFixed(2)
        },
        price(price){
            return (price/10000).toFixed(2)
        },
        firstPrice(firstPrice){
            return (firstPrice/10000).toFixed(2)
        },
        onLoad(){
            this.loadData()
        }
    },
    mounted(){
        // this.loadData()
        console.log(this.currentIndex)
        
    },
    
}
</script>

<style lang="stylus" scoped>
    ul
        height 100%
        width 100%
        li
            width 100%
            height 1.2rem
            a
                display: block;
                min-height: .8rem;
                padding: .2rem;
                padding-left: 1.56rem;
                position: relative;
                .car_left
                    position: relative;
                    float: left;
                    width: 1.2rem;
                    height: .8rem;
                    margin-right: .16rem;
                    margin-left: -1.36rem;
                    img 
                        display: block;
                        width: 100%;
                        height: 100%;
                        border-radius: .02rem;
                    .prcie_reduce
                        padding-right: 5px;
                        padding-top: 6px;
                        width: 69px;
                        height: 58px;
                        font-size: 16px;
                        top: -18px;
                        left: -16px;
                        z-index: 4;
                        line-height: 22px;
                        -webkit-transform: scale(.5);
                        -ms-transform: scale(.5);
                        transform: scale(.5);
                        position: absolute;
                        text-align: center;
                        color: #fff;
                        background: url('data:image/png;base64,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') no-repeat;
                    .transfer
                        height: .2rem;
                        font-size: .12rem;
                        line-height: .2rem;
                        background: rgba(0,0,0,.5);
                        color: #fff;
                        text-align: center;    
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        padding: 0 4px;
                .car_right
                    h3
                        font-size: .15rem;
                        font-weight: 400;
                        line-height: .17rem;
                        color: #303741;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        min-height: .32rem;
                    h3::before
                        content: "";
                        width: .36rem;
                        height: .145rem;  
                        background: url('data:image/png;base64,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');       
                        background-size: 100% 100%;
                        display: inline-block;
                        margin-right: .025rem;  
                    >span 
                        font-size: .11rem;
                        overflow: hidden;
                        color: #8f96a0;
                        line-height: .19rem;
                    .car_price
                        height: .17rem;
                        line-height: .15rem;
                        overflow: hidden;
                        margin-top: .06rem;
                        strong 
                            font-size: .17rem;
                            line-height: .18rem;
                            color: #f56539;
                            font-weight: 500;
                            vertical-align: top;
                            margin-top: -.01rem;
                            padding-right: .025rem;
                        i 
                            color: #f56539;
                            font-size: .11rem;
                            display: inline-block;
                            vertical-align: middle;
                            line-height: .2rem;
                    



</style>

<style lang="stylus" scoped>
    .hidden
        display none !important
</style>