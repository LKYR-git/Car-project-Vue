<template>
  <div>
        <li><p>服务类型</p><p><span v-if="showChang" @click="showChange">换驾照</span><span v-else>{{type}}</span><span>></span></p></li>
        <van-popup v-model="showType" position="bottom" overlay>
            <van-picker :columns="typeArray" @cancel="onCancel" show-toolbar title="请选择服务类型" @confirm="onConfirm"/>
        </van-popup>
  </div>
</template>
<script>
export default {
    data(){
        return{
            showType:false,
            showChang:true,
            typeArray:['换驾照','补驾照'],
            type: '',
        }
    },
    methods:{
        //换补驾照
        showChange(){
            this.showType=true;
            this.showChang=false;
        },
        onCancel(){
            this.showType=false;
        },
        onConfirm(value){
            console.log('values...',value);
            this.type=value;
            this.onCancel();
        },
    }
}
</script>
<style lang="scss" scoped>

</style>
