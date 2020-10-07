<template>
<div class="strictElection" >
    <store-header></store-header>
    <div class="videoInfo" id="s001">
        <back ></back>
        <img src="https://image1.guazistatic.com/qn190715133339341af4cecf3d33904746f6b7e3f0bb78.jpg" alt="">
        <!-- <video src=""></video> -->
   </div>
   <store-info></store-info>
   <life-store></life-store>
   <h1 id="s003">店长推荐</h1>
   <recommend-by-store></recommend-by-store>
   <router-link tag="div" to='/storeAllCar' class="more_cars" >查看店铺更多车源</router-link >
   
</div>
</template>

<script>
import storeHeader from '../../components/store/storeHeader' 
import storeInfo from '../store/storeInfo'
import back from '../../components/store/back'
import lifeStore from '../store/lifeStore'
import recommendByStore from '../store/recommendByStore'
export default {
    data(){
        return {}
    },
    components:{
        storeInfo,
        storeHeader,
        back,
        lifeStore,
        recommendByStore    
    }
}
</script>

<style lang="stylus" scoped>
    .strictElection
        width 100%
        height 100%
        padding-bottom .5rem
        overflow-y scroll
        position relative
        .videoInfo
            width 100%
            height 2.1rem
            position relative
            img 
                width 100%
                height  100%
        h1
            font-family: PingFangSC-Medium;
            font-size: .15rem;
            color: #303741;
            line-height: .15rem;
            padding 0 .2rem
        .more_cars
            width 100%
            line-height: .49rem;
            text-align: center;
            font-size: .12rem;
            line-height: .12rem;
            color: #8f96a0;
            
</style>