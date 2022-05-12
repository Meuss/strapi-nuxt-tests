<script setup>
const props = defineProps({
  block: Object,
  index: Number
})
const { find } = useStrapi4()
const { data: articles } = await find('articles?sort[0]=publishedAt:desc&populate=*')

const blockIndex = useBlockIndex(props.index)
</script>
<template>
  <div class="latest-articles container mx-auto mb-20">
    <h2 class="text-5xl font-medium mb-10">{{ blockIndex }}</h2>
    <h2 class="text-5xl font-bold mb-10">{{ block.Title }}</h2>
    <div class="featured-articles mb-10">
      <article v-for="(a, index) in articles" :key="`article-${index}`" :class="`article-${index}`">
        <img
          v-if="index < 2"
          :src="`http://localhost:1337${a.attributes.Image.data.attributes.url}`"
          :alt="a.attributes.Image.data.attributes.name"
          class="mb-10 rounded-2xl aspect-[4/3]"
        />
        <h3 class="text-xl font-bold mb-10">{{ a.attributes.Title }}</h3>
        <Markdown :content="a.attributes.Content" />
      </article>
    </div>
    <a href="#" class="text-white bg-red-500 inline-block px-7 py-2 uppercase font-bold rounded-3xl"
      >Voir les articles</a
    >
  </div>
</template>

<style lang="scss" scoped>
.featured-articles {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
}
</style>
