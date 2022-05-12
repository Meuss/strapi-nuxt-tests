<script setup>
const { find } = useStrapi4()
const route = useRoute()
const page = await find(`pages/${route.params.slug}`)

useHead({
  titleTemplate: 'Oseo VD - %s'
})

definePageMeta({
  key: (route) => route.slug,
  transition: {
    name: 'page',
    css: false,
    beforeEnter(el) {
      console.log('Before enter...')
    }
  },
  keepAlive: {
    exclude: ['modal']
  }
})
</script>

<template>
  <div class="page">
    <h1>{{ page.data.attributes.Title }}</h1>
    <Markdown :content="page.data.attributes.Content" />
  </div>
</template>
