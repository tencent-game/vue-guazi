<template>
    <ul class="boutique-mall">
        <router-link  :to="{name:'carInfo',params:{...car}}" v-for="car in car_list" :key='car.title' class="boutique-mall-item" >
            <a href="">
               <img :src="car.car_image" alt="">
               <div class="car-introduce-box">
                   <h2>{{car.name}}</h2>
                   <p>{{car.title}}</p>
                   <div class="second-price-box">
                       <span class="common">活动价</span>
                       <span class="second-price">{{car.active_price}}</span>
                       <span class="normal-pcice">{{car.xinche_price}}</span>
                   </div>
               </div>
            </a>
        </router-link>
        <li class="boutique-mall-item">
            <div class="border">
                <van-icon name="arrow" size='.3rem' style="line-height:.5rem" color='#8f96a0' />
            </div>
            <span class="more">查看全部</span>
        </li>
    </ul>
</template>

<script>
import http from '../../utils/http'


export default {
    data(){
        return {
            city_id:this.$store.state.id,
            car_list:[]
        }
    },
    created(){
        
    },
    mounted(){
        this.loadData()
    },
    methods:{
        async loadData(){
            let result= await http.get('/aaa/clientUc/YanXuanPark/activeCarList',{city_id:this.city_id})
            // console.log(result.car_list)
            this.car_list.push(...result.car_list)
            console.log(this.car_list)
        },
        
    }
}
</script>

<style lang="stylus" scoped>
    .boutique-mall
        width max-content
        .boutique-mall-item
            width 1.6rem 
            height 1.845rem 
            border 1px solid #eff2f6 
            position relative
            float left
            
            box-shadow 0 0.01rem 0.04rem 0 rgba(0,0,0,.08) 
            border-radius .02rem 
            margin-right .1rem 
            overflow-y hidden 
            a
                display block
                width 100%
                height 100%
                margin 0
                img
                    display block
                    width 100% 
                    height 1.065rem 
                    border-top-left-radius .02rem 
                    border-top-right-radius .02rem 
                .car-introduce-box
                    padding .1rem
                    h2
                        font-family PingFangSC-Medium 
                        font-size .14rem 
                        color #303741 
                        line-height .14rem 

                    p
                        font-family PingFangSC-Regular 
                        font-size .12rem 
                        color #5f6670 
                        line-height .12rem 
                        margin-top .08rem 
                        max-width 1.5rem 
                        overflow hidden 
                        white-space nowrap 
                        text-overflow ellipsis 
                    .second-price-box
                        margin-top .08rem
                        .common
                            display inline-block 
                            font-size .12rem 
                            color #ff7147 
                            line-height .12rem 
                        .second-price
                            font-size .15rem 
                            line-height .15rem 
                            color #ff7147 
                            display inline-block
                        .normal-pcice
                            color #bec5cf 
                            text-decoration line-through
                            font-size .12rem
                            line-height .12rem
            .border
                width .5rem
                height .5rem
                text-align center
                border-radius .5rem
                border 1px solid  #ccc
                line-height .5rem
                position absolute
                top calc(50% - .3rem)
                left  calc(50% - .25rem)
            >span 
                font-size: .14rem;
                color: #8f96a0;
                width 100%
                line-height: .14rem;
                margin-top: .14rem;
                position absolute
                top 55%
                text-align center
                display block
                   
</style>