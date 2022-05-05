<template>
  <div class="page-index">
    <h1>{{ homepage.data.attributes.Title }}</h1>
    <Markdown :content="homepage.data.attributes.Content" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})
const { find } = useStrapi4()

const homepage = await find('homepage')
</script>
