<template>
    <div class="carinfo-footer">
        <div class="icon-serve">
            <van-icon name="service" size='.2rem' />客服
        </div>
        <div class="icon-serve">
            <van-icon name="star" size='.2rem' />收藏
        </div>
        <div class="icon-serve">
            <van-icon name="bill" size='.2rem' />查看
        </div>
        <a href="">我要优惠</a>
        <span>预约看车</span>
    </div>
</template>

<style lang="stylus" scoped>
    .carinfo-footer
        box-shadow: 0 -2px 4px 0 rgba(0,0,0,.08);
        height: .64rem;
        width 100%
        padding: .1rem .1rem .1rem .0675rem;
        background: #fff;
        color: #5f6670;
        position fixed
        z-index 999
        bottom 0
        display flex
        .icon-serve
            padding .05rem
            width: .445rem;
            text-align center
            font-size: .11rem;
            color: #5f6670;
            display flex
            flex-direction column
            font-weight: 300;
            float left
        a
            margin-right: .08rem;
            margin-left: .0675rem;
            background: #ff7147;
            border-radius: 2px;
            height: .44rem;
            line-height: .44rem;
            font-size: .15rem;
            color #ffffff
            float left
            text-align center
            display inline-block
            width 1.05rem
            height .44rem
        span 
            background: #22ac38;;
            border-radius: 2px;
            height: .44rem;
            line-height: .44rem;
            font-size: .15rem;
            color #ffffff
            float left
            text-align center
            display inline-block
            width 1.05rem
            height .44rem
        
</style>