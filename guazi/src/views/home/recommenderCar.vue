<template>
  <div class="recommender-car">
    <div class="recommender-car-title">
      为您推荐
    </div>


    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="暂无更多，遇到喜欢的就赶紧预约吧"
        @load="onLoad"
        error-text="请求失败，点击重新加载"
        :error.sync="error"
    >
      <ul class="recommender-car-ul">
        <li
            class="recommender-car-li"
            v-for="item in list"
            :key="item.clue_id"
        >
          <div class="li-container">
            <img
                :src="item.car_image"
                alt="">
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
    </van-list>
  </div>
</template>

<script>
import http from "../../utils/http"
import Vue from "vue"
import {List} from "vant"

Vue.use(List)

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      error: false
    }
  },

  created() {
    this.page = 1
    this.city_id = 12
  },

  async mounted() {

  },
  methods: {
    async loadData() {
      const data = await http.get("/api/ajax.php", {
            module: "getMoreRecommendCar",
            city_id: this.city_id,
            page: this.page
          }
      )
      this.list = [
        ...this.list,
        ...data
      ]
      this.loading = false
      this.refreshing = false
      this.page++
      if (this.page > 6) {
        this.finished = true
      }
    },
    onLoad() {
      this.loadData()
    }
  }
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
  overflow-y scroll

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

      .li-container
        margin 0 .15rem .14rem 0
        border .01rem solid #eff2f6
        box-shadow 0 2px 8px 0 rgba(0, 0, 0, .08)
        border-radius .02rem
        position relative

        img
          width 100%

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