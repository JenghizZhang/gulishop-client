import { getUserInfo } from '@/api'
import storageUtils from '@/utils/storageUtils'
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
Vue.use(VueRouter)

// VueRouter是路由器对象的构造函数
// this.$router.push 调用的是路由器对象的方法，这个方法并不是路由器实例的方法而是原型上的方法
// this.$router是实例化对象，是VueRouter的实例化对象
// 实例化对象原型的方法__proto__就是VueRouter的显示原型protot的方法

const originPush = VueRouter.prototype.push //将原有的push方法的地址保存

// 让原型的push指向另一个函数
VueRouter.prototype.push = function (loaction, onResolve = () => { }, onReject = () => { }) {
    //loaction就是我们调用 this.$router.push 所传递过来的对象或字符串
    //实例调用，需要用call
    return originPush.call(this, loaction, onResolve, onReject)
}

const originReplace = VueRouter.prototype.replace //将原有的push方法的地址保存

// 让原型的push指向另一个函数
VueRouter.prototype.replace = function (loaction, onResolve = () => { }, onReject = () => { }) {
    //loaction就是我们调用 this.$router.push 所传递过来的对象或字符串
    //实例调用，需要用call
    return originReplace.call(this, loaction, onResolve, onReject)
}

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

// 注册全局导航守卫，用来对token校验（根据token获取用户信息）
router.beforeEach(async (to, from, next) => {
    //第一步，守卫拦截获取token 
    let { token } = storageUtils.getUser()

    if (token) {
        // 如果token存在，需要去验证是否有效
        const result = await getUserInfo()
        // console.log(result);
        if (result.data) {
            next()
        } else {
            // token过期，把过期token清理，重新登录
            storageUtils.removeUser()
            alert("登录已经过期，请重新登录");
            next('/login')
        }
    } else {
        // 用户没有登录
        // 跳转去登录
        next()
    }
})

export default router