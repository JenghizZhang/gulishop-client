import {reqCategoryList} from '@/api'

const home = {
    namespaced: true,
    state:{
        categoryList:[]    
    },
    actions:{
        async getCategoryList({commit}){
            // 发请求拿数据，提交给mutation，存储到state
            const result=await reqCategoryList()
            if(result.code===200){
                commit('RECEIVE_CATEGORYLIST',result.data)
            }else{
                
            }
        }
    },
    mutations:{
        RECEIVE_CATEGORYLIST(state,categoryList){
            state.categoryList=categoryList
        }
    },
    getters:{},
}

export default home