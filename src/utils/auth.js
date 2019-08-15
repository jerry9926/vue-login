// UPDATE 待删除
// 19.5.27/jerry9926/接入webbas后改造

import Cookies from 'js-cookie'

// token 操作
const TokenKey = 'Token'

// 临时写死token/19.5.23/hzj TODO
export function setTokenForTest() {
    return Cookies.set('SESSION', 'MWJkNTY3YTAtNmY5Mi00ZGJmLTk1NmEtMjdiZjZiZDcxMzI5', { expires: 1 })
}

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token, expires) {
    return Cookies.set(TokenKey, token, { expires })
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

// 用户信息 操作
const USER_INFO_KEY = 'userinfo'

// 获取用户信息
export function getUserInfo() {
    const info = Cookies.get(USER_INFO_KEY)
    try {
        return JSON.parse(info)
    } catch (err) {
        return null
    }
}

// 设置用户信息
export function setUserInfo(data, expires) {
    try {
        const _data = data ? JSON.stringify(data) : ''
        return Cookies.set(USER_INFO_KEY, _data, { expires: expires })
    } catch (err) {
        return new Error('SET_INFO ERROR', err)
    }
}

// 移除用户信息
export function removeUserInfo() {
    return Cookies.remove(USER_INFO_KEY)
}
