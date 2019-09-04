<template>
  <div class="container">
    分类 - {{ list }}
    <el-button type="info">信息按钮</el-button>
     <el-button round>圆角按钮</el-button>
     <el-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间">
    </el-time-select>
    <el-rate
    v-model="value1"
    show-text>
  </el-rate>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      value: '',
      value1: ''
    }
  },
  computed: {
    ...mapState({
      list: (state) => { return state.list }
    })
  }
  // mounted () {
  //   console.log(this)
  // }
}
</script>
