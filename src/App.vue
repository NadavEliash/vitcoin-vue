<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/Appfooter.vue'
</script>

<template>
  <AppHeader />
  <main class="main-content">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style lang="scss">

</style>