<template>
  <div class="rating">
    <span class="iconfont icon-star_full" :class="rating >= 1 ? 'active' : ''"></span>
    <span class="iconfont icon-star_full" :class="rating >= 2 ? 'active' : ''"></span>
    <span class="iconfont icon-star_full" :class="rating >= 3 ? 'active' : ''"></span>
    <span class="iconfont icon-star_full" :class="rating >= 4 ? 'active' : ''"></span>
    <span class="iconfont icon-star_full" :class="rating > 4.5 ? 'active' : ''"></span>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number
  }
}
</script>

<style lang="scss">
.active {
  color: coral;
}
</style>
