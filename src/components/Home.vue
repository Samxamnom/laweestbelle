<template lang="html">
  <div class="home">
    <div class="header section">
      <h1 class="headline"><span class="header-la">la</span> <span class="header-we">we</span> <span class="header-est">est</span> <span class="header-belle">belle</span></h1>
      <logo class="logo"/>
      <h5 class="subtext clean-font">Gemeinsam ist das leben schöner</h5>
    </div>
    <div class="intro section">
      <div class="welcome gsap">
        <h3>Herzlich Willkommen</h3>
        <p>Für Euch mache ich aus wundervollen Ereignissen unvergessliche, persönliche und besondere Momente – in Eurer individuellen Trauzeremonie oder Willkommensfeier/ Kindesweihe für Euer Baby.</p>
      </div>
      <div class="selection">
        <div class="trauung gsap">
          <h5 class="clean-font">Freie Trauung</h5>
          <p class="description">Ihr wollt ganz individuell und persönlich heiraten? Mit Euch gemeinsam gestalte ich Eure einzigartige Trau(m)-zeremonie ganz nach Euren Wünschen und Vorstellungen.</p>
          <router-link class="button" to="">Mehr..</router-link>
        </div>
        <div class="kindesweihe gsap">
          <h5 class="clean-font">Baby-/Kindesweihe</h5>
          <p clas="description">Ihr möchtet Euren Neuankömmling im Kreise Eurer Liebsten in der Welt begrüßen? Heißt Euer Baby mit einer wundervollen Kindessegnung/ Willkommensfeier willkommen.</p>
          <router-link class="button" to="">Mehr..</router-link>
        </div>
        <div class="kennlern gsap">
          <h5 class="clean-font">Kennlerngespräch</h5>
          <p class="description">Vereinbart noch heute Euren kostenfreien Beratungstermin und lasst uns gemeinsam Eure Trau(m)-zeremonie verwirklichen.</p>
          <router-link class="button" to="">Mehr..</router-link>
        </div>
      </div>
    </div>
    <div class="qoute section">
      <div class="qoute-wrapper gsap">
        <p class="qoute">Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar.</p>
        <p class="source">Antoine de Saint-Exupéry</p>
      </div>
    </div>
    <div class="section section-bottom gsap">
      <p>Ich freue mich sehr, dass Ihr den Weg zu mir gefunden habt und bin gespannt, was genau Eure Vorstellungen, Wünsche und Sehnsüchte in Bezug auf Euren perfekten Moment sind.</p>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import gsap from "gsap";
export default {
  components: {
    Logo
  },
  mounted(){
    gsap.to('.header-la', {
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "center top",
        scrub: 0.5,
      },
      x: -100,
      opacity: 0.5
    });
    gsap.to('.header-we', {
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "center top",
        scrub: 0.5,
      },
      x: -20,
      y: -50,
      opacity: 0.5
    });
    gsap.to('.header-est', {
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "center top",
        scrub: 0.5,
      },
      x: 20,
      y: -50,
      opacity: 0.5
    });
    gsap.to('.header-belle', {
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "center top",
        scrub: 0.5,
      },
      x: 100,
      opacity: 0.5
    });
    gsap.utils.toArray(".gsap").forEach((ele) => {
      gsap.from(ele, {
        scrollTrigger: {
          trigger: ele,
          start: "top 80%",
          // markers: true,
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: -50,
        duration: 1
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
.header
  position relative
  height: 100vh
  width: 100vw
  background-image: url('../assets/pink-background.jpg')
  background-size: cover
  &::after
    content ''
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    background linear-gradient(rgba(black,0.2) 0%, rgba(white,0.3) 80%, rgba(white,1) 100%)
.headline
  z-index 1
  span
    color white
  position absolute
  top 50vh
  font-size 18vw
  transform translate(0,-50%)
  span
    display inline-block
.logo
  position absolute
  top 50vh
  left 17.5vw
  transform translate(0,-50%)
  height: 32vw
.subtext
  color white
  z-index 1
  position absolute
  bottom 25vh
  right 15vw
//--------------------- welcome ----------------------
.welcome
  margin-top 10vh
  margin-bottom 20vh



//--------------------------- Selection ----------------------
.selection
  width: calc(100%+60px)
  display: flex
  align-items top
  flex-wrap wrap
  justify-content space-between
  margin -30px
  margin-bottom 5vh
  .button
    display block
    width fit-content
    margin 1em auto
    margin-bottom 2em
    border 1px solid white
    padding 0.8em 1.2em
    transition all 0.2s
    &:hover
      background: rgba(#fbc9e2,0.5)
      padding: 0.8em 1.7em

  & > div
    position relative
    text-align justify
    width: 20%
    min-width 300px
    z-index 0
    background-size cover
    background-position center
    flex-grow 1
    margin 30px
    h5
      text-align center
      margin 10% auto
    p
      margin 10%
    & > *
      z-index 1
      opacity 0
      transition all 1s
      color white
    &::after
      content ''
      position absolute
      width: 100%
      height 100%
      bottom 0
      left 0
      z-index -1
      transition all 1s
      opacity 0
      background linear-gradient(rgba(black,0.5),rgba(black,0.3),rgba(black,0.5))
    &:hover
      &::after
        opacity 1
      & >*
        opacity 1
  .trauung
    background-image url('../assets/trauung.jpeg')
  .kindesweihe
    background-image url('../assets/kindesweihe.jpeg')
  .kennlern
    background-image url('../assets/kindesweihe.jpeg')
.qoute.section
  position relative
  background-color: #fbc9e2
  &::after
    content ''
    z-index -1
    display block
    position absolute
    width 100%
    height 10em
    left 0
    top -10em
    background-color #fbc9e2
//------------------------------------------ bottom ----------------------
.section-bottom
  margin 15vh 0
</style>
