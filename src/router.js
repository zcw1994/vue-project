// 路由 配置文件
import Vue from 'vue'
import VueRouter from 'vue-router'
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
      component: () => import('./views/City/index.vue')

    },
    {
      // 详情页
      path: '/detail/:id',
      component: () => import('./views/Detail/Index.vue')
    },
    {
      // 个人管理页面
      path: '/manage',
      component: () => import('./views/Manage/Index.vue')
    },
    {
      // 卖座卡页面
      path: '/card',
      component: () => import('./views/City/index.vue')
      // beforeEnter (to, from, next) {
      //   next(false);
      // }
    },
    {
      // 余额页面
      path: '/yue',
      component: () => import('./views/Yue/Index.vue')
    },
    {
      // 设置页面
      path: '/set',
      component: () => import('./views/Set/Index.vue')
    },
    {
      // 登录页面
      path: '/login',
      component: () => import('./views/Login/Index.vue')
    },
    {
      // 搜索影院页面
      path: '/search',
      component: () => import('./views/Search/Index.vue')
    },
    {
      // 影片首页页面
      // localhost:8080/#/     ->   Film.vue
      path: '/', // url 路径
      component: () => import('./views/Home/Index.vue'),
      children: [
        {
          path: 'films',
          component: () => import('./views/Home/Film/Index.vue'),
          // beforeEnter (to, from, next) {
          //   if (store.state.curCityName === '') {
          //     next('/city')
          //   } else {
          //     next()
          //   }
          // },
          children: [
            {
              name: 'nowPlaying',
              path: 'nowPlaying',
              component: () => import('./views/Home/Film/NowPlaying/Index.vue')
            },
            {
              name: 'comingSoon',
              path: 'comingSoon',
              component: () => import('./views/Home/Film/ComingSoon/Index.vue')
            },
            {
              path: '',
              redirect: '/films/nowPlaying'
            }
          ]
        },
        {
          path: 'cinema',
          component: () => import('./views/Home/Cinema/Index.vue')
        },
        {
          path: 'center',
          component: () => import('./views/Home/Center/Index.vue')
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
