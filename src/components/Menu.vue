<template lang="html">
  <nav>
    <router-link to="/">
      <img src="favicon-96x96.png" alt="Home">
    </router-link>
    <ul class="menu">
      <li class="link clean-font"><router-link to="/About">&Uuml;ber mich</router-link></li>
      <li class="link clean-font"><router-link to="/Zeremonie">Eure Zeremonie</router-link></li>
      <li class="link clean-font"><router-link to="/Kontakt">Kontakt</router-link></li>
    </ul>
  </nav>
</template>

<script>
import gsap from "gsap";
export default {
  mounted(){
    gsap.to('nav', {
      scrollTrigger: {
        trigger: ".header",
        start: "center top",
        end: "bottom top",
        scrub: true,
      },
      background: 'linear-gradient(white,transparent)'
    });
  }
}
</script>

<style lang="stylus" scoped>
nav
  z-index 10
  position fixed
  top 0
  right 0
  width 100%
  display flex
  align-items center
  justify-content space-between
  background-color white
  // box-shadow: 0 0 5px 5px #fbc9e2
  img
    height 50px
    margin 10px 20px
.menu
  li
    color black
    margin 10px 5vw
</style>
