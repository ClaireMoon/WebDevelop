<template>
  <div class="container">
    首页
    <img src="/11.png" alt="">
    <ul>
      <!-- <nuxt-link :to ="'/detail/' + item.id" v-for="item of prolist" :key="item.id">
        {{ item.title }}
      </nuxt-link> -->
      <li @click="goDetail(item.id)" v-for="item of prolist" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'
export default {
  // asyncData () {
  //   return axios.get('https://www.daxunxun.com/douban').then(res => {
  //     console.log(res.data)
  //     return {
  //       prolist: res.data
  //     }
  //   })
  // },
  // data () {
  //   return {
  //     prolist: []
  //   }
  // },
  // mounted () {
  //   axios.get('https://www.daxunxun.com/douban').then(res => {
  //     this.prolist = res.data
  //   })
  // },
  // async asyncData () {
  //   const data = await axios.get('https://www.daxunxun.com/douban')
  //   console.log(data)
  //   return { prolist: data.data }
  // },
  data () {
    return {
      prolist: []
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push('/detail/' + id)
    }
  },
  async mounted () {
    const data = await axios.get('https://www.daxunxun.com/douban')
    this.prolist = data.data
  },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background:url("~assets/11.png") */
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
