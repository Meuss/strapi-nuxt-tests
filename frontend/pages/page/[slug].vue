<template>
  <div class="page">
    <h1>A page</h1>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
definePageMeta({
  layout: 'custom'
})
// const { data: page } = await useFetch(`${config.API_URL}/pages/`)
// const { data: homepage } = await useFetch(`${config.API_URL}/homepage`)
const { data: pages } = await useFetch(`${config.API_URL}/pages`)
</script>
