
import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from './views/Film.vue'
import Center from './views/Center.vue'
import Cinema from './views/Cinema.vue'
import Home from './views/Home.vue'
import City from './views/City.vue'
import Detail from './views/Detail.vue'
import NowPlaying from './views/NowPlaying.vue'
import comingSoon from './views/comingSoon.vue'

// 使用use 方法 安装这个 vue-router 插件
Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'hash',
  // 配置路由对照表 ，一个url地址 对照着一个路由组件 即视图组件，就可以渲染不同页面
  routes: [
    {
      // localhost:8080/#/films     ->   Film.vus
      path: '/city', // url 路径
      component: City
    },
    {
      // 详情页
      path: '/detail/:id',
      component: Detail
    },
    {
      // localhost:8080/#/cinema     ->   Cinema.vus
      path: '/', // url 路径
      component: Home,
      children: [
        {
          path: 'films',
          component: Film,
          children: [
            {
              name: 'nowPlaying',
              path: 'nowPlaying',
              component: NowPlaying
            },
            {
              name: 'comingSoon',
              path: 'comingSoon',
              component: comingSoon
            },
            {
              path: '',
              redirect: '/films/nowPlaying'
            }
          ]
        },
        {
          path: 'cinema',
          component: Cinema
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: 'films'
        }
      ]

    },
    {
      // localhost:8080/#/..asasd   -> loaclhost:8080/#/
      path: '*', // url 路径
      redirect: '/'
    }
  ]
})

export default router;
