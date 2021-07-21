// 这个文件时专门来模拟mock数据接口的
import Mock from 'mockjs'
import banner from './banner'
import floor from './floor'

// 第一个参数代表我们请求的路径，第二个代表返回的数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})