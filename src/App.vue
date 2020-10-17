<template>
  <div>
    <load-screen/>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import LoadScreen from './components/LoadScreen.vue'
export default {
  components: {
    LoadScreen
  }
}
</script>

<style lang="stylus">
body
  overflow-x: hidden
  width: 100vw
*
  font-family: 'Open Sans', sans-serif;
  outline none
  margin 0
  padding 0
  color #212529
.headline
  font-family: 'Great Vibes', cursive;
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, .h1 *, .h2 *, .h3 *, .h4 *, .h5 *, .h6 *, .font2, .font2 *
  font-family: 'Raleway', sans-serif;
  margin-bottom 1rem
h1, .h1, .h1 *
  font-size: calc(4vw+50px)
h2, .h2, .h2 *
  font-size calc(1vw+20px)

//links
.link
  display inline-block
  width fit-content
  position relative
  cursor pointer
  &::after
    content: ''
    height 2px
    width 100%
    max-width 0
    position absolute
    bottom 0
    left 0
    transition max-width 0.5s
    background-color #212529
  &:hover::after
    max-width 100%
//pagetransition
.page-enter-active,
.page-leave-active
  transition: all 0.5s ease

.page-enter,
.page-leave-to
  opacity 0
  transform: translate(20px, 0)
</style>
