<script setup>
const { find } = useStrapi4()
const { data: footer } = await find('footer')
</script>

<template>
  <footer class="p-10">
    <div class="tagline">{{ footer.attributes.Copyright }}</div>
  </footer>
</template>

<style lang="scss" scoped>
.tagline {
  @apply font-light text-xs text-right italic;
}
</style>
