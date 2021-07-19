/* 
    axios({
        url:'localhost:8080/user?name=1',
        method:'POST',
        params:{ //query参数
            name:1
        },
        data:{ //请求体参数
        }
    })
*/

// 接口请求函数
import request from './ajax'

// 2. 登录
export const reqLogin = (account,password) => {
    return request({
        url:'/user/passport/login',
        method: 'POST',
        data:{account,password}
    })
}

// 3. 请求首页三级分类
export const reqCategoryList = ()=>{
    return request({
        url:'/product/getBaseCategoryList',
        method: 'GET',
    })
}