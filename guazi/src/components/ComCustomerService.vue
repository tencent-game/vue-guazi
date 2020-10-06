<template>
     <a href="javascript:void(0)" class="con" v-if="$store.state.showCom.show">
        <i class="iconfont kefu-icon">&#xe60c;</i>
      </a>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
 .con 
      padding: 0 0 0 0.14rem
      .kefu-icon 
        font-size 0.2rem
        color #fff
</style>