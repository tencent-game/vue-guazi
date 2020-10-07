<template>
<div class="home_page">
    <home-header ></home-header>
    <choose-city ></choose-city>
    <home-banner></home-banner>
    <index-category></index-category>
    <home-recommend></home-recommend>
</div>
</template>


<script>
import homeHeader from '../home/homeHeader'
import indexCategory from '../home/indexCategory'
import homeBanner from '../../components/home/homeBanner'
import homeRecommend from '../home/homeRecommend'
import chooseCity from '../../components/home/chooseCity'
export default {
    data(){
        return {
            
        }
    },
    components:{
        homeHeader,
        homeBanner,
        indexCategory,
        homeRecommend,
        chooseCity
    }
}
</script>

<style lang="stylus" scoped>
    .home_page
        width 100%
        height 100%
        overflow-y scroll
</style>
