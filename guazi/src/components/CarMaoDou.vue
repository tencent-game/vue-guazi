<!--
 * @Author: your name
 * @Date: 2020-09-28 20:30:02
 * @LastEditTime: 2020-09-29 15:05:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \program\guazi\src\components\CarChoose.vue
-->
<template>
  <div>
    <div class="CarHeader">
      <h3>毛豆新车</h3>
      <a href="">详情 ></a>
    </div>
    <ul>
      <li>
        <a href="https://m.maodou.com/?ca_s=xcsop_guaziwap&ca_n=leftbigdf">
          <div class="title">
            <p></p>
            <span></span>
          </div>
          <div class="pic">
            <img src="../assets/images/Carlog_04.png" alt="" />
          </div>
        </a>
      </li>
      <li>
        <a href="https://m.maodou.com/car/list?sort=sort0&keyword=all&downpay=0%3B5%3B0,1&ca_s=xcsop_guaziwap&ca_n=smalldf1">
          <div class="title">
            <p></p>
            <span></span>
          </div>
          <div class="pic">
            <img src="../assets/images/Carlog_05.png" alt="" />
          </div>
        </a>
      </li>
      <li>
        <a href="https://m.maodou.com/car/list?sort=sort0&keyword=all&month_pay=0,2%3B2,3&ca_s=xcsop_guaziwap&ca_n=smalldf2">
          <div class="title">
            <p></p>
            <span></span>
          </div>
          <div class="pic">
            <img src="../assets/images/Carlog_06.png" alt="" />
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
        width 103px
        height 29px
        padding-left 27px
        border-top-right-radius 15px
        border-bottom-right-radius 15px
        background #ff8029
        position relative
        &::before
            content ""
            background url("../assets/images/icon_sprite_02.png") no-repeat -142px -99px
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
                background-size 392px
                >img
                    display block
    >li:nth-child(1)
        width 40%
        height 202px
        >a
            flex-direction column
            overflow hidden
            .pic
                >img
                    height 100%
    >li:nth-child(2)
        width 60%
        height 101px
        .pic
            >img
                width 100%
    >li:nth-child(3)
        width 60%
        height 101px
        .pic
            >img
                width 100%
</style>
