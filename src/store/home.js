import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'

const home = {
    namespaced: true,
    state:{
        categoryList:[],
        bannerList:[],
        floorList:[],
    },
    actions:{
        async getCategoryList({commit}){
            // 发请求拿数据，提交给mutation，存储到state
            const result=await reqCategoryList()
            if(result.code===200){
                commit('RECEIVE_CATEGORYLIST',result.data)
            }else{
                alert(result.msg)
            }
        },
        async getBannerList({commit}){
            const result = await reqBannerList()
            if(result.code===200){
                commit('RECEIVE_BANNERLIST',result.data)
            }else{
                alert(result.msg)
            }
        },
        async getFloorList({commit}){
            const result = await reqFloorList()
            if(result.code===200){
                commit('RECEIVE_FLOORLIST',result.data)
            }else{
                alert(result.msg)
            }
        },
    },
    mutations:{
        RECEIVE_CATEGORYLIST(state,categoryList){
            state.categoryList=categoryList
        },
        RECEIVE_BANNERLIST(state,bannerList){
            state.bannerList=bannerList
        },
        RECEIVE_FLOORLIST(state,floorList){
            state.floorList=floorList
        },
    },
    getters:{},
}

export default home