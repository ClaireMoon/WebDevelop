<template>
  <div class="container">
    <header class="header">注册</header>
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
      <van-field
        v-model="code"
        center
        clearable
        placeholder="请输入短信验证码"
        :error-message="codemsg"
      >
        <van-button slot="button" :disabled="disabled" size="small" type="primary" @click="sendCode">{{ btnmsg }}</van-button>
      </van-field>
      <van-button type="primary" :loading="loading" loading-text="注册..." size="large" :disabled="flag" @click="register">注册</van-button>
      <van-divider @click="toLogin">立即登录</van-divider>
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
      code: '',
      btnmsg: '发送验证码',
      disabled: false,
      adminCode: '',
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
    },
    codemsg () {
      if (this.code === '') {
        return ''
      } else if (this.code.length !== 5) {
        return '验证码格式错误'
      } else {
        return ''
      }
    }
  },
  methods: {
    toLogin () {
      this.$router.replace('/login')
    },
    sendCode () {
      let time = 4
      let timer
      timer = setInterval(() => {
        time--
        if (time === 0) {
          clearInterval(timer)
          this.disabled = false // 按钮可点
          this.btnmsg = '发送验证码'
          return
        }
        this.disabled = true // 按钮不可点
        this.btnmsg = time + 's后重新发送'
      }, 1000)
      this.getCode()
    },
    getCode () {
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        Toast('请填写正确的手机号码')
      } else {
        axios.get('https://www.daxunxun.com/users/sendCode?tel=' + this.username).then(res => {
          // console.log(res.data)
          if (res.data === 1) {
            Toast('用户名已注册，请直接登录')
          } else if (res.data === 0) {
            Toast('获取验证码失败')
          } else {
            this.adminCode = res.data.code
          }
        })
      }
    },
    register () {
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
      this.registerFn()
    },
    registerFn () {
      // 调接口，修改按钮为不可点，修改值为注册中...
      this.flag = true
      this.loading = true
      axios.post('https://www.daxunxun.com/users/register', {
        username: this.username,
        password: this.password
      }).then(res => {
        this.flag = false
        this.loading = false
        if (res.data === 2) {
          Toast('用户名已注册，请直接登录')
        } else if (res.data === 0) {
          Toast('注册失败')
        } else {
          Toast('注册成功')
        }
      })
    }
  }
}
</script>
