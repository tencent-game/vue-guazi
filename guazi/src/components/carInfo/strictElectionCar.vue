<template>
    <div class="detail-sellbox">
        <div class="column-title">
            严选车 <span class="pre-order">预约到店</span>
        </div>
        <div class="ban_car_good">
            <span>车况更好</span>
            <span>价格公道</span>
            <span>百家门店</span>
            <span>当日提车</span>
        </div>
        <section @click="clickIt">
            <div class="desc">
                <img src="https://image.guazistatic.com/gz01180528/13/51/cfd77cb251ff51816be3b4da835d5483.jpeg@base@tag=imgScale&w=240&h=160&c=1&m=2&q=88" alt="">
                <div :shopping="shopping">
                    <h4>{{shopping.name}}</h4>
                    <p>车源数量：{{shopping.car_num}}</p>
                    <p>看车地址：{{shopping.address}}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>


export default {
    data(){
        return {
            shopping:{}
        }
    },
    created(){
        this.shopping=this.$store.state.shopping
        console.log(this.shopping)
    },
    methods:{
        clickIt(){
            this.$router.push('/store/')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .detail-sellbox
        background: #fff;
        margin: .06rem 0;
        padding-bottom: .19rem;
        .column-title
            padding-top: .18rem;
            line-height: .16rem;
            font-size: .16rem;
            color: #495056;
            font-weight: 500;
            padding-left: .2rem;
            .pre-order 
                margin-right: .2rem;
                margin-top: -.05rem;
                padding: .05rem .1rem;
                position: absolute;
                right: 0;
                background: #fff;
                border-radius: .02rem;
                color: #22ac38;
                font-weight: 400;
                font-size: .12rem;
                border: 1px solid #22ac38;
                box-sizing: border-box;
        .ban_car_good
            margin: .18rem .2rem .12rem;
            >span 
                font-family: PingFangSC-Regular;
                font-size: .12rem;
                color: #22ac38;
                line-height: .12rem;
                margin-left: .18rem;
                background: url('https://cli-sta.guazistatic.com/c2c_wap/ok.a3332941e2c828241acbef98a5104ad0.png') no-repeat;
                background-size: .12rem;
                background-position: 0;
                padding-left: .15rem;
        section 
            background: #f5f7fa;
            border-radius: .02rem;
            margin: 0 .2rem;
            padding: .17rem .12rem .16rem .16rem;
            .desc
                overflow: hidden;
                img 
                    width: 1.2rem;
                    height: .8rem;
                    float: left;
                    border-radius: .02rem;
                >div    
                    float: left;
                    width: 1.5rem;
                    margin-left: .11rem;
                    h4
                        font-weight normal
                        letter-spacing: 0;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        font-family: PingFangSC-Regular;
                        font-size: .16rem;
                        color: #303741;
                        line-height: .18rem;
                        margin-bottom: .17rem;
                        -webkit-line-clamp: 2;
                        max-height: .34rem;
                    p
                        font-family: PingFangSC-Light;
                        font-size: .11rem;
                        color: #8f96a0;
                        line-height: .11rem;
                        margin-bottom: .06rem;
                        -webkit-line-clamp: 1;
                
</style>