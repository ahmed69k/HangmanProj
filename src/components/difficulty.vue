<template>
    <div class="container">
        <h1>Choose a difficulty: </h1>
        <div class="diffButtons">
            <button
            v-for="diff in difficulties"
            :key= diff
            @click="startGame(diff)"
            
            class="diffButtons__button"
            >
            {{ diff[0].toUpperCase() + diff.slice(1)}}
            </button>
        </div>
    </div>


</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore()
const router = useRouter()
const difficulties = ['easy','medium','hard']
const click = new Audio('/click.mp3')
function startGame(diff){
    click.currentTime = 0;
    click.play();
    store.commit('setDifficulty', diff)
    store.commit('setAttempts',diff)
    store.dispatch('fetchRandomWord')
    router.push('/play')
}
</script>

<style>
.diffButtons{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
.diffButtons__button{
    background-color: bisque;
    border-radius: 20px;
    width: 150px;
    height: 50px;
    font-size: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: background-color 0.2s ease

}
.diffButtons__button:hover{
    background-color: rgb(210, 185, 154);
}
.container{
    display: flex;
    flex-direction: column;
    height: 90vh;
    align-items: center;
    justify-content: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
}
</style>