<template>
  <div class="detail-content">
    <div class="product-head-b">
      <div class="price-box-b">
        <div class="normal-price-tip">全款价</div>
        <div class="normal-price-b">{{ carDetail.price_text }}</div>
      </div>
    </div>
    <!--描述-->
    <div class="car-head-box">
      <div class="normal-car-title">{{ carDetail.car_title }}</div>
      <div class="normal-car-tag">
        <span>{{ carDetail.sale_type }}过户</span>
      </div>
    </div>
    <!--首付-->
    <div class="loanbox-new-inner">
      <span class="loanbox-tit orange">分期</span>
      <span class="loanbox-con">{{ carDetail.first_pay }}开回家</span>
    </div>
    <!--服务保证-->
    <div class="serverbox">
      <a href="/sjz/detailFaq?act=serviceInfo&amp;clue_id=101422738" class="column-head "
         data-gzlog="tracking_type=click&amp;eventid=92204425">
        <div class="column-title clearfix">
          <span class="column-tit-text">服务保障</span>
          <span class="small-time">服务费不超过车价9%，欢迎联系咨询</span>
        </div>
      </a>
      <div class="service-list">
        <div class="service-list-bg clearfix">
          <ul class="clearfix">
            <a href="/sjz/detailFaq?act=serviceInfo&amp;clue_id=101422738#tui_7"
               data-gzlog="tracking_type=click&amp;eventid=901545647592">
              <li>
                <img src="https://sta.guazistatic.com/static/c2c/app/client/retreat@3x.png" alt="">
                <p>7天无理由退车</p>
              </li>
            </a>
            <a href="/sjz/detailFaq?act=serviceInfo&amp;clue_id=101422738#huan_7"
               data-gzlog="tracking_type=click&amp;eventid=901545647592">
              <li>
                <img src="https://image1.guazistatic.com/qn2009171202433f082c964212dc5f13010af1d12fe605.png" alt="">
                <p>7天无理由换车</p>
              </li>
            </a>
            <a href="/sjz/detailFaq?act=serviceInfo&amp;clue_id=101422738#xiu_30"
               data-gzlog="tracking_type=click&amp;eventid=901545647594">
              <li>
                <img src="https://image.guazistatic.com/gz01191203/11/13/8f19e91f680d52cc3767fb0646e8a096.png" alt="">
                <p>30天保修</p>
              </li>
            </a>
            <a href="/sjz/detailFaq?act=serviceInfo&amp;clue_id=101422738#warranty"
               data-gzlog="tracking_type=click&amp;eventid=92883418">
              <li>
                <img src="https://sta.guazistatic.com/static/c2c/app/client/warranty@3x.png" alt="">
                <p>1年售后</p>
              </li>
            </a>
            <a href="/sjz/detailFaq?act=serviceInfo&amp;clue_id=101422738#car_maintenance"
               data-gzlog="tracking_type=click&amp;eventid=92939125">
              <li>
                <img src="https://sta.guazistatic.com/static/c2c/app/client/car_maintenance@3x.png" alt="">
                <p>专业整备</p>
              </li>
            </a>
            <a href="/sjz/detailFaq?act=serviceInfo&amp;clue_id=101422738#agency_transfer"
               data-gzlog="tracking_type=click&amp;eventid=92962049">
              <li>
                <img src="https://sta.guazistatic.com/static/c2c/app/client/agency_transfer@3x.png" alt="">
                <p>过户服务</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <!--基本信息-->
    <div class="column base-info" data-widget="app/che/c2c/detail_page_v2.js#showNotice">
      <a href="javascript:;" class="column-head">
        <div class="column-title">基本信息</div>
      </a>
      <ul class="mod-base showNotice">
        <li>
          <span>表显里程</span>
          <p>{{ carDetail.road_haul_text }}</p>
        </li>
        <li>
          <span>变速箱</span>
          <p>自动</p>
        </li>
        <li>
          <span>排量</span>
          <p>1.6T</p>
        </li>
        <li class="j-open-im" data-imaction="askBuyingMode" data-impos="wap_detail_buying_mode"
            data-gzlog="tracking_type=click&amp;eventid=901545647569"
            data-beseen="tracking_type=beseen&amp;eventid=901545647570">
          <span>购车方式</span>
          <p class="clickbtn-green">查购车流程
            <van-icon name="arrow"/>
          </p>
        </li>
        <li>
          <span>上牌时间</span>
          <p>
            <img src="https://image1.guazistatic.com/qn200416145036b7626ada318c4ef41bac3d2e32175aba.jpg"
                 style="height: 0.16rem;">
          </p>
        </li>
        <li class="j-open-im" data-imaction="consultQuestion" data-impos="consult_question_37"
            data-gzlog="tracking_type=click&amp;eventid=901545643794"
            data-beseen="tracking_type=beseen&amp;eventid=901545643794">
          <span>出险情况</span>
          <p class="clickbtn-green">查保养记录
            <van-icon name="arrow"/>
          </p>
        </li>
        <li>
          <span>新车含税价</span>
          <p>{{ carDetail.price_text }}</p>
        </li>
      </ul>
      <div class="btn-check">
        <a href="javaScript:;" data-gzlog="tracking_type=click&amp;eventid=1112123400000005" class="j-show-second-conf">查看车辆详细信息</a>
      </div>
    </div>
    <!--车主-->
    <div class="diverman-say">
      <a href="javascript:;" class="column-head">
        <div class="column-title">车主介绍</div>
      </a>
      <div class="diverman">
        <div class="pgs-con">
          <div class="pgs-photo">
            <img src="//sta.guazistatic.com/static/c2c/wap/man.png" alt="车主焦先生">
          </div>
          <a class="ask-car j-open-im js-jrtt-upload" data-impos="wap_detail_zx_car" href="javascript:void(0);"
             data-gzlog="tracking_type=click&amp;eventid=0220050000099057&amp;carid=101422738&amp;tel_400=4000697613">咨询看车</a>
          <span>车主焦先生</span></div>
      </div>
      <div class="prob-list">
        <li><a href="javascript:;">多功能方向盘</a></li>
        <li><a href="javascript:;">倒车雷达</a></li>
      </div>
    </div>
    <!--复检报告-->
    <div class="column report">
      <div class="report-page">
        <a href="javaScript:;" class="column-head j-show-report">
          <div class="column-title">
            复检报告
          </div>
        </a>
        <div class="rz-bg">
          <img src="../../../src/assets/img/zhijian.jpg" alt="" class="icon-rz">
          <p class="prominent-title">259项专业检测</p>
          <p class="pro-cen">瓜子要求认证二手车源必须达到以下标准</p>
          <ul class="pro-list">
            <li>
              <img src="../../../src/assets/img/01.jpg" alt="">
              <p>无重大事故</p>
            </li>
            <li>
              <img src="../../../src/assets/img/02.jpg" alt="">
              <p>无火烧事故</p>
            </li>
            <li>
              <img src="../../../src/assets/img/03.jpg" alt="">
              <p>无泡水事故</p>
            </li>
          </ul>
        </div>
      </div>
      <img src="../../../src/assets/img/guzahng.jpg" alt="">
      <div class="btn-check j-show-report" id="report-detail"
           data-gzlog="tracking_type=click&amp;eventid=1112123400999913"><a href="javaScript:;">查看详细检测报告</a></div>
    </div>
    <!--常见问题-->
    <div class="column problems" id="faq-column-head">
      <div class="column-head faq-column-head">
        <div class="column-title">常见问题</div>
      </div>
      <ul class="prob-list clearfix">
        <li><a href="javaScript:;" data-gzlog="tracking_type=click&amp;eventid=1112123400000006" class="j-show-faq">车况真实吗</a>
        </li>
        <li><a href="javaScript:;" data-gzlog="tracking_type=click&amp;eventid=1112123400000007"
               class="j-show-faq">可否贷款</a></li>
        <li><a href="javaScript:;" data-gzlog="tracking_type=click&amp;eventid=1112123400000008" class="j-show-faq">牌照能过户吗</a>
        </li>
        <li><a href="javaScript:;" data-gzlog="tracking_type=click&amp;eventid=1112123400000009" class="j-show-faq"
               data-scrollposition="2">车辆怎么过户</a></li>

        <li><a href="javaScript:;" data-gzlog="tracking_type=click&amp;eventid=1112123400000010" class="j-show-faq"
               data-scrollposition="1">保险怎么办</a></li>

        <li><a href="javaScript:;" data-gzlog="tracking_type=click&amp;eventid=1112123400000011" class="j-show-faq"
               data-scrollposition="1">交易注意事项</a></li>
      </ul>
    </div>
    <!--推荐-->
    <CarCon :carList="likeCarList"></CarCon>
  </div>
</template>

<script>
import http from "@/utils/http";
import CarCon from "@/components/CarList/CarCon";

export default {
  name: "DetailContent",
  components:{
    CarCon
  },
  data() {
    return {
      carDetail: {},
      likeCarList: [],
      id:this.$route.params.id
    }
  },
  async mounted() {
    let result = await http.get("/car/clientUc/Recommend/getCarInfoByClueId?clue_id=101422738", {
      clue_id: this.$route.params.id
    })
    this.carDetail = {...this.carDetail, ...result.data[0]}
    let likeCar = await http.get("/car/clientUc/Recommend/getRecommendCarListByClueId", {
      clue_id: this.$route.params.id
    })
    let data = likeCar.data
    console.log(data)
    this.likeCarList = [...this.likeCarList, ...data]
  },
}
</script>

<style lang="stylus" scoped>
.detail-content
  overflow-y scroll
.product-head-b
  padding .1rem .1rem 0
  color #303741

  .price-box-b
    padding-left .1rem

    .normal-price-tip
      font-size .12rem
      height .144rem
      line-height .144rem
      transform scale(.833)
      transform-origin 0 center

    .normal-price-b
      font-size .21rem
      font-weight 700
      height .24rem
      line-height .24rem
      display flex
      align-items center
      padding-top .03rem


/*名称*/
.car-head-box
  padding .07rem .2rem 0
  background #ffffff

  .normal-car-title
    line-height: .2rem;
    font-size: .14rem;
    color: #303741;

  .normal-car-tag
    display inline-block
    height .18rem
    line-height .18rem
    font-size .12rem
    transform scale(.833)
    transform-origin 0 center
    margin-top .06rem

    span
      color #8f96a0
      background #eff2f6
      border-radius .01rem
      padding .025rem .04rem
      margin-right .04rem

/*分期*/
.loanbox-new-inner
  height .44rem
  padding 0 .2rem 0 .2rem
  font-size .12rem
  line-height .44rem

  .loanbox-tit
    color #ff7147
    margin-right .14rem

/*服务*/
.serverbox
  border-top .06rem rgba(117, 127, 137, .3) solid
  border-bottom .06rem rgba(117, 127, 137, .3) solid
  height 2.90rem

  .column-head
    padding 0 .2rem
    display block
    color #000
    text-decoration none
    font-size 100%
    vertical-align baseline

    .column-tit-text
      font-size .15rem
      color #303741
      line-height .56rem

    .small-time
      font-size .1rem
      line-height .56rem
      color #8f96a0
      vertical-align top
      margin-top .24rem
      padding-left .12rem

  .service-list
    height 2.20rem
    padding: 0 .2rem .16rem;

    .service-list-bg
      height 2.04rem
      background: url("https://cli-sta.guazistatic.com/c2c_wap/card@2x.419ced5daf91ee1560c34802dc24801c.png") no-repeat;
      background-size: 100% 100%;
      width: 100%;
      padding: .3rem 0 .07rem;

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

/*基本信息*/
.base-info
  background-color: #fff;
  border-bottom .06rem rgba(117, 127, 137, .3) solid
  padding: .13rem 0 0 .2rem;
  height 2.76rem

  a
    text-decoration: none;
    font-size: 100%;
    vertical-align: baseline;

    .column-title
      font-size: .16rem;
      color: #495056;
      font-weight: 500;

  .mod-base
    width: 100%;
    overflow: hidden;
    padding-top: .1rem;
    margin-bottom: .12rem;

    li
      width: 33.33%;
      float: left;
      text-align: left;
      margin-bottom: .09rem;

      span
        font-size: .12rem;
        color: #abafb3;

      p
        font-size: .15rem;
        color: #757f89;

      .clickbtn-green
        height .22rem
        color: #22ac38;
        position: relative;
        line-height .22rem

  .btn-check
    padding-bottom: .1rem;
    display: block;
    width: 1.8rem;
    margin: 0 auto .15rem;

    a
      display: block;
      color: #757f89;
      width: 100%;
      height .34rem
      border 1px solid #abafb3
      border-radius: .02rem;
      text-align: center;
      font-size: .14rem;
      line-height: .34rem;
      position: relative;


/*车主*/
.diverman-say
  height 1.62rem
  background: #fff;
  padding: .13rem 0 .1rem;
  border-bottom .06rem rgba(117, 127, 137, .3) solid

  a
    text-decoration: none;
    font-size: 100%;
    vertical-align: baseline;

    .column-title
      font-size: .16rem;
      color: #495056;
      font-weight: 500;
      padding-left: .2rem;

  .diverman
    margin: .14rem 0 .01rem;

    .pgs-con
      position relative
      box-sizing: border-box;
      padding: .03rem 0 0 .8rem;
      height .5rem

      .pgs-photo
        position: absolute;
        left: .15rem;
        top: -.03rem;

        img
          width: .5rem;
          height: .5rem;
          border-radius: 50%;

      a
        width: .74rem;
        height: .26rem;
        text-align: center;
        color: #22ac38;
        line-height: .26rem;
        border: 1px solid #38b44c;
        display: inline-block;
        border-radius: 2px;
        -webkit-border-radius: 2px;
        font-size: .14rem;
        position: absolute;
        right: .28rem;
        top: .12rem;

      span
        display: block;
        line-height: .21rem;
        color: #757f89;
        font-size: .16rem;

  .prob-list
    width: 100%;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: .12rem .15rem 0;

    li
      padding: 0 .06rem .06rem 0;
      display: block;
      float: left;
      width: 33.33%;
      box-sizing: border-box;

      a
        display: block;
        width: 100%;
        font-size: .13rem;
        color: #757f89;
        text-align: center;
        line-height: .24rem;
        height: .24rem;
        background-color: #f3f4f8;
        border: 1px solid #f3f4f8;
        overflow: hidden;

/*复检报告*/
.report
  background-color: #fff;
  border-bottom .06rem rgba(117, 127, 137, .3) solid
  padding-bottom: .16rem;

  .column-head
    height: .48rem;
    line-height: .48rem;
    position relative

    .column-title
      height: .48rem;
      font-size: .16rem;
      color: #495056;
      font-weight: 500;
      padding-left: .2rem;

  .rz-bg
    padding: .26rem 0 .2rem;
    background: url("https://cli-sta.guazistatic.com/c2c_wap/re-bg.7254fc9a03a28ee5392e71a1c2c6362e.jpg") no-repeat;
    background-size: 100% 100%;
    margin: 0 .15rem;

    .icon-rz
      display: block;
      margin: 0 auto;
      width: .9rem;
      height: .9rem;
      background-position: -2.12rem 0;

    .prominent-title
      font-size: .24rem;
      color: #38b44c;
      text-align: center;
      font-weight: 500;
      margin-top: .02rem;

    .pro-cen
      text-align: center;
      font-size: .14rem;
      color: #757f89;
      margin-top: .04rem;

    .pro-list
      text-align center

      li
        display: inline-block;
        margin: 0 .1rem

        img
          width: .36rem;
          height: .36rem;
          display: block;
          margin: .21rem auto .05rem;

        p
          text-align: center;
          color: #757f89;
          font-size: .12rem

  img
    width 100%

  .btn-check
    margin-top: .2rem;
    margin-bottom: 0;
    display: block;
    width: 1.8rem;
    margin: 0 auto .15rem;

    a
      display: block;
      color: #757f89;
      width: 100%;
      border 1px solid #757f89
      border-radius: .02rem;
      text-align: center;
      font-size: .14rem;
      line-height: .34rem;
      position: relative;

/*常见问题*/
.problems
  background-color: #fff;
  border-bottom .06rem rgba(117, 127, 137, .3) solid
  padding: .12rem 0 .1rem;

  .column-head
    display: block;

    .column-title
      font-size: .16rem;
      color: #495056;
      font-weight: 500;
      padding-left: .2rem;

  .prob-list
    width: 100%;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: .12rem .15rem 0;

    li
      padding: 0 .06rem .06rem 0;
      display: block;
      float: left;
      width: 33.33%;
      box-sizing: border-box;

      a
        display: block;
        width: 100%;
        font-size: .13rem;
        color: #757f89;
        text-align: center;
        line-height: .24rem;
        height: .24rem;
        background-color: #f3f4f8;
        border: 1px solid #f3f4f8;
        overflow: hidden;

</style>