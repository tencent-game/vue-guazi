<template>
    <div class="home_banner">
        
        <van-swipe :autoplay="3000" name='banner'>
            <van-swipe-item v-for="(item,index) in imgList" :key="index">
                <a :href="item.href"><img :src="item.src"></a>
            </van-swipe-item>
        </van-swipe>
       
    </div>
</template>

<script>


import Vue from 'vue';
import { Lazyload } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
    data(){
        return {
            imgList:[
                {
                    src:'https://image1.guazistatic.com/qn200915164657f3c8728a24be42079364a09d819cdcad.jpg?imageView2/2',
                    href:'https://fuxi.guazi.com/page/11984a30f27511ea9e73f71320385067?&channel=guazi_wap_neibullhz&enter=guazi_wap_topbanner'
                },
                {
                    src:'https://image1.guazistatic.com/qn20092720114669b8ef035993da5d6f54bd34bb015a7a.jpg?imageView2/2',
                    href:'https://promo-sta.guazi.com/chaojifanchang927.html'
                },
                {
                    src:'https://image1.guazistatic.com/qn200615154818965d70a730ce1eb5972379d06e053cf6.jpg?imageView2/2',
                    href:'https://promo-sta.guazi.com/shequn20000.html'
                },
                {
                    src:'https://image1.guazistatic.com/qn200819215513cb48c85334c613c2e52436146f2fc062.jpg?imageView2/2',
                    href:'https://promo-sta.guazi.com/0fuwufei.html'
                }
            ]
        }
    },

}
</script>

<style lang="stylus" scoped>
    .home_banner
        width 100%
        height 1.7rem
        a
            width 100%
            height 1.7rem
            img 
                width 100%
                height 1.7rem
                


</style>