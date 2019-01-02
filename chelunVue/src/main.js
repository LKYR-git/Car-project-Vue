import Vue from 'vue'
import App from './page/CarLun.vue'
//import App from './CLDataPc.vue'

// 引入vuex的实例store
import store from './store/index';

// 引入echarts 
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

//引入vant
//import vant from 'vant';
// import 'vant/lib/index.css';
// import { Popup } from 'vant';
//console.log(Vant)
//Vue.use(vant);
//Vue.use(Popup);

//引入路由
import router from './routes/index';
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})