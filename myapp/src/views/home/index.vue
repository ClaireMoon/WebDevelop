<template>
  <div class="container">
    <header class="header">首页头部</header>
    <div class="content" id="content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="banner">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <prolist :prolist = "prolist"></prolist>
        </van-list>
      </van-pull-refresh>
      <div class="backtop" @click="backtop">
        <van-icon name="arrow-up" size="50px"/>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload, List, PullRefresh, Icon } from 'vant'
import axios from 'axios'
import Prolist from '@/components/Prolist'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Icon)
export default {
  data () {
    return {
      prolist: [],
      images: [],
      loading: false, // 表示上拉加载的状态 true表示正在加载
      finished: false, // 表示所有的数据是否都加载完毕，true表示都加载完毕
      pageCode: 1, // 表示的是页码
      isLoading: false // 表示下拉刷新是否在请求数据，true 代表正在请求数据
    }
  },
  methods: {
    onLoad () {
      this.loading = true // 表示可以加载数据了
      axios.get('https://www.daxunxun.com/douban?count=20&start=' + this.pageCode * 20).then(res => {
        this.loading = false // 表示本次请求已经结束
        this.pageCode++ // 表示页码 +1
        if (res.data.length === 0){
          this.finished = true // 表示所有的数据都已经加载完毕了
        } else {
          // 之前的数据是this.prolist,新请求的数据是res.data，只要合并起来就是你想要的数据 ------ 数组的和合并
          this.prolist = [...this.prolist, ...res.data]
        }
      })
    },
    onRefresh () {
      this.isLoading = true
      axios.get('https://www.daxunxun.com/douban').then(res => {
        console.log(res.data)
        this.isLoading = false
        this.prolist = res.data // 直接请求前20条数据
        this.pageCode = 1 // 下拉刷新即为加载第一页数据----重置页码
        this.finished = false // 表示可以继续上拉加载
      })
    },
    backtop () {
      document.getElementById('content').scrollTop = 0
    }
  },
  components: {
    prolist: Prolist
  },
  mounted () {
    axios.get('https://www.daxunxun.com/douban').then(res => {
      console.log(res.data)
      this.prolist = res.data
    })
    axios.get('https://www.daxunxun.com/banner').then(res => {
      // console.log(res.data)
      /**
       * ["/images/1.jpg"]
       * ['http://wwww.daxunxun.com/images.1,jpg]
       */
      let arr = []
      res.data.map(item => {
        arr.push('https://www.daxunxun.com' + item)
      })
      console.log(arr)
      this.images = arr
    })
  }
}
</script>

<style lang="scss">
.banner {
  width: 100%;
  height: 1.8rem;
  overflow: hidden;
  .van-swipe {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
    }
  }
}
.backtop {
  position: fixed;
  bottom: 0.6rem;
  right: 0.15rem;
  background-color: #fff;
}
</style>
