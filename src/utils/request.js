import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
import { get64String } from '@/utils'

// 不是标准返回的接口
const WHITE_LIST = [
    '/auth/captcha',
    '/auth/oauth/token',
    '/auth/user',
]

// 创建axios实例
const service = axios.create({
    // baseURL: '/web/web-manage',
    timeout: 60 * 60 * 1000 // 请求超时时间
})

// 错误提示
function _errorTips(data) {
    let tips = '系统错误，请稍候重试'
    if (data && data.head && data.head.respDesc) {
        tips = data.head.respDesc
    }
    Message.error({ message: tips, duration: 3 * 1000 })
}

/**
 * config.aFormat 传参格式处理，true套格式/false不套格式 
 * config.aResFull 返回完整，true返回完整/false或不传，只返回data的值
 * @description request拦截器
 */
service.interceptors.request.use(
    config => {
        // 默认 aFormat = true
        if (config.aFormat === undefined) config.aFormat = true

        // 统一格式处理
        if (config.aFormat) {
            const requestId = get64String()
            const userId = store.state.user.info.id
            const formatData = {
                head: { requestId, userId, requestType: '3' },
                data: config.data
            }
            config.data = formatData
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        const res = response.data

        // 二进制类型直接返回
        if (res instanceof Blob) {
            return res
        }

        // 白名单或者设置完整返回
        const { url = '', aResFull } = response.config
        if (WHITE_LIST.indexOf(url) !== -1 || aResFull) {
            return res
        }

        // 登出
        if (res.status === '401') {
            store.commit('logout')
            return Promise.reject(res)
        }

        // 兼容 webbase 接口异常处理
        if (res.status !== '200' && res.message) {
            Message.error({ message: res.message, duration: 3 * 1000 })
            return Promise.reject(res)
        }

        // 接口异常处理
        if (res.head && res.head.respStatus !== '00') {
            _errorTips(res)
            return Promise.reject(res)
        }

        return res.data
    },
    error => {
        Message.error('请求超时，请检查网络是否连接正常')
        return Promise.reject(error.response.data)
    }
)

export const errorTips = _errorTips

export default service
