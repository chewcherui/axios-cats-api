<script setup lang="ts">
import { RouterView } from "vue-router";
import { useCatStore } from "./store";
import { RouterLink } from "vue-router";
import CatForm from "./views/CatForm.vue";

const store = useCatStore()
const { toggleAppearance } = store

</script>

<template>
  <div class="flex-col m-10 div-style">
    <div class="flex flex-row">
      <span class="text-5xl text-center mr-auto">Welcome to the Cats API page</span>
      <button class="ml-auto inline btn bg-black  text-white p-2 rounded-lg" @click="toggleAppearance">Toggle Appearance</button>
      <router-link :to="{ name: 'CatForm'}"><button class="inline btn bg-emerald-500 text-white ml-8 p-2 rounded-lg w-40">Submit your own cat!</button></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
