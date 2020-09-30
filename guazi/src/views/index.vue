<!--
 * @Author: your name
 * @Date: 2020-09-28 20:04:22
 * @LastEditTime: 2020-09-29 14:59:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \program\guazi\src\views\index.vue
-->
<template>
  <div class="scroll">
      <div class="container">
          <CarChoose></CarChoose>
      </div>
      <div class="container">
          <CarMaoDou></CarMaoDou>
      </div>
      <div class="container">
          <CarFinance></CarFinance>
      </div>
  </div>
</template>

<script>
import CarChoose from '@/components/CarChoose'
import CarMaoDou from '@/components/CarMaoDou'
import CarFinance from '@/components/CarFinance'

export default {
    components:{
        CarChoose,
        CarMaoDou,
        CarFinance
    }
};
</script>

<style lang="stylus" scoped>
.scroll
    height 100%
    overflow scroll
    .container
        width 100%
        height 273px
        border-top 6px solid #f5f7fa
        padding-bottom 15px
</style>
