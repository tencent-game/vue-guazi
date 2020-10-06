<template>
  <div class="router-view-container">
    <section>
        <div class="header">
            <van-nav-bar title="个人中心" left-arrow>
            <template #left>
                <i class="iconfont leftarrow" @click="backHandler">&#xe601;</i>
            </template>
            </van-nav-bar>
        </div>
        <section class="person-center">
            <div class="person-head">
                <div class="head-img">
                    <img src="https://sta.guazistatic.com/static/c2c/wap/gz_head.png" alt="">
                </div>
                <div class="head-con">
                     <p class="per-name">田野</p>
                     <p class="per-num">17835695829</p>
                </div>
                <a href="javascript:;" class="change-btn" @click="showOverlay">切换账号</a>
            </div>
            <div class="center-con">
               <ul class="center-list">
                  <router-link to="/appoint">
                       <li>
                       <a>
                           <i class="iconfont">&#xe603;</i>
                           我的约看
                       </a>
                      </li>
                  </router-link>
                  <router-link to="/buycar">
                     <li>
                       <a>
                           <i class="iconfont">&#xe621;</i>
                           买车进度
                       </a>
                   </li></router-link>
                   <router-link to="/sellcar">
                    <li>
                       <a>
                           <i class="iconfont">&#xe622;</i>
                           卖车进度
                       </a>
                   </li>
                   </router-link>
                    <router-link to="/feedback">
                     <li>
                       <a>
                           <i class="iconfont">&#xe66d;</i>
                           意见反馈
                       </a>
                   </li>
                    </router-link>
                
                   <li>
                       <a>
                           <i class="iconfont">&#xe60c;</i>
                           联系客服
                       </a>
                   </li>
               </ul>
            </div>
            <van-overlay :show="show" @click="show = false">
                <div class="popup">
                    <div class="popup-con">确定要更换当前绑定手机号吗？</div>
                    <div class="popup-btn">
                        <a  class="btn1" @click="closeOverlay">取消</a> 
                        <a  class="btn2" @click="backLogin">确定</a>
                    </div>
                </div>  
            </van-overlay>
        </section>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import {NavBar,Overlay} from "vant";
Vue.use(NavBar);
Vue.use(Overlay);
export default {
    data(){
        return{
            show:false
        }
    },
    methods: {
        onSubmit(values) {
            console.log("submit", values);
        },
        backHandler(){
            history.back();
        },
        showOverlay(){
            this.show=true;
        },
        closeOverlay(){
            this.show=false;
        },
        backLogin(){
            // 将已经登录状态更改为未登录状态
            //并且跳转到登录页
            this.$router.push('/login');
        }
  }
};
</script>

<style lang="stylus" scoped>
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
/deep/.van-overlay
    top 0.44rem
    .popup
        background-color: #fff !important;
        border-radius: .02rem !important;
        position: fixed !important;
        top: 50% !important;
        left: .25rem !important;
        right: .25rem !important;
        -webkit-transform: translate(0,-50%) !important;
        transform: translate(0,-50%) !important;
        z-index: 100 !important;
        padding: .16rem 0 0 0 !important;
        width: auto !important;
        height: auto !important;
        bottom: auto !important;
        overflow: hidden;
        .popup-con
            font-size: .14rem;
            text-align: center;
            margin-top: .06rem;
        .popup-btn
            border-top: 1px solid #dde4ea;
            height: .47rem;
            margin-top: .18rem;
            a
                float: left;
                width: 50%;
                display: block;
                line-height: .48rem;
                height: 100%;
                text-align: center;
                box-sizing: border-box;
                position: relative;
                font-size: .16rem;
            .btn1
                color: #757f89;
                border-radius: 0 0 0 .02rem;
                &::after
                    content: "";
                    position: absolute;
                    width: 1px;
                    height: 100%;
                    right: 0;
                    top: 0;
                    background-color: #dde4ea;
            .btn2
                color: #02c386;
                border-radius: 0 0 .02rem 0;

.person-center
    margin-top -0.1rem
    .person-head
        position: relative;
        height: 0.82rem;
        padding: 0 0.15rem;
        background-color: #fff;
        .head-img
            width: 0.5rem;
            height: 0.5rem;
            margin-top: 0.21rem;
            display: inline-block;
            vertical-align: top;
            img
                width: 0.5rem;
                height: 0.5rem;
                vertical-align: top;
                -ms-interpolation-mode: bicubic;
                border: 0 none;
        .head-con
            margin: 0.23rem 0 0 0.1rem;
            display: inline-block;
            vertical-align: top;
            .per-name
                font-weight: bold;
                font-size: 0.16rem;
                color: #495056;
            .per-num
                font-size: 0.14rem;
                color: #dde4ea;
        .change-btn
            position: absolute;
            right: 0.15rem;
            top: 0.35rem;
            display: block;
            height: 0.21rem;
            line-height: 0.21rem;
            border: 1px solid #dde4ea;
            border-radius: 0.11rem;
            text-align: center;
            width: 0.68rem;
            color: #9ea2a6;
            font-size: 0.12rem;
    .center-con
        margin-top 0.1rem
        background-color: #fff;
        .center-list
            list-style: outside none none;
            li
                line-height: 0.5rem;
                height: 0.5rem;
                margin-left: 0.15rem;
                a
                    display: block;
                    height: 100%;
                    width: 100%;
                    border-bottom: 1px solid #dde4ea;
                    color: #495056;
                    font-size: 0.15rem;
                    text-indent: 0.04rem;
                    position: relative;
                    i
                        display: inline-block;
                        vertical-align: -0.03rem;
                        width: 0.18rem;
                        height: 0.18rem;
                        line-height 0.18rem
                        font-size 0.18rem;
                        margin-right: 0.12rem;


</style>
