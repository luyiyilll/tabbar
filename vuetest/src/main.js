//入口文件
import Vue from 'vue'
import app from '../src/app.vue'
import VueRouter from 'vue-router'
import axios from 'axios' //引入axios

//全局使用axios
Vue.prototype.$axios = axios
//设置token
axios.defaults.headers.common['token'] = "f4c902c9ae5a2a9d8f84868ad064e706"
//设置请求头
axios.defaults.headers.post["Content-type"] = "application/json"

Vue.use(VueRouter)

import router from '../src/router.js'


import VueResource from 'vue-resource'
Vue.use(VueResource)


//按需导入mintui组件
import {Header, Swipe, SwipeItem} from '../node_modules/mint-ui'
import css from '../node_modules/mint-ui/lib/style.css'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

import '../lib/mui/dist/css/mui.min.css'
import '../lib/mui/examples/hello-mui/css/icons-extra.css'




var vm =new Vue({
    el : '#app',
    render:c=>c(app),
    router
})