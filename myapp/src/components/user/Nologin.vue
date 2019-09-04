<template>
  <div>
    <button @click="login">登陆</button>
    <router-link to="/register" tag="button">注册</router-link>
  </div>
</template>
<script>
export default {
  // beforeRouteEnter (to, from, next) {
  //   if (localStorage.getItem('isLogin') === 'ok') {
  //     next('/user/loging')
  //   } else {
  //     next()
  //   }
  // },
  methods: {
    login () {
      this.$router.replace('/login')
    }
  }
}
</script>
