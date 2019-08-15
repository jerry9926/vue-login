import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// import { setTokenForTest } from '@/utils/auth'

const whiteList = ['/', '/login', '/404'] // 不重定向白名单

// 路由变更时进行权限验证
router.beforeEach((to, from, next) => {
    NProgress.start()
    document.title = to.meta.title || '可乐门户'

    // 在白名单中，直接跳转
    if (whiteList.indexOf(to.path) >= 0) {
        next()
        return
    }

    // 不在白名单中，需要验证 token
    // if (!store.state.user.token) {
    //     next(`/login?redirect=${to.path}`)
    //     NProgress.done()
    //     return
    // }

    next()
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})
