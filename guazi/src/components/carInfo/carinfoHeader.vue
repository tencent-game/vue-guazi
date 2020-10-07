<template>
    <div class="carinfo-header">
        <back style="top:.16rem"></back>
        <ul class="info">
            <li  v-for="(value,key) in list" :key="key" :class="{active:currentIndex===key}" 
              @click="clickIt(key,value)" class="li">{{value.ids}}</li>
        </ul>
        <van-icon name="bell" size='.22rem' color="#666"/>
        <span>APP</span>
    </div>

</template>

<script>
import back from '../../components/store/back'
import http from '../../utils/http'

export default {
    data(){
        return {
            currentIndex:0,
            list:[
                {
                    ids:'车源',
                    path:'/vehicleSource',
                    name:'vehicleSource'
                },
                {
                    ids:'车况',
                    path:'/carCondition',
                    name:'carCondition'
                },
                {
                    ids:'图文',
                    path:'/imageText',
                    name:'imageText'
                },
                {
                    ids:'推荐',
                    path:'/vehicleRecommend',
                    name:'vehicleRecommend'
                }
            ]
        }
    },
    components:{
        back,

    },
    methods:{
        clickIt(key,value){
            console.log(key,value)
            this.currentIndex=key
            this.$router.replace(value.name)
        },
        async chooseOne(){
            let path = await window.location.pathname
            console.log(path)
            switch(path){
                case '/vehicleSource':
                    this.currentIndex=0
                    return
                case '/carCondition':
                    this.currentIndex=1
                    return
                case '/imageText':
                    this.currentIndex=2
                    return
                case '/vehicleRecommend':
                    this.currentIndex=3
                    return
            }
            
        }
        /* async loadData(){
            //https://mapi.guazi.com/api/usercenter/wap-beginner?guid=e5328c51-7d1d-434e-da0d-aa3cf967fe74&page=detail&platform=wap&platfromSource=wap
            let result = await http.get('/bbb/api/usercenter/wap-beginner',{guid:"e5328c51-7d1d-434e-da0d-aa3cf967fe74",page:"detail",platform:'wap',platfromSource:'wap'})
            console.log(result)
        } */
    },
    mounted(){
        //  this.loadData()
        console.log(location.pathname)
        this.chooseOne()
    },
    

}
</script>

<style lang="stylus" scoped>
    .carinfo-header
        width 100%
        height .44rem
        display flex
        justify-content center
        align-items center
        position sticky
        top 0
        background #fff
        z-index 999
        .info
            display flex
            width 100%
            height 100%
            padding 0 0 0 15%
            align-items center
            .li
                height 100%
                flex 1
                line-height .44rem
                text-align center
                font-size .16rem
                
        span 
            width .2rem
            height .2rem
            display inline-block
            border 1px solid #ccc    
            border-radius .2rem
            line-height .2rem
            text-align center
            font-size .08rem
            margin 0 .1rem
            background #666
            color #fff
           

.active 
    border-bottom 1px solid green

</style>