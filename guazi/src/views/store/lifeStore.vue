<template>
    <div class="lifeStore" id="s002">
        <h1>瓜子精品生活馆</h1>
        <a href="">
            <img src="https://image1.guazistatic.com/qn2003251635448f5b5d7648d6015bbe94fade6549c835.jpg?imageView2/2" alt="">
        </a>
        <div class="boutique_mall">
            <boutique-mall></boutique-mall>
        </div>
    </div>
</template>

<script>
import boutiqueMall from '../../components/store/boutiqueMall'
export default {
    components:{
        boutiqueMall
    }
}
</script>

<style lang="stylus"  scoped>
    .lifeStore
        padding .24rem 0;
        width 100%
        h1
            font-size .15rem;
            color #303741;
            line-height .15rem;
            margin-left .2rem;
        a
            display: inline-block;
            width: 3.35rem;
            height: .56rem;
            margin: .16rem .2rem .14rem;
            img 
                width: 3.35rem;
                height: .56rem;
                border-radius: .02rem;
        .boutique_mall
            width 100%
            padding-left: .2rem;
            display: -webkit-box;
            overflow-x: scroll;  
              
</style>
