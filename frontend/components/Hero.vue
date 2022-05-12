<script setup>
const props = defineProps({
  block: Object
})
</script>
<template>
  <div class="hero relative mt-5 mb-20 container mx-auto columns-1">
    <div class="w-1/2">
      <h1 class="mb-10 mt-20 text-5xl font-bold">{{ block.Title }}</h1>
      <Markdown :content="block.Content" />
    </div>
    <img
      :src="`http://localhost:1337${block.Image.data.attributes.url}`"
      :alt="block.Image.data.attributes.name"
      class="absolute -right-20 top-0 -z-10 h-full"
    />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  height: 60vh;
}
</style>
