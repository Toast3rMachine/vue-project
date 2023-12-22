<script setup>

</script>

<template>
  <nav class="navbar font-sans font-semibold text-xl ml-4">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'SpecialFruits'}">Special Fruits</router-link>
  </nav>
  <RouterView></RouterView>
</template>

<style scoped>

</style>
