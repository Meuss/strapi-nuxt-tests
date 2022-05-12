import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GSDevTools } from 'gsap/GSDevTools'
gsap.registerPlugin(ScrollTrigger, GSDevTools)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap
    }
  }
})
