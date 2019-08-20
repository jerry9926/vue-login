<!-- 
描述：重置密码
作者：jerry9926
时间：19.8.14
-->
<template>
    <div class="app-wrapper">
        <div class="resetpw__container">
            <navbar title="重置密码" />
            <div class="resetpw__wrap">
                <!-- 登录模块 -->
                <div class="resetpw__box">
                    <el-card class="box-card">
                        <div slot="header" class="resetpw__box-title">
                            重置密码
                        </div>
                        <div class="form-item">
                            <el-form ref="resetpwForm" :rules="rule" :model="resetpwCaptcha">
                                <el-form-item label prop="mobilePhone">
                                    <!-- v-focus="{ cls: 'el-input',tag: 'input', foc: focus.count }" -->
                                    <el-input
                                        v-model.trim="resetpwCaptcha.mobilePhone"
                                        placeholder="请输入手机号"
                                        name="mobilePhone"
                                        autocomplete="off"
                                        @blur="focus.count=false"
                                    >
                                    </el-input>
                                </el-form-item>

                                <el-form-item label prop="OTPToken">
                                    <div class="code-content">
                                        <el-input v-model.trim="resetpwCaptcha.OTPToken" placeholder="请输入短信验证码">
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

                                <el-form-item label prop="password">
                                    <div class="account__password" @keyup.enter="submit">
                                        <el-input
                                            v-model.trim="resetpwCaptcha.password"
                                            :type="pwText"
                                            placeholder="请输入新密码"
                                            name="password"
                                            autocomplete="off"
                                            class="account__password"
                                        >
                                        </el-input>
                                        <el-button
                                            :class="pwIconClass"
                                            class="account__password-icon iconfont"
                                            @click="handlePasswordAppear"
                                        ></el-button>
                                    </div>
                                </el-form-item>

                                <el-form-item label prop="passwordConfirm">
                                    <div class="account__password" @keyup.enter="submit">
                                        <el-input
                                            v-model.trim="resetpwCaptcha.passwordConfirm"
                                            :type="pwConfirmText"
                                            placeholder="请再次输入密码"
                                            name="password"
                                            autocomplete="off"
                                            class="account__password"
                                            @keyup.enter="submit"
                                        >
                                        </el-input>
                                        <el-button
                                            :class="pwConfirmIconClass"
                                            class="account__password-icon iconfont"
                                            @click="handlePasswordConfirmAppear"
                                        ></el-button>
                                    </div>
                                </el-form-item>

                                <el-form-item>
                                    <el-row>
                                        <el-col>
                                            <el-button
                                                :disabled="submitLoading"
                                                :loading="submitLoading"
                                                type="primary"
                                                class="login__submit-btn"
                                                @click="submit"
                                            >确认更改
                                            </el-button>
                                        </el-col>
                                    </el-row>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </div>
            </div>
            <com-footer />
        </div>
    </div>
</template>
<script>
import ComFooter from '@/views/layout/components/ComFooter'
import Navbar from '@/views/login/components/login-nav'
import store from '@/store'
import {
    getSmsCode,
    resetPwd
} from '@/api/login'
import { 
    validateStrLength,
    validateTipsMobile 
} from '@/utils/validator'

export default {
    name: 'ResetPassword',
    components: {
        ComFooter,
        Navbar
    },
    data() {
        const that = this
        return {
            submitLoading: false,
            resetpwCaptcha: {
                mobilePhone: '13570877243',
                OTPToken: '',
                password: '',
                passwordConfirm: ''
            },
            isCheckOn: false,
            rule: {
                mobilePhone: [
                    { validator: validateTipsMobile(true), trigger: 'blur' }
                ],
                OTPToken: [
                    { required: true, message: '请输入短信验证码', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                    { type: 'string', pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/g, message: '至少包含8位以上数字和字母', trigger: 'blur' }
                ],
                passwordConfirm: [
                    { required: true, message: '请再次输入新密码', trigger: 'blur' },
                    { 
                        validator: function (rule, value, callback) {
                            if (value !== that.resetpwCaptcha.password) {
                                callback(new Error('两次输入的密码不一致'))
                            } else {
                                callback()
                            }
                        },
                        trigger: 'blur'
                    }
                ]
            },
            focus: { count: true },
            captcha: {
                btn: '获取验证码',
                disabled: false
            },
            passwordAppear: false,
            passwordConfirmAppear: false,
        }
    },
    computed: {
        captchaDisable() {
            return this.captcha.disabled ? { 'cursor': 'not-allowed' } : { 'cursor': 'pointer' }
        },
        pwIconClass () {
            return this.passwordAppear ? 'icon-eye' : 'icon-eye-close'
        },
        pwText () {
            return this.passwordAppear ? 'text' : 'password'
        },
        pwConfirmIconClass () {
            return this.passwordConfirmAppear ? 'icon-eye' : 'icon-eye-close'
        },
        pwConfirmText () {
            return this.passwordConfirmAppear ? 'text' : 'password'
        }
    },
    created() {
    },
    methods: {
        resetForm() {
            this.resetpwCaptcha.OTPToken = ''
            this.resetpwCaptcha.password = ''
            this.resetpwCaptcha.passwordConfirm = ''
        },
        // 获取验证码
        sendMessage() {
            this.$refs['resetpwForm'].clearValidate()
            this.$refs['resetpwForm'].validateField('mobilePhone', (tips) => {
                if (!tips) {
                    let timeLen = 60
                    this.captcha.disabled = true
                    let param = {
                        phone: this.resetpwCaptcha.mobilePhone,
                        type: 'resetpassword'
                    }
                    // 发短信验证
                    getSmsCode(param).then((data) => {
                        this.$message.success('发送短信成功')
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
                    }).catch((err) => {
                        this.captcha.disabled = false
                    })
                }
            })
        },
        submit() {
            this.$refs['resetpwForm'].clearValidate()
            this.$refs['resetpwForm'].validate((valid) => {
                if (!valid) {
                    return
                }
                if (this.submitLoading) { return }
                this.submitLoading = true
                // 请求修改
                let requestParmas =  {
                    mobile: this.resetpwCaptcha.mobilePhone,
                    password: this.resetpwCaptcha.password,
                    textCode: this.resetpwCaptcha.OTPToken
                }
                resetPwd(requestParmas).then((data) => {
                    this.submitLoading = false
                    this.resetForm()
                    this.$message({
                        message: '密码修改成功，请使用新密码重新登录，跳转中...',
                        duration: 2000,
                        type: 'success',
                        onClose: () => {
                            this.$router.push('/login')
                        }
                    })
                }).catch((err) => {
                    this.submitLoading = false
                    this.resetForm()
                })
            })
        },
        handlePasswordAppear() {
            this.passwordAppear = !this.passwordAppear
        },
        handlePasswordConfirmAppear() {
            this.passwordConfirmAppear = !this.passwordConfirmAppear
        }
    }
}
</script>
<style lang="scss">
.login__submit-btn {
    width: 100%;
    height: 42px;
    font-size: 16px;
}
.resetpw__container {
    height: 100%;
    position: relative;
}
.resetpw__wrap {
    position: relative;
    padding-top: 80px;
    padding-bottom: 155px;

    .el-input__inner {
        height: 42px;
        line-height: 42px;
    }

    .resetpw__box {
        margin: 0 auto;
        width: 350px;

        .el-card__header {
            padding-top: 0;
            padding-bottom: 0;
            background-color: rgba(251,251,251,1);
        }

        &-title {
            margin: 0 auto;
            width: 72px;
            height: 64px;
            line-height: 64px;
            font-size: 18px;
            border-bottom: 4px #333 solid;
            color: #333333;
        }

        .getCaptchaBtn {
            border: none;
            background: #f5f7fa;
            outline: none;
        }


        /*-- 清除必填符 --*/
        .el-form-item.is-required>.el-form-item__label:before {
            content: " ";
        }
    }

    .code-content {
        .el-input__inner {
            width: 180px;
        }

        .el-input-group__append {
            width: 100%;
            margin-left: 180px;
        }

        a {
            margin-left: 0;
        }
    }


}
.account__password {
    position: relative;
    &-icon {
        position: absolute;
        right: 0;
        top: 0;
        height: 40px;
        border: none;
        background: transparent;

        &:hover,
        &:active,
        &:focus {
            color: unset;
            background: transparent;
        }
    }
}
</style>
        