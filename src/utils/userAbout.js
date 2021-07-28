// 这个文件是和用户相关的一些工具函数
// 专门用来生成用户的临时标识，一般的用户的临时标识都是唯一的，而且一旦生成，不会轻易改变

import storageUtils from '@/utils/storageUtils'
import { v4 as uuidv4 } from 'uuid'

export function getUserTempId() {
    // 先从localStorage获得用户的临时标识
    let userTempId = storageUtils.getTempId()
    // 如果获取到了直接返回使用
    if (!userTempId) {
        // 如果没有获取到，再通过uuid重新创建并存储到localStorage
        userTempId = uuidv4()
        storageUtils.saveTempId(userTempId)
    }
    return userTempId
}