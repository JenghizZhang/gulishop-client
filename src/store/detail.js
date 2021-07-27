import { reqDetailInfo } from "@/api"

export default {
    namespaced: true,
    state: {
        detailInfo: {}
    },
    getters: {
        categoryView(state) {
            return state.detailInfo.categoryView || {}
        },
        skuInfo(state) {
            return state.detailInfo.skuInfo || {}
        },
        spuSaleAttrList(state) {
            return state.detailInfo.spuSaleAttrList || []
        }

    },
    actions: {
        async getDetailInfo({ commit }, skuId) {
            const result = await reqDetailInfo(skuId)
            if (result.code === 200) {
                commit('RECEIVE_DETAILINFO', result.data)
            }
        }
    },
    mutations: {
        RECEIVE_DETAILINFO(state, detailInfo) {
            state.detailInfo = detailInfo
        }
    },
}