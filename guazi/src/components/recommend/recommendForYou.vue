<template>
    <div class="recommendforyou">
        <div class="recommend_header">
            <back style="font-size:.22rem; color:red;top:.14rem"></back>为您推荐
        </div>
        <div class="recommend_title">
            <div class="title_tips">
                <span>根据您感兴趣的&nbsp;"6-12万"<br>"大众速腾"&nbsp;精心推荐</span>
                <div>-瓜子甄选-</div>
            </div>
        </div>
        <sort-carlist></sort-carlist>
    </div>
</template>

<script>

import back from '../store/back'
import sortCarlist from '../store/sortCarlist'
export default {
    components:{
        back,
        sortCarlist
    }
}
</script>

<style lang="stylus" scoped>
.recommendforyou
    width 100%
    height 100%
    position relative
    overflow-y scroll
    .recommend_header
        width 100%
        height .44rem
        text-align center
        line-height .44rem
        color: #303741;
        font-size .16rem
    .recommend_title
        position: relative;
        top: 0;
        z-index: 100;
        font-family: PingFangSC-Regular;
        height: 1.56rem;
        line-height 0.24rem
        background-image: url('https://sta.guazistatic.com/we_client/recommend-car-bg@2x.0155fd3666752856a3f5fdee7d587d6f.png');
        background-size: 100% 1.56rem;
        background-repeat: no-repeat;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        .title_tips
            height .76rem
            padding: .3rem .375rem;
            font-size: .18rem;
            line-height: .24rem;
            color: #fff;
            letter-spacing: 0;
            text-align: center;
            >div
                vertical-align: baseline;
                padding-top: .16rem;
                font-size: .12rem;
                color: #fff;
                letter-spacing: 0;
                line-height: .12rem;
                text-align: center;
                display: block!important;
            
</style>