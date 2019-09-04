<template>
  <div class="container">
    详情 - {{ title }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'detail',
  // asyncData ({ params: { id } }) {
  //   console.log(id)
  //   return axios.get('https://www.daxunxun.com/detail?id=' + id).then(res => {
  //     return {
  //       title: res.data[0].title
  //     }
  //   })
  // }
  // async asyncData ({ params: { id } }) {
  //   const data = await axios.get('https://www.daxunxun.com/detail?id=' + id)
  //   return {
  //     title: data.data[0].title
  //   }
  // }
  data () {
    return {
      title: ''
    }
  },
  async mounted () {
    console.log(this)
    const { $route: { params: { id } } } = this
    const data = await axios.get('https://www.daxunxun.com/detail?id=' + id)
    this.title = data.data[0].title
  }
}
</script>
