import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/Home";
import Detail from "@/views/detail/Detail";
import ChangeBrand from "@/views/brand/ChangeBrand";


Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        redirect: "/city/bj"
    },
    {
        path: "/detail/:id",
        name: "detail",
        component: Detail
    },
    {
        path: "/city/:cnm",
        name: "city",
        component: Home
    },
    {
        path: "/changeBrand",
        name: "changeBrand",
        component: ChangeBrand
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
