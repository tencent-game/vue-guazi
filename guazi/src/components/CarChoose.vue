<!--
 * @Author: your name
 * @Date: 2020-09-28 20:30:02
 * @LastEditTime: 2020-09-30 10:29:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \program\guazi\src\components\CarChoose.vue
-->
<template>
  <div>
    <div class="CarHeader">
      <h3>瓜子严选车</h3>
      <a href="">详情 ></a>
    </div>
    <ul>
      <li>
        <router-link tag="a" to="/Cardeckill">
          <div class="title">
            <p>限时抢购</p>
            <span>每天10点开抢</span>
          </div>
          <div class="pic">
            <img src="../assets/images/Carlog_01.png" alt="" />
          </div>
        </router-link>
      </li>
      <li>
        <a href="#">
          <div class="title">
            <p>入门首选</p>
            <span>5-7万必看</span>
          </div>
          <div class="pic">
            <img src="../assets/images/Carlog_02.png" alt="" />
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="title">
            <p>车美价优</p>
            <span>体验手动乐趣</span>
          </div>
          <div class="pic">
            <img src="../assets/images/Carlog_03.png" alt="" />
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
    h3
        margin-top 13px
        font-size 15px
        font-weight 400
        line-height 29px
        color #fff
        width 114px
        height 29px
        padding-left 27px
        border-top-right-radius 15px
        border-bottom-right-radius 15px
        background #ffd953
        position relative
        &::before
            content ""
            background url("../assets/images/icon_sprite.png") no-repeat -142px -99px
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
    width 100%
    height 202px
    padding 0 10px 0 12px
    overflow hidden
    >li
        padding 0 2px 2px 0
        float left
        >a
            display flex
            background #f6fafd
            height 100%
            border-radius 2px
            font-size 14px
            font-weight 400
            line-height 21px
            .pic
                margin 0 auto
                overflow hidden
                background url("../assets/images/icon_sprite.png") no-repeat
                background-size 392px
                >img
                    display block
            >.title
                >p
                    font-size 15px
                    line-height 16px
                    text-align center
                    color #303741
                >span
                    display block
                    font-size 11px
                    line-height 12px
                    color #ff7147
    >li:nth-child(1)
        width 40%
        height 202px
        >a
            flex-direction column
            .pic
                width 142px
                height 125px
                >img
                    width 120px
                    height 80px
                    margin 25px auto 0
            .title
                padding-top 28px
                margin-bottom 12px
                p
                    width 120px
                    margin 0 auto 8px
                span
                    margin 0 auto
                    text-align center
    >li:nth-child(2)
        width 60%
        height 101px
        .pic
            width 125px
            height 99px
            >img
                margin 14px auto 0
                width 105px
                height 70px
        .title
            margin auto
            p
                width 80px
                margin 0 0 6px 16px
            span
                margin-left 16px
                text-align center
    >li:nth-child(3)
        width 60%
        height 101px
        .pic
            width 125px
            height 99px
            >img
                margin 14px auto 0
                width 105px
                height 70px
        .title
            margin auto
            p
                width 80px
                margin 0 0 6px 16px
            span
                margin-left 16px
                text-align center
</style>
