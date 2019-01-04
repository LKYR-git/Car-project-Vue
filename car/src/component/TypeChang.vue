<template>
  <div>
        <li><p>服务类型</p><p @click="showChange">{{info.type}}<span>></span></p></li>
        <van-popup v-model="showType" position="bottom" overlay>
            <van-picker :columns="typeArray" @cancel="onCancel" show-toolbar title="请选择服务类型" @confirm="onConfirm"/>
        </van-popup>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

</style>
