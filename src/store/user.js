import storageUtils from '@/utils/storageUtils'
import {reqLogin} from '@/api'
import { getUserTempId } from '@/utils/userAbout'

const user = {
    namespaced: true,
    state:{
        user:{},
        // getUserTempId是一个函数，专门用来生成用户的临时标识的
        userTempId:getUserTempId()
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