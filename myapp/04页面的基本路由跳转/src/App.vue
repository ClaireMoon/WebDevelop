<template>
  <div id="app">
    <router-view></router-view>
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

        &.router-link-active{
          @include color(#f66);
        }
      }
    }
  }
}
</style>
