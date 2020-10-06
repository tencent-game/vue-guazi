<template>
    <div class="buy-car-list-wrapper">
        <div class="header">
            <header class="heading heading-white">
                <a class="iconfont" @click="backHandler">&#xe601;</a> 
                <h1 @click="changeToggle">我买的车
                    <i class="iconfont down-icon" v-if="!showToggle">&#xe711;</i>
                    <i class="iconfont up-icon" v-else>&#xe712;</i>
                </h1>
            </header>
            <div class="select-container" v-if="showToggle">
                <div :class="{'select-item':true,active:currentIndex===index}" v-for="(item,index) in selectItem" :key="index" @click="changeCurrentIndex(index)">{{item}}</div>
            </div>
        </div>
        <div class="car-list-no">
            <div class="list-no-tip">
                <div class="no-image"></div> 
                <p>您还没有相关订单，快去预约吧</p> 
                    <div class="btn browse-more">现在去逛逛</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import {NavBar,DropdownMenu, DropdownItem} from "vant";
Vue.use(NavBar);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
    export default {
        data() {
            return {
                showToggle:false,
                selectItem:["全部","合同签署","复检过户","交易完成","全国购","质量反馈"],
                currentIndex:0
            }
        },
        methods: {
            backHandler(){
                this.$router.replace("/usercenter");
            },
            changeToggle(){
                this.showToggle=!this.showToggle;
                this.xuanzhuan=true;
            },
            changeCurrentIndex(index){
                this.currentIndex=index;
                this.showToggle=false;
            }
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
        margin-bottom: 0 !important;
        position: relative;
        top: 0;
        .heading
            position: relative;
            z-index: 100;
            width: 100%;
            background-color: white;
            overflow: hidden;
        .heading-white
            background-color: #ffffff;
            a
                position: absolute;
                display inline-block
                top: 0.05rem;
                left: 0.1rem;
                width: .44rem;
                height: .44rem;
                font-size 0.24rem
        h1
            margin: 0 .44rem;
            font-size: .18rem;
            color: #34373a;
            text-align: center;
            line-height: .44rem;
            position: relative;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-weight: normal;
            .down-icon
                display: inline-block;
                position: relative;
                margin-left: -.06rem;
                width: .06rem;
                height: .03rem;
                top: -.04rem;
            .up-icon
                display: inline-block;
                position: relative;
                margin-left: -.06rem;
                width: .06rem;
                height: .03rem;
                top:0.04rem;
        .select-container
            position: absolute;
            z-index: 500;
            width: 100%;
            padding: .1rem .2rem;
            background: #fff;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.06);
            .select-item
                font-family: PingFangSC-Light;
                font-size: .14rem;
                color: #303741;
                letter-spacing: 0;
                line-height: .44rem;
            .active
                color: #02C386;
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