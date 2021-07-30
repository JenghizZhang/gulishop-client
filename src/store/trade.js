import { reqTradeInfo } from '@/api'
export default {
    namespaced: true,
    state: {
        tradeInfo: {}
    },
    actions: {
        async getTradeInfo({ commit }) {
            const result = await reqTradeInfo()
            if (result.code === 200) {
                commit('RECEIVE_TRADEINFO', result.data)
            }
        }
    },
    mutations: {
        RECEIVE_TRADEINFO(state, tradeInfo) {
            state.tradeInfo = tradeInfo
        }
    },
}