<script setup lang="ts">

import { intCat } from "../interface";
import { RouterLink } from "vue-router";

defineProps<{
    catArray: intCat[] | null
}>()

</script>

<template>
    <div class="mt-10">
        <ul class="flex flex-row flex-wrap"> 
            <li v-for="catItem in catArray" :key="catItem.name" class="w-40 m-4 p-2 rounded-lg bg-slate-200">
                <h1 class="m-4">Breed: {{ catItem.name }}</h1>
                <img :src="catItem.image_link" class="w-48 mx-auto" alt="Image of the cat breed"/>
                <h2 class="mt-4">Origin: {{ catItem.origin }}</h2>
                <p>Length: {{ catItem.length }}</p>

                <!-- Learn more : redirect to individual breed profile page -->

                <router-link :to="{ name: 'CatProfile', params: { catname: catItem.name }}" class="hover:text-sky-300">
                    <p class="text-sm">Learn more about this breed</p>
                </router-link>
            </li>
        </ul>

    </div>
</template>