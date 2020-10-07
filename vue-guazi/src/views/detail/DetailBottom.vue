<template>
  <div class="footer">
    <div class="container">
      <div class="icon-con">
        <van-icon name="service" size=".2rem" color="#5f6670"/>
        <span>客服</span>
      </div>
      <div class="icon-con">
        <van-icon name="star" size=".2rem" color="#5f6670"/>
        <span>收藏</span>
      </div>
      <div class="icon-con">
        <van-icon name="gold-coin" size=".2rem" color="#22ac38"/>
        <span>询底价</span>
      </div>
      <button class="left">砍价</button>
      <button class="right">预约看车</button>
    </div>
  </div>
</template>

<script>


export default {
  name: "DetailBottom"
}
</script>

<style lang="stylus" scoped>
.footer
  position absolute
  bottom 0
  left 0
  width 100%
  height 0.64rem
  background-color white
  .container
    height 100%
    padding .1rem .1rem .1rem 0.068rem
    flex-direction row
    display flex
    .icon-con
      display flex
      flex-direction column
      justify-content center
      text-align center
      width .46rem
      height .44rem
      span
        color #5f6670
        font-weight: 300
        font-size: .11rem;
        padding-top .04rem
    button
      width 1rem
      height .44rem
      color #ffffff
      border-radius 2px
      border 0
    .left
      background-color #ff7147
    .right
      margin-left: .08rem
      background-color #22ac38
</style>