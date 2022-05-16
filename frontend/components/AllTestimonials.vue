<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const { $gsap } = useNuxtApp()

const props = defineProps({
  block: Object,
  index: Number
})
const { find } = useStrapi4()
const { data: testimonials } = await find('testimonials?sort[0]=publishedAt:desc&populate=*')
const blockIndex = useBlockIndex(props.index)

const onSlideChange = () => {
  const tl = $gsap.timeline()
  tl.to('.circle', { scale: 0.95, duration: 0.2 })
  tl.to('.circle', { scale: 1, duration: 0.3 })
}
const modules = [EffectFade, Navigation, Pagination]
</script>
<template>
  <div class="all-testimonials container mx-auto mb-20">
    <div class="circle"></div>
    <div class="section-title text-center">
      <h2 class="text-5xl font-bold mb-10">
        <span class="block-index">{{ blockIndex }}</span>
        {{ block.Title }}
      </h2>
      <h3 class="text-2xl font-bold mb-10 text-red-500">{{ block.Subtitle }}</h3>
    </div>
    <swiper
      @slideChange="onSlideChange()"
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="true"
      :fadeEffect="{ crossFade: true }"
      :speed="250"
      :autoplay="{
        delay: 3000
      }"
      :loop="true"
      :pagination="{
        type: 'fraction'
      }"
      :modules="modules"
    >
      <swiper-slide
        v-for="(testimonial, index) in testimonials"
        :key="`testimonial-${index}`"
        :class="`testimonial-${index}`"
      >
        <div class="content pr-5">
          <div class="quotes text-5xl font-bold text-red-500">“</div>
          <div class="lead text-5xl font-bold mb-10">{{ testimonial.attributes.Lead }}</div>
          <Markdown :content="testimonial.attributes.Text" />
          <div class="name text-2xl font-bold mt-10">{{ testimonial.attributes.Name }}</div>
          <div class="quotes text-5xl font-bold text-red-500">“</div>
        </div>
        <div
          :style="`background-image: url(${testimonial.attributes.Image.data.attributes.url})`"
          class="image rounded-2xl ml-5"
        ></div>
      </swiper-slide>
    </swiper>
    <a href="#" class="text-white bg-red-500 inline-block px-7 py-2 uppercase font-bold rounded-3xl"
      >Voir les témoignages</a
    >
  </div>
</template>

<style lang="scss" scoped>
.all-testimonials {
  padding: 0 10%;
}
.circle {
  width: 60vw;
  height: 60vw;
  border-radius: 50%;
  background-color: #fe4d3e;
  position: absolute;
  z-index: -1;
  right: -30vw;
}
.swiper-slide {
  display: flex;
  // padding: 0 10%;
}

.image {
  flex-shrink: 0;
  width: 400px;
  background-size: cover;
  background-position: center center;
}
:deep(.swiper) {
  padding-top: 70px;
  .swiper-button-prev,
  .swiper-button-next {
    top: 25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    &:after {
      font-size: 15px;
      color: black;
    }
  }
  .swiper-pagination {
    position: absolute;
    right: 50px;
    top: 20px;
    width: 100px;
    left: auto;
    bottom: auto;
  }
}
</style>
