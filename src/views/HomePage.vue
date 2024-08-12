<script setup lang="ts">
import { watch } from "vue";
import CatProfileCard from "../components/CatProfileCard.vue";
import CatUserSubmission from "../components/CatUserSubmission.vue";
import { useCatStore } from "../store";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { IntUserCat } from "../interface";
// import getEnvVar from "../utils/env"

const store = useCatStore()
const { catArray, catNameInput, familyFriendliness } = storeToRefs(store)
const { getCatData } = store
const parsedData = ref< IntUserCat[] | null >(null)

// Watch for changes in catNameInput and familyFriendliness
watch([catNameInput, familyFriendliness], () => {
  if (catNameInput.value || familyFriendliness.value) {
    getCatData();
  }
});

const checkLocalStorage = () => {
    const localStorageData = localStorage.getItem("User submitted cat array");
    const parsedData: IntUserCat[] = JSON.parse(localStorageData || "null");
    console.log(parsedData);
    return parsedData
}

onMounted(() => {
    checkLocalStorage();
})

</script>


<template>
    <div class="mt-10">
        <h1 class="mx-auto text-center mt-4 text-2xl">Find out more about the cat breeds</h1>
        <div class="flex flex-col w-48 mx-auto">
            <input v-model="catNameInput" class="border-2 mt-4 border-black text-black" placeholder="Enter a breed">
            <label class="mt-4">Level of family friendliness:</label>
            <select v-model="familyFriendliness" name="family-friendliness" class="border-2 mt-4 border-black text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>

        <!-- Pass cat array API data to profile card component -->
        <cat-profile-card :cat-array="catArray"></cat-profile-card>

        <!-- Pass local storage data to cat user submission component -->
        <cat-user-submission :parsed-data="parsedData"></cat-user-submission>
    </div>
</template>