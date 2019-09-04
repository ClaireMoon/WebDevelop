<template>
    <ul class="proul">
        <!-- 编程式跳转 使用js的跳转方式 -->
        <li class="proitem" v-for="(item,index) of prolist" @click="goDetail(item.id)" :key="item.id">
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
        </li>
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
