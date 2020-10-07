<template>
      <div class="home_header">
          <a  @click="clickIt">{{this.$store.state.name}}<van-icon name='arrow-down' :class="{rotate:bool}"/></a>
          
          <div class="search" @click="search">
              <van-icon name="search" size=.15rem  />搜索您要的车
          </div>
          <van-icon class="right" name="service"  size=.2rem color='#fff' />
          <van-icon class="right" name="manager" size=.2rem color='#fff' />
      </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
    
    data(){
        return {
           bool:false
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        clickIt(city){
            
           this.bool=!this.bool
           let bool = this.bool
        //    console.log(bool)
           this.$store.dispatch('changeCityName',{bool})
           console.log(this.$store.state.bool)
            // this.$emit('update:show', true)
            console.log(this.$store.state.name)
        },
        search(){
            this.$router.push('/search')
        }
    },
    
}
</script>

<style lang="stylus" scoped>
    .home_header
        width 100%
        height .32rem
        padding-right .15rem
        position: absolute;
        top: .06rem;
        left: 0;
        z-index: 88;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 0;
        a
            height 100%
            color: #fff;
            padding-left: .16rem;
            padding-right: .15rem;
            font-weight: 300;
            color: #303741;
            line-height: .32rem;
            border-right: none;
            position: relative;
            float: left;
        
        .search
            flex: 1;
            height: .32rem;
            font-size: .14rem;
            color: #bec5cf;
            text-align: center;
            line-height: .32rem;
            background-color: #fff;
            border-radius: .15rem; 
        .right
            padding: 0 0 0 .14rem;
            line-height .32rem
            
</style>

<style lang="stylus" scoped>
    .rotate
        transform: rotate(180deg);
        transition  all 1s

    .active
        display block
</style>