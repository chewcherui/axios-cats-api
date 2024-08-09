<script setup lang="ts">

import axios from "axios";
import { ref } from "vue";
import { intCat } from "../interface";
import { useAppearanceStore } from "../store";

const store = useAppearanceStore()
const { toggleAppearance } = store

const props = defineProps<{
    catname: string | null
}>()

const catName = ref<string | null>(props.catname || "Unknown")
const catArray = ref<intCat[]>([])

async function getCatData() {
    try{
        const response = await axios.get("https://api.api-ninjas.com/v1/cats?name=" + catName.value, {
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": "6y62YBCg27TX8fI2ag1yPQ==HHiMDSmFyYtVs7Gm"
            }
        })
        let resData = response.data
        catArray.value = resData
        console.log(catArray.value)
    }
    catch (error) {
        console.log(error)
    }
}

getCatData();

</script>

<template>
    <h1 class="mt-6 text-xl">More about this breed: {{ catname }}</h1>
    <div v-if="catArray">
        <div v-for="catItem in catArray" :key="catItem.name">
            <img :src="catItem.image_link" class="w-48 mx-auto my-8" alt="Image of the cat breed"/>
            <ul class="mt-4 text-xl bg-gray-800 p-6 w-1/2 text-center mx-auto rounded-md text-zinc-50">
                <li>Shedding: {{ catItem.shedding }}</li>
                <li>General Health: {{ catItem.general_health }}</li>
                <li>Playfulness: {{ catItem.playfulness }}</li>
                <li>Meowing: {{ catItem.meowing }}</li>
                <li>Children Friendly: {{ catItem.children_friendly}}</li>
                <li>Stranger Friendly: {{ catItem.stranger_friendly }}</li>
                <li>Grooming: {{ catItem.grooming}}</li>
                <li>Other Pets Friendly: {{ catItem.other_pets_friendly}}</li>
                <li>It can weight between {{ catItem.min_weight}} lbs to {{ catItem.max_weight}} lbs</li>
                <li>Lives for {{ catItem.min_life_expectancy}} years to {{ catItem.max_life_expectancy}} years</li>
            </ul>
        </div>
    </div>
</template>