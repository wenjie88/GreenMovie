const User = r => require.ensure([], () => r(require('./components/User.vue')), 'user')
const Home = r => require.ensure([], () => r(require('./components/Home.vue')), 'Home')
const Name = r => require.ensure([], () => r(require('./components/Name.vue')), 'Name')
const NoFound = r => require.ensure([], () => r(require('./components/NoFound.vue')), 'NoFound')

export default [
    {
        path: '/User',
        component: User,
        children: [
            {
                path: 'UserName/:id',
                component:Name
            }
        ]
    },
    { path: '/', component: Home },
    { path: '*', component: NoFound },
]