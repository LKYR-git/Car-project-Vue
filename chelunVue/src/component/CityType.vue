<template>
  <div>
      <li><p>当前驾照签发城市<span></span></p><p><input v-if="ShowChange" @click="cityClick"  placeholder="请选择签发地"/> <span v-else @click="cityClick">{{city.join(' ')}}</span> </p></li>
      <li><p>可补还的签发城市</p><p><input v-if="ShowChanges" @click="costClick" placeholder="请选择补还地"/> <span v-else @click="costClick">{{cost.join(' ') | filterCity(/\(签发地\)/g)}}</span> </p></li>
      <van-popup v-model="showCity" position="bottom">
        <van-picker :columns="cityColumns" show-toolbar title="选择签发城市"
          ref="cityPicker" @change="cityChange" @cancel="cityCancel" @confirm="cityConfirm"/>
      </van-popup>
      <van-popup v-model="showCost" position="bottom">
        <van-picker :columns="costColumns" show-toolbar title="选择补换城市"
          ref="costPicker" @change="costChange" @cancel="costCancel" @confirm="costConfirm"/>
      </van-popup>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
  name: 'CityPicker',
  data(){
    return {
      //切换
      ShowChange:true,
      ShowChanges:true,
      // 控制当前驾照
      showCity: false,
      // 控制可补换驾照
      showCost: false,
      // 签发地多列选择配置
      cityColumns: [],
      // 可补换地多列选择配置
      costColumns: [{values:[]}, {values: []}]
    }
  },
  created(){
    // 获取签发城市，然后更新选择配置
    this.getCityList().then(res=>{
      this.cityColumns = [
        {
          values: this.cityList.map(item=>item.name)
        },
        {
          values: this.cityList[0].list.map(item=>item.name)
        }
      ]
    })
  },
  computed: {
    ...mapState({
      cityList: state=>state.cityPicker.cityList,
      costList: state=>state.cityPicker.costList,
      city: state=>state.cityPicker.city,
      cost: state=>state.cityPicker.cost
    })
  },
  methods: {
    ...mapActions({
      getCityList: 'cityPicker/getCityList',
      getCostList: 'cityPicker/getCostList'
    }),
    ...mapMutations({
      updateState: 'cityPicker/updateState'
    }),
    // 显示选择器
    cityClick(){
      this.showCity = true;
      this.ShowChange=false;
    },
    // 当省份改变的时候更新城市数据
    cityChange(picker, values){
      // 获取当前省份的下标
      let index = this.cityList.findIndex(item=>item.name == values[0]);
      // 调用api更新城市数据
      this.$refs.cityPicker.setColumnValues(1, this.cityList[index].list.map(item=>item.name));
    },
    cityCancel(){
      this.showCity = false;
    },
    cityConfirm(values){
      console.log('values...', values);
      // 触发mutation更新城市数据
      this.updateState({city: values})
      this.cityCancel();
    },
    async costClick(){
      this.ShowChanges=false;
      if (!this.city.length){
        alert('请选择签发城市');
      }else{
        await this.getCostList();
        this.costColumns = [
          {
            values: this.costList.map(item=>item.name)
          },
          {
            values: this.costList[0].list.map(item=>item.name)
          }
        ]
        this.showCost = true;
        //  // 调用api更新城市数据
        //  console.log('this.$refs...', this, this.$refs)
        // this.$refs.costPicker.setColumnValues(0, this.costList.map(item=>item.name));
        // this.$refs.costPicker.setColumnValues(1, this.costList[0].list.map(item=>item.name));
      }
    },
    costCancel(){
      this.showCost = false;
    },
    costConfirm(values){
      // 触发mutation更新城市数据
      this.updateState({cost: values})
      this.costCancel();
    },
    costChange(picker, values){
       // 获取当前省份的下标
      let index = this.costList.findIndex(item=>item.name == values[0]);
      console.log('vaules...', values, index);
      // 调用api更新城市数据
      this.$refs.costPicker.setColumnValues(1, this.costList[index].list.map(item=>item.name));
    }
  }
}
</script>

<style lang="scss" scoped>
    
li:nth-child(1) {
    text-align: right;
    p:nth-child(2) {
        input {
            border: none;
            width: 52%;
            height: 40%;
            text-align: right;
        }
    }
}

li:nth-child(2) {
    p:nth-child(2) {
        text-align: right;
        input {
            border: none;
            width: 52%;
            height: 40%;
            text-align: right;
        }
    }
}


</style>
