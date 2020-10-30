<template lang="html">
  <nav>
    <router-link to="/">
      <img src="favicon-96x96.png" alt="Home">
    </router-link>
    <ul class="menu">
      <li class="link clean-font"><router-link to="/Zeremonie">Eure Zeremonie</router-link>
        <ul>
          <li class="link clean-font"><router-link to="/About">Freie Trauung</router-link></li>
          <li class="link clean-font"><router-link to="/About">Baby-/ Kindesweihe</router-link></li>
        </ul>
      </li>
      <li class="link clean-font"><router-link to="/About">&Uuml;ber mich</router-link></li>
      <li class="link clean-font"><router-link to="/Kontakt">Kontakt</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
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
  background #fbc9e2
  // box-shadow: 0 0 5px 5px #fbc9e2
  img
    height 50px
    margin 10px 20px
    transition all 0.2 ease
    &:hover
      animation heart-beat 1s
@keyframes heart-beat
  0%,20%
    transform none
  10%
    transform scale(1.3)
.menu li
  position relative
  color white
  margin 10px 5vw
  &::after
    background white
  ul
    transition opacity 0.5s,transform 0.5s
    padding: 1em 0
    position absolute
    list-style none
    top 100%
    left 50%
    background #fbc9e2
    transform translate(-50%, -10%)
    pointer-events none
    opacity 0
  &:hover ul
    pointer-events auto
    opacity 1
    transform translate(-50%, 0%)
</style>
