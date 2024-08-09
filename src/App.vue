<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAppearanceStore } from "./store";
// import { storeToRefs } from "pinia";

const store = useAppearanceStore()
const { toggleAppearance } = store

</script>

<template>
  <div class="flex-col m-10 div-style">
    <div class="flex flex-row">
      <span class="text-5xl text-center mr-auto">Welcome to the Cats API page</span>
      <span class="ml-auto"><button class="inline btn bg-black text-white p-2 rounded-lg" @click="toggleAppearance">Toggle Appearance</button></span>
    </div>
    <router-view class="text-center"></router-view>
  </div>
</template>

<style scoped>

</style>
