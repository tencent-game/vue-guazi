<template>
  <div class="detail-swipe">
    <van-swipe
        @change="onChange"
        height="2.50rem"
    >
      <van-swipe-item><img
          src="https://image1.guazistatic.com/qn200929145529efe85ac844b7536e9bcbf1c48f42de38.jpg?imageView2/1/w/750/h/500/q/88"
          alt=""></van-swipe-item>
      <van-swipe-item><img
          src="https://image1.guazistatic.com/qn200929145529efe85ac844b7536e9bcbf1c48f42de38.jpg?imageView2/1/w/750/h/500/q/88"
          alt=""></van-swipe-item>
      <van-swipe-item><img
          src="https://image1.guazistatic.com/qn200929145529efe85ac844b7536e9bcbf1c48f42de38.jpg?imageView2/1/w/750/h/500/q/88"
          alt=""></van-swipe-item>
      <van-swipe-item><img
          src="https://image1.guazistatic.com/qn200929145529efe85ac844b7536e9bcbf1c48f42de38.jpg?imageView2/1/w/750/h/500/q/88"
          alt=""></van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          <van-icon name="photo-o" size=".15rem" tag="i" color="#FFFFFF"/>
          <span>{{ current + 1 }}/4</span>
        </div>
      </template>

    </van-swipe>
    <DetailTop></DetailTop>
  </div>
</template>

<script>
import Vue from "vue"
import {Swipe, SwipeItem} from "vant"
import DetailTop from "@/views/detail/DetailTop";

Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
  name: "DetailSwipe",
  components:{
    DetailTop
  },
  data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.custom-indicator
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
.detail-swipe
  img
    width 100%
</style>