<template>
    <div class="searh-wrapper">
        <div class="search-btn" @click="showDialog" v-if="$store.state.showCom.show">
                <i class="iconfont search-icon">&#xe633;</i>
            搜索您想要的车
        </div>
        <div class="dialog" v-if="isShow">
            <a href="javascript:;" class="iconfont back" @click="backHandler">
            &#xe625;
            </a>
            <div class="form-list">
                <div class="box-size">
                    <div class="top-nav">
                    <input type="text" class="search-box" v-model="inputValue" @keyup.stop="keyupHandler($event)">
                    <a href="javascript:;" class="iconfont icon-close " v-if="isHasText" @click="clearInputValue">
                      &#xe67d;
                    </a>
                    </div>
                    
                </div>
                <a href="javascript:;" class="iconfont icon-search">
                   &#xe639;
                </a>
            </div>
            <div :class="{'search-result':true,active:isActive}">
                <ul class="row-list">
                    <li class="item-hitsory" v-for="(item,index) of historyData" :key="index">
                        <a href="javascript:void(0);" class="item-content">{{item}}</a>
                    </li>
                </ul>
                <a href="javascript:void(0);" :class="{'clear-history':true,active:isActive}" @click="deleteHistory">
                    清除历史记录
                </a>
            </div>
            <div class="blank"></div>
            <div class="search-hot">
                <h3>热销车系</h3>
                <ul class="lab-list">
                    <li v-for="(item,index) in hotList" :key="index">
                        <a href="javascript:;">{{item.name}}</a>
                    </li>
                </ul>
                <h3>猜你喜欢</h3>
                <ul class="seckill">
                  <li v-for="(value,key) in likeList" :key="key">
                      <a href="javascript:;">{{value.title}}</a>
                 </li>
                   
                </ul>
            </div>
        </div>
    </div>
 
</template>

<script>
import http from "../utils/http.js";
    export default {
        data(){
            return{
                isShow:false,
                isActive:false,
                inputValue:"",
                historyData:[],
                hotList:[],
                likeList:{}
            }
        },
        methods:{
            showDialog(){            
                console.log(); 
                this.isShow=true;
                this.$store.dispatch('showCom/changeShow',!this.isShow)
            http.get(`citylist/${this.$store.state.cityInfo.city.pinyin}/buy/?act=getHotTagByG3&num=6`)
            .then((res)=>{
                console.log(res,typeof res);
                this.hotList=res.data;
            })
            http.get(`citylist/${this.$store.state.cityInfo.city.pinyin}/buy/?act=getGuessYouLike`)
            .then((res)=>{
                console.log(res,typeof res);
                this.likeList=res.data;
            })
            },
            inputChange(){
                console.log("asdadasd");
                this.isInput=true
                console.log(this.isInput);
            },
            keyupHandler(e){
                if(this.inputValue&&!this.isHasText){
                    this.isHasText=true;
                }
                if(!this.inputValue) this.isHasText=false;
                 console.log("bbb");
                if(e.keyCode===13){
                    console.log("aaa");
                    if(!this.inputValue) return;
                    if(!localStorage.getItem("historyInfo")){
                        let obj={};
                        let arr=[];
                        arr.push(this.inputValue);
                        obj['data']=arr;
                        localStorage.setItem("historyInfo",JSON.stringify(obj))
                        this.historyData=obj['data'];
                        this.inputValue="";
                        this.isActive=true;
                    }else{
                            let obj=localStorage.getItem('historyInfo');
                            console.log(typeof obj);
                            obj=JSON.parse(obj);
                             console.log(typeof obj);
                            obj['data'].push(this.inputValue);
                            localStorage.setItem("historyInfo",JSON.stringify(obj))
                            this.historyData=obj['data'];
                            this.inputValue="";
                            this.isActive=true;
                    }
                   
                }
                
            },
            backHandler(){
                this.isShow=false;
                this.$store.dispatch('showCom/changeShow',!this.isShow)
            },
            deleteHistory(){
                localStorage.removeItem("historyInfo");
                this.historyData=[];
            },
            clearInputValue(){
                this.inputValue="";
            }
        },
        computed:{
             isHasHistory(){
                 return  !(this.historyData===[])
             },
             isHasText(){
                 return !(this.inputValue==="");
             }
        },
        mounted(){
            if(!localStorage.getItem("historyInfo")) return;
            let res=localStorage.getItem('historyInfo');
            res=JSON.parse(res);
            this.historyData=res['data'];
        }
    }
</script>

<style lang="stylus" scoped>
 .search-btn 
    display flex
    border-radius 0.15rem
    font-size 0.14rem
    text-align center
    padding-right 0.45rem
    flex 1
    color #bec5cf
    background-color #eff2f6
    align-items center
    .search-icon
        display block
        padding-left 0.45rem
        padding-right 0.05rem
.dialog
    position relative
    min-width 2.95rem
    width 100%
    height auto
    background-color #fff
    overflow  hidden
    .back
        position absolute
        top 0
        left 0
        width 0.44rem
        height 0.44rem
        text-indent -1
        line-height 0.44rem
        text-align center
        overflow hidden
        font-size 0.2rem
        color #9e9e9e
    .form-list
        .box-size
            padding: .07rem .47rem .07rem .44rem;
            width: 100%;
            box-sizing: border-box;
            display inline-block
            .top-nav
                position: relative;
                width: 100%;
                height: .28rem;
                line-height: .28rem;
                background-color: #fff;
                -webkit-border-radius: .03rem;
                border-radius: .03rem;
                .search-box
                    width: 2.8rem;
                    height: .28rem;
                    font-size: .12rem;
                    line-height: normal;
                    color: #252825;
                    border: 1px solid #eee;
                    box-sizing: border-box;
                    box-shadow: inset 0 0 0 999px #fff;
                .icon-close
                    position: absolute;
                    z-index 999
                    top: 0rem;
                    color:#ccc;
                    font-size 0.13rem
                    right: .09rem;
                    width: .13rem;
                    height: .13rem;
        .icon-search
            position: absolute;
            display inline-block
            top: 0;
            right: 0;
            width: .47rem;
            height: .44rem;
            padding 0.03rem 0.1rem 0 0.1rem
            background: none;
            border: none;
            font-size 0.24rem
            color #9e9e9e
     .active
        display block
.search-result
    padding-left: .15rem;
    background-color: #fff;
    display: none;
   
.item-content
    display: block;
    height: .43rem;
    line-height: .43rem;
    color: #8a8a8a;
    border-bottom: 1px solid #e6e6e6;
.clear-history
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    display: none;

.blank
    height: .07rem;
    background-color: #e5e5e5;
    position: relative;
    z-index: 1;
.search-hot 
    h3
        height: .3rem;
        padding-left: .15rem;
        font-weight: 400;
        line-height: .3rem;
        color: #252825;
        font-size: 1em;
    .lab-list,.seckill
            padding: 0 .15rem .1rem;
            background-color: #fff;
            width: 100%;
            overflow: hidden;
    .lab-list li,.seckill li
            float: left;
            width: 33.3%;
            margin-top: .1rem;
            padding: 0 .05rem;
            box-sizing: border-box;
     .lab-list li a,.seckill li a
            display: block;
            height: .34rem;
            font-size: .13rem;
            line-height: .34rem;
            color: #404040;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            background-color: #fff;
            border: 1px solid #e1e1e1;
            border-radius: .02rem;
            height: .3rem;
            line-height: .3rem;
</style>