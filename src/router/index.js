import { createRouter, createWebHistory } from "vue-router";
import welcome from "@/components/welcome.vue";
import container from "@/components/container.vue";
import difficulty from "@/components/difficulty.vue";

const routes = [
    {path: '/', name: 'Start', component: welcome},
    {path:'/difficulty', name: 'Difficulties', component:difficulty},
    {path: '/play', name: 'Hangman', component: container}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router