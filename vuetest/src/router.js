import VueRouter from 'vue-router'
import HomeContainer from '../src/components/tabbar/HomeContainer.vue'
import MemberContainer from '../src/components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../src/components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../src/components/tabbar/SearchContainer.vue'


var router = new VueRouter({
    routes:[
        {path :'/home', component: HomeContainer},
        {path :'/member', component: MemberContainer},
        {path :'/shopcar', component: ShopcarContainer},
        {path :'/search', component: SearchContainer}
    ],
    linkActiveClass:'mui-active'
})
export default router