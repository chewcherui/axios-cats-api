<script setup lang="ts">
import { onMounted } from "vue";
import { useCatStore } from "../store";
import { storeToRefs } from "pinia";

const store = useCatStore()
const { singleBreedArray } = storeToRefs(store)

const props = defineProps<{
    catname: string
    class: string
}>()

// Pass props to Pinia store's function; returns singleBreedArray
store.getSingleBreedData(props.catname)

console.log("props:", props.catname)

onMounted(() => {
    store.getSingleBreedData(props.catname)
})

</script>

<template>
    <div v-for="catItem in singleBreedArray" :key="catItem.name">
        <h1 class="text-center mt-6 text-xl">More about this breed: {{ props.catname }}</h1>
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
</template>