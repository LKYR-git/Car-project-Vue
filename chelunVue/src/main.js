import Vue from 'vue'

import App from './page/modileCarLun/CarLun.vue'
//import App from './page/CLDataPc.vue'

// 引入vuex的实例store
import store from './store/index';

// 引入echarts 
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

//引入vant
import { Popup,Picker, } from 'vant';

Vue.use(Popup);
Vue.use(Picker);

//引入路由
import router from './routes/index';
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})