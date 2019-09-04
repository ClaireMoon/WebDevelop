<template>
  <ul class="prolist">
    <!-- 编程式跳转 使用js的跳转方式  -->
    <li class="proitem" v-for="(item, index) of prolist" @click="goDetail(item.id)" :key="item.id">
      <div class="itemImg">
        <img :src="item.images.small" alt="">
      </div>
      <div class="itemInfo">
        <h4>
          {{ index }} -{{ item.title }}
        </h4>
        <div>
          演员:
          <span v-for="itm of item.casts" :key="itm.id">
            {{ itm.name }} /
          </span>
        </div>
        <div>
          导演:
          <span v-for="itm of item.directors" :key="itm.id">
            {{ itm.name }} /
          </span>
        </div>
        <Rating :rating="(item.rating.average / 2).toFixed(1) * 1"/>
        <!-- <p>
          评分： {{ item.rating.average }}
          / 票房： {{ item.collect_count }}
        </p> -->
      </div>
    </li>
  </ul>
</template>

<script>
import Rating from './Rating'
export default {
  // props: ['prolist']
  props: {
    prolist: Array
  },
  components: {
    Rating
  },
  methods: {
    goDetail (id) {
      /**
       * 编程式跳转就是使用js跳转
       * this.$router
       *  类似于数组，每push一个，新添加了一个元素，每replace一个，替换了数组当前元素
       *  .back()
       *  .push() 追加一个新的路由
       *  .replace() 替换当前的路由
       */
      // console.log(this)
      // this.$router.push('/detail/' + id) // string
      // this.$router.push({
      //   name: 'detail',
      //   params: {
      //     id
      //   }
      // })
      this.$router.push({ path: '/detail/' + id })
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.prolist {

  .proitem {
    @include rect(100%, 1.2rem);
    @include border(0 0 1px 0, #ccc, solid);
    @include flexbox();
    .itemImg {
      @include rect(1.2rem, 1.2rem);
      img {
        @include rect(1rem, 1rem);
        @include margin(0.1rem);
        @include border(1px, #ccc, solid)
      }
    }
    .itemInfo {
      @include flex();
    }
  }
}
</style>
