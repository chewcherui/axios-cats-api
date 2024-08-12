import CatDetailedProfile from "../views/CatDetailedProfile.vue";
import CatForm from "../views/CatForm.vue";
import ContactForm from "../views/ContactForm.vue";
import HomePage from "../views/HomePage.vue";
import ErrorPage from "../views/ErrorPage.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: "/", 
        name: "HomePage" , 
        component: HomePage },
    {
        path: "/cat/:catname", 
        name: "CatDetailedProfile", 
        component: CatDetailedProfile, 
        props: true
    },
    {
        path: "/cat/submitcat", 
        name: "CatForm", 
        component: CatForm
    },
    {
        path: "/cat/contactus", 
        name: "ContactForm", 
        component: ContactForm
    },
    {
        path: "/:catchAll(.*)", 
        name: "ErrorPage", 
        component: ErrorPage
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})