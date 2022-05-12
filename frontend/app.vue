<script setup>
const nuxtApp = useNuxtApp()
// const { $gsap } = useNuxtApp()

nuxtApp.hook('page:start', () => {
  console.log('page load start')
  // $gsap.fromTo('.page', { rotate: 0, x: 300 }, { rotate: 360, x: 0, duration: 3 })
})
nuxtApp.hook('page:finish', () => {
  console.log('page load finish')
})
// const route = useRoute()
// definePageMeta({
//   key: (route) => route.slug,
//   transition: {
//     name: 'page',
//     css: false,
//     beforeEnter(el) {
//       console.log('Before enter...')
//     }
//   },
//   keepAlive: {
//     exclude: ['modal']
//   }
// })
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
