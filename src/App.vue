<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">Logo</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to='/home'>Home</router-link>
          </li>
          <li>
            <router-link to='/home'>Home</router-link>
          </li>
          <li>
            <router-link to='/home'>Home</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <transition name='router-fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
