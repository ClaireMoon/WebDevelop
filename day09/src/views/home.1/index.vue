<template>
  <div class="container">
    <header class="header">首页头部</header>
    <div class="content" id="content">
      <van-pull-refresh v-model="isLoding" @refresh="onRefresh">
        <div class="banner">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in bannerlist" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <prolist :prolist = "prolist"></prolist>
        </van-list>
      </van-pull-refresh>
      <div class="backtop" @click="backtop">
        <van-icon name="upgrade" size="30px"/>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload, List, PullRefresh, Icon } from 'vant'
import Prolist from '@/components/Prolist'
import { mapState } from 'vuex'
Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Icon)
export default {
  beforeRouteLeave (to, from, next) {
    const top = document.getElementById('content').scrollTop
    localStorage.setItem('position', top)
    next()
  },
  // activated () {
  //   console.log('我回来了')
  //   document.getElementById('content').scrollTop = localStorage.getItem('position')
  // },
  watch: {
    $route (val) {
      if (val.name === 'home') {
        document.getElementById('content').scrollTop = localStorage.getItem('position')
      }
    }
  },
  data () {
    return {
      pageCode: 1, // 表示的是页码
      loading: false, // 表示上拉加载的状态 true表示正在加载
      finished: false, // 表示所有的数据是否都加载完毕， true表示都加载完毕
      isLoding: false // 表示下拉刷新是否在请求数据，true 代表正在请求数据
    }
  },
  computed: {
    ...mapState({
      bannerlist: ({ home: { bannerlist } }) => bannerlist,
      prolist: ({ home: { prolist } }) => prolist
    })
  },
  methods: {
    onLoad () {
      this.loading = true // 表示可以加载数据了
      this.$store.dispatch({
        type: 'getMoreProList',
        pageCode: this.pageCode
      }).then((data) => {
        console.log('加载成功')
        this.loading = false // 表示本次请求已经结束
        this.pageCode++ // 表示页码 +1
        if (data === 0) {
          this.finished = true // 表示所有的数据都已加载完毕了
        }
      })
    },
    onRefresh () {
      this.isLoding = true
      this.$store.dispatch('getProList').then(() => {
        console.log('刷新成功')
        this.isLoding = false
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
    this.$store.dispatch('getProList')
    this.$store.dispatch('getBannerList')
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
