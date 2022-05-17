<script setup>
const nuxtApp = useNuxtApp()
const { $gsap } = useNuxtApp()

nuxtApp.hook('page:start', () => {
  console.log('page load start')
  // $gsap.fromTo('.page', { rotate: 0, x: 300 }, { rotate: 30060, x: 0, duration: 3 })
})
nuxtApp.hook('page:finish', () => {
  console.log('page load finish')
})

nuxtApp.hook('page:finish', () => {
  $gsap.utils.toArray('.scroll-fade').forEach((el) => {
    $gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        y: 30
      },
      {
        scrollTrigger: {
          trigger: el,
          once: true
        },
        duration: 0.5,
        autoAlpha: 1,
        y: 0
      }
    )
  })
})
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
