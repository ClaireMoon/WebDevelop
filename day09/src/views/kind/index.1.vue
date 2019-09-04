<template>
  <div class="container">
    <header class="header">分类头部</header>
    <div class="content">
      <ul>
        <li v-for="item of kindlist" :key="item.id">
         kind: {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    let { $store: { dispatch } } = this
    dispatch('getKindList')
  },
  computed: {
    kindlist () {
      let { $store: { state: { kind: { kindlist } } } } = this
      return kindlist
    }
  }
}
</script>
