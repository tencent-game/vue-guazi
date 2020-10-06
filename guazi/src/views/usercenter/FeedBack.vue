<template>
    <div class="p-feedback-select">
       <div class="header">
            <van-nav-bar title="意见反馈" left-arrow>
                <template #left>
                    <i class="iconfont leftarrow" @click="backHandler">&#xe601;</i>
                </template>
            </van-nav-bar>
        </div>

        <div class="order-info">
            <div class="order-info__title">
                <span  class="order-info__title--text">我的订单</span> 
            </div> 
            <div class="p-notask">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ8AAACHCAMAAAA/ZSwNAAAABGdBTUEAALGPC/xhBQAAAwBQTFRF8fT2+/z82t7n2t/o6Ory3OHr5uvw4+jw6ezx5+rv2d/o2t/o2t7o29/p9vf58PP28PP38fP33ODp3eHp4Ojw9vj56e704+fu6ezw6Ozy3+Pr7/L26e702t/n2d7n8PP38PL329/o////7fDz8PP22N7m8PT37/P27/L38PP38PP27/L37/P28PP38PP38fT48PT48PL37/L27/b22t7o2t/o6ezy8/T6/f395erx7vL34+ju2d7o2d7o3OHp8fP28vLy2+Dp3uLr3uDr3ODp8PT42d/n7vH12d/n4+bt8PL27/P28PL37/P38PL28PL23OLp2t/o3+Tr2uDo4OTr6+vw2t7n2t/n2ePs8PP23uDq+fr89vf5+/3+29/p5Oju8fP529/o29/o7/L28PP37/L37vL37/P32+Hp5enw2+Dp3OLo8vLy8PL36Ovw29/n7/H19fb42t7n+Pn7+/z92t7o4ebs/v7/////7PP3+fr72t/n3OHq8Pj98PX629/n2N7n7fP52t7o6+7y2t7o8PL27/T3////2t/o7O7z////7vP2+vv89Pb4////3uLq2t/o8vP3/v7+/////v7//////v//2t/q////////////3eLp8vX35unv////8vL44OTs8fP28/T37vP42d7n7e/07vP18PP18vX4////7vD17vL18fP18PP47vL1/////v7+/v7+AAAA0tji0tjj+Pn67O7z+Pr86+3z197o09nj5+vy8fT4+fn85env3+Xt8vX48fb76+/09Pj98/f729/n4uXs+fv82uDo5eju9ff58PP32t7n4eXs3eLr8/T39vf61t3n7fD07/H16Ovw4+fu9/n73eHp5+rv6O3y6u3y3uLq8fP29/j67vH13+Pr/v//9ff5/P3+2+Do6e3z8fP3+/z86u7z+/v9/v7++/v8+vz9/P3+9vj69vf5+Pr7+Pn7+fr75erx6u70/f3++fr8+/z99PX49/v/2+Hq/f7++vv89vj72N3m7/L2////EfmwOAAAALN0Uk5T5dSKyIczZHhc8lduuUfir5h/u6Yg1vvv7uvmVvyd2NadzgnprZGHlOCo6fTj97xviZ6yJNvd5S/hbScO+2ev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"> 
                <p>暂无交易订单</p>
            </div>
        </div>

        <div class="b-feedback">
            <section class="c-title">
                <span  class="c-title__entity">我要投诉</span>
            </section> 
            <div class="b-feedback__list">
                    <section  class="c-iconbtn b-feedback__item c-iconbtn__size--small">
                        <img src="https://car-image.guazistatic.com/mdresources-online/upload1575014261?stream=false" class="img__disable"> 
                        <p class="disable">费用投诉</p>
                    </section>
                    <section class="c-iconbtn b-feedback__item c-iconbtn__size--small">
                        <img src="https://car-image.guazistatic.com/mdresources-online/upload1575014309?stream=false" class="img__disable"> 
                        <p class="disable">人员投诉</p>
                    </section>
                    <section class="c-iconbtn b-feedback__item c-iconbtn__size--small">
                        <img src="https://car-image.guazistatic.com/mdresources-online/upload1575014283?stream=false" class="img__disable"> 
                        <p class="disable">流程投诉</p>
                    </section>
                    <section  class="c-iconbtn b-feedback__item c-iconbtn__size--small">
                        <img src="https://car-image.guazistatic.com/mdresources-online/upload1575014322?stream=false" class=""> 
                        <p class="">其他投诉</p>
                    </section>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import {NavBar} from "vant";
// import http from "../../utils/http.js"
Vue.use(NavBar);
    export default {
        methods:{
             backHandler(){
                this.$router.replace("/usercenter")
            },
        },
        // async mounted(){
        //     let res= await http.get("/feedinfo");
        //    console.dir(res);
        // }
    }
</script>

<style lang="stylus" scoped>
.p-feedback-select
    height: 100%;
    background: white;
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
    .order-info
        padding: 0.2rem 0.2rem 0;
        .order-info__title
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.1rem;
            .order-info__title--text
                font-family: PingFangSC-Medium;
                font-size: 0.16rem;
                color: #303741;
                letter-spacing: 0;
                line-height: 0.24rem;
        .p-notask
            height: 0.84rem;
            display: -webkit-box;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-flow: column nowrap;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            box-shadow: 0 0 0.1rem rgba(48, 55, 65, 0.1);
            font-family: PingFangSC-Regular;
            color: #8f96a0;
            line-height: 0.12rem;
            font-size: 0.12rem;
            img
                width: 0.5rem;
                margin-bottom: 0.06rem;
                vertical-align: top;
                border: 0 none;
            p
                margin: 0;
                padding: 0;
    .b-feedback
        margin-top: 0.32rem;
        padding: 0 0.2rem;
        .c-title
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            .c-title__entity
                font-size: 0.16rem;
                color: #303741;
                line-height: 0.24rem;
        .b-feedback__list
            margin-top: -0.05rem;
            display: -webkit-box;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            flex-flow: row wrap;
            .b-feedback__item
                -webkit-box-flex: 0;
                flex: 0 0 25%;
                margin-top: 0.25rem;
            .c-iconbtn
                flex: 0 0 25%;
                margin-top: 0.25rem;
                text-align: center;
                img
                    width: 0.24rem;
                    height: 0.24rem;
                    margin-bottom: 0.1rem;
                    vertical-align: top;
                    border: 0 none;
                p
                    color: rgba(95, 102, 112, 0.4)
                    font-size: 0.12rem;

</style>