import { createRouter, createWebHistory } from "vue-router";
import welcome from "@/components/welcome.vue";
import container from "@/components/container.vue";
import difficulty from "@/components/difficulty.vue";
import gameOver from "@/components/gameOver.vue";
import about from "@/components/about.vue";

const routes = [
    {path: '/', name: 'Start', component: welcome},
    {path:'/difficulty', name: 'Difficulties', component:difficulty},
    {path: '/play', name: 'Hangman', component: container},
    {path: '/game-over', name:'Game Over', component: gameOver},
    {path: '/about', name: 'About', component: about}
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router