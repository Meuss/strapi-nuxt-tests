<script setup>
const { find } = useStrapi4()

const menu = await find('navigation/render/1')
</script>

<template>
  <div class="menu">
    <div>Here should be the menu</div>
  </div>
</template>
