import { reqAddOrUpdateShopCart, reqCartList, reqUpdateCartIsCheck, reqDeleteShopCart } from "@/api"
export default {
    namespaced: true,
    state: {
        shopCartList: [],
    },
    getters: {},
    actions: {
        async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
            const result = await reqAddOrUpdateShopCart(skuId, skuNum)
            if (result.code === 200) {
                if (result.msg === '添加成功') {
                    alert('添加购物车成功')
                    return Promise.resolve('添加购物车成功')
                } else {
                    alert('成功修改数量为：' + result.num)
                    return Promise.resolve('修改数量成功')
                }
            } else {
                alert('添加购物车失败')
                return Promise.reject(new Error('添加购物车失败'))
            }
        },
        async getShopCartList({ commit }) {
            const result = await reqCartList()
            if (result.code === 200) {
                commit('RECEIVE_SHOPCARTLIST', result.data)
                return result.data
            }
        },
        async updateShopCartIsChecked({ commit }, { skuId, isChecked }) {
            const result = await reqUpdateCartIsCheck(skuId, isChecked)
            if (result.code === 200) {
                return Promise.resolve(result)
            } else {
                return Promise.reject(new Error('fail'))
            }
        },
        updateCartIsCheckedAll({ commit, state, dispatch }, { isChecked, cartInfoList }) {
            let promises = [];
            cartInfoList.forEach((item) => {
                if (item.isChecked !== isChecked) {
                    let promise = dispatch('updateShopCartIsChecked', { skuId: item.id, isChecked })
                    promises.push(promise)
                }
            })
            Promise.all(promises)
                .then((data) => {
                    // console.log(data, 'result')
                })
                .catch(error => {
                    alert(error.message)
                })
        },
        async deleteShopCart({ commit }, skuId) {
            const result = await reqDeleteShopCart(skuId)
            if (result.code === 200) {
                return Promise.resolve(result.data)
            } else {
                return Promise.reject(new Error('fail'))
            }
        },
        deleteShopCartAll({ commit, dispatch }, cartList) {
            let promises = [];
            cartList.forEach(item => {
                if (!item.isChecked) {
                    return
                } else {
                    let promise = dispatch('deleteShopCart', item.id)
                    promises.push(promise)
                }
            })
            Promise.all(promises)
                .then(data => {
                    alert('删除成功')
                })
                .catch(() => { })
        }

    },
    mutations: {
        RECEIVE_SHOPCARTLIST(state, shopCartList) {
            state.shopCartList = shopCartList
        }
    },
}