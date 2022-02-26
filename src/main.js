import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'u-reset.css'
// import vconsole from 'vconsole'
// new vconsole();
import { Loading } from 'vant';
Vue.use(Loading);
import store from "./store";
Vue.config.productionTip = false
import { Cell,CellGroup } from 'vant';
Vue.use(Cell,CellGroup);
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import { Calendar } from 'vant';
Vue.use(Calendar);
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse);
Vue.use(CollapseItem);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
