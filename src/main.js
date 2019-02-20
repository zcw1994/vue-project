import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.less'
import 'nprogress/nprogress.css'
import router from './router'

// 开发模式的小提示 是否显示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
