import request from '@/utils/request'
import qs from 'qs'
import md5 from 'blueimp-md5'

let BASE_PATH = process.env.NODE_ENV === 'production' ? '' : '/login'
process.env.NODE_ENV === 'production'

const SALT = 'WHATSUP'

// 登录
/* 
username: 13128257251
password: c2352637d29368e16825e2a8dc81f04d
logintype: username
grant_type: password
client_id: webunion
client_secret: password
redirect_url: http://dev.union.aplusunion.cn/h5/#/index 

13631396587
aaaa1111
*/
export function login(params) {
    const data = {
        grant_type: 'password',
        client_id: 'weboop',
        client_secret: 'password',
        logintype: params.logintype,
        username: params.username,
        password: md5(SALT + params.password),
        redirect_url: 'http://dev.flz.aplusunion.cn'
    }
    return request({
        url: BASE_PATH + '/user/login',
        method: 'post',
        data: qs.stringify(data),
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        aFormat: false
    })
}

/**
 * 获取短信验证码
 * @param {phone,tt: new Date().getTime(), type: 'login'/'resetpassword'} params 
 */
export function getSmsCode(params) {
    params.tt = new Date().getTime()
    return request({
        url: BASE_PATH + '/user/sms/captcha',
        method: 'get',
        params: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
}

// 验证码
export function captcha() {
    return '/login/captcha'
}

/**
 * 修改密码
 * @param {password,mobile,textCode} params 
 */
export function changePwd(params) {
    return request({
        url:  BASE_PATH + '/user/user/modifyPassword',
        method: 'post',
        data: params,
        aFormat: true,
    })
}

/**
 * 重置密码
 * @param {password,mobile,textCode} params 
 */
export function resetPwd(params) {
    const data = { ...params }
    data.password = md5(SALT + data.password)
    return request({
        url:  BASE_PATH + '/user/user/resetPassword',
        method: 'post',
        data: data,
        aFormat: true
    })
}

// 登出
export function logout() {
    return request({
        url:  BASE_PATH + '/auth/logout',
        method: 'get'
    })
}
