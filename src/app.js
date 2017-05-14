import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './router.js'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:routers
})

new Vue({
    el:'#app',
    render:h=>h(App),
    router
})