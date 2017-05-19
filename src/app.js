import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
// import 'materialize-css/bin/materialize.js'
// import 'materialize-css/bin/materialize.css'
// import './style/a.css'
// import './style/b.css'
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'

// Vue.use(MuseUI)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})