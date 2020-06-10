<template>
  <div>
    <van-tabbar class="tabbar"   active-color='#07c160' inactive-color='#000'>
      <van-tabbar-item icon='home-o' to="/">首页</van-tabbar-item>
      <van-tabbar-item icon='search'>标签</van-tabbar-item>
      <van-tabbar-item icon='friends-o'>标签</van-tabbar-item>
      <van-tabbar-item icon='setting-o'>标签</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
  .tabbar {
    padding: 20px 0;
  }
</style>
