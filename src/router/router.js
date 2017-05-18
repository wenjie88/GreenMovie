import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = r => require.ensure([], () => r(require('../components/Home/Home.vue')), 'Home')
// const User = r => require.ensure([], () => r(require('../components/User.vue')), 'user')
// const Name = r => require.ensure([], () => r(require('../components/Name.vue')), 'Name')
const NoFound = r => require.ensure([], () => r(require('../components/NoFound.vue')), 'NoFound')

var routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: 'Home',
                component: Home
            }
        ]
    },
    { path: '*', component: NoFound },
]

export default new VueRouter({
    routes: routes
})

