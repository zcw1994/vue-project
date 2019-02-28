import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './assets/styles/reset.less';
import 'nprogress/nprogress.css';
import 'animate.css';

console.log(process.env)
// 开发模式的小提示 是否显示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
