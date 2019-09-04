<template>
    <ul class="prolist">
        <li class="proitem" v-for="item of prolist" :key="item.id">
            <div class="itemImg">
                <img :src="item.images.small" alt="">
            </div>
            <div class="itemInfo">
                <h4>
                    {{item.title}}
                </h4>
                <div>
                    演员：
                    <span v-for="itm of item.casts" :key="itm.id">
                        {{itm.name}} / 
                    </span>
                </div>
                <div>
                    导演：
                    <span v-for="it of item.directors" :key="it.id">{{ it.name }}</span>
                </div>
                <p>评分：{{ item.rating.average }}, 票房: {{ item.collect_count }}</p>
            </div>
        </li>
    </ul>
</template>
<script>
export default {// props: ['prolist']
  props: { prolist: Array }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.prolist{
    .proitem{
        @include rect(100%,1.2rem);
        @include border(0 0 1px 0, #ccc, solid);
        @include flexbox();
        .itemImg{
            @include rect(1.2rem,1.2rem);
            @include background-color(#cfa20c);
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
