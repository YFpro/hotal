import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import store from "../store";
const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/Home'),
    meta:{title:'首页'}
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/index/Detail'),
    meta:{title:'详情'}
      },
      {
        path: '/zf',
        name: 'zf',
        component: () => import('../views/dingdan/zf'),
        meta:{title:'支付'}
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/index/Login'),
        meta:{title:'登录'}
      },
      {
        path: '/alldd',
        name: 'alldd',
        component: () => import('../views/dingdan/alldindan'),
        meta:{title:'全部订单',auth:true}
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('../views/HotelSearch/SearchList'),
        meta:{title:'酒店搜索'}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/province',
    name: 'Province',
    component: () => import('../views/province/province'),
    meta:{title:'省份选择'}
  },
  {
    path: '/province1',
    name: 'Province1',
    component: () => import('../views/province/province1'),
    meta:{title:'省份选择'}
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/calendar/Calendar'),
    meta:{title:'日期选择'}
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/dingdan/success'),
    meta:{title:'支付成功'}
  },
  {
    path: '/haohua',
    name: 'haohua',
    component: () => import('../views/index/HotelDetails'),
    meta:{title:'豪华'}
  },
  {
    path: '/own',
    name: 'own',
    component: () => import('../views/index/Profile'),
    meta:{title:'个人中心',auth:true}
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/index/order'),
    meta:{title:'订单详情'}
  },
  {
    path: '/ordercalendar',
    name: 'ordercalendar',
    component: () => import('../views/calendar/orderCalendar'),
    meta:{title:'订单日期'}
  },
]
const router = new VueRouter({
  routes,
})
router.beforeEach((to, from, next) => {
          let {title,auth}=to.meta;
          document.title=title || '去哪儿旅行';
          if(auth){
            let token=store.state.token;
            if(token){
              next();
            }else {
              next({name:'login',query:{redirect:to.name}});
            }
          }else{
            next();
          }
})
export default router
