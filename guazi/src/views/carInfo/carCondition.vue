<template>
    <div class="car-condition" :info="info">
        <p><span class="re-car-name">{{info.car_title}}</span></p>
        <p><span class="re-tit">检测时间：2020.10.2</span></p>
        <p><span class="re-tit">评估结论：经检测，该车非火烧车；非泡水车；非调表车；关键事故部件中未发现变形异常项；无钣金痕迹；无焊接、切割动作。发动机舱内部无拆卸拆解痕迹；核心部件无更换记录；无漏油痕迹。车辆外观有轻微划痕刮蹭；详细结果请查看检测报告。</span></p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            info:{}
        }
    },
    created(){
        this.info=this.$store.state.car
        console.log(this.info)
    }
}
</script>
<style lang="stylus" scoped>
.car-condition
    position: relative;
    top: .45rem;
    padding: .13rem .15rem .12rem;
    background-color: #fff;
    margin-bottom: .51rem;
    p
        position: relative;
        line-height: .22rem;
        .re-car-name
            color: #495056;
            font-size: .15rem;
            line-height .22rem
        .re-tit
            font-size: .14rem;
            color: #757f89;

</style>