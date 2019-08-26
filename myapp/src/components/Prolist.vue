<template>
    <ul class="proul">
        <!-- 声明式跳转 使用router-link的跳转方式 --- 标签跳转 -->
        <!-- <router-link to="/detail" tag="li" class="proitem" v-for="(item,index) of test" :key="item.id"> -->
        <!-- to="/detail/item.id"  XXXXXXXX-->
        <!-- 声明式跳转遇到变量，需要使用对象 -->
        <!-- name表示路由的唯一标识 -->
        <router-link :to="{name: 'detail', params: { id: item.id }}" tag="li" class="proitem" v-for="(item,index) of test" :key="item.id">
            <div class="itemImg">
                <img :src="item.images.small" alt="">
            </div>
            <div class="itemInfo">
                <h4>
                   {{ index }} ---- {{ item.title }}
                </h4>
                <div>
                    演员：
                    <span v-for="itm of item.casts" :key="itm.id">
                        {{ itm.name }}
                    </span>
                </div>
                <div>
                    导演：
                    <span v-for="it of item.directors" :key="it.id">
                        {{ it.name }}
                    </span>
                </div>
                <!-- <p>
                    评分：
                    {{ item.rating.average }}, 票房 {{ item.collect_count}}
                </p> -->
                <Rating :rating="(item.rating.average / 2).toFixed(1)"></Rating>
                <!-- {{ item.rating.average }} ----  {{ (item.rating.average / 2).toFixed(1) }} -->
            </div>
        </router-link>
    </ul>
</template>
<script>
import Rating from './Rating.vue'
export default {
  props: {
    test: Array
  },
  components: {
    Rating
  },
  methods: {
    goDetail (id) {
      /**
      * 编程式跳转就是使用js跳转
      * this.$router
      * 类似于数组，每push一个，新添加了一个元素，每replace一个，替换了数组当前元素
      * .back()
      * .push() 追加一个新的路由
      * .replace() 替换当前的路由
      */
      //    console.log(this)
      //   this.$router.push('/detail/' + id)   String
      // this.$router.push({
      //     name: 'detail',
      //     params: {
      //         id
      //     }
      // })
      this.$router.push({ path: 'detail/' + id })
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.proul{
    .proitem{
        @include rect(100%,1.2rem);
        @include border(0 0 1px, rgb(138, 138, 138), solid);
        @include flexbox();
        .itemImg{
            @include rect(1.2rem,1.2rem);
            @include background-color(#f7de8c);
            img {
                @include rect(1rem,1rem);
                @include margin(.1rem);
                @include border(1px,solid,#222);
            }
        }
        .itemInfo{
            @include margin(.3rem);
            @include flexbox();
            @include flex-direction(column);
            @include justify-content();
        }
    }
}
</style>
