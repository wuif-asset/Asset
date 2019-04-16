import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.use(require('vue-wechat-title'));
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Reset from 'u-reset.css';

Vue.use(ElementUI);
Vue.use(Reset);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
