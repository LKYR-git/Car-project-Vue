
import Vue from 'vue';
import Vuex from 'vuex';
//监听的作用
import createLogger from 'vuex/dist/logger';
//引入仓库
//import app from './modules/app';
import upload from './modules/upload';
import PcCar from './modules/PcCar';
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    upload,
    PcCar,
    plugins:[createLogger()]
  }
})
