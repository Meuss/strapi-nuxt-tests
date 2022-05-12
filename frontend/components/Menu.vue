<script setup>
const { find } = useStrapi4()
const menu = await find('navigation/render/1')
</script>

<template>
  <nav class="menu">
    <ul class="block">
      <li v-for="item in menu" :key="`menu-item-${item.id}`" class="inline">
        <nuxt-link
          :to="`${item.path}`"
          class="px-3 py-2 font-medium rounded text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >{{ item.title }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>
