import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'

import './plugins'

import './axios'
import './permission'

// import styles
import './assets/css/global.css'
import './assets/css/me.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')