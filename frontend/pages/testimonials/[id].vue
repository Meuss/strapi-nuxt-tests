<script setup>
const { find } = useStrapi4()
const route = useRoute()
const { data: testimonial } = await find(`testimonials/${route.params.id}?populate=*`)

useHead({
  titleTemplate: 'Oseo VD - %s'
})
</script>

<template>
  <div class="single-testimonial">
    <p>single testimonial</p>
    <h1>{{ testimonial.attributes.Lead }}</h1>
    <p><strong>id</strong>: {{ testimonial.id }}</p>
    <p><strong>name</strong>: {{ testimonial.attributes.Name }}</p>
    <p><strong>text</strong>: {{ testimonial.attributes.Text }}</p>
  </div>
</template>
