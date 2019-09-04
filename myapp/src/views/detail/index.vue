<template>
  <div class="box">
    <div class="container">
      <header class="header">详情头部</header>
      <div class="content">
        {{ title }}
      </div>
    </div>
    <footer class="footer">详情底部</footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: ''
    }
  },
  mounted () {
    console.log(this)
    // const id = this.$route.params.id
    const { $route: { params: { id } } } = this
    axios.get('https://www.daxunxun.com/detail?id=' + id).then(res => {
      console.log(res.data[0])
      this.title = res.data[0].title
    })
  }
}
</script>
