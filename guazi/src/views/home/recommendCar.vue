<template>
    <div class="recommendCar">
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
import http from '../../utils/http'

export default {
    data(){
        return {
            recommendCarList:[]
        }
    },
    mounted(){
        this.loadData()
    },
    methods:{
        async loadData(){
            // let result =await http.get('https://m.guazi.com/ajax.php?module=getMoreRecommendCar&city_id=12&page=2')
            // console.log(result)
            // this.recommendCarList=[
            //     ...this.recommendCarList,
            //     ...result.data
            // ]
            const data = await http.get("/aps/ajax.php", {
            module: "getMoreRecommendCar",
            
          })
          console.log(data)
        }
    }
}
</script>