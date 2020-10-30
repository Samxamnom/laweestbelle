import gsap from 'gsap'
export default {
  basicShowAnimation(){
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
