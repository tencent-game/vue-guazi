<template>
    <div class="server-box">
        <a href="" class="column-head">
            <div class="column-title">
                <span class="column-tit-text">三包服务</span>
                <span class="small-time">服务费约4500元，欢迎联系咨询</span>
                <van-icon name="arrow" size=".15rem" style="float:right ; width:.16rem; height:.16rem; line-height:.56rem" />
            </div>
        </a>
        <div class="service-list">
            <div class="service-list-bg">
                <ul>
                    <a href="" v-for="item in list" :key="item.title">
                        <li>
                            <img :src="item.img" alt="">
                            <p>{{item.title}}</p>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    title:'7天无理由退车',
                    img:'https://sta.guazistatic.com/static/c2c/app/client/retreat@3x.png'
                },
                {
                    title:'7天无理由换车',
                    img:'https://image1.guazistatic.com/qn2009171202433f082c964212dc5f13010af1d12fe605.png'
                },
                {
                    title:'30天保修',
                    img:'https://image.guazistatic.com/gz01191203/11/13/8f19e91f680d52cc3767fb0646e8a096.png'
                },
                {
                    title:"1年售后",
                    img:'https://sta.guazistatic.com/static/c2c/app/client/warranty@3x.png'
                },
                {
                    title:'专业装备',
                    img:'https://sta.guazistatic.com/static/c2c/app/client/car_maintenance@3x.png'
                },
                {
                    title:'过户服务',
                    img:'https://sta.guazistatic.com/static/c2c/app/client/agency_transfer@3x.png'
                } 

            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .server-box
        background: #fff;
        margin: .06rem 0;
        .column-head
            padding: 0 .2rem;
            display block
            color: #000;
            text-decoration: none;
            font-size: 100%;
            vertical-align: baseline;
            .column-title
                position: relative;
                margin-bottom: .2rem;
                height: .56rem;
                padding: 0;
                font-size: .16rem;
                color: #495056;
                font-weight: 500;
                .column-tit-text
                    font-size: .15rem;
                    color: #303741;
                    padding: 0;
                    line-height: .56rem;
                    float left
                .small-time
                    font-size: .1rem;
                    line-height: .12rem;
                    color: #8f96a0;
                    vertical-align: top;
                    margin-top: .24rem;
                    float left
                    margin-left .1rem
        .service-list
            padding: 0 .2rem .16rem;
            margin-top: -.2rem;     
            height 2.21rem  
            .service-list-bg
                background: url('//cli-sta.guazistatic.com/c2c_wap/card@2x.419ced5daf91ee1560c34802dc24801c.png') no-repeat;
                background-size: 100% 100%;
                width: 100%;
                height 100%
                padding: .3rem 0 .07rem; 
                ul
                    a
                        color: #000;
                        text-decoration: none;
                        font-size: 100%;
                        vertical-align: baseline;
                        li
                            width: 33.333%;
                            float: left;
                            text-align: center;
                            padding-bottom: .22rem;
                            img 
                                width: .4rem;
                                height: .4rem;
                                display: inline-block;
                                margin-bottom: .1rem;
                                vertical-align: top;
                            p
                                font-size: .12rem;
                                color: #a86e1c;
                                line-height: .12rem; 

</style>