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
  <div class="tabsBox">
    <!-- tabs切换 -->
    <van-tabs v-model="active" >
      <van-tab v-for="index in 9" :key="index">
        <template #title>
          asdasd
        </template>
        内容
        {{ index }}
      </van-tab>
    </van-tabs>
    <!-- 点击展开全部按钮 -->
    <div class="tabsIcon" @click="popupIsShow = true">
      <van-icon size="22" name="apps-o" />
    </div>
  </div>
  <!-- ttable 切换  end-->
  <!-- 弹出层 -->
  <van-popup
    v-model="popupIsShow"
    closeable
    close-icon="close"
    close-icon-position="top-left"
    position="bottom"
    :style="{ height: '100%' }"
  >
    
  </van-popup>
 </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      search: '',
      active: 0,
      // 弹出层控制变量
      popupIsShow: false
    }
  },
  created () {
    this.tabdata()
  },
  methods: {
    async tabdata () {
      const res = await this.$http.get('/app/v1_0/user/channels')
      console.log(sessionStorage.getItem('token'))
      console.log(res)
    }
  }
}
</script>

<style lang="less">
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
    .tabsBox {
      position: relative;
      .tabsIcon {
        height: 100px;
        padding: 0 10px;
        position: absolute;
        display: flex;
        align-items: center;
        right: 0;
        top: 0;
        background-color: #ffffff;
        border: 2px solid #fbfbfb;
        z-index: 99;
      }
    }
    .van-tabs--line .van-tabs__wrap {
      height: 100px;
    }
    .van-tab {
      border-right: 2px solid #fbfbfb;
    }
    // 设置弹出层 icon
    .van-popup__close-icon {
      font-size: 50px;
    }
  }
</style>
