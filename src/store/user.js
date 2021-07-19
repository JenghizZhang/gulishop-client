import storageUtils from '@/utils/storageUtils'

const user = {

    namespaced: true,
    state:{token:storageUtils.getToken()},
    mutations:{
        UPDATE_TOKEN(state,value){
            storageUtils.saveToken(value);
            state.token=value;
        }
    },
}
export default user;