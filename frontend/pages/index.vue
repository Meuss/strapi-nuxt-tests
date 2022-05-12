<script setup>
const { find } = useStrapi4()

const { data: homepage } = await find('homepage?populate[Block][populate]=*')
useHead({
  title: 'Homepage'
})
</script>

<template>
  <div class="page">
    <BlockZone :blocks="homepage.attributes.Block" />
    <div class="page-content container mx-auto">
      <Markdown :content="homepage.attributes.Content" />
    </div>
  </div>
</template>
