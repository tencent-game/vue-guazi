<template>
    <div class="home_recommend" @click="clickIt">
        <div class="left">
            <img src="https://image1.guazistatic.com/files/tag_img/2833.jpg">
        </div>
        <div class="right">
            <span class="tiaoxuan">根据您点击的车辆为您精心挑选</span>
            <div class="desc">
                <span class="background"> 6-12万</span>
                <span class="background">大众速腾</span>
            </div>
        </div>
        <van-icon name="arrow" />
    </div>
</template>


<script>
export default {
    methods:{
        clickIt(){
            this.$router.push('/recommendForYou')
            // this.$router.push('/search')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .home_recommend
        width 100%
        height .72rem
        background: transparent;
        padding: .21rem .2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        background: #fff;
        border-radius: .04rem;
        .left
            width .7rem
            height .4rem
            img 
                width: .6rem;
                height: .4rem;
                background: #000;
                border-radius: .02rem;
                margin-right: .1rem;
        .right
            box-sizing: border-box;
            padding-left : .1rem;
            height: .4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            position: relative;
            .tiaoxuan 
                font-size: .12rem;
                color: #303741;
                line-height: .12rem;
            .desc
                margin: 0;
                padding: 0;
                border: 0;
                outline: 0;
                .background
                    display: inline-block;
                    margin-right: .04rem;
                    padding: .05rem .06rem;
                    font-family: PingFangSC-Medium;
                    font-size: .12rem;
                    color: #ff7147;
                    line-height: .12rem;
                    background: rgba(255,113,71,.1);
                    border-radius: .02rem;
                    vertical-align: bottom;
                    text-overflow: ellipsis;
                    max-width: .96rem;
                    white-space: nowrap;
                    overflow: hidden;


</style>