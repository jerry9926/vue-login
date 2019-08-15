<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <template v-for="(item,index) in levelList">
                <el-breadcrumb-item v-if="item.meta.title" :key="item.path">
                    <span
                        v-if="item.redirect==='noredirect'||index==levelList.length-1"
                        class="no-redirect"
                    >{{ item.meta.title }}</span>
                    <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
                </el-breadcrumb-item>
            </template>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
    data() {
        return {
            levelList: null
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    created() {
        this.getBreadcrumb()
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => {
                if (item.name) {
                    return true
                }
            })
            const first = matched[0]
            if (first && first.name !== 'dashboard') {
                matched = [{ path: '/dashboard', meta: { title: '首页' } }].concat(matched)
            }
            _decorate(matched)
            this.levelList = matched

            /**
             * 针对特殊需求，封装一个装饰函数
             * 路由为2级，但是业务需求面包屑可能需要三层
             * */
            function _decorate(arr) {
                if (!arr) return false
                let insertIndex
                let insertItem
                arr.forEach((item, index) => {
                    if (item.meta.insertRoute) {
                        insertIndex = index
                        insertItem = item.meta.insertRoute
                    }
                })
                if (insertItem) {
                    arr.splice(insertIndex, 0, insertItem)
                }
            }
        },
        pathCompile(path) {
            // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
            const { params } = this.$route
            var toPath = pathToRegexp.compile(path)
            return toPath(params)
        },
        handleLink(item) {
            const { redirect, path } = item
            if (redirect) {
                this.$router.push(redirect)
                return
            }
            this.$router.push(this.pathCompile(path))
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
        color: #97a8be;
        cursor: text;
    }
}
</style>
