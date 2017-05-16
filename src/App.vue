<template>
  <div>
    <h1>{{count}}</h1>
    <button v-on:click="ss">+1</button>
    <input v-model="changeName" />
    <h1>{{changeName}}</h1>
    <h2>{{'改了：'+ changeName}}</h2>
    <transition name='router-fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { ADD_COUNT } from './mutation.js'
export default {
  // data() {
  //   return {
  //     name: this.$store.state.sname
  //   }
  // },
  computed: {
    ...mapState({
      count: 'count',
      // changeName:'sname'
    }),
    changeName: {
      get(){
        return this.$store.state.sname
      },
      set(val){
        this.$store.commit('changeName', val)
      }
    }
    // ...mapGetters({
    //   name: 'stateName'
    // }),
  },
  // watch:{
  //   name() {
  //     this.$store.commit('changeName', this.name)
  //   }
  // },
  methods: {
    ss() {
      // this.$store.commit(ADD_COUNT, { num: 20 })
      this.$store.dispatch(ADD_COUNT, { num: 20 })
    }
  }
}
</script>

<style>
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
