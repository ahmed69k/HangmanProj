<template>
<div class="container">
    <audio ref="winSound" src="public/win.mp3"></audio>
    <audio ref="loseSound" src="/lose.mp3"></audio>
    <div class="container__text">
        <h1 v-if="store.state.win" style="color: green;">You Win!</h1>
        <h1 v-else style="color: red;">You Lose!</h1>
        <div class="container__text__inner">
            <h2>The word was:</h2>
            <h2 class="rainbow-glow"> {{ store.state.word[0].toUpperCase() + store.state.word.slice(1) }}</h2>
        </div>

    </div>

    <div class="container__buttons">
        <button @click="playAgain" class="container__buttons__button"> Play Again</button>
        <button @click="backToMenu" class="container__buttons__button"> Back to Menu</button>
    </div>
</div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { onMounted } from 'vue';

const router = useRouter()
const store = useStore()
const winSound = ref(null)
const loseSound = ref(null)

function playAgain(){
    router.push('/difficulty')
}
function backToMenu(){
    router.push('/')
}


onMounted(() => {
  watch(
    () => store.state.win,
    (win) => {
      if (win) {
        winSound.value.play();
      } else {
        loseSound.value.play();
      }
    },
    { immediate: true }
  )
});
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
.container__text{
    display: flex;
    flex-direction: column;
    gap: -10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
    font-size: 30px;
}
.container__text h1{
    margin: 0px;
}.container__text__inner{
    display: flex;
    flex-direction: row;
}

@keyframes rainbow {
  0% { text-shadow: 0 0 5px red, 0 0 10px orange, 0 0 15px yellow; }
  16% { text-shadow: 0 0 5px orange, 0 0 10px yellow, 0 0 15px green; }
  33% { text-shadow: 0 0 5px yellow, 0 0 10px green, 0 0 15px blue; }
  50% { text-shadow: 0 0 5px green, 0 0 10px blue, 0 0 15px indigo; }
  66% { text-shadow: 0 0 5px blue, 0 0 10px indigo, 0 0 15px violet; }
  83% { text-shadow: 0 0 5px indigo, 0 0 10px violet, 0 0 15px red; }
  100% { text-shadow: 0 0 5px red, 0 0 10px orange, 0 0 15px yellow; }
}

.rainbow-glow {
  font-weight: bold;
  color: white;
  animation: rainbow 3s infinite linear;
  margin-left: 20px;
}
</style>