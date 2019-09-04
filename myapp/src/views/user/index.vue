<template>
  <div class="container">
    <header class="header">个人中心头部</header>
    <div class="content">
      <router-view></router-view>
      个人中心内容
    </div>
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (localStorage.getItem('isLogin') === 'ok') {
        // 因为没有重定向，默认跳转为 /user 替换为/user/loging
        vm.$router.replace('/user/loging')
      } else {
        vm.$router.push('/user/nologin')
      }
    })
  },
  watch: {
    $route (val) {
      console.log(val)
      if (localStorage.getItem('isLogin') === 'ok') {
        this.$router.replace('/user/loging')
      } else {
        this.$router.replace('/user/nologin')
      }
    }
  }
}
</script>
