import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

Vue.use(VueRouter)

// VueRouter是路由器对象的构造函数
// this.$router.push 调用的是路由器对象的方法，这个方法并不是路由器实例的方法而是原型上的方法
// this.$router是实例化对象，是VueRouter的实例化对象
// 实例化对象原型的方法__proto__就是VueRouter的显示原型protot的方法

const originPush = VueRouter.prototype.push //将原有的push方法的地址保存

// 让原型的push指向另一个函数
VueRouter.prototype.push = function(loaction,onResolve=()=>{},onReject=()=>{}){
    //loaction就是我们调用 this.$router.push 所传递过来的对象或字符串
    //实例调用，需要用call
    return originPush.call(this,loaction,onResolve,onReject)
}

const originReplace = VueRouter.prototype.replace //将原有的push方法的地址保存

// 让原型的push指向另一个函数
VueRouter.prototype.replace = function(loaction,onResolve=()=>{},onReject=()=>{}){
    //loaction就是我们调用 this.$router.push 所传递过来的对象或字符串
    //实例调用，需要用call
    return originReplace.call(this,loaction,onResolve,onReject)
}

const router = new VueRouter({
    routes: [
        {
            path:'/home',
            component: Home,
        },
        {
            path:'/login',
            component: Login,
            meta:{
                isHiddenFooter:true
            }
        },
        {
            path:'/register',
            component: Register,
            meta:{
                isHiddenFooter:true
            }
        },
        {
            path:'/search/:keyword?',
            component: Search,
            name:'search',
            props:true
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

export default router