<template>
  <div>
    <Menu/>
    <load-screen/>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import LoadScreen from './components/LoadScreen.vue'
import Menu from './components/Menu.vue'
export default {
  components: {
    LoadScreen,
    Menu
  }
}
</script>

<style lang="stylus">
body
  overflow-x: hidden
  width: 100vw
*
  box-sizing border-box
  font-family: 'Open Sans', sans-serif;
  outline none
  margin 0
  padding 0
  color #212529
  line-height 150%
.clean-font, .clean-font *
  font-family: 'Raleway', sans-serif;
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, .h1 *, .h2 *, .h3 *, .h4 *, .h5 *, .h6 *, .font2, .font2 *, h1 *
  font-family: 'Great Vibes', cursive;
  margin 0
  margin-bottom 1rem
h1, .h1, .h1 *
  font-size: calc(4vw+50px)
h2, .h2, .h2 *
  font-size calc(3.5vw+40px)
h3, .h3, .h3 *
  font-size calc(2.7vw+30px)
h4, .h4, .h4 *
  font-size calc(1.8vw+20px)
h5, .h5, .h5 *
  font-size calc(1vw+15px)
h6, .h6, .h6 *
  font-size calc(0.5vw+10px)
p
  font-size calc(1vmin + 15px)
  margin 1em 0
hr
  margin 0 10%
  border none
  border-top 0.5px solid black
a
  color inherit
  text-decoration: none
.qoute-wrapper
  // margin 10vh 0
  padding: 5em 0
  width 100%
  position relative
  &::after
    color rgba(black,0.1)
    top 45%
    left 0
    position absolute
    content '"'
    font-size: 1000%
    transform: translate(-50%, 0%)
  .qoute
    font-size: 200%
  .source
    margin 0
    float right

.section
  padding 0vh 10vw
//links
.link
  display inline-block
  width fit-content
  position relative
  cursor pointer
  &::after
    content: ''
    height 0.1em
    width 100%
    max-width 0
    position absolute
    bottom -0.1em
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
