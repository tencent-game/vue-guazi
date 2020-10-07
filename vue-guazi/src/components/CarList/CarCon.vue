<template>
  <div class="recommender-car">
    <div class="recommender-car-title">
      为您推荐
    </div>
    <ul class="recommender-car-ul">
      <li
          class="recommender-car-li"
          v-for="item in carList"
          :key="item.clue_id"
      >
        <div
            class="li-container"
            @click="toDetail(item.clue_id)"
        >
          <img
              :src="item.car_image"
              alt="">
          <span class="icon-tag-org" v-if="item.wap_left_top_text">
              直降<br>
              {{ item.wap_left_top_text | changeData }}
            </span>
          <span class="icon-tag-text">{{ item.follow }}</span>
          <div class="recommender-car-content">
            <h3>{{ item.short_name }}</h3>
            <div class="car-name">{{ item.chexing }}</div>
            <div class="car-price">{{ item.price_text }}</div>
          </div>
          <span class="found-same-car">找相似</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CarCon",
  props: {
    carList: {
      type: Array
    }
  },
  data() {
    return {}
  },
  filters: {
    changeData(value) {
      // 急降<br/>7900元
      return value.slice(7)
    }
  },
  methods: {
    toDetail(id) {
      this.$router.push({name: "detail", params: {id: id}})
      location.reload()
    }
  },
}
</script>

<style lang="stylus" scoped>
.recommender-car
  width 100%
  border-top .06rem solid #f5f7fa
  padding-left .2rem
  padding-right .05rem
  height 100%
  display flex
  flex-direction column

  .recommender-car-title
    font-size .15rem
    color #303741
    letter-spacing 0
    padding .18rem 0 .17rem
    line-height .21rem

  .recommender-car-ul
    display flex
    flex-wrap wrap
    flex-direction row

    .recommender-car-li
      display flex
      width 50%
      height 2.26rem

      .li-container
        margin 0 .15rem .14rem 0
        border .01rem solid #eff2f6
        box-shadow 0 2px 8px 0 rgba(0, 0, 0, .08)
        border-radius .02rem
        position relative

        img
          width 100%

        .icon-tag-org
          background-image: url(../../assets/img/icon.png);
          background-size: 100%;
          padding-top: .08rem;
          padding-right: .02rem;
          width: .76rem;
          height: .57rem;
          top: -.16rem;
          left: -.2rem;
          z-index: 4;
          -webkit-transform: scale(.5);
          -moz-transform: scale(.5);
          -ms-transform: scale(.5);
          transform: scale(.5);
          position: absolute;
          text-align: center;
          color: #fff;
          font-family: PingFangSC-Medium;
          font-size: .18rem;
          letter-spacing: 0;
          line-height: .22rem;

        .icon-tag-text
          font-size .1rem
          color #ffffff
          bottom 1.04rem
          left 0
          background-image linear-gradient(90deg, transparent, rgba(0, 0, 0, .4))
          padding 0 .08rem
          line-height .24rem
          position absolute

        .recommender-car-content
          padding .1rem .1rem 0 .1rem

          h3
            margin-bottom .06rem
            font-size .14rem
            color #303741
            font-weight 400
            line-height .14rem

          .car-name
            font-size .14rem
            letter-spacing 0
            text-overflow ellipsis
            overflow hidden
            color #303741
            line-height .17rem
            margin-bottom .06rem
            height .32rem

          .car-price
            color #ff7147
            line-height .26rem
            white-space: nowrap
            font-size .14rem
            letter-spacing 0
            text-overflow ellipsis
            overflow hidden
            padding-bottom .1rem

      .found-same-car
        line-height .26rem
        font-size .12rem
        color #22ac38
        padding 0 .095rem
        position absolute
        right .1rem
        bottom .1rem
        background rgba(34, 172, 56, .1)
        border-radius .02rem

</style>