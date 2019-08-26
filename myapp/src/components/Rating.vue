<template>
    <div class="rating">
        <span class="iconfont icon-iconzhengli-" :class="rating >= 1 ? 'active' : ''"></span>
        <span class="iconfont icon-iconzhengli-" :class="rating >= 2 ? 'active' : ''"></span>
        <span class="iconfont icon-iconzhengli-" :class="rating >= 3 ? 'active' : ''"></span>
        <span class="iconfont icon-iconzhengli-" :class="rating >= 4 ? 'active' : ''"></span>
        <span class="iconfont icon-iconzhengli-" :class="rating > 4.5 ? 'active' : ''"></span>
    </div>
</template>
<script>
export default {
    props: {
        rating: String
    }
}
</script>
<style lang="scss">
.active {
    color: rgb(192, 8, 8);
}
</style>