
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/base',
        component: () => import('@/pages/base.vue'),
        children: [
            {
                path: '/',
                component: () => import('@/pages/home.vue')
            },
            {
                path: '/user/login',
                component: () => import('@/pages/user/login.vue')
            },
            {
                path: '/user/register',
                component: () => import('@/pages/user/register.vue')
            }
        ]
    },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
