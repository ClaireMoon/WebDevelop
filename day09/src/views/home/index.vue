<template>
  <div class="container">
    <Header>
      <input type="text">
      <div slot="right">扫一扫</div>
      <div slot="left" @click="selectCity">上海</div>
    </Header>
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
          <prolist :prolist = "prolist">
            asjfjsdfkskdhfksjhdgkhdfkghdfkhgfdkhgdj
          </prolist>
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
import Header from '@/components/Header'
import { mapState, mapActions } from 'vuex'
Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Icon)
export default {
  data () {
    return {
      pageCode: 1, // 多个组件共享状态的才会放入vuex
      loading: false,
      finished: false,
      isLoding: false
    }
  },
  computed: {
    ...mapState({
      bannerlist: ({ home: { bannerlist } }) => bannerlist,
      prolist: ({ home: { prolist } }) => prolist
    })
  },
  mounted () {
    this.getBannerlist()
    this.getProlist()
  },
  beforeRouteLeave (to, from, next) {
    const top = document.getElementById('content').scrollTop
    localStorage.setItem('position', top)
    next()
  },
  watch: {
    $route (val) {
      if (val.name === 'home') {
        document.getElementById('content').scrollTop = localStorage.getItem('position')
      }
    }
  },
  methods: {
    selectCity () {
      console.log('city')
    },
    ...mapActions({
      getBannerlist: 'getBannerlist',
      getProlist: 'getProlist'
    }),
    backtop () {
      document.getElementById('content').scrollTop = 0
    },
    onRefresh () {
      this.isLoding = true
      this.getProlist().then(() => {
        this.isLoding = false
        this.pageCode = 1
        this.finished = false
      })
    },
    onLoad () {
      this.loading = true
      this.$store.dispatch('getMoreProList', { pageCode: this.pageCode }).then(data => {
        this.loading = false
        this.pageCode++
        if (data === 0) {
          this.finished = true
        }
      })
    }
  },
  components: {
    prolist: Prolist,
    Header
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
