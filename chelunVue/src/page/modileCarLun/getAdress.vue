<template>
  <div>
      <p @click="doshare">分享好东西</p>
      <div>
            <canvas ref="canvas"></canvas>
      </div>
</div>

  
</template>
<script>
import {shareDown,uploadBase64,imgToBase64} from '../../api/index.js';
import Bg from '../../assets/bg.jpg';
export default {
  data(){
    return{
      src:''
    }
  },
  computed:{
    canvas(){
      return this.$refs.canvas;
      
    },
    context(){
      return this.$refs.canvas.getContext('2d');
      console.log(this.$refs.canvas)
    }
  },
    methods:{
      doshare(){
        shareDown();
      },
      async init(){
        let {canvas,context} = this;
        let img = await this.loadImage(Bg);
        canvas.width = img.width;
        canvas.height = img.height;
        //绘制背景
        context.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height);

        //绘制头像
        const res =  await imgToBase64('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547004465097&di=83d07768dc838f91db75fcc6e2d72452&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Ftj%2F2018-10-15%2F5bc459c049b4c.jpg')
        console.log('res...',res);
        const avatarUrl = res.data.base64;
        let avatar = await this.loadImage(avatarUrl);
        context.drawImage(avatar,0,0,avatar.width,avatar.height,97,747,86,86);
        //绘制文本
        context.font = '26px 微软雅黑';
        context.fillStyle = '#265f18';
        let text = context.measureText('我的澜');
        context.fillText('我的澜',140-text.width/2,860);
        context.save();

        //生成图片
        let base64 = canvas.toDataURL('image/jpeg',0.6);
        console.log('base64...',base64)
        const upload = await uploadBase64(base64);
        console.log('upload...',upload)
      },
       loadImage(src){
        return new Promise((resolve, reject)=>{
          let img = new Image();
          img.src = src;
          img.onload = ()=>{
            resolve(img);
          }
          img.onerrpr = ()=>{
            reject();
          }
        })
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
      
    },
    mounted(){
      this.init();
    },
}
</script>
<style lang="scss" scoped>
  // img{
  //   width: 300px;
  //   height: 300px;
  //   display: block;
  // }
  canvas{
    width: 100%;

  }
</style>
