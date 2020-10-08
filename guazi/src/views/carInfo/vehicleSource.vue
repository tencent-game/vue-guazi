<template>
    <div class="vehicle_source">
        <div  class="image">
            <img :src="car.car_image||car.attributes.thumb_img" alt="">
        </div>
        <div class="product-head-b">
            <div class="price-box-b">
                <div class="normal-price-tip">优惠后</div>
                <div class="normal-price-b">
                    {{car.active_price||priced}}
                    <span class="price-box-tag-box">原价{{car.xinche_price||priced}}</span>
                </div>
            </div>
            <div class="ticket-box">
                <div class="ticket-inner">
                    <span class="ticket-item">优惠{{youhui||car.attributes.first_pay}}元</span>
                </div>
                <span class="look">查看</span>
            </div>
        </div>
        <div class="car-head-box">
            <div class="normal-car-title">{{car.car_title||car.attributes.title}}</div>
        </div>
        <div class="loanbox-new">
            <div class="loanbox-new-inner">
                <span class="loanbox-tit">分期</span>
                <span class="loanbox-con">首付一成 {{onepercent}}万开回家</span>
            </div>
        </div>
        <div class="blank" style="margin: .06rem 0;"></div>
        <guaranteesService></guaranteesService>
        <essentialInformation></essentialInformation>
        <strictElectionCar></strictElectionCar>
    </div>

</template>

<script>
import guaranteesService from '../../components/carInfo/guaranteesService'
import essentialInformation from '../../components/carInfo/essentialInformation'
import strictElectionCar from '../../components/carInfo/strictElectionCar'
export default {
    data(){
        return {
            car:{}
        }
    },
    created(){
        
        // this.car?this.car=this.$route.params:this.car
        console.log(this.$store.state.car)
        this.car=this.$store.state.car
        console.log(this.car)
    },
    computed:{
        youhui(){
            
            return Math.round(parseFloat(this.car.active_price))*100
        },
        onepercent(){
            return ((parseFloat(this.car.active_price)/10))||this.car.attributes.price/100000
        },
        priced(){
            return (this.car.attributes.price/10000).toFixed(2)+'万'
        },
    },
    components:{
        guaranteesService,
        essentialInformation,
        strictElectionCar
    }
}
</script>

<style lang="stylus" scoped>
    .vehicle_source
        width 100%
        height 100%
        .image
            width 100%
            height 2.5rem
            img 
                width 100%
                height 100%
                display block
        .product-head-b
            padding: .1rem .1rem 0;
            color: #303741;
            position: relative;
            background-color: #fff;
            overflow: hidden;
            .price-box-b
                display: flex;
                justify-content: center;
                flex-direction: column;
                min-height: .48rem;
                padding-left: .1rem;
                .normal-price-tip
                    font-size: .12rem;
                    height: .144rem;
                    line-height: .144rem;
                    transform: scale(.833);
                    transform-origin: 0 center; 
                .normal-price-b
                    font-size: .21rem;
                    font-weight: 700;
                    height: .24rem;
                    line-height: .24rem;
                    display: flex;
                    align-items: center;
                    padding-top: .03rem;
                    .price-box-tag-box
                        display: inline-block;
                        height: .28rem;
                        line-height: .28rem;
                        margin-left: .04rem;
                        z-index: 2;
                        color: #8f96a0;
                        font-size: .12rem;
                        transform: scale(.833);
                        transform-origin: 0 center;
                        text-decoration: line-through;
            .ticket-box
                background: #fff0ec;
                border-radius: .02rem;
                height: .4rem;
                line-height: .4rem;
                margin-top: .08rem;
                position relative
                margin-bottom: .08rem;
                padding: .05rem .1rem;
                .ticket-inner
                    display: inline-block;
                    width .9rem
                    float left
                    height: .3rem;
                    transform: scale(.833);
                    transform-origin: 0 center;
                    .ticket-item
                        background: #fff;
                        background-size: 100% 100%;
                        padding: 0 .08rem;
                        display:block;
                        height: .3rem;
                        line-height: .3rem;
                        font-size: .12rem;
                        color: #ff7147;
                        position: relative;
                .look
                    font-size: .12rem;
                    color: #ff7147;
                    height: .3rem;
                    line-height: .32rem;
                    position: absolute;
                    right: .4rem;
        .car-head-box
            padding: .07rem .2rem 0;
            background: #fff;  
            .normal-car-title
                line-height: .2rem;
                font-size: .14rem;
                color: #303741;      
        .loanbox-new
            line-height: .44rem;
            background: #fff;
            position: relative;
            font-size: .12rem;
            .loanbox-new-inner
                margin: 0 .2rem;
                position: relative;
                .loanbox-tit
                    color: #ff7147;
                    margin-right: .14rem;
                    font-weight: 700;
  

</style>