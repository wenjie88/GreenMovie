<template>
  <div class="div">
    <div class="child1">1</div>
    <div class="child2">2</div>
    <div class="child3">3</div>
    <div class="child2">4</div>
    <div class="child3">5</div>
    <div class="child2">6</div>
    <div class="child3">7</div>
    <div class="child2">8</div>
  </div>
</template>


<script>
import ajax from '../config/ajax.js'
export default {
  created() {
    

  }
}
</script>

<style>
.div {
  display: flex;
  background-color: yellow;
  height: 50%;
  width: 50%;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: flex-start;
}

.child1 {
  height: 100px;
  /*width: 100px;*/
  background-color: paleturquoise;
  flex: 0 0 100px;
}

.child2 {
  height: 100px;
  /*width: 100px;*/
  /*flex-shrink:0;*/
  background-color: saddlebrown;
  /*flex-grow:1;*/
  flex: 0 0 100px;
}

.child3 {
  /*height: 100px;*/
  /*width: 300px;*/
  background-color: aquamarine;
  /*flex-grow:2;*/
  /*flex-basis:100px*/
  flex: 1;
  /*align-self:flex-start;*/
}
</style>
