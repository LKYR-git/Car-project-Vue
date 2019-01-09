
import JSBridge from '../utils/JSBrige.js';
//接口调用配置
//const host = /localhost/.test(window.location.host)?'http://123.206.55.50:11000':'http://123.206.55.50:11000';


//上传图片
export let uploadImg = (type)=>{
    return new Promise((resolve, reject)=>{
      JSBridge.invoke('device', 'chooseImage', {
        type,
        chooseCallbackName: function(res){
          resolve(res);
        }
      })
    })
  }
//吊起支付
export let doPay = () =>{
  JSBridge.invoke('app', 'pay', {
    price: 398.00,
    orderNum: '6486849305969374209',
    channels: ["weixin","alipay","baidu"],
    callbackUrl: "https://h5.chelun.com/2017/update-licence2/order.html"
  });
}
//吊起朋友圈 好友分享
export let shareDown =()=>{
  JSBridge.invoke('ui','shareMessage');
}


//sendRequest请求方式
function sendRequest(url, method = 'GET', data = {}) {
    let params = {
        method,
        headers: {
          'content-type': 'application/json'
        }
    };
    // 判断如果是一个post请求，带上请求体信息
    if (method == 'POST') {
        params.body = JSON.stringify(data);
    }
    // 判断请求查询url是否携带query
    if (url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${+new Date()}`
    }
    // 拼接登陆态token
    // url += `&token=${getToken()}`;
    return fetch(url, params)
      .then(res => res.json()).then(body=>body);
}

// 上传base64
export let uploadBase64 = (base64)=>{
  return sendRequest('http://123.206.55.50:11000/upload_base64', 'POST', {base64})
}
// 图片转成base64
export let imgToBase64 = (urls)=>{
  return sendRequest('http://123.206.55.50:11000/tobase64', 'POST', {url:urls})
}
// 获取驾照签发城市
export let cityList = ()=>{
    return sendRequest('/api/ExchangeJiaZhao/cityList');
}
  
  // 获取可补换城市
  export let costList = (...params)=>{
    return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${params[0]}&province_id=${params[1]}&city_id=${params[2]}`);
  }
