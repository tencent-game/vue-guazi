<!--
 * @Author: your name
 * @Date: 2020-09-29 16:13:11
 * @LastEditTime: 2020-09-30 14:07:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \program\guazi\src\views\deckill.vue
-->
<template>
  <div class="scroll">
    <van-nav-bar
      title="限时秒抢"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="top">
      <div class="rule-icon" @click="showRules">
        活动规则
      </div>
      <div class="show" v-show="show" @click.stop="showRules">
        <div @click="showRules">
          <h2>
            活动规则
            <div class="close-btn" @click="showRules"></div>
          </h2>
          <div class="detail-reg">
            <p>1.活动时间：每日10:00:00—23:59:59；</p>
            <p>2.在活动期间，凡注册/登陆瓜子账号的用户进入限时秒抢专区选择点击意向车辆相应图标，即有机会抢到该车辆的服务费优惠券；</p>
            <p>3.服务费优惠券自领取后7日内有效；</p>
            <p>4.抢券成功后，您的账户会收到该车辆的服务费优惠券，且您会收到系统自动发送的带有序号的短信，仅最先在瓜子系统核销的用户可以使用该优惠券（核销后，服务费优惠券方可生效）；如同时核销的用户多于1人，获取短信序号靠前的用户可以使用该优惠券购买该车辆；</p>
            <p>5.使用该优惠券可以直接抵扣服务费。</p>
            <p>6.本活动优惠形式均为优惠券，用户获得券后可前往【我的】-【优惠券】中查看券规则；</p>
            <p>7.如本活动包含多种券，每个订单只能使用一张优惠券，每张优惠券仅可使用一次，优惠券与优惠券不可叠加使用；但是单项活动规则特别说明的除外。</p>
            <p>8.活动中授予用户的优惠券、电子卡或实物等均不设找零、不折现，如因用户自身原因致使优惠作废，不予补发。但是，在用户按照我司公示流程支付对价获得优惠资格的情况下，如用户未在优惠券的使用期限内未完成我司公式活动规则指定动作，我们将会在活动结束后7个工作日内退还用户实际支付的对价金额。</p>
            <p>9.每日所有优惠券数量有限，抢完即止，同一用户就同一种优惠券仅可领取1张。如出现用户通过异常手段恶意领取优惠券，我司有权将该券判定为无效。 同一手机号、同一账号、同一设备号等可作为同一用户的判断条件。</p>
            <p>10.本活动由我司为用户提供解释及咨询服务，用户参加本活动即视为用户同意本活动规则。用户理解并同意，在不损害用户实际利益的情况下，我司可根据实际情况对本活动内容进行修改，包括暂停或终止本活动。</p>
            <p>11.活动期间，如出现不可抗力（包括但不限于重大灾害事件、活动受政府机关指令需要停止举办或者调整的、活动遭受严重网络攻击或因系统故障需要停止举办或者调整的），我司可暂停或终止活动，或对活动进行调整。</p>
            <p>12.我司客服电话：400-060-8029/400-069-6510</p>
          </div>
        </div>
      </div>
      <div class="current-city">
        北京
      </div>
    </div>
    <div class="limit-time">
      <div class="count-down-container">
        <van-count-down :time="time">
          <template #default="timeData">
            <span class="colon">距结束还剩</span>
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">时</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">分</span>
            <span class="block">{{ timeData.seconds }}</span>
            <span class="colon">秒</span>
          </template>
        </van-count-down>
      </div>
      <ul class="limit-time-list">
        <li
          v-for="(item, index) in deckill"
          :key="index"
          class="limit-time-content"
        >
          <div class="limit-banner">
            <div class="hot-tag">
              <p class="hot-tag-text-1">限时</p>
              <p class="hot-tag-text-2">秒抢</p>
            </div>
            <div class="car-info">
              <div class="car-img">
                <img :src="item.imageUrl" alt="" />
              </div>
              <div class="car-text">
                <h3 class="title">{{ item.title }}</h3>
                <div class="price-desc">
                  <div class="seckill-price">
                    秒抢价
                    <span class="price-now">{{
                      item.financePrice | financePrice
                    }}</span>
                    万
                  </div>
                  <div class="origin-price">
                    原价{{ item.originalPrice | originalPrice }}万
                  </div>
                </div>
                <div class="kill-progress">
                  <div class="killed">已有{{ item.ticketGetNum }}人抢券</div>
                </div>
                <div class="ticket">
                  <div class="ticket-info">
                    <span>服务费直减￥{{ item.ticketPrice }}</span>
                  </div>
                  <div class="btn-rush">
                    <span>立抢</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast, CountDown} from "vant";
import http from "@/utils/http.js";

Vue.use(NavBar);
Vue.use(CountDown);

export default {
  data() {
    return {
      time: 12 * 60 * 60 * 1000,
      deckill: {},
      show: false,
    };
  },

  async mounted() {
    let result = await http.get("/deckill");
    // console.log(result);
    this.deckill = result.data.carInfoList;
    console.log(this.deckill);
  },

  filters: {
    financePrice(value) {
      return value / 10000;
    },
    originalPrice(value) {
      return value / 10000;
    },
  },

  methods: {
    onClickLeft() {
      Toast("返回");
      this.$router.go(-1);
    },
    showRules(e){
      this.show=!this.show
    }
  },
};
</script>

<style lang="stylus" scoped>
.show
  position fixed
  z-index 999
  width 100%
  height 100%
  background rgba(0,0,0,.4)
  display flex
  justify-content center
  >div
    width 305px
    height 400px
    background #ffffff
    border-radius 5px
    position relative
    margin-top 50px
    >h2
      width 100%
      position absolute
      height 61.5px
      display flex
      justify-content center
      align-items center
      font-size 18px
      font-weight 600
      color #333
      line-height 12px
      >.close-btn
        position absolute
        width 16px
        height 16px
        right 16px
        top 50%
        transform: translateY(-50%);
        background url("../assets/images/close.png") no-repeat
        background-size 100% 100%
    >.detail-reg
      position absolute
      height 319.5px
      overflow scroll
      top 61.5px
      margin 0 22px 19px 21.5px
      >p
        font-size 12px
        font-weight 400
        color #333
        line-height 22px

.scroll
  height 100%
  overflow scroll

/deep/ .van-nav-bar
  height 44px
  .van-icon
    color #777
    font-size 21px
    font-weight 600
.top
  width 100%
  height 197px
  background url("../assets/images/top-banner.jpg") no-repeat
  background-size 375px 197px
  position relative
  .rule-icon
    height 30px
    background rgba(34,34,34,0.4)
    border-radius 15px
    position absolute
    top 8px
    right 12px
    color #fff
    display flex
    line-height 30px
    justify-content space-around
    padding 0 6px
    font-size 10px
    font-weight 700
    &::before
      content "!"
      width 15px
      height 15px
      border 1px solid #fff
      border-radius 50%
      display block
      text-align center
      line-height 13px
      top 8px
      left 8px
      position relative
      transform translateX(-50%)
      margin-right 2px
      font-size 13px
  .current-city
    font-size 10px
    font-weight 700
    color #fff
    height 28px
    line-height 28px
    padding 0 7px
    border-radius 14px
    background rgba(34,34,34,0.4)
    display flex
    align-items center
    position absolute
    top 8px
    left 12px
    &::after
      content ""
      margin-top 4px
      margin-left 4px
      display inline-block
      width 0
      height 0
      border-width 5px 4px
      border-style solid dashed dashed
      border-color #fff transparent transparent
.limit-time
  width 95%
  min-height 250px
  margin 0 auto
  border-radius 10px 10px 0 0
  padding-bottom 50px
  .count-down-container
    width 100%
    height 65px
    display flex
    align-items center
    justify-content space-between
    padding 0 15px
    background #fff
    .van-count-down
      margin 0 auto
  .limit-time-list
    background #f6f6f6
    .limit-time-content
      width 100%
      height 143px
      position relative
      padding 10px 10px 0
      .limit-banner
        .hot-tag
          position absolute
          top 0
          left 10px
          z-index 90
          width 40px
          height 44px
          background url("../assets/images/tag.png") no-repeat
          background-size 100% 100%
          color #fff
          font-size 11px
          line-height 14px
          text-align center
          .hot-tag-text-1
            padding-top 6px
        .car-info
          display flex
          width 100%
          height 133px
          border-bottom 1px solid rgba(0,0,0,.1)
          .car-img
            flex 1
            width 154px
            height 103px
            margin 10px 10px 0 0
            img
              width 100%
              height 100%
          .car-text
            width 170px
            height 104px
            h3
              font-size 13px
              color #333
              font-weight 700
              line-height 18px
              text-overflow ellipsis
              overflow hidden
            .price-desc
              display flex
              margin-top 8px
              .seckill-price
                flex 1
                color #fc1c7d
                font-size 10px
                font-weight 700
                line-height 10px
                span
                  font-size 18px
              .origin-price
                text-decoration line-through
                color gray
                font-size 10px
                line-height 10px
                padding 4px 0 0
            .kill-progress
              display flex
              padding 8px 0
              .killed
                color #fc1c7d
                font-size 11px
                line-height 12px
                opacity .8
            .ticket
              width 100%
              height 43px
              line-height 40px
              display flex
              background url("../assets/images/ticket.png") no-repeat -3px 0
              background-size 104% 104%
              color #fff
              justify-content space-between
              .ticket-info
                padding 0 0 0 5px
                font-size 11px
                text-align center
                width 110px
              .btn-rush
                color #e1311c
                font-size 13px
                width 49px
                text-align center
                font-weight 900
</style>

<style>
.colon {
  display: inline-block;
  color: #666;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}
.block {
  display: inline-block;
  width: 18px;
  height: 19px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  background-color: #6b53e3;
  border-radius: 5px;
  font-weight: 600;
  line-height: 19px;
  margin: 0 3px;
}
</style>
