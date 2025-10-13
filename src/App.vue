<script setup lang="ts">
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="app">
    <Hero />
    <About />
    <Gallery />
    <Contact />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  overflow-x: hidden;
}
</style>
