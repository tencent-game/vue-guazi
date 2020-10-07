<template>
  <div class="head-top">
    <div class="back" @click="backHandler">
      <van-icon name="arrow-left" size=".24rem" color="#535658"/>
    </div>
    <div class="right">
      <van-icon @click="showPopup" name="bell" size=".24rem" color="#535658" dot/>
      <van-popup
          v-model="show"
          position="top"
          :style="{ height: '2.74rem' }"
          :overlay=overlay
          round
      >
        <p class="pop-tit">手机号验证</p>
        <p class="pop-text">留下您的手机号，我们才能及时通知您车辆降价哦~</p>
        <p class="pop-ipt">
          <input type="text" placeholder="请输入您的手机号" class="box-size j-phone-number">
          <button type="button" class="btn-code active j-get-code">获取验证码</button>
        </p>
        <p class="pop-ipt mt10"><input type="text" name="code" placeholder="请输入验证码" class="box-size j-check-code"></p>
        <p class="pop-error"></p>
        <div class="pop-btn" >
          <button type="button"
                  class="btn btn-cancel code-cancel-btn"
                  @click="closeHandler"
          >取消
          </button>
          <button data-track-phone=".auth-code .j-phone-number" type="button"
                  data-gzlog="tracking_type=click&amp;eventid=92800720" class="btn btn-sure code-button j-submit">提交
          </button>
        </div>
      </van-popup>

      <van-icon class="app" name="bell" size=".24rem" color="#535658"/>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import {Icon, Popup, Cell} from "vant"

Vue.use(Icon)
Vue.use(Popup)
Vue.use(Cell)

export default {
  name: "DetailTop",
  data() {
    return {
      id: this.$route.params.id,
      show: false,
      overlay: false,
    }
  },
  methods: {
    backHandler() {
      this.$router.back()
    },
    showPopup() {
      this.show = true
    },
    closeHandler() {
      this.show = false
    }
  },
  watch: {
    id(newValue, oldValue) {
      if (newValue !== oldValue) {
        location.reload()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.head-top
  width 100%
  height .46rem
  position: absolute;
  top 0
  left 0
  z-index 999

  .back
    position absolute
    left 0
    top 0
    width .44rem
    height .44rem
    text-align center
    line-height .44rem

  .right
    width .64rem
    height .44rem
    position absolute
    top 0
    right 0
    padding-top .12rem

    .app
      margin 0 0 0 .14rem

    .van-popup
      width 90%
      left 5%
      top .04rem
      border-radius .06rem

      .pop-tit
        height: 60px;
        line-height: 60px;
        padding-top: 0;
        padding-bottom: 0;
        font-size: 16px;
        text-align: center;

      .pop-text
        padding-bottom: 12px;
        font-size: 16px;
        color: #707070;
        padding-left: 20px;
        padding-right: 20px;

      .pop-ipt
        padding-left: 20px;
        padding-right: 20px;
        position relative

        .j-phone-number
          height .4rem
          line-height: 40px;
          width: 100%;
          padding-left: 10px;
          border: 1px solid #e0e0e0;
          border-radius: 2px;

        .j-get-code
          position absolute
          top: 0;
          right: 20px;
          width: 90px;
          font-size: 13px;
          color: #fff;
          background-color: #22ac38;
          border: none;
          border-radius: 0 2px 2px 0;
          height 100%

      .mt10
        margin-top: 10px;
        padding-left: 20px;
        padding-right: 20px;

        .j-check-code
          height: 40px;
          line-height: 40px;
          width: 100%;
          padding-left: 10px;
          border: 1px solid #e0e0e0;
          border-radius: 2px;
      .pop-error
        height .2rem
      .pop-btn
        width: 100%;
        height: 44px;
        border-top 1px solid #e6e6e6
        .btn-cancel
          height: 43px;
          width 50%
          font-size: .16rem;
          line-height: 43px;
          color: #252825;
          background-color: #fff;
          border: 0;
          border-radius: 0 0 0 5px;
        .btn-sure
          border-radius: 0 0 5px 0;
          width 50%
          height: 44px;
          font-size: 16px;
          color: #fff;
          line-height: 44px;
          text-align: center;
          background-color: #22ac38;
          border: none;
</style>
<style lang="stylus">
.custom-indicator
  left .05rem
</style>