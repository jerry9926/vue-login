<template>
    <div class="navbar">
        <div class="header">
            <el-row class="com-header">
                <el-col :span="24">你好！欢迎光临xxx网！</el-col>
                <el-col :span="8" class="header-right">
                    <el-dropdown class="drop" @command="handleCommand">
                        <div class="nav">
                            <span>小飞侠</span>
                            <i class="el-icon-arrow-down"></i>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="1">个人中心</el-dropdown-item>
                            <el-dropdown-item command="2">用户资料</el-dropdown-item>
                            <el-dropdown-item command="3">地址管理</el-dropdown-item>
                            <el-dropdown-item command="4">密码管理</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <router-link to="/order/orderList" tag="span">我的订单</router-link>
                </el-col>
            </el-row>
            <div class="menu">
                <el-row type="flex" justify="space-between" align="center" class="menu__search">
                    <el-col :span="8" class="img">
                        <img src="../../../assets/images/logo.png" />
                    </el-col>
                    <el-col :span="12" class="menu__search--input">
                        <input v-model="search" placeholder="请输入内容" />
                        <el-button
                            icon="el-icon-search"
                            size="medium"
                            @click="linkTo('Search', search)"
                        >搜索</el-button>
                    </el-col>
                    <el-col :span="4" class="menu__order">
                        <img src="../../../assets/images/icon-cgqd.png" />
                        <span style="width:100px;">采购清单</span>
                        <el-tag color="#EE6B2B" size="mini">{{ listNum }}</el-tag>
                    </el-col>
                </el-row>

                <div class="menu__select">
                    <div class="menu__select-all">
                        <el-row type="flex" align="middle" class="menu__select-title">
                            <el-col :span="20">全部分类</el-col>
                            <el-col :span="4">
                                <span class="iconfont icon-menu"></span>
                            </el-col>
                        </el-row>
                        <div class="all__dropdown">
                            <div v-for="item in 10" :key="item" class="all__dropdown-item">
                                <el-row type="flex" align="middle">
                                    <el-col :span="20">水果蔬菜</el-col>
                                    <el-col :span="4">
                                        <span class="iconfont icon-arrow icon-arrow-right"></span>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="item__second">
                                <el-row type="flex" align="middle">
                                    <el-col :span="4" class="item__second-title">水果蔬菜</el-col>
                                    <el-col :span="20">
                                        <span
                                            v-for="item in 10"
                                            :key="item"
                                            class="item__second-item"
                                        >橙子</span>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
                    <el-menu default-active mode="horizontal" menu-trigger="click">
                        <el-menu-item @click="linkTo('Home')">首页</el-menu-item>
                        <el-menu-item @click="linkTo('GoodsCenter')">商品中心</el-menu-item>
                        <el-menu-item @click="linkTo('ServiceCenter')">服务中心</el-menu-item>
                    </el-menu>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listNum: 66,
            search: '',
            classfiy: [],
            value: '',
        }
    },
    methods: {
        handleCommand(command) {
            const state = {
                1: '/order/myOrder',
                2: '/userInfo/index',
                3: '/address/index',
                4: '/password/index',
            }
            this.$router.push(state[command])
        },
        linkTo(router, value) {
            this.$router.push({ name: router, keyword: value })
        },
    }
}
</script>

<style>
.el-dropdown-menu__item {
    width: 100px;
}
</style>

<style lang="scss" type="text/scss">
.navbar {
    min-width: 1200px;
    width: 100%;
    background: $c-nav-bg;
    .header {
        .com-header {
            display: flex;
            width: 1200px;
            height: 36px;
            margin: 0 auto;
            padding: 10px;
            font-size: 13px;
            align-items: center;
            cursor: pointer;
            color: #a1a1a1;
            .header-right {
                width: 170px;
                height: 100%;
                display: flex;
                align-items: center;
                border-left: 1px solid $c-border-opacity;
                border-right: 1px solid $c-border-opacity;
                .el-dropdown {
                    border-right: 1px solid $c-border-opacity;
                }
                .drop {
                    width: 85px;
                    height: 100%;
                    color: #a1a1a1;
                    padding: 0 12px;
                    text-align: center;
                    .nav {
                        display: flex;
                    }
                }
            }
        }
        .menu {
            width: 100%;
            background: #fff;
            width: 100%;
            border-bottom: 1px solid $c-border;
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);

            .menu__search {
                width: 1200px;
                margin: 0 auto;
                padding: 33px 0;
                .img {
                    margin: 0 5px;
                    display: flex;
                    align-items: center;
                    :first-child {
                        width: 203px;
                        height: 46px;
                    }
                    :last-child {
                        width: 95px;
                        height: 26px;
                    }
                }
                .menu__search--input {
                    width: 45%;
                    height: 36px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: 2px solid $c-primary;
                    input {
                        width: 400px;
                        height: 24px;
                        padding: 10px;
                        margin: 0;
                        border: 0;
                    }
                    .el-button {
                        background-color: $c-primary;
                        border-radius: 0;
                        border-color: $c-primary;
                        color: white;
                    }
                }
                .menu__order {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 125px;
                    height: 36px;
                    padding: 6px 10px;
                    background: $c-border;
                    font-size: 9px;
                    color: $c-primary;
                    margin-left: 50px;
                    img {
                        width: 15px;
                        height: 15px;
                        margin-right: 9px;
                    }

                    .el-tag {
                        color: #fff;
                        border-radius: 10px;
                    }
                }
            }
            .menu__select {
                width: 1200px;
                height: 42px;
                margin: 0 auto;
                display: flex;
                color: #fff;

                &-all {
                    width: 186px;
                    z-index: 999;
                    color: #fff;

                    .menu__select-title {
                        width: 100%;
                        height: 43px;
                        font-size: 16px;
                        cursor: pointer;
                        background-color: $c-primary;
                        padding: 10px 20px;
                    }

                    .all__dropdown {
                        display: none;
                        position: absolute;
                        width: 186px;
                        min-height: 420px;
                        background: rgba(0, 0, 0, 0.8);
                        color: #fff;
                        font-size: 14px;
                        transition: height 1s;
                        &-item {
                            width: 100%;
                            height: 48px;
                            cursor: pointer;
                            .el-row {
                                padding: 13px 20px;
                            }
                        }
                        &-item:hover {
                            background: rgba(255, 255, 255, 0.2);
                        }
                        .item__second {
                            position: absolute;
                            display: none;
                            top: 0;
                            left: 185px;
                            min-width: 800px;
                            min-height: 100%;
                            padding: 21px 41px;
                            color: gray;
                            font-size: 14px;
                            background: rgba(255, 255, 255, 0.95);
                            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
                            .el-row {
                                border-bottom: 1px solid $c-border-opacity;
                                padding: 13px 0;
                            }
                            &-title {
                                color: black;
                                font-weight: 500;
                            }
                            &-item {
                                margin: 0 10px;
                            }
                        }
                    }
                    .menu__select-title:hover + .all__dropdown {
                        display: block;
                    }
                    .all__dropdown:hover {
                        display: block;
                    }
                    .all__dropdown-item:hover + .item__second {
                        display: block;
                    }
                }
                .el-menu--horizontal {
                    .el-menu-item {
                        display: flex;
                        align-items: center;
                        height: 42px;
                    }
                }
            }
        }
    }
}
</style>

