 import VueRouter from 'vue-router';
 import Vue from 'vue';
 Vue.use(VueRouter);

import CarLun from '../page/modileCarLun/CarLun.vue';
import Adress from '../page/modileCarLun/getAdress.vue';
import FaqPage from '../page/modileCarLun/Faq.vue';
 const router = new VueRouter({
     routes:[
         {
             path:'/index',
             component:CarLun
         },{
            path:'/getAdress',
            component:Adress
        },{
            path:'/faq',
            component:FaqPage
        },{
             path:'*',
             redirect:'/index'
         }
     ]
 })

 // 导航守卫
router.beforeEach((to, from, next)=>{
    console.log('1111');
    next();
})
  
router.afterEach((to, from, next)=>{
  
})
  
 export default router;