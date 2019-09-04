<template>
  <div id="app">
    <div class="container">
      <header class="header">头部</header>
      <div class="content">内容</div>
    </div>
    <footer class="footer">
      <ul>
        <li>
          <span class="iconfont icon-shouye"></span>
          <p>首页</p>
        </li>
        <li>
          <span class="iconfont icon-icon"></span>
          <p>分类</p>
        </li>
        <li>
          <span class="iconfont icon-tuanduicankaoxian-"></span>
          <p>购物车</p>
        </li>
        <li>
          <span class="iconfont icon-wode"></span>
          <p>我的</p>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
// 单文件组件     .vue为后缀   至少得有一个template
export default { // 暴露该组件（要写js）， 如果不写script，会默认暴露出去
}
</script>

<style lang="scss">
// 导入scss文件
// @/lib/reset.scss   @表示的是src目录
@import '@/lib/reset.scss';

html, body, #app {
  // width: 100%;height: 100%;
  @include rect(100%, 100%);
}

#app {
  // display: -webkit-box; display: -ms-flexbox; display: flex;
  @include flexbox();
  // -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column;
  @include flex-direction(column);
  .container {
    // -webkit-box-flex: 1; -ms-flex: 1; flex: 1; width: .1px;
    @include flex();
    @include rect(100%, auto); // 因为flex(),垂直方向默认宽度为.1px
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%, 0.44rem);
      @include background-color(#f66);
    }
    .content {
      @include flex();
      @include rect(100%, auto);
    }
  }
  .footer{
    @include rect(100%, 0.5rem);
    @include background-color(#efefef);
    ul{
      @include rect(100%, 100%);
      @include flexbox();
      li{
        @include flex();
        // 元素水平垂直居中
        @include flexbox();
        @include flex-direction(column);
        @include justify-content(); // justify-content:center
        @include align-items(); // align-items: center
        span{
          @include font-size(0.24rem);
        }
        p{
          @include font-size(0.12rem);
        }
      }
    }
  }
}
</style>
