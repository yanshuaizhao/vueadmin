import Layout from './components/common/layout.vue'
import SysUser from './page/sys/user_list.vue';
import ProjectList from './page/project/list.vue';
import ArticleList from './page/article/list.vue';

export default [{
        path: '/sys',
        component: Layout,
        children: [{
                name: '用户管理',
                path: 'user',
                component: SysUser
            }
        ]
    },
    {
        path: '/project',
        component: Layout,
        children: [
            {
                name: '项目管理',
                path: 'list',
                component: ProjectList
            }
        ]
    },
    {
        path: '/article',
        component: Layout,
        children: [
            {
                name: '文章管理',
                path: 'list',
                component: ArticleList
            }
        ]
    },
    {
        path: '*',
        redirect: '/sys/user'
    }
]
