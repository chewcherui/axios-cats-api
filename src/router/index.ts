import CatProfile from "../views/CatProfile.vue";
import HomePage from "../views/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: "/", name: "HomePage" , component: HomePage },
    {path: "/cat/:catname", 
    name: "CatProfile", 
    component: CatProfile, 
    props: true
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})