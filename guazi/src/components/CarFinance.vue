<!--
 * @Author: your name
 * @Date: 2020-09-28 20:30:02
 * @LastEditTime: 2020-09-29 15:14:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \program\guazi\src\components\CarChoose.vue
-->
<template>
  <div>
    <div class="CarHeader">
      <h3>瓜子金融</h3>
      <a href="">详情 ></a>
    </div>
    <ul>
        <li>
            <a href="https://m-jr.guazi.com/?jr_from=wapindex_gzjr1b&platform=wap">
                <div class="title">
                <p>瓜子金融</p>
                <span>低首付 买好车</span>
                </div>
                <div class="pic">
                    <img src="../assets/images/Carlog_07.png" alt="">
                </div>
            </a>
        </li>
        <li>
            <a href="#">
                <div class="title">
                <p>付一成开好车</p>
                <span>首付3000元起</span>
                </div>
                <div class="pic">
                    <img src="../assets/images/Carlog_08.png" alt="">
                </div>
            </a>
        </li>
        <li>
            <a href="https://m-jr.guazi.com/loan_v2/login?jr_from=wapindex_gzjr3b">
                <div class="title">
                <p>测测您的额度</p>
                <span>秒获50w分期金额</span>
                </div>
                <div class="pic">
                    <img src="../assets/images/Carlog_09.png" alt="">
                </div>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.CarHeader
    display flex
    justify-content space-between
    height 54px
    width 100%
    position relative
    &::before
        content ""
        position absolute
        bottom 0
        right 0
        left 0
        border-top 1px solid #eff2f6
    h3
        margin-top 13px
        font-size 15px
        font-weight 400
        line-height 29px
        color #fff
        width 103px
        height 29px
        padding-left 27px
        border-top-right-radius 15px
        border-bottom-right-radius 15px
        background #16e1b6
        position relative
        &::before
            content ""
            background url("../assets/images/icon_sprite_03.png") no-repeat -379px 0
            background-size 392px
            width 13px
            height 12px
            position absolute
            top 8px
            left 8px
            margin-right 10px
    >a
        line-height 54px
        font-size 12px
        color #8f96a0
        font-weight 300
        position absolute
        right 12px

ul
    display flex
    width 100%
    height 200px
    li
        display flex
        flex-direction column
        height 210px
        width 33.3%
        a
            display block
            font-size 11px
            .title
                height 86px
                padding-top 21px
                p
                    width 94px
                    margin 0 auto 7px
                    font-size 15px
                    text-align center
                    color #303741
                span 
                    display block
                    font-size 11px
                    line-height 18px
                    color #ff7147
                    text-align center
            .pic
                width 110px
                height 110px
                margin 0 auto
                overflow hidden
                img
                    width 90px
                    height 60px
                    margin 25px auto 0
    li:nth-child(1)
        position relative
        &::after
            content ""
            position absolute
            top 0
            right 0
            height 100%
            border-right 1px solid #eff2f6
        .pic
            background url("../assets/images/icon_sprite_03.png") no-repeat
            background-size 342px
    li:nth-child(2)
        position relative
        &::after
            content ""
            position absolute
            top 0
            right 0
            height 100%
            border-right 1px solid #eff2f6
        .pic
            background url("../assets/images/icon_sprite_03.png") no-repeat -110px 0px
            background-size 342px
    li:nth-child(3)
        .pic
            background url("../assets/images/icon_sprite_03.png") no-repeat -220px 0px
            background-size 342px
</style>
