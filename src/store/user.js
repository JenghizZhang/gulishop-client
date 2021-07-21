import storageUtils from '@/utils/storageUtils'
import {reqLogin} from '@/api'

const user = {

    namespaced: true,
    state:{
        user:{}
    },
    actions:{
        async updateToken({commit},value){
            const result=await reqLogin(value)
            if(result.code===200){
                commit('UPDATE_TOKEN',result.data)
            }else{
                alert(result.msg)
            }
        }
    },
    mutations:{
        UPDATE_TOKEN(state,value){
            storageUtils.saveToken(value.token);
            state.token=value;
        }
    },
}
export default user;