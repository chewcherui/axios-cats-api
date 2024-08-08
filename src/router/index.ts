import HomePage from "../components/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: "/", component: HomePage }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})