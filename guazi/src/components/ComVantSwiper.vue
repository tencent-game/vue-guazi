<template>
  <div class="banner" v-if="$store.state.showCom.show">
    <van-swipe :autoplay="3000" indicator-color="white" style="height:1.7rem">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" style="height:1.7rem"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  data() {
    return {
      images: [
        "https://image1.guazistatic.com/qn200925180759d73f225bcc31f046bf4fbd011d8526ac.jpg?imageView2/2",
        "https://image1.guazistatic.com/qn200615154818965d70a730ce1eb5972379d06e053cf6.jpg?imageView2/2",
        "https://image1.guazistatic.com/qn200819215513cb48c85334c613c2e52436146f2fc062.jpg?imageView2/2",
        "https://image1.guazistatic.com/qn200915164657f3c8728a24be42079364a09d819cdcad.jpg?imageView2/2",
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.banner
  width 100%
  height 1.7rem
  overflow hidden
</style>