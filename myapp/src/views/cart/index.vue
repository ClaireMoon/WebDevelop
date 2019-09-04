<template>
  <div class="container">
    <header class="header">购物车头部</header>
    <div class="content">购物车内容</div>
  </div>
</template>
<script>
export default {
  // 组件内导航守卫
  beforeRouteEnter (to, from, next) { // 不能直接使用this
    // if (localStorage.getItem('isLogin') === 'ok') {
    //   next()
    // } else {
    //   next('/login')
    //   // this.$router.push('/loginx') // xxxxxxxxxxx
    // }
    next(vm => {
      if (localStorage.getItem('isLogin') === 'ok') {
        next()
      } else {
        vm.$router.push('/login') // √√√√√√√√√√√√√√
      }
    })
  }
}
</script>
