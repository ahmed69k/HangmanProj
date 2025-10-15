<template>
    <div class="container">
        <h1 class="container__h1">Hangman</h1>
        <button class="container__button" @click="route">Start</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function route(){
    router.push('/difficulty')
}
</script>
<style>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.container__h1{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 80px;
}
.container__button{
    background-color: bisque;
    border-radius: 20px;
    width: 150px;
    height: 50px;
    font-size: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: background-color 0.2s ease
}
.container__button:hover{
    background-color: rgb(210, 185, 154);
}
</style>