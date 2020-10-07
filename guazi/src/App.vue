<template>
  <div id="app">
    <!-- <index-category></index-category> -->
    <router-view ></router-view>
    <!-- <router-view></router-view>
    <router-view name='store'></router-view> -->
    <!-- <recommend-car></recommend-car> -->
  </div>
</template>


<script>
// import indexCategory from './views/home/indexCategory'

// import strictElectionStore from './views/store/strictElectionStore'

import recommendCar from './views/home/recommendCar'

  export default {
    // components:{
    //   indexCategory,
    //   recommendCar
    // }
  }
</script>
<style lang="stylus" scoped>
  #app
    height 100%
    
</style>