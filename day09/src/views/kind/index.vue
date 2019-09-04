<template>
  <div class="container">
    <Header>
      分类
      <div slot="left">返回</div>
    </Header>
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
import Header from '@/components/Header'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    Header
  },
  mounted () {
    this.getKindList()
  },
  methods: {
    ...mapActions({
      getKindList: 'getKindList'
    })
  },
  computed: {
    ...mapState({
      kindlist: ({ kind: { kindlist } }) => kindlist
    })
  }
}
</script>
