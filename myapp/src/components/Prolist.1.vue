<template>
  <ul class="prolist">
    <!-- 声明式跳转 使用router-link的跳转方式 --- 标签跳转 -->
    <!-- :to="/detail/item.id" XXXXXXXXX -->
    <!-- 声明式跳转遇到变量，需要使用对象 name 和 params -->
    <!-- name表示路由的唯一标识（命名路由） -->
    <router-link :to="{ name: 'detail', params: { id: item.id }}" tag="li" class="proitem" v-for="(item, index) of prolist" :key="item.id">
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
    </router-link>
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
