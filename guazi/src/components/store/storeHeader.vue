<template>
<ul class="storeInfo">
    <li v-for="(item,index) in lists" :key="item.id" 
    ><a  @click="clickIt(index,item.id)"  :class="{active: index === curIndex}">{{item.title}}</a></li>
    
</ul>
</template>

<script>

export default {
    data(){
        return {
            
            lists:[
                {
                    id:'s001',
                    title:'店铺信息',
                },
                {
                    id:'s002',
                    title:'热门活动'
                },
                {
                    id:'s003',
                    title:'店长推荐'
                },
            ],
            curIndex:0
        }
    },
    
    
    methods:{
        clickIt(index,id){
            this.curIndex=index
           
            document.getElementById(id).scrollIntoView()
        },
        

    },
    /* watch:{
        "$route":function(newvalue,oldvalue){
            window.location.replace(newvalue.fullPath)
            console.log(newvalue,oldvalue)
        }
    } */
        
}

</script>

<style lang="stylus" scoped>
    .storeInfo
        width: 3.75rem;
        height: .56rem;
        padding: 0 .2rem;
        background: #fff;
        z-index 999
        box-shadow: 0 0.01rem 0.03rem 0 #e7ecf4;
        position sticky
        top 0
        text-align center
        
        li
            float left
            font-size: .15rem;
            line-height: .56rem;
            height 100%
            width 33.33333% 
            a
                width 100%
                height 100%
                display block
               


         
</style>
<style lang="stylus" scoped>
    .active
        color green 
        font-weight bolder
    .show
        display block  
</style>