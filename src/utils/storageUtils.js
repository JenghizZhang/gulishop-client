import store from 'store'

const TOKEN_KEY = 'token'

var storageUtils={
    //保存user
    saveToken(token) {
        store.set(TOKEN_KEY,token)
    },
    //读取user
    getToken(){
        return store.get(TOKEN_KEY)||{}
    },
    //删除user
    removeToken(){
        store.remove(TOKEN_KEY)
    }
}

export default storageUtils
