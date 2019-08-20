<!-- 
描述：登录页面，账户登录、短信验证码、忘记密码、记住我
作者：jerry9926
时间：19.8.7
-->
<template>
    <div class="app-wrapper">
        <div class="login__container">
            <navbar />
            <div class="login__wrap">
        
                <!-- 登录页装饰图片 -->
                <div class="login-ele-icon">
                    <!-- <img src="../../assets/images/login-bg1.png" /> -->
                    <img src="../../assets/images/login-bg2.jpg" />
                </div>
        
                <!-- 登录模块 -->
                <div class="login__box">
                    <el-card>
                        <div slot="header" class="clearfix">
                            <div class="login__box-hd">
                                <!-- 登录类型 -->
                                <div
                                    v-for="item in mode.loginTypes"
                                    v-if="item.state"
                                    :key="item.id"
                                    :class="{active: item.id === mode.activeType}"
                                    class="login__box-hd-item"
                                    @click="changeTab(item.id)"
                                >
                                    <div>{{ item.name }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="form-item">
                            <div v-if="mode.activeType === 'username'">
                                <!-- 账户登录类型 -->
                                <Account :account-info="mode.account" @loginSubmit="loginSubmit" />
                            </div>
                            <!-- 验证码登录 -->
                            <div v-if="mode.activeType === 'sms'">
                                <SmsCaptcha :sms-captcha-info="mode.smsCaptcha" @loginSubmit="loginSubmit" />
                            </div>
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
import Account from './components/account'
import SmsCaptcha from './components/smsCaptcha'
import Navbar from './components/login-nav'
import store from '@/store'
import {
    login
} from '@/api/login'

export default {
    name: 'Login',
    components: {
        Account,
        SmsCaptcha,
        ComFooter,
        Navbar
        // EditPwd
    },
    data() {
        return {
            mode: {
                activeType: 'username',
                loginTypes: [
                    {
                        id: 'username',
                        name: '密码登录',
                        state: true
                    },
                    {
                        id: 'sms',
                        name: '手机登录',
                        state: true
                    }
                ],
                account: { submitLoading: false, msg: '' },
                smsCaptcha: { submitLoading: false, msg: '' }
            }
        }
    },
    created() {
    },
    methods: {
        // 跳转到主页
        toHome() {
            // 跳转入口
            this.$router.push({ name: 'home' })

        },
        // 修改密码
        modifyPwd() {
            this.$router.push({ name: 'modifyPwd' })
        },
        // 切换登陆方式
        changeTab(idCode) {
            this.mode.activeType = idCode
        },
        // 登录提交
        loginSubmit(params) {
            this.mode.account.submitLoading = true

            if (this.submitDisabled) { return false }

            let requestParmas =  {
                ...params
            }
            // 登录
            login(requestParmas).then((data) => {
                console.log('login data', data)
                if (data && data.accessToken) {
                    store.commit('setToken', data.accessToken)
                    this.$message({
                        message: '登录成功，跳转中...',
                        duration: 2000,
                        type: 'success',
                        onClose: () => {
                            this.$router.push({
                                name: 'Home'
                            })
                        }
                    })
                }
                
            })
        },
    }
}
</script>
<style lang="scss">
.login__container {
    height: 100%;
    position: relative;
}
.login__submit-btn {
    width: 100%;
    height: 42px;
    font-size: 16px;
}
.login__wrap {
    position: relative;
    height: 660px;
    background: #324157;
    -webkit-background-size: cover;
    background-size: cover;

    .el-input__inner {
        height: 42px;
        line-height: 42px;
    }

    .el-card__header {
        padding-top: 0;
        padding-bottom: 0;
        background-color: rgba(251,251,251,1);
    }

    .login-ele-icon {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;
    }

    .login__box {
        position: absolute;
        right: 160px;
        top: 50%;
        width: 350px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);

        .getCaptchaBtn {
            border: none;
            background: #f5f7fa;
            outline: none;
        }

        /* form-item 窄 */
        &-item-s {
            .el-form-item__content {
                line-height: 22px;
            }
        }

        /* 记住我 */
        &-remember {
            float: left;
            width: 50%;
        }

        /* 忘记密码 */
        &-forgetPw {
            display: inline-block;
            width: 50%;
            text-align: right;

            a {
                cursor: pointer;

                &:hover {
                    color: #419FFF
                }
            }
        }

        .login__box-hd {
            display: flex;

            &-item {
                flex: 1;
                cursor: pointer;
                text-align: center;

                font-size: 18px;
                color: #767676;

                div {
                    margin: 0 auto;
                    width: 72px;
                    height: 64px;
                    line-height: 64px;
                }

                &.active {
                    color: #333333;

                    div {
                        border-bottom: 4px #333 solid;
                    }
                }
            }

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

        #imgObj {
            margin-left: 0;
            height: 28px;
        }

        a {
            margin-left: 0;
        }
    }

    .div-bgc {
        transform: scale(1.1);
        color: #409eff;
        text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
    }
}  

</style>
