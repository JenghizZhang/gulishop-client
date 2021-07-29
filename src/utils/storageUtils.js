import store from 'store'
const USER_KEY = 'user'
const TEMP_KEY = 'temp_id'

var storageUtils = {
    //保存user
    saveUser(user) {
        store.set(USER_KEY, user)
    },
    //读取user
    getUser() {
        return store.get(USER_KEY) || {}
    },
    //删除user
    removeUser() {
        store.remove(USER_KEY)
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
