<script setup>
const props = defineProps({
  blocks: Array
})

function blockSlugFormat(block) {
  const name = block.__component
  const componentName = name
    .replace('modules.', '')
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('')
  return resolveComponent(componentName)
}
</script>

<template>
  <div class="block-zone">
    <template v-for="(block, i) in blocks" :key="`block-${i}`">
      <Component :is="blockSlugFormat(block)" :index="i" :block="block" />
    </template>
  </div>
</template>
