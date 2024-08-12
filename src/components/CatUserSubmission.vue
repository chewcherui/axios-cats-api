<script setup lang="ts">
import { IntUserCat } from "../interface";
import { RouterLink } from "vue-router";

defineProps<{
  parsedData: IntUserCat[] | null;
}>();

</script>

<template>
  <div class="mt-10">
    <h1>Cats submitted by users:</h1>
    <ul v-for="(catItem, index) in parsedData" :key="index" class="flex flex-row flex-wrap">
      <li class="text-center w-40 m-4 p-4 rounded-lg bg-slate-500">
        <h2 class="text-lg">Cat breed: </h2>
        <p class="mb-2">{{ catItem.inputbreed }}</p>
        <h2 class="text-lg">Breed description: </h2> 
        <p class="mb-2">{{ catItem.description }}</p>
        <h2 class="text-lg">Submitted by: </h2>
        <p>{{ catItem.username }}</p>
        <br />
        <br />
        <router-link :to=" {name: 'CatForm'} " class="hover:text-sky-300"> Submit yours over here </router-link>
      </li>
    </ul>
  </div>
</template>
