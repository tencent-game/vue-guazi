import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: 'Index',
        component: () => import(/* webpackChunkName: "Index" */ "@/views/ViewIndex.vue"),
    },
    {
        path: '/usercenter',
        name: 'UserCenter',
        component: () => import(/* webpackChunkName:"UserCenter" */"@/views/header/HeaderUserCenter.vue"),
    },
    {
        path: '/login',
        name: 'UserLogin',
        component: () => import(/* webpackChunkName:"UserLogin" */"@/views/header/HeaderUserLogin.vue")
    },
    {
        path:'',
        name: 'UserCente',
        component: () => import(/* webpackChunkName:"UserCenterIndex" */"@/views/header/HeaderUserCenter.vue")

    },
    {
        path:'/appoint',
        name:'Appoint',
        component:()=>import(/* webpackChunkName:"Appoint" */"@/views/usercenter/Appoint.vue"),
        redirect:'/plan',
        children:[
            {
                path:'/plan',
                name:'Plan',
                component:()=>import(/* webpackChunkName:"AppointPlan" */"@/views/usercenter/AppointPlan.vue")
            },
            {
                path:'/history',
                name:'History',
                component:()=>import(/* webpackChunkName:"AppointHistory" */"@/views/usercenter/AppointHistory.vue")
            }
        ]
    },
    {
        path:'/buycar',
        name:'buycar',
        component:()=>import(/* webpackChunkName:"BuyCar" */"@/views/usercenter/BuyCar.vue"),
    },
    {
        path:'/sellcar',
        name:'sellcar',
        component:()=>import(/* webpackChunkName:"SellCar" */"@/views/usercenter/SellCar.vue"),
    },
    {
        path:'/feedback',
        name:'feedback',
        component:()=>import(/* webpackChunkName:"FeedBack" */"@/views/usercenter/FeedBack.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
