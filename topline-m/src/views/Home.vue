<template>
 <div id="home">
   <!-- 头 -->
    <van-nav-bar class="navbar">
    <template #title>
      <van-field
        maxlength="50"
        class="search"
        size='large'
        v-model='search'
        input-align='center'
        placeholder='搜索'
      >
      <van-icon class="searchIcon" slot="right-icon" name="search" />
      </van-field>
    </template>
  </van-nav-bar>
  <!-- ttable 切换 -->
  <van-tabs v-model="active" >
    <van-tab  title="标签 1">内容 1</van-tab>
    <van-tab  title="标签 2">内容 2</van-tab>
  </van-tabs>
 </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      search: '',
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
  #home {
    .navbar {
      height: 96px;
      padding: 8px 0;
      background-color: #3296fa;
      box-sizing: border-box;
    }
    .van-nav-bar__title {
      width: 70%;
    }
    .search {
      position: relative;
      height: 66px;
      list-style: 66px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      font-size: 36px;
      background-color: #5babfb;
    }
    .searchIcon {
      font-size: 40px;
      color: #fff;
    }
    .van-tab {
      background-color: red;
    }
  }
</style>
