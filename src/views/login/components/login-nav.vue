<!--
头部导航（简版）
props: {
    title: String // 右侧的文案
}
-->
<template>
    <div class="login-nav">
        <el-row type="flex" justify="space-between" align="center" class="login-nav__row">
            <el-col :span="20" class="login-nav__img">
                <img src="../../../assets/images/logo.png" />
            </el-col>
            <el-col :span="4" class="login-nav__text">
                {{ title }}
            </el-col>
        </el-row>
    </div>
    
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '欢迎登录'
        }
    }
}
</script>
<style lang="scss">
.login-nav {
    margin: 0 auto;
    width: 1200px;
    height: 80px;

    &__row {
        height: 80px;
        line-height: 80px;
    }

    &__img {
        img {
            vertical-align: middle;
        }
    }

    &__text {
        color: #767676;
        font-size: 18px;
    }
}
</style>