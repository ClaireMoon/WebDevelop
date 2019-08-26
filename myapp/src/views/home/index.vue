<template>
 <div class="container">
      <header class="header">最近上映</header>
      <div class="content">
           <div class="banner">
             <van-swipe :autoplay="3000">
               <van-swipe-item v-for="(image, index) in images" :key="index">
                 <img v-lazy="image" />
                 <!-- <van-image
                   width="10rem"
                   height="10rem"
                   fit="contain"
                   lazy-load
                   :src="image"
                 /> -->
               </van-swipe-item>
             </van-swipe>
           </div>
           <prolist :test="datalist"></prolist>
      </div>
 </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'
import axios from 'axios'
import Prolist from '@/components/Prolist'
// import { Image } from 'vant'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
// Vue.use(Image)
export default {
     data () {
          return {
               datalist: [],
               images: [
                 'https://img.yzcdn.cn/vant/apple-1.jpg',
                 'https://img.yzcdn.cn/vant/apple-2.jpg'
               ]
          }
     },
     components: {
          prolist: Prolist
     },
     mounted () {
          axios.get('https://www.daxunxun.com/douban').then(res => {
               console.log(res.data)
               this.datalist = res.data
          })
     }
}
</script>
<style lang="scss">
.banner{
  width: 100%;
  height: 2.8rem;
  overflow: hidden;
  .van-swipe {
    width: 100%;
    height: 100%;
    .van-image__img {
      height: 10%;
      width: 100%;
      border: 1px solid #ccc;
     }
  }
}
</style>
