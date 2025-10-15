<template>
<div class="container">
    <h1>Game Over!</h1>
    <div class="container__buttons">
        <button @click="playAgain" class="container__buttons__button"> Play Again</button>
        <button @click="backToMenu" class="container__buttons__button"> Back to Menu</button>
    </div>
</div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useStore()

function playAgain(){
    router.push('/difficulty')
}
function backToMenu(){
    router.push('/')
}
</script>

<style>
.container{
    display: flex;
    flex-direction: column;
}
.container__buttons{
    display:flex;
    flex-direction: row;
    gap:20px
}
.container__buttons__button{
    background-color: bisque;
    border-radius: 20px;
    width: 150px;
    height: 50px;
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: background-color 0.2s ease
}
.container__buttons__button:hover{
    background-color: rgb(210, 185, 154);
}
</style>