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
          <Upload/>
          <div class="countList">
              <ul>
                  <li><p>服务类型</p><p @click="showChange">{{info.type}}<span>></span></p></li>
                  <li><p>当前驾照签发城市<span></span></p><p><input @click="showCity" placeholder="请选择签发地"/>{{info.city.join(' ')}}</p></li>
                  <li><p>可补还的签发城市</p><p><input placeholder="请选择补还地"/></p></li>
                  <li><p>服务费</p><p>￥399</p></li>
                  <li><p>优惠</p><p><span>></span></p></li>
              </ul>
                <van-popup v-model="showType" position="bottom" overlay>
                   <van-picker :columns="typeArray" @cancel="onCancel" show-toolbar title="请选择服务类型" @confirm="onConfirm"/>
                </van-popup>

                <van-popup v-model="ShowCity" position="bottom" :overlay="true">
                    <van-picker :columns="cityArray" @change="cityChange" ref="cityPicker" @cancel="onCancel" show-toolbar title="请选择签发城市" @confirm="cityConfirm"/>
                </van-popup>
          </div>
          <div class="countQustion">
            <a href="javascript:(0)">常见问题?</a>
        </div>
      </div>
      <div class="footer">
          <div class="left">
              <p>实付：<span>￥399</span></p>
          </div>
          <div class="right">立即支付</div>
      </div>
  </div>
</template>

<script>
import chelunJSBridge from '../utils/JSBrige.js';
import Upload from '../component/upload.vue';
import {cityList,costList} from '../api/index.js';
export default {
  name: 'app',
  data () {
    return {
      showType:false,
      ShowCity:false,
      typeArray:['换驾照','补驾照'],
     // 签发城市
      cityList: [],
      cityArray: [],
      info: {
        type: '',
        city: []
      }
    }
  },
  created(){
      this.getCityList()
  },
  components: {
    Upload
  },
  methods: {
    //城市
    async getCityList(){
        let res = await cityList();
        res.data.forEach((item,index)=>{
            item.list.forEach(items=>{
                delete items.list;
            })
        })

      console.log('res...',res);
      this.cityList = res.data;
      this.cityArray = [{
        values: this.cityList.map(item=>item.name)
      }, {
        values: this.cityList[0].list.map(item=>item.name)
      }]
    },cityChange(picker, values){
      let index = this.cityList.findIndex(item=>item.name == values[0]);
      this.cityArray[1].values = this.cityList[index].list.map(item=>item.name)
      // console.log('picker...', picker, values, this.cityArray, this.$refs.cityPicker, this.cityList[index].list.map(item=>item.name));
      this.$refs.cityPicker.setColumnValues(1,  this.cityList[index].list.map(item=>item.name))
    },
    cityConfirm(values){
      this.info.city = values;
      this.ShowCity = false;
    },
    clickCity(){
      this.ShowCity = true;
    },
    showCity(){
        this.ShowCity = true;
    },

    //换补驾照
    showChange(){
        this.showType=true;
    },
    onCancel(){
        this.showType=false;
        this.ShowCity = false;
    },
    onConfirm(value){
        console.log('values...',value);
        this.info.type=value;
        this.onCancel();
    },

    
  }
}
</script>

<style lang="scss" scope>
    @import '../scss/commons.scss';
    html,body,.Carwrap{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .Carwrap{
        display: flex;
        flex-direction: column;
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
                    li:nth-child(3){
                        text-align: right;
                        p:nth-child(2){
                            input{
                                border: none;
                                width: 52%;
                                height: 40%;
                                text-align:right;
                            }
                           
                        }
                    }
                    li:nth-child(2){
                        p:nth-child(2){
                            text-align: right;
                            input{
                                border: none;
                                width: 52%;
                                height: 40%;
                                text-align:right;
                            }
                        }
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
    }
</style>
