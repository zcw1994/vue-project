
import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from './views/Film.vue'
import Center from './views/Center.vue'
import Cinema from './views/Cinema.vue'
import Home from './views/Home.vue'
import City from './views/City.vue'
import Detail from './views/Detail.vue'
import NowPlaying from './views/NowPlaying.vue'
import ComingSoon from './views/ComingSoon.vue'
import Card from './views/Card.vue'
import Yue from './views/Yue.vue'
import Set from './views/Set.vue'
import Login from './views/Login.vue'
import Manage from './views/Manage.vue'
/* 配合后置守卫的数据读取进度条的引入 */
import ngprogress from 'nprogress'

ngprogress.configure({ showSpinner: false })
// 使用use 方法 安装这个 vue-router 插件
Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'hash',
  // 配置路由对照表 ，一个url地址 对照着一个路由组件 即视图组件，就可以渲染不同页面
  routes: [
    {
      // 城市页面
      // localhost:8080/#/city    ->   City.vus
      path: '/city', // url 路径
      component: City
      // component: () => import('./views/City.vue')webpackChunkName:''
    },
    {
      // 详情页
      path: '/detail/:id',
      component: Detail
      // component: () => import('./views/Detail.vue')
    },
    {
      // 个人管理页面
      path: '/manage',
      component: Manage
    },
    {
      // 卖座卡页面
      path: '/card',
      component: Card
      // component: () => import('./views/City.vue')
      // beforeEnter (to, from, next) {
      //   next(false);
      // }
    },
    {
      // 余额页面
      path: '/yue',
      component: Yue
      // component: () => import('./views/Yue.vue')
    },
    {
      // 设置页面
      path: '/set',
      component: Set
      // component: () => import('./views/Set.vue')
    },
    {
      // 登录页面
      path: '/login',
      component: Login
      // component: () => import('./views/Login.vue')
    },
    {
      // 影片首页页面
      // localhost:8080/#/     ->   Film.vue
      path: '/', // url 路径
      component: Home,
      // component: () => import('./views/Home.vue'),
      children: [
        {
          path: 'films',
          component: Film,
          // component: () => import('./views/Film.vue'),
          children: [
            {
              name: 'nowPlaying',
              path: 'nowPlaying',
              component: NowPlaying
              // component: () => import('./views/NowPlaying.vue')
            },
            {
              name: 'comingSoon',
              path: 'comingSoon',
              component: ComingSoon
              // component: () => import('./views/ComingSoon.vue')
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
          // component: () => import('./views/Cinema.vue')
        },
        {
          path: 'center',
          component: Center
          // component: () => import('./views/Center.vue')
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
router.beforeEach((to, from, next) => {
  ngprogress.start();
  let nickname = sessionStorage.getItem('nickname');
  let list = ['/card', '/yue', '/set', '/manage']
  // 当匹配到 去往这些页面，且nickname 不存在的时候
  if (list.indexOf(to.path) > -1 && !nickname) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath // 当去往这些页面 并没有登录被阻止的时候，将要去往的路径给存储下来
      }
    });
  } else {
    next();
  }
})
router.afterEach((to, from) => {
  ngprogress.done()
})

export default router;
