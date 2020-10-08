<template>
    <div class="base-info">
        <div class="base-info-tit">基本信息</div>
        <ul class="mod-base" :car="car" >
            <li><span>表显里程</span><p>{{car.mileage||mileage}}</p></li>
            <li><span>变速箱</span><p>自动</p></li>
            <li><span>排量</span><p>1.5L</p></li>
            <li><span>购车方式</span><p class="green">查购车流程></p></li>
            <li><span>上牌时间</span><p>{{car.license_year||car.attributes.license_date}}</p></li>
            <li><span>出险情况</span><p class="green">查保养记录></p></li>
            <li><span>新车含税价</span><p>{{car.xinche_price||price}}</p></li>
        </ul>
        <div class="btn-check" @click="clickIt">
            <a >查看车辆详细信息</a>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.base-info
    background-color: #fff;
    margin-bottom: .06rem;
    padding: .13rem 0 .1rem .2rem;
    .base-info-tit
        font-size: .16rem;
        color: #495056;
        font-weight: 500;
    .mod-base
        width: 100%;
        overflow: hidden;
        padding-top: .1rem;
        margin-bottom: .12rem;
        li
            width: 33.33%;
            float: left;
            text-align: left;
            margin-bottom: .09rem;
            span 
                font-size: .12rem;
                color: #abafb3;
            p
                font-size: .15rem;
                color: #757f89;
    .btn-check
        margin-bottom: 0;
        padding-bottom: .1rem; 
        width 100% 
        text-align center    
        a
            padding .1rem .2rem
            color: #757f89;
            width: 60%;
            border-radius: .02rem;
            text-align: center;
            font-size: .14rem;
            line-height: .34rem;
            position: relative;    
            border: 1px solid #abafb3;
            border-radius: .02rem;  

    
</style>
<style lang="stylus" scoped>
.green
        color green !important

</style>
<script>
export default {
    data(){
        return {
            car:{}
        }
    },
   created(){
        console.log(this.$store.state.car)
        this.car=this.$store.state.car
        console.log(this.car)
    },
    computed:{
        mileage(){
            return (this.car.attributes.road_haul/10000)+'万公里'
        },
        price(){
            return (this.car.attributes.price/10000)+'万'
        }
    },
    methods:{
        clickIt(){
            this.$router.replace('/imageText')
        }
    }
}
</script>