<template>
  <div class="container">
    <header class="header">购物车头部</header>
    <div class="content" v-if="len > 0">
      <input type="checkbox" v-model="all" @change="selectAll">
      <ul>
        <li v-for="(item, index) of cartlist" :key="item.id">
          <input type="checkbox" v-model="item.flag" @change="selectItem(item.flag)">
          {{ item.title }} - {{ item.price }} -
          <button @click="item.num = 1 ? item.num = 1 : item.num = item.num - 1">---</button>{{ item.num }} <button @click="item.num = item.num + 1">+++</button>
          <button @click="deleteItem(index, item.id)">删除</button>
        </li>
      </ul>
      <div>
        总数{{ totalNum }}
      </div>
      <div>
        总价{{ totalPrice }}
      </div>
    </div>
    <div class="content" v-else>
      您的购物车空空如也
      <router-link to="/home">去购物</router-link>
      您可能对如下产品感兴趣
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      all: false
    }
  },
  computed: {
    ...mapState({
      cartlist: ({ cart: { cartlist } }) => cartlist
    }),
    ...mapGetters(['totalPrice', 'totalNum', 'len'])
  },
  mounted () {
    this.getCartList()
  },
  methods: {
    ...mapActions({
      getCartList: 'getCartList'
      // changeSelect: 'changeSelect'
    }),
    selectAll () {
      console.log('111')
      this.$store.dispatch('changeSelect', { flag: this.all })
    },
    selectItem (flag) {
      this.$store.dispatch('changeItem', { flag }).then(data => {
        data === 1 ? this.all = false : this.all = true
      })
    },
    deleteItem (index, id) {
      this.$store.dispatch('deleteItem', { index, id })
    }
  }
}
</script>
