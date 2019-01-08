<template>
  <div>
      <p @click="doshare">分享好东西</p>
</div>
  
</template>
<script>
import {shareDown} from '../../api/index.js';
export default {
  data(){
    return{

    }
  },
    methods:{
      doshare(){
        shareDown();
      }
    },
    created(){
      //分享到朋友圈
      window['CHELUN_SHARE_DATA_WXTIMELINE']={
        title:'这是一个大图',
        imgUrl:'http://img.zcool.cn/community/0199c95a4b4aa2a80121974176b572.jpg@1280w_1l_2o_100sh.jpg',
        type:'photo'
      },
      //分享到会话
      window['CHELUN_SHARE_DATA_WXMESSAGE']={
        title:'你最爱的李钟硕',
        desc:'微信分享秘笈',
        link:'https://baike.baidu.com/item/%E6%9D%8E%E9%92%9F%E7%A1%95/10241759?fr=aladdin',
        imgUrl:'http://img.idol001.com/origin/2017/01/31/ab3bcebd9d6f0a7fb6304f5f9041cdba1485840462_watermark.jpg',
      }
    }
}
</script>
<style lang="scss" scoped>

</style>
