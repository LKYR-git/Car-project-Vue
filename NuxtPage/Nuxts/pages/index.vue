<template>
  <div class="NuxtWrap">
    <footer class="foot">
       <nuxt-link to="/top/attention">关注</nuxt-link>
       <nuxt-link to="/top/thought">想法</nuxt-link>
       <nuxt-link to="/top/member">会员</nuxt-link>
       <nuxt-link to="/top/notice">通知</nuxt-link>
       <nuxt-link to="/top/user">我的</nuxt-link>
    </footer>
  </div>
</template>

<script>


export default {
  components: {

  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
  body,html,#__nuxt,#__layout,.NuxtWrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #__layout >div{
    width: 100%;
    height: 100%;
  }
  .NuxtWrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .head{
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
  }
  .container{
      flex: 1;
  }
  .foot{
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-top: 1px solid #ccc;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
  }
  .foot a{
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: #333;
  }
</style>
