<template>
        <div class="no-data">
            <div class="img-wrap">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ8AAACHCAMAAAA/ZSwNAAAABGdBTUEAALGPC/xhBQAAAwBQTFRF5Ojv6Ory5+nx6ezx5+rv7/H02d7n297n2t/o5env5urw4eXs3N/p8vT38fL26Ozy+fr8+Pn75Ojv5ery2t/o4ubs2uDo7/P38PP38fT48PL27/L37/L37/P28PP38PP37/P38PP32t7o2t/o2t7n/f399/n72+Dp3eLq2t/o8fP25erw5Onv2t/n2t/o9ff52t/o8PT42t7o8PP38fT37/f36+/z6+3z3ODo3OLo8/T66Ozy2d7n8PP2+fr8+fr75eXu2+Dq29/p3ODp2d7n8PL28PL38PL38fP32+Do3OHp+fn78PL329/o6Ovw5Ovy4eXs9fb49vb+4OXr3uDr29/p2t/o29/o2t/o29/o7/L18PP37/L37/P38PT42+Dp+vv88PP22+Do+fr71tvm3OHq5erv29/o8fHx4ufu2t7o5Ofv8PP42+Dp5Oju8PL2/v7/7/L2////5enw5Onv2t7o7e/z9/j62+Do2t/o2t/n3uLq7vX7////8fX69fX16u3x2t/o3ODo6fH29Pb4////3uLr2t/o2+Dp/v7+2t7o6/P72t/o////////8fP3+/z9/v//7/T3////3eLp8PP35unv4eXt2t/n3uLr2+Dp/////v//2t/q8fX13+Ts/v//8vL4////8fP28/T37vP42d7n+fr77vD17vP1////8vX48PP17vD17vP28fP28PP429/o7vL1/////v7+/v7+AAAA9/n89ff52N3n+fn88fb88fP25uvz5Onv6+/18PL39vj62d7n7vH18PP18/X47fD16+/09fb57/P48PT56Ovx4eXs8fX57e/04+fv5urv7/H26u3y4OTs5+rx6+7z5Ofu6ezx4ubt9fn+3ODo9/n68fP4/Pz+9vr//v//+/z86e3z9PX429/o3OHp3+Tr+/v9+fv83uLq/P3+5eju+vz9+/v88fT3+Pr79fb58fT4+Pn78vT36/D2+/z9/v7++fr7/f3++fr89Pj99/v/+vv82N3m/f7+7/L2////sZhDjwAAALd0Uk5TWodqXPLsqcuY6n7sUP3n69/68vhn/r7DqG/v9OCU97zEmNvdieH7ujOjQfb0dnDjWEVr1vojYeNAKy/7lDzk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" alt="">
            </div> 
            <p>您还没有看车计划，快去挑选吧～</p> 
            <div class="login-btn-wrap">
                <button class="login-btn">去选车</button>
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
 .no-data
        position: relative;
        background-color: #fff;
        height: 100%;
        top: 0;
        padding-top: 1.9rem;
        .img-wrap
            text-align: center;
            img
                width: 1.355rem;
                height: 0.675rem;
        p
            font-family: "PingFangSC-Light";
            font-size: 0.12rem;
            color: #5F6670;
            letter-spacing: 0;
            line-height: 0.12rem;
            margin-top: 0.22rem;
            text-align: center;
        .login-btn-wrap
            margin-top: 0.16rem;
            text-align: center;
            .login-btn
                background: #22AC38;
                border-radius: 0.04rem;
                width: 1.5rem;
                height: 0.4rem;
                font-size: 0.15rem;
                color: #FFF;
                letter-spacing: 0;
                appearance: none;
                border: 0;
</style>