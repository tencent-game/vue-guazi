<template>
  <div class="change-brand">
    <header>
      <a class="close">
        <van-icon name="cross" color="#666666"/>
      </a>
      <h1>选择品牌</h1>
      <div></div>
    </header>
    <div class="brand-box">
      <h3>历史浏览品牌</h3>
      <van-grid
          icon-size="34"
          column-num="5"
          :border="false"
      >
        <van-grid-item
            icon="http://image.guazistatic.com/files/brand/1207.png"
            text="大众"
        />
        <van-grid-item
            icon="http://image.guazistatic.com/files/brand/1202.png"
            text="日产"
        />
      </van-grid>
      <h3 class="subtit">热门品牌</h3>
      <van-grid
          :border="false"
          :column-num="5"
      >
        <van-grid-item v-for="item in hotCity">
          <van-image
              :src="'https://image.guazistatic.com/files/brand/'+item.id+'.png'"
              width="34"
              height="34"
          />
          <span>{{ item.name }}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="brand-rbox rel">
      <h3>*</h3>
      <ul>
        <li>不限品牌</li>
      </ul>
    </div>
    <van-index-bar :index-list="indexList">
      <van-index-anchor
          v-for="(value,key) in allCity"
          :index="key"
      >
        {{ key }}
        <van-grid
            direction="horizontal"
            :column-num="1"
            :center="false"
            class="mini-city"
            v-for="(city) in value"

        >
          <div class="city-item" @click="showPopup(city.id)">
            <div class="img-con">
              <img :src="'https://image.guazistatic.com/files/brand/'+city.id+'.png'" alt="">
            </div>
            <span class="city-name">{{ city.name }}</span>
          </div>
        </van-grid>
      </van-index-anchor>
    </van-index-bar>
    <div>
      <van-popup
          v-model="show"
          position="right"
          :style="{ width: '80%' ,height:'100%'}"
          :overlay-style="{'background-color': 'rgba(255,255,255,0)'}"
      >
        <h3 class="subtit">选择车系</h3>
        <span class="car-one">不限车系</span>
        <van-grid
            direction="horizontal"
            :column-num="1"
            :center="false"
            class="mini-city"

        >
          <div class="city-item" v-for="car in carList">
            <div class="img-con">
              <img :src="car.img" alt="">
            </div>
            <span class="city-name">{{ car.text }}</span>
            <span class="car-num">约{{car.num}}辆</span>
          </div>
        </van-grid>
      </van-popup>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import {Grid, GridItem, Image, IndexAnchor, IndexBar} from "vant"
import http from "@/utils/http";

Vue.use(GridItem)
Vue.use(Grid)
Vue.use(Image)
Vue.use(IndexBar)
Vue.use(IndexAnchor)


export default {
  name: "ChangeBrand",
  data() {
    return {
      list: ["1", " 2", "3", "4"],
      hotCity: [],
      indexList: [],
      allCity: {},
      show: false,
      carList: []
    }
  },
  async mounted() {
    let result = await http.get("/car/clientUc/Brand/brand", {
      needMoreHot: 1,
      cityId: 12
    })
    this.indexList = [...this.indexList, ...Object.keys(result.data.brands)]
    this.hotCity = result.data.hot.slice(0, 10)
    this.allCity = result.data.brands
    console.log(this.allCity)
  },
  methods: {
    async showPopup(id) {
      console.log(id)
      let result2 = await http.post("/api/bj/buy/?act=getTagByMinor", "minorId=" + id)
      console.log(result2)
      this.carList = [...this.carList,...result2.data.option]
      this.show = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.change-brand
  overflow-y scroll
  height 100%

header
  width 100%
  height .44rem
  background-color: #f5f5f5;

  a
    width .44rem
    height .44rem
    display inline-block
    line-height .44rem
    text-align center
    position absolute
    top 0
    left 0

  h1
    text-align center
    height .44rem
    width 100%
    display inline-block
    line-height: .44rem;
    font-size .18rem
    font-weight 400

.brand-box
  padding-bottom .12rem

  h3
    height .45rem
    padding .15rem 0 .09rem .1rem
    font-weight 400

  .subtit
    height .5rem
    padding 0.2rem 0 .09rem .1rem

.rel
  h3
    height: 25px;
    padding: 0 0 0 .15rem;
    font-size: .12rem;
    line-height: .25rem;
    color: #666;
    background-color: #f5f5f5;

  ul
    width 100%

    li
      height: 44px;
      padding-left .15rem
      background-color: #fff;
      overflow: hidden;
      line-height .44rem

.city-name
  color #000000
  line-height .44rem

.img-con
  width .64rem
  height 100%
  display flex
  justify-content center
  align-items center

.city-item
  width 100%
  height .44rem
  display flex

.subtit
  height: .25rem;
  padding: 0 0 0 .15rem;
  font-size: .12rem;
  line-height: .25rem;
  color: #666;
  background-color: #f5f5f5;
  font-weight 400

.limit-no
  width 100%
  height .44rem
  padding-left: .15rem;
  line-height .44rem

.car-one
  height .44rem
  line-height .44rem
  padding-left .15rem

.car-num
  float right
  text-align center
  line-height .44rem
  margin-right 0.15rem
  font-size: 12px;
  color: #acacac;
  position absolute
  right 0
</style>

<style lang="stylus">


.van-grid-item__content
  padding 0
  height .66rem

  .van-grid-item__text
    margin-top 0

.van-grid
  height .66rem
  padding-left -0.16rem

  img
    width .34rem
    height .34rem

.mini-city
  height .44rem

.van-index-anchor
  color #000000
</style>