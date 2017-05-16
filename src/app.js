import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './router.js'
import Vuex from 'vuex'
import { ADD_COUNT } from './mutation.js'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
    routes: routers
})

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        count: 0,
        sname:'wen'
    },
    getters: {
        stateName: state => {
            return 'wen store'
        }
    },
    mutations: {
        [ADD_COUNT](state, funck) {
            state.count += funck.num
        },
        changeName(state,name){
            state.sname = name
        }
    },
    actions: {
        [ADD_COUNT](context, funck) {
            context.commit(ADD_COUNT, funck)
        }
    },
    plugins: [(store) => {
        store.subscribe((mutation, state) => {
            console.log(mutation)
            console.log(state)
        })
    }]
})

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})