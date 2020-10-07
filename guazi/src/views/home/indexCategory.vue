<template>
    
    <div class="nav-page-item">
        
        <div>   
        <ul>
            <router-link 
            to='/store'
            tag='li'
            v-for="item in navPage" 
            :key="item.id"
            >
                <a href="#" :style="{backgroundImage:`url(${item.src})`}">
                    
                    <span>{{item.title}}</span>
                </a>
                
            </router-link>
            
        </ul>
        <ul>
            <li v-for="prop in navPage1" :key="prop.id"><a href="#" :style="{backgroundImage:`url(${prop.src})`}">
                    
                    <span>{{prop.title}}</span>
                </a></li>
        </ul>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return {
            
            navPage:[
                {
                    id:'001',
                    src:'https://image.guazistatic.com/gz01180305/12/20/96b37dbb3b487c72f79aafaed490a97a.png@base@tag=imgScale',
                    title:'二手车',
                },
                {
                    id:'002',
                    src:'https://image.guazistatic.com/gz01180305/12/21/12fb30f1f90191d85b8b363b77fb2f88.png@base@tag=imgScale',title:'严选车'
                },
                {
                    id:'003',
                    src:'https://image1.guazistatic.com/qn19043010522775b65e5487c657695d90d46d3c7f5758.png?imageView2/2',
                    title:'全国购'
                },
                {
                    id:'004',
                    src:'https://image.guazistatic.com/gz01180305/12/23/1b7bce567e7c115d1293743a7cb70e6d.png@base@tag=imgScale',
                    title:'新车'
                },
                {
                    id:'005',
                    src:'https://image1.guazistatic.com/qn18112619164920a0eed1acce0c37ac891794bd545749.png?imageView2/2',
                    title:'限时秒杀'
                },
                {
                    id:'006',
                    src:'https://image.guazistatic.com/gz01180305/12/22/b666429cc4ff1bce39b0def2ae765840.png@base@tag=imgScale',
                    title:'免费卖车',
                },
                {
                    id:'007',
                    src:'https://image.guazistatic.com/gz01180305/12/24/a28caebe878c98a38209d392465550bb.png@base@tag=imgScale',
                    title:'快速卖车',
                },
                {
                    id:'008',
                    src:'https://image.guazistatic.com/gz01180305/12/26/2973354ac9733fecb20ecb7c8cd23e86.png@base@tag=imgScale',
                    title:'估价',
                },
                {
                    id:'009',
                    src:'https://image1.guazistatic.com/qn191220195224ebca878cc5265f75a92342f217ef86d0.png?imageView2/2',
                    title:'服务保障',
                },
                {
                    id:'010',
                    src:'https://image1.guazistatic.com/qn181126180859537ea4799f54201331674eba5cb8ef1c.png?imageView2/2',
                    title:'严选店',
                },
                
            ],
            navPage1:[
                {
                    id:'011',
                    src:'https://image1.guazistatic.com/qn1910221630042fa217e753b00d2e03c8a7b3b49d3d6a.png?imageView2/2',
                    title:'养车',
                },
                {
                    id:"012",
                    src:'https://image1.guazistatic.com/qn181126181048b6ac120b3db3c5f1b4450a2ba7c139b0.png?imageView2/2',
                    title:'查成交'
                },
                {
                    id:"013",
                    src:'https://image1.guazistatic.com/qn1811261811252aa3504b910d552427e7d3a8d4ae8df5.png?imageView2/2',
                    title:'申请分期'
                },
                {
                    id:"014",
                    src:'https://image1.guazistatic.com/qn18101815452846c77b3896c38126f8f9a16bc4c61202.png?imageView2/2',
                    title:'百科'
                },
                {
                    id:'015',
                    src:'https://image1.guazistatic.com/qn1811261823183fe91ea525c6667ae9e0c69886a389aa.png?imageView2/2',
                    title:'热销排行',
                },
                {
                    id:'016',
                    src:'https://image1.guazistatic.com/qn18101815352230ebbcae09007293d82e89739382e1ce.png?imageView2/2',
                    title:'准新车',
                },
                {
                    id:'017',
                    src:'https://image1.guazistatic.com/qn18101814505887ea245e7227ba74150c331f3809a4ee.png?imageView2/2',
                    title:'热销suv',
                },
                {
                    id:'018',
                    src:'https://image1.guazistatic.com/qn190517142033a0aae27b77167ad21369cf17ca67b896.jpg?imageView2/2',
                    title:'快速找车',
                },
                {
                    id:'019',
                    src:'https://image1.guazistatic.com/qn181018153817d588fecd356871102a4bede5f0517565.png?imageView2/2',
                    title:'降价急售',
                },
                {
                    id:'020',
                    src:'https://image1.guazistatic.com/qn1810181539182a7c66ff9eef67e42ae5c40335bf44db.png?imageView2/2',
                    title:'今日超值'
                }
            ]
            
        }
    },
  /* methods:{
      clickIt(){
          window.location.href='/public/store/store.index'
      }
  } */
}
</script>

<style lang='stylus' scoped>
    .nav-page-item
        width 100%
        height 1.8rem
        padding .04rem .045rem .2rem;
        background-color #fff;
        overflow auto
        div
            width 200%
            height 100%
        ul
            width 50%
            height 100%
            float left
            
            li
                float left;
                width 20%;
                font-size .12rem;
                font-weight 300;
                line-height .12rem;
                text-align center;
                a
                    display: block;
                    width 100%
                    height 100%
                    padding-top: .68rem;
                    background-repeat: no-repeat;
                    background-position: center .16rem;
                    background-size: .42rem auto;
                    position: relative;
                
                
</style>