<template>
    <van-icon tag='a' name="arrow-left" @click="back" />
</template>

<style lang="stylus" scoped>
    a 
        width .12rem;
        height .2rem;
        position absolute;
        left .14rem;
        top .32rem;
        color #ccc
</style>

<script>
export default {
    methods:{
        back(){
            history.back()
        }
    }
}
</script>