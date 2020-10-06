<template>
  <div class="head-index">
    <header class="top">
      <CityList></CityList>
      <SearchBtn></SearchBtn>
      <CustomerService></CustomerService>
      <router-link to="/login">
        <User></User>
      </router-link>
    </header>
    <VantSwiper></VantSwiper>
  </div>
</template>

<script>
import CustomerService from "@/components/ComCustomerService.vue";
import User from "@/components/ComUser.vue";
import CityList from "@/components/ComCityList.vue";
import SearchBtn from "@/components/ComSearchBtn.vue";
import VantSwiper from "@/components/ComVantSwiper.vue";

export default {
  components: {
    CustomerService,
    User,
    CityList,
    SearchBtn,
    VantSwiper
  }
};
</script>

<style lang="stylus" scoped>
.head-index {
  height: 1.7rem;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;

  .top {
    position: absolute;
    top: 0.05rem;
    left: 0;
    z-index: 1;
    display: flex;
    width: 100%;
    line-height: 0.32rem;
    padding: 0;
  }
}
</style>
