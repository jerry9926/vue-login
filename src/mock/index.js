import Mock from 'mockjs'
import {
    login,
    success
} from './data'

// 登录
Mock.mock(/\/user\/login/, login)
// 验证码
Mock.mock(/\/user\/sms\/captcha/, success)
// 修改密码
Mock.mock(/\/user\/user\/modifyPassword/, success)
// 重置密码
Mock.mock(/\/user\/user\/resetPassword/, success)

export default Mock
