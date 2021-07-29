import storageUtils from '@/utils/storageUtils'
import {reqLogin, reqUserRegister} from '@/api'
import { getUserTempId } from '@/utils/userAbout'

const user = {
    namespaced: true,
    state:{
        user:storageUtils.getUser()|| {},
        // getUserTempId是一个函数，专门用来生成用户的临时标识的
        userTempId:getUserTempId()
    },
    actions:{
        async userLogin({commit},value){
            const result=await reqLogin(value)
            if(result.code===200){
                commit('UPDATE_USER', { ...value, token: result.data.token})
                alert('欢迎' + value.account)
                return 'ok'
            }else{
                alert(result.msg)
                return Promise.reject(new Error('fail'))
            }
        },
        async setRegister({commit},userInfo){
            const result = await reqUserRegister(userInfo)
            if(result.code===200){
                commit('UPDATE_USER', result.data)
                alert('欢迎'+result.data.account)
                return 'ok'
            }else{
                return Promise.reject(new Error('fail'))
            }
        }
    },
    mutations:{
        UPDATE_USER(state,value){
            state.user=value
            storageUtils.saveUser(value);
        },
        CLEAR_USER(state){
            state.user = {}
            // storageUtils.removeUser();
        }
    },
}
export default user;