<template>
  <div id="login">
    <!-- 头部导航 -->
    <van-nav-bar class="navBar">
      <div slot="title" class="title">登录</div>
    </van-nav-bar>
    <!-- 登录表单 -->
    <van-form  class="form">
      <van-field
        class="formItem"
        v-model="value1"
        left-icon="phone-o"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />

      <van-field
        class="formItem"
        v-model="sms"
        center
        clearable
        left-icon="bag-o"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <div class="yzm" size="small" type="primary">发送验证码</div>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      value1: '',
      sms: ''
    }
  },
  mathods: {
    onSubmit: (values) => {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../styles/login";
</style>
