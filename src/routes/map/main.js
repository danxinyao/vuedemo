const Main = resolve => require(['views/main/index.vue'], resolve) // 主页框架
const Demo = resolve => require(['views/demo/index.vue'], resolve) // demo


export default [
    {
        path: '/main',
        name: 'main',
        component: Main,
        meta: {
            title: '管理系统',
        },
        children: [
            {
                path: '/demo',
                name: 'demo',
                component: Demo
            }
        ]
    }
]