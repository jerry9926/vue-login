/**
 * @author fengyongxing
 * @date   19.6.17
 * @description 正则校验提供给所有页面使用
 */

/* 邮箱 */
export function validateEmail(str) {
    const reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
    return reg.test(str)
}

/* 手机号 */
export function validateMobile(str) {
    // 字符串有8到20个数字，允许有减号，加号，中英文逗号
    const filtStr = str.replace(/-|\+|,|，/g, '')
    const reg = /^(\d{8,20})$/g
    return reg.test(filtStr)
}

/* 员工手机号 */
export function validateStaffMobile(str) {
    // 字符串有6到20个数字
    const reg = /^(\d{6,20})$/g
    return reg.test(str)
}

/* 电话号码 */
export function validateTel(str) {
    const reg = /^(\+\d{2}-)?(0\d{2,3}-)\d{7,8}$/
    return reg.test(str)
}

/* 判断身份证 */
export function validateIdCard(str) {
    const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    return reg.test(str)
}

/* 字符长度限制 */
export function validateStrLength(str, minLen = 0, maxLen) {
    const len = (str || '').trim().length
    if (maxLen === undefined) return len <= minLen
    return len >= minLen && len <= maxLen
}

/* 数字限制 */
export function validateNum(num, min = 0, max) {
    const n = Number(num)
    max = max === undefined ? min : max
    return !isNaN(n) && n >= min && n <= max
}
/* 密码限制 */
export function validatePwd(str, minLen = 6, maxLen = 12) {
    const reg = new RegExp(`^(?!([a-zA-Z]+|[0-9]+)$)[a-zA-Z0-9]{${minLen},${maxLen}}$`)
    return reg.test(str)
}

/**
 * 带提示的检验
 */

/* 手机号 */
export const validateTipsMobile = (required) => (rule, value, callback) => {
    if (!required && !value) callback()
    if (!validateMobile(value)) {
        return callback(new Error('请输入正确的手机号'))
    }
    callback()
}

/* 电话号码 */
export const validateTipsTel = (required) => (rule, value, callback) => {
    if (!required && !value) callback()
    if (!validateTel(value)) {
        return callback(new Error('电话号码格式不正确'))
    }
    callback()
}

/* 邮箱 */
export const validateTipsEmail = (required) => (rule, value, callback) => {
    if (!required && !value) callback()
    if (!validateEmail(value)) {
        return callback(new Error('请输入正确的邮箱'))
    }
    callback()
}

/* 身份证 */
export const validateTipsIdCard = (required) => (rule, value, callback) => {
    if (!required && !value) callback()
    if (!validateIdCard(value)) {
        return callback(new Error('身份证格式不正确'))
    }
    callback()
}

/* 字符串 */
export const validateTipsStrLen = (required, minLen, maxLen) => (rule, value, callback) => {
    if (!required && !value) callback()
    if (!validateStrLength(value, minLen, maxLen)) {
        const tips = maxLen === undefined
            ? `请控制在${minLen}个字符以内`
            : `请控制在${minLen}-${maxLen}个字符以内`
        return callback(new Error(tips))
    }
    callback()
}

/* 验证数字 */
export const validateTipsNum = (required, min, max) => (rule, value, callback) => {
    if (!required && !value) callback()
    if (!validateNum(value, min, max)) {
        return callback(new Error('请输入正确的数字'))
    }
    callback()
}
/* 密码 */
export const validateTipsPwd = (required, minLen = 6, maxLen = 12) => (rule, value, callback) => {
    if (!required && !value) callback()
    if (!validatePwd(value, minLen, maxLen)) {
        return callback(new Error(`请输入正确的密码${minLen}至${maxLen}位字符`))
    }
    callback()
}
