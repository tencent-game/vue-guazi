<template>
  <div class="home">
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="暂无更多，遇到喜欢的就赶紧预约吧"
        @load="onLoad()"
        error-text="请求失败，点击重新加载"
        :error.sync="error"
    >
      <car-con :carList="carList"></car-con>
    </van-list>
  </div>
</template>

<script>
import CarCon from "@/components/CarList/CarCon";
import http from "@/utils/http";
import Vue from "vue"
import {List} from "vant"
Vue.use(List)

export default {
  data() {
    return {
      carList: [],
      city: 12,
      loading: false,
      finished: false,
      refreshing: false,
      error: false,
    }
  },
  name: 'CarList',
  components: {
    CarCon
  },
  created() {
    this.page = 1
  },
  mounted() {

  },
  methods: {
    async loadData() {
      const data = await http.get("/api/ajax.php", {
            module: "getMoreRecommendCar",
            city_id: this.city,
            page: this.page
          }
      )
      this.carList = [
        ...this.carList,
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
    },
  }
}
</script>

<style lang="stylus" scoped>
.home
  overflow-y scroll
  height 100%
</style>