<template>
    <div class="buy-car-list-wrapper">
         <div class="header">
            <van-nav-bar title="我卖的车" left-arrow>
                <template #left>
                    <i class="iconfont leftarrow" @click="backHandler">&#xe601;</i>
                </template>
            </van-nav-bar>
        </div>
        <div class="car-list-no">
            <div class="list-no-tip">
                <div class="no-image"></div> 
                <p>您还没有相关订单，快去预约吧</p> 
                    <div class="btn browse-more">我要卖车</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import {NavBar} from "vant";
Vue.use(NavBar);
    export default {
        methods:{
            backHandler(){
                this.$router.replace("/usercenter");
            },
        }
    }
</script>

<style lang="stylus" scoped>
.buy-car-list-wrapper
    background-color: #f5f7fa;
    overflow-x: hidden;
    height: 100%;
    overflow-y: hidden;
    position: relative;
    top: 0;
    .header
        height: .44rem;
        width: 100%;
        border-bottom: 1px solid #dde1e5;
        background-color: #fff;
        position: relative;
        margin-bottom: .1rem;
    /deep/.van-nav-bar
        height 0.44rem
        /deep/.van-nav-bar__left   
            padding 0
            /deep/.leftarrow
                display inline-block
                width 0.44rem
                height 0.44rem
                font-size 0.22rem
                line-height 0.44rem
                color #888
        /deep/.van-nav-bar__title
            font-size 0.18rem
    .car-list-no
        background: white;
        height: 100%;
        .list-no-tip
            width: 100%;
            border-top: 2px solid #f5f7fa;
            text-align: center;
            height: 2.415rem;
            .no-image
                width: 1.35rem;
                margin: 0.4rem 0 0.22rem 1.15rem;
                height: 0.675rem;
                background-image:url(https://sta.guazistatic.com/c2c_uc/no-car.077f63f4198028292a683aada0aa46bc.png);
                background-size: contain;
             p
                font-size: 0.12rem;
                color: #5f6670;
            .btn 
                display: inline-block;
                height: .37rem;
                font-size: .16rem;
                line-height: .37rem;
                color: #fff;
                text-align: center;
                background-color: #22ac38;
                border: none;
                border-radius: .02rem;
                box-sizing: inherit;
            .browse-more
                width: 1.5rem;
                height: 0.4rem;
                line-height: 0.4rem;
                border-radius: 0.04rem;
                margin: 0.3rem 0;
</style>