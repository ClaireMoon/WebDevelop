<template>
  <div class="container">
    <header class="header">个人中心头部</header>
    <div class="content">
      {{ loginState === 1 ? '已登录' : '未登录' }}
      <button @click="login">登陆</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      loginState: ({ user: { loginState } }) => loginState
    })
  },
  methods: {
    login () {
      this.$store.dispatch('user/login')
    }
  }
}
</script>
