import Vue from 'vue'
import VueRouter from 'vue-router'
import main from './main'

Vue.use(VueRouter)

const guide = [{
        path: "/",
        name: "home",
        component: () =>
            import ('@/views/home')
    },
    {
        path: "/accounts",
        name: "accounts",
        component: () =>
            import ('@/views/accounts'),
        children: [{
                name: 'login',
                path: 'login',
                meta: {
                    name: '帐号相关: 登录'
                },
                // @ts-ignore
                component: () =>
                    import ('@/views/accounts/login'),
            },
            {
                name: 'register',
                path: 'register',
                meta: {
                    name: '帐号相关: 注册'
                },
                // @ts-ignore
                component: () =>
                    import ('@/views/accounts/register'),
            }
        ]
    },
    {
        name: 'about',
        path: '/about',
        meta: {
            name: '关于我们'
        },
        component: () =>
            import ('@/views/home/about')
    },
    {
        name: 'notification',
        path: '/notification',
        meta: {
            name: '通知公告'
        },
        component: () =>
            import ('@/views/home/notification')
    },
    {
        name: 'questions',
        path: '/questions',
        meta: {
            name: '常见问题'
        },
        component: () =>
            import ('@/views/home/questions')
    },
]

const router = new VueRouter({
    // mode: 'hash',
    // base: process.env.BASE_URL,
    routes: [main, ...guide],

})
export const mainConfig = main
export default router