<template>
  <div class="home">
    <div class="change-brand">
      <button @click="toChangeBrand">点击</button>
    </div>
    <car-list></car-list>
  </div>
</template>

<script>
import CarList from "@/views/home/CarList";

export default {
  name: "Home",
  components: {
    CarList
  },
  methods: {
    toChangeBrand(){
      this.$router.push("/changeBrand")
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  overflow-y scroll
  height 100%
  .change-brand
    width 100%
    height .5rem
</style>