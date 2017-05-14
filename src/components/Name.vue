<template>
  <div class="childname">
      <h1>我是childname --- {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.childname{
    height: 200px;
    width:200px;
    background-color: green;
}
</style>
