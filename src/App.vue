<template>
  <div class="app-layout">
    <!-- Fixed Navigation Header -->
    <Header />

    <!-- Main Content Flow -->
    <main id="main-content">
      <!-- 00 Hero Presentation -->
      <Hero />

      <!-- 01 Phone Screen Preview (Inside the Grid) -->
      <Preview />

      <!-- 02 Capabilities & Features -->
      <Features />

      <!-- 03 Sideloading & Installation Guide -->
      <InstallGuide />

      <!-- 04 Final Call To Action Console -->
      <FinalCta />
    </main>

    <!-- Site Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Preview from './components/Preview.vue';
import Features from './components/Features.vue';
import InstallGuide from './components/InstallGuide.vue';
import FinalCta from './components/FinalCta.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
