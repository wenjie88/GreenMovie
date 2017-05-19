<template>
  <div>
    <nav class='appbar'>
      <div class="nav_btngroup">
        <router-link to='/home' class="bar_button">Home</router-link>
      </div>
    </nav>
    <transition name='router-fade' mode='out-in'>
      <router-view id='appview'></router-view>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
@navHeight: 64px;

.appbar {
  height: @navHeight;
  line-height: @navHeight;
  width: 100%;
  background-color: #7e57c2;
  position: fixed;
  z-index: 999;

  .nav_btngroup {
    height: 100%;

    .bar_button {
      display: inline-block;
      height: 100%;
      padding-right: 16px;
      padding-left: 16px;
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }
    }
  }
}

#appview {
  position: relative;
  top: @navHeight;
}


body,
html {
  padding: 0px;
  margin: 0px;
}

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
