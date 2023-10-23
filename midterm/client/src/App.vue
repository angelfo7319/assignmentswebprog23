<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';

</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class ="container">
       <RouterView />
  </div>
</template>

<style scoped>
</style>
