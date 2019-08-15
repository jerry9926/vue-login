/**
 * 布局一
 * 子模块：XX
 */
import Layout from '@/views/layout/Layout'

export default {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    name: 'Home',
    meta: { title: '可乐门户', icon: 'user-mgt' },
    children: [
        // 企业管理
        {
            path: 'index',
            name: 'Index',
            component: () => import('@/views/home/index'),
            meta: { title: '首页' }
        },
        // {
        //     path: 'enterprise/add',
        //     name: 'EnterpriseAdd',
        //     component: () => import('@/views/client/enterprise/add'),
        //     hidden: true,
        //     meta: {
        //         title: '创建企业',
        //         insertRoute: {
        //             path: '/client/enterprise',
        //             name: 'Enterprise',
        //             meta: { title: '企业管理' }
        //         }
        //     }
        // }
    ]
}
