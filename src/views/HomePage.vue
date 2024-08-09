<script setup lang="ts">
import axios from "axios";
import { ref, watch } from "vue";
import CatProfileCard from "../components/CatProfileCard.vue";
import { intCat } from "../interface";
// import getEnvVar from "../utils/env"

const catArray = ref<intCat[]>([])
// User input
const catNameInput = ref<string>("")
const familyFriendliness = ref<string>("")

// Possibly make this into a composable
async function getCatData() {
    try{
        const response = await axios.get("https://api.api-ninjas.com/v1/cats", {
            params: {
                name: catNameInput.value,
                family_friendly: familyFriendliness.value
            },
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

watch(catNameInput, () => {
    if(catNameInput.value) {
        getCatData()
    }
})

watch(familyFriendliness, () => {
    if(familyFriendliness.value) {
        getCatData()
    }
})
</script>


<template>
    <div class="mt-10">
        <h1>Find out more about the cat breeds</h1>
        <div class="flex flex-col w-48 mx-auto">
            <input v-model="catNameInput" class="border-2 mt-4 border-black text-black" placeholder="Enter a breed">
            <label class="mt-4">Level of family friendliness:</label>
            <select v-model="familyFriendliness" name="family-friendliness" class="border-2 mt-4 border-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>

        <!-- Pass cat array API data to profile card component -->
        <cat-profile-card :cat-array="catArray"></cat-profile-card>
    </div>
</template>

<style scoped>

</style>
