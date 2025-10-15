<template>
  <div class="keyboard">
    <button
      v-for="letter in letters"
      :key="letter"
      class="key"
      @click="pickLetter(letter)"
    >
      {{ letter.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore()
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
function pickLetter(letter){
    
    store.state.guessedLetters.push(letter)
    console.log(store.state.guessedLetters)
    
}
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
</style>
