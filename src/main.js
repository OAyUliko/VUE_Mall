import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'


import toast from './components/common/toast'

Vue.config.productionTip = false
//添加事件总线
Vue.prototype.$bus=new Vue();
//安装Toast插件
Vue.use(toast)

//使用懒加载
Vue.use(VueLazyLoad,{
  loading:require('@/assets/img/commom/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
