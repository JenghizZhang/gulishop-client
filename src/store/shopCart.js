import { reqAddOrUpdateShopCart } from "@/api"
export default {
    namespaced: true,
    state: {},
    getters: {},
    actions: {
        async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
            const result = await reqAddOrUpdateShopCart(skuId, skuNum)
            if (result.code === 200) {
                if (result.msg === '添加成功') {
                    alert('添加购物车成功')
                    return Promise.resolve('添加购物车成功')
                } else {
                    alert('成功修改数量为：' + skuNum)
                    return Promise.resolve('修改数量成功')
                }
            } else {
                alert('添加购物车失败')
                return Promise.reject(new Error('添加购物车失败'))
            }
        }
    },
    mutations: {},
}