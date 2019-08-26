<template>
  <div id="app">
    <!-- 主视图 默认 name为default 但是可以不写 name="default" -->
    <router-view></router-view>
    <!-- 底部视图 起名为footer -->
    <router-view name="footer"></router-view>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';
html, body,#app, .box{
  @include rect(100%,100%);
}
#app, .box {
  @include flexbox();
  @include flex-direction(column);
  .container{
    @include flex();
    @include rect(100%,100%);
    @include flexbox();
    @include flex-direction(column);
    .header{
      @include rect(100%,.44rem);
      @include background-color(#b80404);
      @include flexbox();
      @include flex-direction(column);
      @include justify-content();
      @include align-items();
      @include font-size(20px);
    }
    .content{
      @include flex();
      @include rect(100%, auto);
      @include overflow(auto);
    }
  }
  .footer{
    @include rect(100%,.5rem);
    ul{
      @include rect(100%,100%);
      @include flexbox();
      li{
        @include flex();
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        span{
          @include font-size(.24rem);
        }
        p{
          @include font-size(.12rem);
        }
        &.router-link-active{
          @include color(#b80404);
        }
      }
    }
  }
}
</style>
