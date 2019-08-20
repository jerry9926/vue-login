import Vue from 'vue'
import '@/styles/reset.css'

import ElementUI from 'element-ui'
// 自定义element-ui样式
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/permission' // permission control
import '../static/font/iconfont.css'

// mock
require('./mock/index')

Vue.use(ElementUI)

Vue.config.productionTip = false

const init = () => {
    /* eslint-disable no-new */
    new Vue({ el: '#app', router, store, render: h => h(App) })
}

init()
