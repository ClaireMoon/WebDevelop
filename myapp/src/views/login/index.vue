<template>
  <div class="container">
    <header class="header">登录</header>
    <div class="content">
      <van-field
        v-model="username"
        placeholder="请输入手机号"
        clearable
        :error-message="usernamemsg"
      />
      <van-field
        v-model="password"
        type="password"
        clearable
        placeholder="请输入密码"
        :error-message="passwordmsg"
      />
      <van-button type="primary" :loading="loading" loading-text="登录..." size="large" :disabled="flag" @click="login">登录</van-button>
      <van-divider @click="toRegister">立即注册</van-divider>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button, Toast, Divider } from 'vant'
import axios from 'axios'
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Divider)
export default {
  data () {
    return {
      username: '15851338613',
      password: '123456',
      loading: false,
      flag: false
    }
  },
  computed: {
    usernamemsg () {
      if (this.username === '') {
        return ''
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    passwordmsg () {
      if (this.password === '') {
        return ''
      } else if (this.password.length < 5) {
        return '密码格式错误，最少为6位'
      } else {
        return ''
      }
    }
  },
  methods: {
    toRegister () {
      this.$router.replace('/register')
    },
    login () {
      if (this.username === '' || this.usernamemsg === '手机号码格式错误') {
        Toast('手机号码输入有误')
        return
      }
      if (this.password === '' || this.passwordmsg === '密码格式错误，最少为6位') {
        Toast('密码输入有误')
        return
      }
      if (this.code === '' || this.code !== this.adminCode) {
        Toast('验证码输入有误')
        return
      }
      this.loginFn()
    },
    loginFn () {
      // 调接口，修改按钮为不可点，修改值为注册中...
      this.flag = true
      this.loading = true
      axios.post('https://www.daxunxun.com/users/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        this.flag = false
        this.loading = false
        if (res.data === 2) {
          Toast('该用户未注册，请先注册')
        } else if (res.data === -1) {
          Toast('密码错误')
        } else if (res.data === 0) {
          Toast('登录失败')
        } else {
          Toast('登录成功')
          localStorage.setItem('isLogin', 'ok') // 登陆标识
          this.$router.back() // 登陆成功返回上一页
        }
      })
    }
  }
}
</script>
