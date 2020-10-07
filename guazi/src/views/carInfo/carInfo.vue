<template>
    <div class="carinfo">
        <div class="car-info">
        <carinfo-header></carinfo-header>
        <router-view></router-view>
        <carinfo-footer></carinfo-footer>
        </div>
    </div>
</template>

<script>

import carinfoHeader from '../../components/carInfo/carinfoHeader'

import carinfoFooter from '../../components/carInfo/carinfoFooter'
export default {
    data(){
        return {
            car:{}
        }
    },
    components:{
        carinfoHeader,
        carinfoFooter,
    },
    created(){
        
        this.$store.state.car=this.$route.params
        console.log(this.$route.params)
        console.log(this.$store.state.car)
    },
}
</script>

<style lang="stylus" scoped>
    .carinfo
        width 100%
        height 100%
        padding-bottom 15%
        position relative
        overflow-y scroll
        .car-info
            width 100%
            height max-content
            

</style>