<template>
    <div style="display: flex; flex-direction: row;justify-content: flex-end">
        <button @click="muteAudio" v-if="!isMuted" class="muteButton">🔈</button>
    <button v-else @click="unmuteAudio" class="muteButton"> 🔇</button>
    </div>
    <div class="mainContainer">
        <div class="mainContainer__left">
        <man :wrongGuesses="wrongGuesses.length" :difficulty="store.state.difficulty"></man>
        <h2><strong>Gussed Letters:</strong> {{ wrongGuesses }}</h2>
        </div>
        <div class="mainContainer__right">
        <div v-if="!isGameOver" class="mainContainer__right">
        <words></words>
        <keyboard></keyboard>
        <h2>Guesses Left: {{ store.state.attemptsLeft }}</h2> 
        <audio
          ref="bgAudio"
          src="/entertainer.mp3"
          autoplay
          loop
          controls
          style="display: none;"
          volume = "0.1"
        >
        </audio>
        </div>
        <div v-else>
        <gameOver></gameOver>
        </div>
        </div>


    </div>
    
    
    
</template>

<script setup>
    import keyboard from './keyboard.vue';
    import man from './man.vue';
    import words from './words.vue';
    import navbar from './navbar.vue';
    import gameOver from './gameOver.vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import { computed } from 'vue';
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    const store = useStore()
    const router = useRouter()
    const bgAudio = ref(null)
    const isMuted = ref(false)
    const click = new Audio('/click.mp3')

    function muteAudio(){
      if(bgAudio.value){
        click.play()
        bgAudio.value.volume = 0;
        isMuted.value = true;
      }
    }
    onMounted(()=>{
      if(bgAudio.value){
        bgAudio.value.volume = 0.1;
      }
    })
    function unmuteAudio(){
      if(bgAudio.value){
        click.play()
        bgAudio.value.volume = 0.1;
        isMuted.value = false;
      }
    }

const wrongGuesses = computed(() => {
  if (!store.state.word) return [];
  return store.state.guessedLetters.filter(
    letter => !store.state.word.includes(letter)
  );
});

const isGameOver = computed(() => {
  return store.state.attemptsLeft <= 0 || store.state.win;
});

</script>

<style>
.mainContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80vh;
    gap: 200px;
}
.mainContainer__right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.mainContainer h2{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.mainContainer__left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.muteButton{
  border: 0;
  background-color: transparent;
  font-size: 50px;
  height: 50px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 20px;
}
</style>