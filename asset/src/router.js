import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/login';
import admin from './views/admin/admin';
import main from './views/main/index';
import Assetinsert from './views/asset/insert';
import Asset from './views/asset/asset';
import Assetsclass from './views/assetsclass/assetsclass';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {path:'/login',name:'login',component:Login,meta:{title:'登录'}},
    {path:'/main',name:'main',component:main,meta:{title:'后台管理页面'},
        children:[
            {path:'admin',name:'admin',component:admin,meta:{title:'添加管理员'}},
            {path: 'assetinsert', name: 'assetinsert', component: Assetinsert, meta: {title: '资产增加'}},
            {path: 'asset', name: 'asset', component: Asset, meta: {title: '资产管理'}},
            {path: 'assetsclass', name: 'assetsclass', component: Assetsclass, meta: {title: '分类查看'}}
        ]
    },

  ]
})
