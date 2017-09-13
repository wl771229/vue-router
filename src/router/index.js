import Vue from 'vue'
import Router from 'vue-router'
// 需要什么页面首先就要引入哪个页面
import Blue from '../components/blue'
import Yellow from '../components/yellow'

Vue.use(Router)

export default new Router({
  // 去掉url上面的#
  mode: 'history',
  routes: [
    {
      // 路径
      path: '/blue',
      // 上面的一样的
      component: Blue
    },
    {
      path: '/yellow',
      component: Yellow
    }
  ]
})
