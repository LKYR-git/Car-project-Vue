import mock from '../../mock/mock.js';
console.log('mock...',mock);
let data=mock.attention_chart;
let data1 = mock.attention_rank;
let nums = mock.win_rank;
let arr =[];
let arr1= [];
let number= [];
// (0.545355*100).toFixed(1)+'%'
for(let k in data){
    arr.push({name:k,type:'line',stack:'总量',data:Object.values(data[k])})
}
for(let key in data1){
    console.log('key...',key,'data...',data1[key])
    arr1.push({name:key,type:data1[key]})
}
for(let key in nums){
    //console.log('key...',key,'data...',data1[key])
    number.push({name:key,type:(nums[key]*100).toFixed(1)+'%'})
}
console.log(arr1);
console.log(number);
const state={
    arr:[],
    arr1:[],
    number:[]
}
const mutations = {
    getCarList:(state,action)=>{
      console.log('state...',state,'actions...',action)
      state.arr=arr;
      state.arr1=arr1;
      state.number=number
    }
}
export default {
    namespaced:true,
    state,
    mutations
}