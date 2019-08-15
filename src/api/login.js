import request from '@/utils/request'
import qs from 'qs'
import md5 from 'blueimp-md5'

let BASE_PATH = process.env.NODE_ENV === 'production' ? '' : '/login'
process.env.NODE_ENV === 'production'

const SALT = 'WALCLIENT'

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
        url: BASE_PATH + '/v1/openapi/user/login',
        method: 'post',
        data: qs.stringify(data),
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        aFormat: false
    })
}

// 验证码
export function captcha() {
    return '/v1/openapi/login/captcha'
}

// 用户信息
export function getInfo() {
    return request({
        url: '/auth/user',
        method: 'get'
    })
}

// 登出
export function logout() {
    return request({
        url: '/auth/logout',
        method: 'get'
    })
}
