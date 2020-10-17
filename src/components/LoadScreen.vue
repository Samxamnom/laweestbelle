<template lang="html">
<transition appear :duration="{ enter: 1000, leave: 1000 }" @after-enter="autoHide" name="logo">
  <div v-if="$store.state.loadScreen" class="wrapper">
    <logo class="logo"/>
  </div>
</transition>
</template>

<script>
import Logo from './icons/Logo.vue'
export default {
  components: {
    Logo
  },
  data() {
    return {
      ah: true //autohide
    }
  },
  methods: {
    autoHide(){
      if(this.ah){
        this.$store.commit('hideLoadScreen')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  position: fixed;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
.logo-leave-active
  transition: opacity 1s
.logo-leave-to
  opacity: 0;

.logo
  background: rgba(255,255,255,0)
  transition: all 1s
  fill: rgba(0,0,0,0)
  stroke: black
  stroke-width 0.8px
  width: calc(30vw+150px)
  margin: auto;
  transform-origin: center;
  stroke-dasharray 350 0
@media only screen and (max-aspect-ratio: 5/6)
  .logo
    width: calc(70vw+100px)

.logo-enter-active .logo
  transition-timing-function: cubic-bezier(0.11, 0, 0.5, 0);

.logo-enter .logo
  transform: scale(0.7);
  stroke-dasharray 0 350
</style>
