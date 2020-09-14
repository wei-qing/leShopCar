import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import 'lib-flexible/flexible';


import 'vant/lib/index.css';
import '@/plugins/vant'

import getlist from './network/index';

Vue.use(ElementUI);


Vue.prototype.$getlist=getlist

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
