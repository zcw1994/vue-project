import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import http from './utils/http';
import './assets/styles/reset.less';
import 'nprogress/nprogress.css';
import 'animate.css';

// console.log(process.env)

// 将 http 绑定给 vue 的原型 $http 上
Vue.prototype.$http = http;
// 开发模式的小提示 是否显示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
