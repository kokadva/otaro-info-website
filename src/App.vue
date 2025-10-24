<script setup lang="ts">
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
</script>

<template>
  <div class="app">
    <LanguageSwitcher />
    <Hero />
    <Gallery />
    <About />
    <Contact />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  overflow-x: hidden;
}
</style>
