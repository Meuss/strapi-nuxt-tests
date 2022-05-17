<script setup>
const props = defineProps({
  block: Object,
  index: Number
})
const { find } = useStrapi4()
const { data: articles } = await find('articles?sort[0]=publishedAt:desc&populate=*')
const featuredArticles = articles.slice(0, 2)
const otherArticles = articles.slice(2)
const blockIndex = useBlockIndex(props.index)
</script>
<template>
  <div class="latest-articles container mx-auto mb-20">
    <div class="section-title">
      <h2 class="text-5xl font-bold mb-10 scroll-fade">
        <span class="block-index">{{ blockIndex }}</span>
        {{ block.Title }}
      </h2>
      <h3 class="text-2xl font-bold mb-10 text-red-500">{{ block.Subtitle }}</h3>
    </div>
    <div class="articles-wrapper mb-10">
      <article
        v-for="(a, index) in featuredArticles"
        :key="`article-${index}`"
        :class="`article-${index} scroll-fade`"
      >
        <div
          :style="`background-image: url(${a.attributes.Image.data.attributes.url})`"
          :alt="a.attributes.Image.data.attributes.name"
          class="image mb-10 rounded-2xl aspect-[4/3]"
        ></div>
        <h3 class="text-xl font-bold mb-3">{{ a.attributes.Title }}</h3>
        <Markdown :content="a.attributes.Content" />
      </article>
      <div class="other-articles mb-10">
        <article
          v-for="(a, index) in otherArticles"
          :key="`article-${index}`"
          :class="`article-${index} mb-10 scroll-fade`"
        >
          <h3 class="text-xl font-bold mb-3">{{ a.attributes.Title }}</h3>
          <Markdown :content="a.attributes.Content" />
        </article>
      </div>
    </div>
    <a href="#" class="text-white bg-red-500 inline-block px-7 py-2 uppercase font-bold rounded-3xl"
      >Voir les articles</a
    >
  </div>
</template>

<style lang="scss" scoped>
.articles-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
}
.featured-articles {
  grid-column: 1 / span 2;
  // grid-gap: 40px;
}
.image {
  background-size: cover;
}
.article-3 {
  grid-column: 3;
}
</style>
