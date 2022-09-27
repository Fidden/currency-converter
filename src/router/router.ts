import HomePage from '@/pages/HomePage.vue';
import ConverterPage from '@/pages/ConverterPage.vue';
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/converter',
        name: 'converter',
        component: ConverterPage
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
