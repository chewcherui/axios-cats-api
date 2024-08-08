<script setup lang="ts">
import { RouterView } from "vue-router";
// import HomePage from './components/HomePage.vue'
</script>

<template>
  <div class="flex-col m-10 text-center">
    <h1 class="text-5xl">Welcome to the Cats API page</h1>
    <router-view></router-view>
    <!-- <home-page></home-page> -->
  </div>
</template>

<style scoped>

</style>
