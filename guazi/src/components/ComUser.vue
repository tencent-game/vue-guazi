<template>
       <a href="javascript:void(0)" class="login" v-if="$store.state.showCom.show">
           <i class="iconfont user-icon">&#xe627;</i>
       </a>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
.login 
    padding 0 0.16rem 0 0.14rem
    .user-icon 
        font-size 0.2rem
        color #fff
</style>