import Vue from 'vue'
import App from './CarLun.vue'
//import App from './CLDataPc.vue'
// 引入vuex的实例store
import store from './store/index';
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts;
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})