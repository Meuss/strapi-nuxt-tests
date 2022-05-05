<script setup>
const { $markdown } = useNuxtApp()
const props = defineProps({
  content: {
    type: String,
    default: '# defautl content'
  }
})
const content = $markdown.render(props.content)
</script>

<template>
  <div v-html="content"></div>
</template>
