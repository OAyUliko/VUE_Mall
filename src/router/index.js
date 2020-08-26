import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{ /* 默认路由 */
      path: '',
      redirect: '/home'
    },
    { /* 懒加载 */
      path: '/home',
      component: () => (import('../views/home/Home'))
    }, {
      path: '/categroy',
      component: () => (import('../views/categroy/Categroy'))
    }, {
      path: '/cart',
      component: () => (import('../views/cart/Cart'))
    }, {
      path: '/profile',
      component: () => (import('../views/profile/Profile'))
    }
  ],
  mode: 'history'
})

export default router
