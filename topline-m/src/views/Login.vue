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
        name="mobile"
        v-model="mobile"
        left-icon="phone-o"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />

      <van-field
        class="formItem"
        name="code"
        v-model="code"
        center
        clearable
        left-icon="bag-o"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button class="yzm" size="small" type="primary" :disabled = "yzmstr!=='发送验证码'"  @click="getCode">{{yzmstr}}</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" @click="onSubmit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      mobile: '',
      code: '',
      timeId: null,
      yzmstr: '发送验证码'
    }
  },
  methods: {
    ...mapActions(['setUseDataAsync']),
    async onSubmit () {
      const res = await this.$http.post('/app/v1_0/authorizations', { mobile: this.mobile, code: this.code })
      switch (res.status) {
        case 201:
          this.setUseDataAsync(res.data.data.token)
          sessionStorage.setItem('token', res.data.data.token)
          this.$notify({ type: 'success', message: '登录成功！' })
          break

        case 400:
          console.log('请求参数错误')
          break

        case 507:
          console.log('服务器数据库异常')
          break

        default:
          break
      }
    },
    // 获取验证码
    async getCode () {
      const res = await this.$http.get('/app/v1_0/sms/codes/' + this.mobile)
      switch (res.status) {
        case 200:
          this.countDown(60)
          break

        case 400:
          console.log('请求参数错误')
          break

        case 507:
          console.log('服务器数据库异常')
          break

        default:
          break
      }
    },
    countDown (time) {
      let _time = parseInt(time)

      this.timeId = setInterval(() => {
        this.yzmstr = _time + 's'
        _time--
        if (_time === 0) {
          clearInterval(this.timeId)
          this.yzmstr = '发送验证码'
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../styles/login";
</style>
