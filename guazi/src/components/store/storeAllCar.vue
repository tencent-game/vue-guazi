<template>
    <div class="directSale">
        <div class="carInfo">
            <back style="top:.16rem"></back>
            <h1>瓜子二手车严选直卖店</h1>
           <!-- <router-view></router-view> -->
        </div>
        <!-- <div class="price_sort">
            <span>全部</span>
            <span>0-5万</span>
            <span>5-10万</span>
            <span>10-15万</span>
            <span>15万以上</span>
        </div> -->
        <price-sort></price-sort>

    </div>
</template>

<script>

import priceSort from '../../components/store/priceSort'
import back from '../../components/store/back'
export default {
    components:{
        back,
        priceSort
    }
}
</script>

<style lang="stylus">
.directSale
    width  100%
    height 100%
    position relative
    overflow-y scroll
    .carInfo
        width 100%
        height .44rem
        
        h1 
            width 100%
            height 100%
            text-align center
            line-height .44rem
</style>