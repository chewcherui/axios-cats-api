<script setup lang="ts">

import * as yup from "yup";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";

const router = useRouter()

const { meta, handleSubmit, values, errors, defineField } = useForm({
    validationSchema: yup.object({
        inputbreed: yup.string().required("Please enter the cat breed"),
        description: yup.string().required("Please enter the breed description"),
        // imagefile: yup.mixed()
        username: yup.string().required("Please enter your name")
    })
})

const [inputbreed, inputBreedAttrs] = defineField("inputbreed")
const [desc, descAttrs] = defineField("description")
const [username, usernameAttrs] = defineField("username")

const getStoredArray = () => {
    const storedArray = localStorage.getItem("User submitted cat array");
    return storedArray ? JSON.parse(storedArray) : []
}

const onSubmit = handleSubmit(values => 
    { alert(JSON.stringify(values, null, 2));
    const submittedCatArray = getStoredArray();
    submittedCatArray.push(JSON.stringify(values));
    localStorage.setItem("User submitted cat array", JSON.stringify(submittedCatArray));
    console.log("Form data submitted");
    router.push("/")
    }
)

</script>

<template>
    <h1 class="mx-auto text-center mt-4 text-2xl"> Submit your cat breed! </h1>
    <div class="mx-auto w-64 text-center mt-10 flex flex-col">
        <form @submit="onSubmit">
            <p>Your cat breed:</p>
            <input v-model="inputbreed" v-bind="inputBreedAttrs" type="text" class="border-slate-700 rounded-lg border-2 p-2"/>
            <span v-if="errors.inputbreed && meta.touched" class="text-red-600"> {{  errors.inputbreed }}</span>
            <p>Description:</p>
            <textarea v-model="desc" v-bind="descAttrs" rows="10" cols="25" class="border-slate-700 rounded-lg border-2 p-2" placeholder="Please enter breed attributes such as: x,y,z"></textarea>
            <span v-if="errors.description && meta.touched" class="text-red-600"> {{  errors.description }}</span>
            <p>Your name:</p>
            <input v-model="username" v-bind="usernameAttrs" type="text" class="border-slate-700 rounded-lg border-2 p-2"/>
            <span v-if="errors.username && meta.touched" class="text-red-600"> {{  errors.username }}</span>

            <div>
                <button class="rounded-lg mt-2 p-2 w-30 btn bg-blue-600 text-white" type="submit"> Submit </button>
            </div>
        </form>
    </div>
</template>