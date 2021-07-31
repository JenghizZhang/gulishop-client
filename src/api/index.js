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
import mockAjax from './mockAjax'

// 2. 登录
export const reqLogin = ({ account, password }) => {
    return request({
        url: '/user/passport/login',
        method: 'POST',
        data: { account, password }
    })
}

// 3. 请求首页三级分类
export const reqCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'GET',
    })
}

// 4. 搜索商品
export const reqSearchList = (searchParams = {}) => {
    return request({
        url: '/list',
        method: 'POST',
        data: searchParams //searchParams是用户搜索的参数，这个参数是用户再发请求的时候传递的
    })
}

// 5. 获取商品详情
export const reqDetailInfo = (skuId) => {
    return request({
        url: '/item/' + skuId,
        method: 'GET',
    })
}

// 6. 获取购物车列表
export const reqCartList = () => {
    return request({
        url: '/cart/cartList',
        method: 'GET',
    })
}


// 7.请求添加购物车（修改购物车的商品数量）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return request({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'POST',
    })
}

// 8. 切换商品选中状态
export const reqUpdateCartIsCheck = (skuId, isChecked) => {
    return request({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'GET',
    })
}

// 9. 删除购物车商品
export const reqDeleteShopCart = (skuId) => {
    return request({
        url: '/cart/deleteCart/' + skuId,
        method: 'DELETE',
    })
}

// 10. 获取订单交易信息
export const reqTradeInfo = () => {
    return request({
        url: '/order/auth/trade',
        method: 'GET',
    })
}

// 11. 获取我的订单列表
export const reqMyOrderInfo = () => {
    return mockAjax({
        url: '/order/auth',
        method: 'GET',
    })
}

// 12. 提交订单返回订单编号
export const reqSubmitOrder = () => {
    return request({
        url: '/order/auth/submitOrder',
        method: 'POST',
    })
}

// 13. 获取订单支付信息
export const reqPayInfo = () => {
    return mockAjax({
        url: '/payment/weixin/createNative',
        method: 'GET',
    })
}

// 14. 获取订单支付状态
export const reqPayStatus = () => {
    return mockAjax({
        url: '/payment/weixin/queryPayStatus',
        method: 'GET',
    })
}

// 16. 请求注册用户
export const reqUserRegister = (userInfo) => {
    return request({
        url: '/user/passport/register',
        method: 'POST',
        data: userInfo
    })
}

// 17.校验token
export const getUserInfo = () => {
    return request({
        url: '/user/passport/auth/getUserInfo',
        method: 'GET',
    })
}

// 18.获取用户收获地址
export const reqUserAddresses = () => {
    return request({
        url: '/user/userAddress/auth/findUserAddressList',
        method: 'GET',
    })
}

// 请求获取模拟接口数据banner
export const reqBannerList = () => {
    return mockAjax({
        url: '/banner',
        method: 'GET',
    })
}

// 请求获取模拟接口数据floor
export const reqFloorList = () => {
    return mockAjax({
        url: '/floor',
        method: 'GET',
    })
}