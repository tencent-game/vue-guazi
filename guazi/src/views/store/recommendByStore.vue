<template>
    <ul class="recommendByStore">
        <router-link tag='li' :to="{name:'carInfo',params:{...car}}" v-for="car in recommendByStore" :key="car.clue_id" class="recommendByStore_item" >
            <div class="recommendByStore_left"><img :src="car.car_image" alt=""></div>
            <div class="recommendByStore_right">
                <h1>{{car.car_title}}</h1>
                <p>{{car.license_year}}&nbsp;/&nbsp;{{car.mileage}}&nbsp;/&nbsp;{{car.city_name}}</p>
                <div class="right_bottom">
                    <span class="active_price">{{car.active_price}}</span>
                    <span class="new_price">新车价</span>
                    <span class="now_price">{{car.xinche_price}}</span>
                </div>
            </div>
        </router-link>
    </ul>
</template>

<script>
import http from '../../utils/http'
export default {
    data(){
        return {
            recommendByStore:[],
        }
    },
    created(){
        
    },
    mounted(){
        this.loadData()
    },

    methods:{
        async loadData(){
            let result =await http.get('/aaa/clientUc/YanXuanPark/parkRecommendCarList',{city_id:this.$store.state.id})
            // console.log(result.recommend_Info.carList)
            this.recommendByStore.push(...result.recommend_Info.carList)
            console.log(this.recommendByStore)
        },
        

    }
}
</script>

<style lang="stylus">
    .recommendByStore
        padding: .2rem .2rem;
        
        .recommendByStore_item
            width 100%
            height 100%
            padding: .2rem 0;
            position relative
            .recommendByStore_left
                width 1.2rem
                height .8rem
                position absolute
                img 
                    width 100%
                    height 100%
            .recommendByStore_right
                margin-left: 1.36rem;
                height: .8rem;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                h1
                    font-weight normal
                    font-size: .15rem;
                    color: #303741;
                    line-height: .19rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                p
                    font-size: .11rem;
                    color: #8f96a0;
                    line-height: .11rem;
                .right_bottom
                    width 100%
                    .active_price 
                        font-size: .15rem;
                        color: #ff7147;
                        line-height: .15rem;
                        margin-right: .024rem;
                    .new_price
                        font-size: .11rem;
                        line-height: .11rem;
                        color: #8f96a0;
                    .now_price
                        font-family: PingFangSC-Light;
                        font-size: .11rem;
                        line-height: .11rem;
                        color: #8f96a0;
                        text-decoration line-through
</style>