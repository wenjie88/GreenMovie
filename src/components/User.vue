<template>
  <div>
    <h1> 我是 User </h1>
    <router-view class="childView"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.childView {
  border: 1px solid red;
}
</style>
