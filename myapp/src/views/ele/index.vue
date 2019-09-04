<template>
  <div class="content">
    <ul>
      <li v-for="item of navlist" :key="item.activity_id">
        <img :src="item.image" alt="">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
axios.defaults.withCredentials=true
export default {
  data () {
    return {
      navlist: []
    }
  },
  mounted () {
    axios.get('/api/douban').then(res => {
      console.log(res.data)
    })
    axios.get('/ele/restapi/shopping/v2/entries?latitude=31.378851&longitude=121.491522&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5').then(res => {
      // console.log(res.data[0].entries)
      let data = res.data[0].entries
      // let str = data[0].image_hash // 7d8a867c870b22bc74c87c348b75528djpeg
      // console.log(str) // 7/d8/a867c870b22bc74c87c348b75528djpeg
      // console.log(str.substring(0, 1))
      // const first = str.substring(0, 1)
      // console.log(first)
      // console.log(str)
      // const second = str.substring(1, 3)
      // console.log(second)
      // console.log(str)
      // const third = str.substring(3)
      // console.log(third)
      // console.log(str)
     data.map(item => {
        let str = item.image_hash
        const first = str.substring(0, 1)
        const second = str.substring(1, 3)
        const third = str.substring(3)
        item.image = 'https://cube.elemecdn.com/'+ first + '/' + second + '/' + third + '.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'
        // console.log(item.image)
      })
      this.navlist = data
    })
    axios.get('/ele/restapi/shopping/v3/restaurants?latitude=31.378851&longitude=121.491522&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style>
.content {
  height: 100%;
  overflow: auto;
}
</style>
