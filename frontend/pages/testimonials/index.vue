<script setup>
const { find } = useStrapi4()
const route = useRoute()
const { data: testimonials } = await find(`testimonials?sort[0]=publishedAt:desc&populate=*`)

useHead({
  titleTemplate: 'Oseo VD - %s'
})
</script>

<template>
  <div class="testimonials">
    <div class="wrapper">
      <article v-for="(testimonial, index) in testimonials" :key="`testimonial-${index}`">
        <div class="content pr-5">
          <div class="lead text-3xl font-bold mb-5">{{ testimonial.attributes.Lead }}</div>
          <Markdown :content="testimonial.attributes.Text" />
          <div class="name text-2xl font-bold mt-5">{{ testimonial.attributes.Name }}</div>
        </div>
        <div
          :style="`background-image: url(${testimonial.attributes.Image.data.attributes.url})`"
          class="image rounded-2xl mr-5"
        ></div>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 600px;
  margin: 0 auto;
}
article {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px;
}
.image {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center center;
}
</style>
