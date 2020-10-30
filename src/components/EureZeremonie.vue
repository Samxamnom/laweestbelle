<template lang="html">
  <div class="about">
    <div class="section">
      <h1>Eure Zeremonie</h1>
      <p>Um Euch eine wunderbare und persönliche Zeremonie zu gestalten, durchlaufen wir gemeinsam – egal zu welchem Anlass – die folgenden Schritte:</p>
      <ul class="timeline">
        <li v-for="(obj, i) of timelineData" :key="i">
          <div>
            <p class="index">{{i}}</p>
            <p class="timestamp">{{obj.description}}</p>
          </div>
        </li>
      </ul>
      <ul>
        <li class="gsap" v-for="(obj, i) of timelineData" :key="i">
          <h3>{{obj.description}}</h3>
          <p v-for="(paragraph, index) of obj.content" :key="index">{{paragraph}}</p>
        </li>
      </ul>

      <p class="centered">Eure – Juliane Kurze"</p>
    </div>
  </div>
</template>

<script>
import gsap from '../scripts/gsap'
export default {
  data() {
    return {
      timelineData: [{
          description: "Das Kennenlerngespräch",
          content: ["Der erste Schritt zu Eurer Traumzeremonie beginnt mit einem persönlichen Treffen. Hier geht es darum uns kennen zu lernen, zu beschnuppern und für Euch hauptsächlich darum, ob es für Euch mit mir passt!",
            "Wir besprechen gemeinsam Eure Wünsche, Vorstellungen, Ideen, Möglichkeiten und Gegebenheiten – ganz kostenfrei und unverbindlich.",
            "Nach unserem Kennenlernen könnt Ihr zu Hause ganz in Ruhe entscheiden, ob ich zu Euch passe und somit Eure Zeremonie gestalten darf."
          ]
        },
        {
          description: "Die Entscheidung",
          content: ["Wenn es für Euch passt und Ihr schon von mir als Eure Zeremonierednerin träumt 😉 machen wir einen Knopf bzw. in diesem Falle einen Vertrag an Eure Zeremonie.",
            "Ab diesem Zeitpunkt wird Eure Zeremonie mit mir als Eure Zeremonierednerin verbindlich und sicher."
          ]
        },
        {
          description: "Das Zeremoniegespräch",
          content: ["In diesem intensiven Gespräch werde ich Euch so richtig auf den Zahn fühlen!",
            "Denn jetzt geht es ans Eingemachte: den Ablauf Eurer Wunschzeremonie, alles was Euch/ Euren Nachwuchs einzigartig macht und Euch für Eure Zeremonie besonders wichtig ist.",
            "Hier werden wir im Detail besprechen, worauf es Euch ankommt! Und alle Fragen, Wünsche, Vorstellungen – bspw. Ehe-/Weihversprechen, Trau-/ Weihfrage sowie Trau-/Weihspruch und Trau-/ Weihpaten – genaustens klären, so dass Eurem Traummoment nichts mehr im Wege steht."
          ]
        },
        {
          description: "Der Ablaufplan",
          content: ["Nach unserem Zeremoniegespräch geht es für mich an die Gestaltung Eurer Wunschzeremonie.",
            "Ausarbeitung Eurer individuellen und persönlichen Zeremonierede, Einfügen von bspw. Beiträgen von Verwandten und Freunden, Musik etc. in den Zeremonieablaufplan.",
            "Um Euch vor Eurer Zeremonie einen detaillierten Ablaufplan zur Verfügung zu stellen, werden wir (und ich mit weiteren Beteiligten von Musik, Location, Trau-/Weihpaten etc.) in dieser Phase regelmäßig Kontakt haben und alle nötigen Absprachen treffen, damit am Tag des Geschehens für alle Beteiligten Sicherheit und Klarheit herrscht."
          ]
        },
        {
          description: "Die Zeremonie",
          content: [
            "An Eurem großen Tag bin ich ca. 1,5-2 Stunden im Voraus vor Ort: letzte Vorbereitungen müssen von mir getroffen werden bspw. der Technikcheck, mich letztmalig kurz mit den Beteiligten besprechen, das ein oder andere Pläuschchen mit Euren Gästen halten und um Euch Ruhe, Sicherheit und Gewissheit zu spenden."
          ]
        },
        {
          description: "Eure Zeremonie",
          content: ["Euer ganz persönlicher und wunderbarer Traummoment ist nun gekommen – genießt es in vollen Zügen und habt unglaublich viel Freude dabei!"]
        },
      ]
    }
  },
  mounted(){
    gsap.basicShowAnimation();
  }
}
</script>

<style lang="stylus" scoped>
.section
  margin-top 18vh
.centered
  text-align center
.timeline
  z-index 2
  position fixed
  left 0
  top 50%
  transform translate(0,-50%)
  li
    p
      margin 0
      display inline-block
    .timestamp
      padding 0.3em
      background transparent
      opacity 0
      pointer-events none
      transition all .5s
    .index:hover + .timestamp
      opacity 1
      background #fbc9e2
      pointer-events auto
    .index
      cursor pointer
      width: 2em
      // height: 2em
      padding 0.3em 0
      text-align center
      margin: 0.2em 0.2em
      background #fbc9e2
    // opacity 0
    &::before
      content ''

</style>
