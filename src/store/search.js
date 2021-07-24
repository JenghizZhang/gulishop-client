import { reqSearchList } from "@/api";

const search = {

    namespaced: true,
    state: {
        searchInfo: {}
    },
    getters: {
        attrsList(state) {
            return state.searchInfo.attrsList || []
        },
        goodsList(state) {
            return state.searchInfo.goodsList || []
        },
        trademarkList(state) {
            return state.searchInfo.trademarkList || []
        }
    },
    actions: {
        async getSearchInfo({ commit }, params = {}) {
            //params是用户发请求的时候，也就是dispatch的时候给传递的对象，这个参数在action的函数只能放在commit形参后面
            const result = await reqSearchList(params)
            if (result.code === 200) {
                commit('RECEIVE_SEARCHINFO', result.data)
            }
        }
    },
    mutations: {
        RECEIVE_SEARCHINFO(state, searchInfo) {
            state.searchInfo = searchInfo
        },
    },
}
export default search;