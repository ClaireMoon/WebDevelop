<template>
  <div class="container">
    <header class="header">分类头部</header>
    <div class="content">
      <!-- <input type="text" autofocus><input type="text" autofocus> -->
      <input type="text" v-focus>
      <input type="text" v-focus>
      {{ 1 | sexFilter }} {{ 99.99 | moneyFilter}}
      <button @click="add">+1</button> 
      <div ref="di"> {{ count }} </div>
    </div>
  </div>
</template>

<script>
import test from '@/mixins/test'
export default {
  mixins: [test], // 组件相同的选项进一步封装
  data () {
    return {
      count: 0
    }
  },
  methods: {
    add () {
      this.count++
      console.log(1, this.count)
      
      this.$nextTick(() => {
        console.log(2, this.$refs.di.innerHTML)
      })
    }
  },
  directives: {
    'focus': {
      inserted (el) {
        el.focus()
      }
    }
  },
  filters: {
    'sexFilter': (val) => {
      return val === 1 ? '男' : '女'
    },
    'moneyFilter': (val) => {
      return '￥' + val
    }
  },
  mounted () {
    // console.log(this.$store)
    console.log(this.$store.state.kind.kindlist)
    this.$store.dispatch('getKindList')
    setTimeout(() => {
      console.log(this.$store.state.kind.kindlist)
    }, 3000)
  }
}
</script>
