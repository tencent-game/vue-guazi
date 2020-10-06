<template>
    <div class="car-shopping-schedule-wrapper">
       <div class="header">
            <van-nav-bar title="我的约看" left-arrow>
                <template #left>
                    <i class="iconfont leftarrow" @click="backHandler">&#xe601;</i>
                </template>
            </van-nav-bar>
        </div>

        <div class="tab_bar">
             <div class="tab_time" @click="changePlan">
                   <router-link to="plan">
                        <span :class="{active:isPlan}">即将看车</span>
                   </router-link>
             </div>
            <div class="tab_time" @click="changeHistory">
                    <router-link to="history">              
                        <span :class="{active:!isPlan}">看车历史</span>              
                    </router-link>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from "vue";
import {NavBar} from "vant";
Vue.use(NavBar);
    export default {
        data(){
            return{
                isPlan:true
            }
        },
        methods:{
            backHandler(){
                this.$router.replace("/usercenter")
            },
            changePlan(){
                this.isPlan=true;
            },
            changeHistory(){
                this.isPlan=false;
            }
        }
    }
</script>

<style lang="stylus" scoped>
.car-shopping-schedule-wrapper
    height: 100%;
    overflow: hidden;
    position: relative;
    top: 0;
    background #fff
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
    .tab_bar
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        overflow-x: hidden;
        height: 0.42rem;
        line-height: 0.42rem;
        background: white;
        font-size: 0.12rem;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
        font-family: PingFangSC-Regular;
        position: relative;
        z-index: 300;
        top: 0;
        width: 100%;
        margin-left: 0px;
        .tab_time
            color: #303741;
            width: 50%;
            text-align: center;
        .active
            font-family: PingFangSC-Medium;
            color: #22AC38;
   

</style>