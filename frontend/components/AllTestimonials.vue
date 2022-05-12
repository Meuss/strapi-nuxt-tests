<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
const props = defineProps({
  block: Object,
  index: Number
})
const { find } = useStrapi4()
const { data: testimonials } = await find('testimonials?sort[0]=publishedAt:desc&populate=*')
const blockIndex = useBlockIndex(props.index)
// Import Swiper Vue.js components

// const swiper = new $Swiper('.swiper', {})
</script>
<template>
  <div class="all-testimonials container mx-auto mb-20">
    <h2 class="text-5xl font-medium mb-10">{{ blockIndex }}</h2>
    <h2 class="text-5xl font-bold mb-10">{{ block.Title }}</h2>
    <h3 class="text-2xl font-bold mb-10">{{ block.Subtitle }}</h3>
    <swiper>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
    <div
      v-for="(testimonial, index) in testimonials"
      :key="`testimonial-${index}`"
      :class="`testimonial-${index}`"
    >
      <div class="text-2xl lead">{{ testimonial.attributes.Lead }}</div>
      <Markdown :content="testimonial.attributes.Text" />
      <img
        :src="`http://localhost:1337${testimonial.attributes.Image.data.attributes.url}`"
        :alt="testimonial.attributes.Image.data.attributes.name"
        class="rounded-2xl aspect-square"
      />
    </div>
    <a href="#" class="text-white bg-red-500 inline-block px-7 py-2 uppercase font-bold rounded-3xl"
      >Voir les témoignages</a
    >
  </div>
</template>

<style lang="scss" scoped></style>
