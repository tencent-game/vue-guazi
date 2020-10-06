<template>
  <div class="city" v-if="$store.state.showCom.show">
    <a href="javascript:void(0)" class="citylistBtn" @click="showCityList">
      {{ $store.state.cityInfo.city.name }}
      <i class="iconfont">&#xe600;</i>
    </a>
    <section v-if="isShow" class="citylist">
      <!-- 弹出框两边按钮 -->
      <van-nav-bar>
        <template #left>
          <a href="javascript:;" @click="closeCityList">
            {{ $store.state.cityInfo.city.name}}
            <i class="iconfont">&#xe61c;</i>
          </a>
        </template>
        <template #right>
          <a href="javascript:;" @click="closeCityList">
            取消
          </a>
        </template>
      </van-nav-bar>

      <div class="list-main">
        <van-index-bar :index-list="indexList">
          <!-- 当前定位城市 -->
          <section class="position-city">
            <div class="greenbg-text">将从全国为您挑选可购买的车辆</div>
            <div class="common-city-title self-city-title">
                当前定位城市
            </div>
           <div class="position-result">
                <ul class="position-message">
                <li class="position-li">
                    <a href="javascript:;" class="result">
                        <i>定位失败</i>
                    </a>
                    <a href="javascript:;" class="message">
                        <i class="iconfont">&#xe61f;</i>
                         <span>重新定位</span>
                    </a>
                </li>   
            </ul>
           </div> 
          </section>
          <!-- 当前选择城市 -->
          <section class="current-city">
            <van-index-anchor index="选择" class="common-city-title">
                当前选择城市
            </van-index-anchor>
            <div class="city-list city-list-inline clearfix">
              <div class="city-item">
                {{  $store.state.cityInfo.city.name }}
              </div>
            </div>
          </section>
          <!-- 历史选择城市 -->
          <section class="history-city">
            <van-index-anchor index="历史" class="common-city-title">
                历史浏览城市
            </van-index-anchor>
            <div class="city-list city-list-inline clearfix">
              <div class="city-item">
                上海
              </div>
              <div class="city-item">
                北京
              </div>
              <div class="city-item">
                濮阳
              </div>
            </div>
          </section>
          <!-- 热门城市 -->
          <section class="hot-city">
            <van-index-anchor index="热门" class="common-city-title">
                热门城市
            </van-index-anchor>
            <div class="city-list city-list-inline clearfix">
              <div
                class="city-item"
                v-for="city in hotCities"
                :key="city.geo_id"
                @click="handleClick(city)"
              >
                {{ city.name }}
              </div>
            </div>
          </section>
          <section v-for="(section, key) in allCities" :key="key" class="category-city">
              <!-- 各个分类小标题 A~Z -->
            <van-index-anchor :index="key" class="common-city-title">
              <div class="city-title city-title-letter">
                {{ key }}
              </div>
            </van-index-anchor>
            <div class="city-list city-list-inline clearfix">
              <div
                class="city-item"
                v-for="city in section"
                :key="city.geo_id"
                @click="handleClick(city)"
              >
                {{ city.name }}
              </div>
            </div>
          </section>
        </van-index-bar>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, NavBar, Cell } from "vant";
import http from "../utils/http.js";
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(NavBar);
Vue.use(Cell);
export default {
  data() {
    return {
      isShow: false,
      allCities: {},
      hotCities: {}
    };
  },
  methods: {
    showCityList() {
      this.isShow = true;
    },
    closeCityList() {
      this.isShow = false;
    },
    handleClick(city) {
      this.$store.dispatch("cityInfo/changeCityName", city);
      this.isShow=false;
    }
  },
  async mounted() {
    let result = await http.get(
      `citylist/ajax.php?dir=vehicle&module=GetSelectCity&pageType=index`
    );
    console.log(result, typeof result);
    this.allCities = result.allCityList;
    this.hotCities = result.hotCityList;
  },
  computed: {
    indexList() {
      return ["选择", "历史", "热门", ...Object.keys(this.allCities)];
    }
  }
};
</script>

<style lang="stylus" scoped>
.city 
  position: relative;
  height: 100%;

  .citylistBtn 
    padding-left: 0.16rem;
    padding-right: 0.16rem;
    font-weight: 300;
    line-height: 0.32rem;
    border-right: none;
    color: #fff;
  
  .citylist 
    position: absolute;
    z-index: 999;
    margin-top: -0.38rem;
    background-color: green;
    width: 3.75rem;
    height: 100%;

    .list-main 
      position: absolute;
      z-index: 999;
      width: 3.5rem;
      height: 6rem;
      overflow-y: scroll;
      margin-top: 0.1rem;
      margin-left: 0.1rem;
      padding: 0;
      background-color: #fff;
      border-radius: 0.04rem;

      box-sizing content-box

      /deep/.van-index-bar__sidebar
        right 0.15rem
      /deep/.van-index-bar__index
        padding 0.05rem 0.04rem 0 0.16rem 
      .position-city,.current-city,.history-city,.hot-city,.categroy-city
        padding: 0;
        background-color: transparent;
        border-radius: .04rem;
      .common-city-title
        background #f5f7fa
      .self-city-title
        height 0.56rem
        line-height 0.56rem
        padding-left 0.16rem
        color #8f96a0

      .position-city 
        .greenbg-text
            opacity: .8;
            background: rgba(34,172,56,.8);
            height: .4rem;
            line-height: .4rem;
            font-family: PingFangSC-Regular;
            font-size: .12rem;
            color: #fff;
            letter-spacing: 0;
            text-align: center;
        /deep/.self-city-title
                .van-index-anchor
                    line-height 0.56rem              
        .position-result
            background-color: #fff;
            height: 100%;
            overflow: auto;
            .position-message
                overflow: hidden;
                padding-left: .1rem;
                padding-right: .29rem;
                .position-li
                    width: 100%;
                    text-align: center;
                    float: left;
                    box-sizing: border-box;
                    .result,.message
                        display: block;
                        line-height: .48rem;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        color: #303741;
                        font-size: .14rem;
                        position: relative;
                        text-align: center;
                        padding-right: 0;
                        overflow: inherit;
                        font-weight: 300;
                    .result
                        color: #303741;
                        float: left;
                        text-align: center;
                        white-space: nowrap;
                        text-indent: 0;
                        font-size: .14rem;
                        width: 25%;

                    .message
                        float: right;
                        overflow: hidden;
                        height: .48rem;

            
.clearfix:after {
    content: ' ';
    display: table;
    clear: both;
  }
  
  .city-title {
    padding-left: 15px;
    line-height: 30px;
  }
  
  .city-title-letter {
    padding-left: 20px;
  }
  
  .city-list {
    padding-right: 20px;
  }
  
  .city-list-inline {
    background-color: #fff;
    padding-bottom: 8px;
  }
  
  .city-list-inline .city-item, .city-list-inline .location-city {
    float: left;
    background: #fff;
    width: 20%;
    height: 40px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .city-list-inline .location-city {
    width: auto;
    min-width: 30%;
    padding: 0 20px;
  }
  
  .city-list-block {
    background-color: #fff;
  }
  
  .city-list-block .city-item {
    height: 44px;
    line-height: 44px;
    margin-left: 15px;
  }
  
  .city-list-block .city-item:last-child {
    border-bottom: none;
  }
</style>