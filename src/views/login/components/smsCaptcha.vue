<!-- 
描述：短信验证码登录
作者：jerry9926
时间：19.8.7
-->
<template>
    <div class="smsCaptcha form-item">
        <el-form ref="smsForm" :rules="rule" :model="smsCaptcha">
            <el-form-item label prop="mobilePhone">
                <!-- v-focus="{ cls: 'el-input',tag: 'input', foc: focus.count }" -->
                <el-input
                    v-model.trim="smsCaptcha.mobilePhone"
                    placeholder="请输入手机号"
                    name="mobilePhone"
                    autocomplete="off"
                    @blur="focus.count=false"
                >
                </el-input>
            </el-form-item>

            <el-form-item label prop="OTPToken">
                <div class="code-content">
                    <el-input v-model.trim="smsCaptcha.OTPToken" placeholder="请输入短信验证码">
                        <template slot="append">
                            <button
                                :style="captchaDisable"
                                :disabled="captcha.disabled"
                                class="getCaptchaBtn"
                                type="button"
                                @click="sendMessage"
                            >{{ captcha.btn }}</button>
                        </template>
                    </el-input>
                </div>
            </el-form-item>

            <!-- <el-form-item v-if="isCheckOn" label prop="checkCode">
                <div class="code-content" @keyup.enter="submit">
                    <el-input v-model.trim="smsCaptcha.checkCode" placeholder="请输入验证码">
                        <template slot="append">
                            <a style="cursor: pointer" title @click="changeCode('imgObj1')">
                                <img id="imgObj1" :src="imgUrl" alt />
                            </a>
                        </template>
                    </el-input>
                </div>
            </el-form-item> -->
            <el-form-item>
                <el-row>
                    <el-col>
                        <el-button
                            :disabled="smsCaptchaInfo.submitLoading"
                            :loading="smsCaptchaInfo.submitLoading"
                            type="primary"
                            class="login__submit-btn"
                            @click="submit"
                        >登录</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { 
    validateStrLength,
    validateTipsMobile 
} from '@/utils/validator'
export default {
    name: 'SmsCaptcha',
    props: {
        smsCaptchaInfo: {
            type: Object,
            default: null
        }
    },
    data() {
        const that = this
        return {
            smsCaptcha: {
                mobilePhone: '',
                OTPToken: ''
            },
            isCheckOn: false,
            rule: {
                mobilePhone: [
                    { validator: validateTipsMobile(true), trigger: 'submit' }
                ],
                OTPToken: [
                    { required: true, message: '请输入短信验证码', trigger: 'submit' }
                ]
            },
            focus: { count: true },
            captcha: {
                btn: '获取验证码',
                disabled: false
            }
        }
    },
    computed: {
        captchaDisable() {
            return this.captcha.disabled ? { 'cursor': 'not-allowed' } : { 'cursor': 'pointer' }
        }
    },
    created() {
    },
    methods: {
        // 获取验证码
        sendMessage() {
            this.$refs['smsForm'].clearValidate()
            this.$refs['smsForm'].validateField('mobilePhone', (tips) => {
                if (!tips) {
                    let timeLen = 60
                    this.captcha.disabled = true
                    let param = { mobile: this.smsCaptcha.mobilePhone }
                    // 发短信验证 TODO
                    /* this.$post(this.$global.authPathPrefix + '/assist/dynamicPassword', param).then((response) => {
                        if (this.$reponseStatus(response)) {
                            // 设置页面短信验证刷新时间
                            let timer = setInterval(() => {
                                --timeLen
                                if (timeLen === 0) {
                                    clearInterval(timer)
                                    this.captcha.btn = '获取验证码'
                                    this.captcha.disabled = false
                                } else {
                                    this.captcha.btn = `${timeLen}s后再获取`
                                }
                            }, 1000)
                        }
                    }) */ 
                }
            })
        },
        submit() {
            this.$refs['smsForm'].clearValidate()
            this.$refs['smsForm'].validate((valid) => {
                if (!valid) {
                    return
                }
                this.$emit('loginSubmit', {
                    username: this.smsCaptcha.mobilePhone,
                    password: this.smsCaptcha.OTPToken,
                    logintype: 'sms'
                })
            })
        }
    }
}
</script>
