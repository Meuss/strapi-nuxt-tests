import { defineNuxtPlugin } from '#app'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      Swiper
    }
  }
})
