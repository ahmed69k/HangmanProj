<template>
  <div class="keyboard">
    <button
      v-for="letter in letters"
      :key="letter"
      class="key"
      :class="{guessed: store.state.guessedLetters.includes(letter)}"
      @click="pickLetter(letter)"
      :disabled="store.state.guessedLetters.includes(letter)"
    >
      {{ letter.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';
const router = useRouter()
const store = useStore()
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
function pickLetter(letter){
  if(!letters.includes(letter)) return

   store.commit('guessLetter',letter) 
   console.log(store.state.guessedLetters)
   
}
function handleKeyPress(e){
  const key = e.key.toLowerCase();
  pickLetter(key);
}
onMounted(()=>{
window.addEventListener('keydown',handleKeyPress)
})
onUnmounted(()=>{
  window.removeEventListener('keydown',handleKeyPress)
})
  

</script>

<style scoped>
.keyboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 400px;
  margin: 20px auto;
  gap: 8px;
}

.key {
  padding: 10px 14px;
  border: none;
  background-color: bisque;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
}
.key.guessed {
  text-decoration: line-through;
  background-color: #d3d3d3;
  color: #666;
  cursor: not-allowed;
}
</style>
