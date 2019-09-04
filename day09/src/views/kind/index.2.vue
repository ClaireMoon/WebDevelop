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
import { mapState } from 'vuex'
export default {
  mounted () {
    let { $store: { dispatch } } = this
    dispatch('getKindList')
  },
  computed: {
    ...mapState({
      // kindlist (state) {
      //   return state.kind.kindlist
      // }
      kindlist: ({ kind: { kindlist } }) => kindlist
    })
  }
}
</script>
