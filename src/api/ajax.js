// 此文件是对axios进行二次封装，额外的让axios发请求的时候具有其他的功能
/* 
    1. 配置基础路径和超时限制
    2. 添加进度条信息  nprogress
    3. 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
    4. 统一处理请求错误, 具体请求也可以选择处理或不处理
*/
import axios from 'axios'
// 引入nprogress相关的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import storageUtils from '@/utils/storageUtils'

// 以后只要是对axios二次封装，不会再axios身上直接去封装，而是创建一个新的axios实例进行封装

// 1. 配置基础路径和超时限制
// axios.create()创建一个新的和axios具有同样功能的一个实例
const service = axios.create({
    baseURL: '/api', //基础路径，当前项目当中所有接口路径的公共路径
    timeout: 10000, //超时事件，当ajax请求超过设置的就会报错
    // headers: {'X-Custom-Header': 'foobar'}
})

// 2. 添加进度条信息  nprogress
// 如果相对axios添加额外的功能或者是给请求头添加额外的信息，必然用到axios的请求拦截器和相应拦截器
// 添加请求拦截器，添加请求头和额外的功能
service.interceptors.request.use(function (config) {
    // config其实就是请求报文，需要return回去
    const token = storageUtils.getToken()
    const tempId = storageUtils.getTempId()
    if (token) {
        config.headers.Authorization = 'Bearer ' + token
    } else if (tempId) {
        config.headers.userTempId = tempId;
    }
    NProgress.start() //开启进度条
    return config;
}, function (error) { //请求拦截器失败的回调一般不写，失败了就没有下文了
    return Promise.reject(error);
});

// 3. 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
// 4. 统一处理请求错误, 具体请求也可以选择处理或不处理
// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // response就是相应的报文
    NProgress.done() //关闭进度条
    return response.data; //返回data数据
}, function (error) {
    NProgress.done() //关闭进度条
    alert('ajax请求失败，错误原因：' + error.message || '未知错误');
    // 统一处理完成之后，这个错误可以让后面继续处理，也可以不让后面继续处理
    // return Promise.reject(error);
    // 也可以不让后面继续处理，终端promise链
    return new Promise(() => { }) //返回的是pending状态的promise，代表中断promise链
});

export default service //把封装好的axios实例暴露出去