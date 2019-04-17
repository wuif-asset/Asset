import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/login';
import admin from './views/admin/admin';
import main from './views/main/index';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {path:'/login',name:'login',component:Login,meta:{title:'登录'}},
    {path:'/main',name:'main',component:main,meta:{title:'后台管理页面'},
        children:[
            {path:'admin',name:'admin',component:admin,meta:{title:'添加管理员'}}
        ]
    },

  ]
})
