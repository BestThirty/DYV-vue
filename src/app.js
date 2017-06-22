//加载vue
import Vue from 'vue'

//加载mint组件
import Mint from 'mint-ui'

//加载app组件
import app from './app.vue'

//加载mui样式
import '../statics/css/mui.css'
import '../statics/css/icons-extra.css'
//加载自己写的样式
import '../statics/css/style.css'

//加载mint-ui的样式
import '../node_modules/mint-ui/lib/style.css'

//加载组件
import home from './components/Home/home.vue'
import member from './components/Member/member.vue'
import search from './components/Search/search.vue'
import shopcar from './components/Shopcar/shopcar.vue'

//加载路由
import vueRouter from 'vue-router'
//使用路由模块
Vue.use(vueRouter);
//使用mint模块
Vue.use(Mint);
//创建路由对象
let router =new vueRouter({
    //设置全局链接激活时的样式，不用点击
    linkActiveClass:'mui-active',
    routes:[
        //name：路由名字，path：路径，component：相应组件，redirect：后面要跟路径
        {name: 'Root',path:'/',redirect:'/home'},
        {name: 'Home',path:'/home',component:home},
        {name: 'Member',path:'/member',component:member},
        {name: 'Search',path:'/search',component:search},
        {name: 'Shopcar',path:'/shopcar',component:shopcar},
    ]
});


var vm=new Vue({
    el:'#app',
    render:h=>h(app), //h:crearElement(vue里面提供的函数帮我们编译显示组件)
    //使用路由对象，之后在app.vue里面显示内容
    router:router
});