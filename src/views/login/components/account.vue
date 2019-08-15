<!-- 
描述：密码登录
作者：jerry9926
时间：19.8.7
-->
<template>
    <div class="account form-item">
        <el-form ref="accountForm" :rules="rule" :model="account">
            <el-form-item label prop="username">
                <!-- v-focus="{ cls: 'el-input',tag: 'input', foc: focus.count }" -->
                <el-input
                    v-model.trim="account.username"
                    placeholder="请输入用户名"
                    name="username"
                    autocomplete="off"
                    @blur="focus.count=false"
                >
                </el-input>
            </el-form-item>
            <el-form-item label prop="password">
                <div class="account__password" @keyup.enter="submit">
                    <el-input
                        v-model.trim="account.password"
                        :type="pdText"
                        placeholder="请输入密码"
                        name="password"
                        autocomplete="off"
                        class="account__password"
                        @keyup.enter="submit"
                    >
                        <!-- <el-button class="account__password-suf iconfont icon-eye"></el-button> -->
                    </el-input>
                    <el-button
                        :class="pdIconClass"
                        class="account__password-icon iconfont"
                        @click="handlePasswordAppear"
                    ></el-button>
                </div>
            </el-form-item>
            <!-- <el-form-item v-if="isCheckOn" label prop="checkCode">
                <div class="code-content" @keyup.enter="submit">
                    <el-input v-model.trim="account.checkCode" placeholder="请输入验证码">
                        <template slot="append">
                            <a style="cursor: pointer" title @click="updateValidationCode()">
                                <img id="imgObj" :src="imgUrl" alt="验证码" />
                            </a>
                        </template>
                    </el-input>
                </div>
            </el-form-item> -->

            <el-form-item class="login__box-item-s">
                <div class="login__box-remember">
                    <el-checkbox v-model="rememberChecked">记住我</el-checkbox>
                </div>
                <div class="login__box-forgetPw">
                    <a @click="forgetPassword">忘记密码？</a>
                </div>
            </el-form-item>
                
            <el-form-item>
                <el-row>
                    <el-col>
                        <el-button
                            :disabled="accountInfo.submitLoading"
                            :loading="accountInfo.submitLoading"
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
import { validateStrLength } from '@/utils/validator'
export default {
    name: 'Account',
    props: {
        accountInfo: {
            type: Object,
            default: null
        }
    },
    data() {
        const platformConfig = {
            'password-complex-tip': '必须包含字母，数字，长度8-20位',
            'password-complex': '/^[a-zA-Z0-9]{8,20}$/',
            'user-complex': '/^[a-zA-Z0-9]{6,10}$/',
        }
        return {
            account: {
                // TODO FOR TEST
                username: '13631396587',
                password: 'aaaa1111',
                checkCode: ''
            },
            isCheckOn: false,
            rule: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'submit' },
                    // { 
                    //     validator: function (rule, value, callback) {
                    //         if (!validateStrLength(value)) {
                    //             callback(new Error('请输入账号'))
                    //         } else {
                    //             callback()
                    //         }
                    //     },
                    //     trigger: 'submit'
                    // }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'submit' },
                    // {
                    //     validator: this.$validation.checkPasswordLogin,
                    //     message: '必须包含字母，数字，长度8-20位',
                    //     trigger: 'submit'
                    // }
                ],
                checkCode: [
                    { required: true, message: '请输验证码', trigger: 'submit' }
                ]
            },
            focus: {
                count: true
            },
            rememberChecked: false,
            passwordAppear: false
        }
    },
    computed: {
        pdIconClass () {
            return this.passwordAppear ? 'icon-eye' : 'icon-eye-close'
        },
        pdText () {
            return this.passwordAppear ? 'text' : 'password'
        }
    },
    created() {

    },
    methods: {
    // 忘记密码
        forgetPassword() {
            this.$router.push({ name: 'resetPassword' })
        },
        submit() {
            this.$refs['accountForm'].validate((valid) => {
                if (!valid) {
                    return false
                }
                this.$emit('loginSubmit', {
                    username: this.account.username,
                    password: this.account.password,
                    logintype: 'username'
                })
            })
        },
        handlePasswordAppear() {
            this.passwordAppear = !this.passwordAppear
        }
    }
}
</script>
<style lang="scss">
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