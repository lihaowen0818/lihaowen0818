import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由信息数组
const routes = [
    //登录页
    {
        path: '/',
        component: () => import('@v/login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
