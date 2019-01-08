<template>
  <div class="Carwrap">
      <div class="header">
          <!-- <button @click="login">登录</button> -->
          <div class="heade">订单提交</div>
          <div class="heades">填写收货地址</div>
          <div class="heades">正在办理</div>
          <div>办理完成</div>
      </div>
      
      <div class="count">
          <div class="banner">
              <img src="http://localhost:8080/src/assets/banner@3x.png" alt="">
              <p>已有<span>26576</span>个用户在车轮补驾照成功</p>
          </div>
          <!-- 上传图片 -->
          <Upload/>
          <!--选择城市 -->
          <div class="countList">
              <ul>
                  <TypeChange/>
                  <CityType/>
                  <li><p>服务费</p><p>￥399</p></li>
                  <li><p>优惠</p><p><span>></span></p></li>
              </ul>
          </div>
          <div class="countQustion">
            <router-link to='/faq'>常见问题?</router-link>
        </div>
         <div class="share">
                <router-link to="/getAdress">分享页</router-link>
          </div>
      </div>
      <div class="footer">
          <div class="left">
              <p>实付：<span>￥399</span></p>
          </div>
          <div class="right">
              <p @click="pay">立即支付</p>
          </div>
      </div>
      <div id="cc">
          <img  src="http://localhost:8080/src/assets/cc-icon.png" alt="">
      </div>
  </div>
</template>

<script>
import chelunJSBridge from '../../utils/JSBrige.js';
import Upload from '../../component/upload.vue';
import TypeChange from '../../component/TypeChang.vue';
import CityType from '../../component/CityType.vue';
import {doPay} from '../../api/index.js';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods:{
      pay(){
          doPay();
      }
  },
  components: {
    Upload,TypeChange,CityType
  }
}
</script>

<style lang="scss" scope>
    @import '../../scss/commons.scss';
    html,body,.Carwrap{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .Carwrap{
        display: flex;
        flex-direction: column;
        position: relative;
        .header{
            width: 100%;
            height: 40px;
            line-height: 40px;
            border-bottom:1px solid #ccc;
            display: flex;
            div{
                flex: 1;
                text-align: center;
                font-size: .24rem;
                flex-basis: auto;
                position: relative;
                font-size: .28rem;
                color: #3aaffd;
            }
            .heade{
                background-color: #3aaffd;
                color: #fff;
            }
            .heade::after {
                content: '';
                display: block;
                position: absolute;
                border-top: .4rem solid #fff;
                border-bottom: .4rem solid #fff;
                border-left: .15rem solid #3aaffd;
                top: 0;
                right: -.15rem;
                z-index: 1;
            }
            .heades::after {
                content: '';
                display: block;
                position: absolute;
                border-top: .4rem solid #fff;
                border-bottom: .4rem solid #fff;
                border-left: .15rem solid #ccc;
                top: 0;
                right: -.15rem;
                z-index: 1;
            }

        }
        .count{
            flex: 1;
            background-color: #eee;
            .banner{
                width: 100%;
                height:2.2rem;
                overflow: hidden;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                p{
                    color: #fb611f;
                    font-size: .4rem;
                    text-align: center;
                    position: absolute;
                    width: 100%;
                    left: 0;
                    top: .5rem;
                }
            }
            .countList{
                width: 100%;
                height: auto;
                margin:.2rem 0;
                background: #fff;
                ul{
                    width: 100%;
                    padding: 0 .2rem;
                    box-sizing: border-box;
                    li{
                        width: 100%;
                        padding: 0 .2rem;
                        box-sizing: border-box;
                        height: 1rem;
                        line-height: 1rem;
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 1px solid #ccc;
                        p{
                            font-size: .3rem;
                        }
                    }
                    li:nth-child(5){
                        border: none;
                    }
                    
                    
                    li:nth-child(4){
                        //border-bottom: .5rem solid #eee;
                        p:nth-child(2){
                            text-align: right;
                            color: #fb611f;
                            font-weight: bold;
                        }
                    }
                    li:nth-child(5){
                        //border-bottom: .5rem solid #eee;
                        p:nth-child(2){
                            text-align: right;
                            font-weight: bold;
                        }
                    }
                }
            }
            .countQustion{
                width: 100%;
                height: 20px;
                line-height: 20px;
                text-align: center;
            }
            .share{
                width: 100%;
                height: 20px;
                line-height: 20px;
                text-align: center;
            }
        }
        .footer{
            width: 100%;
            height: .85rem;
            line-height: .85rem;
            border-top: 1px solid #ccc;
            display: flex;
            .left{
                width: 70%;
                height: 10%;
                p{
                    font-size: .3rem;
                    padding: 0 20px;
                    box-sizing: border-box;
                    span{
                        color: #fb611f;
                        font-weight: bold;
                    }
                }
            }
            .right{
                width: 30%;
                height: 100%;
                background-color: #999;
                color: #eee;
                text-align: center;
                font-weight: bold;
                font-size: .3rem;
            }
        }
        #cc{
            width: 60px;
            height: 60px;
            position: absolute;
            right: .5rem;
            bottom: 1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
