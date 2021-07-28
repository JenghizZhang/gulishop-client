import store from 'store'

const TOKEN_KEY = 'token'
const TEMP_KEY = 'temp_id'

var storageUtils = {
    //保存user
    saveToken(token) {
        store.set(TOKEN_KEY, token)
    },
    //读取user
    getToken() {
        return store.get(TOKEN_KEY) || ''
    },
    //删除user
    removeToken() {
        store.remove(TOKEN_KEY)
    },

    // 存储临时标识
    saveTempId(tempId) {
        store.set(TEMP_KEY, tempId)
    },
    // 读取临时标识
    getTempId() {
        return store.get(TEMP_KEY) || ''
    },
    //删除临时标识
    removeTempId() {
        store.remove(TEMP_KEY)
    }
}

export default storageUtils
