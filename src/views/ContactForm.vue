<script lang="ts">

import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form, 
        Field,
        ErrorMessage
    },
    methods: {
        onSubmit(values: {}) {
            console.log(values)
        },

        validateName(value: string) {
            if(!value) {
                return "Name field is required"
            }
            return true;
        },
                
        validateEmail(value: string) {
            if(!value) {
                return "Email field is required"
            }
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
            return 'This field must be a valid email';
            }
            return true;
        },
                
        validateTextInput(value: string) {
            if(!value) {
                return "This field is required"
            }
            return true;
        }
    },
}

</script>

<template>
    <h1 class="mt-4 text-2xl text-center"> Contact Us </h1>
        <Form @submit="onSubmit" class="mx-auto text-center flex flex-col w-64">
            <p class="mt-2">Your name:
                <Field type="text" name="full-name" :rules="validateName" class="border-slate-700 rounded-lg border-2 p-2" placeholder="Enter your full name"/>
                <ErrorMessage name="full-name" />
            </p>
            <p class="mt-2">Your email:
                <Field type="email" name="email" :rules="validateEmail" class="border-slate-700 rounded-lg border-2 p-2" placeholder="Enter your email" />
                <ErrorMessage name="email" />
            </p>
            <p class="mt-2">Leave us your message:</p>
                <Field as="textarea" name="textarea" :rules="validateTextInput" rows="10" cols="5" placeholder="Your message here" class="border-slate-700 rounded-lg border-2 p-2 m-2" />
                <ErrorMessage name="textarea" />
            <button class="rounded-lg p-2 btn bg-blue-600 text-white"> Submit </button>
        </Form>
</template>