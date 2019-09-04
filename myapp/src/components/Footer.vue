<template>
  <footer class="footer">
    <ul>
      <!-- router-link会被渲染成为a标签，如果不想改变，则使用tag标签生成目标标签 -->
      <router-link to="/home" tag="li">
        <span class="iconfont icon-shouye"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/kind" tag="li">
        <span class="iconfont icon-icon"></span>
        <p>分类</p>
      </router-link>
      <router-link to="/cart" tag="li">
        <span class="iconfont icon-tuanduicankaoxian-"></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/user" tag="li">
        <span class="iconfont icon-wode"></span>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>
