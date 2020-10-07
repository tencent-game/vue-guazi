import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import strictElectionStore from '../views/store/strictElectionStore.vue'
import stores from '../views/store/stores.vue'
import notFound from '../components/store/notFound'
import homePage from '../views/home/homePage'
import search from '../components/home/search'
import storeAllCar from '../components/store/storeAllCar.vue'
import recommendForYou from '../components/recommend/recommendForYou'
import store from '../store/index'
import carInfo from '../views/carInfo/carInfo'
import vehicleSource from '../views/carInfo/vehicleSource'
import carCondition from '../views/carInfo/carCondition'
import imageText from '../views/carInfo/imageText'
import vehicleRecommend from '../views/carInfo/vehicleRecommend'


console.log(store.state.domain)
const routes =[
    {
        path:'/',
        name:'home',
        redirect:'/bj',
        // component:homePage
    },
    {
        path:'/bj',
        name:'bj',
        component:homePage
    },
    /* {
        path:`/${store.state.domain}`,
        name:store.state.domain,
        component:homePage

    }, */
    {
        path:'/store/',
        name:'store',
        // redirect:'store',
        component:stores,
        children:[
            {
                path:'',
                component:strictElectionStore
            },
            {
                path:'/storeAllCar',
                name:'storeAllCar',
                // redirect:'/store/storeAllCar',
                component:storeAllCar,
            },
            {   
                path:'/carInfo/:id',
                name:'carInfo',
                component:carInfo,
                // redirect:'/vehicleSource',
                children:[
                    {
                        path:'',
                        name:'carInfo',
                        component:vehicleSource
                    },
                    {

                        path:'/vehicleSource',
                        name:'vehicleSource',
                        component:vehicleSource,
                        component: () => import(/* webpackChunkName: "intheaters" */ '../views/carInfo/vehicleSource')
                    },
                    {
                        path:'/carCondition',
                        name:'carCondition',
                        component:carCondition
                    },
                    {
                        path:'/imageText',
                        name:'imageText',
                        component:imageText
                    },
                    {
                        path:'/vehicleRecommend',
                        name:'vehicleRecommend',
                        component:vehicleRecommend
                    }
                ]
            }
        ]
    },
    {
        path:'/search/',
        name:'search',
        component:search
    },
    {
        path:'/recommendForYou/',
        name:'recommendForYou',
        component:recommendForYou
    },



    {
        path:'/*',
        name:'404',
        component:notFound
    }
    
]
const router =new VueRouter({
    mode:'history',
    routes
})

export default router