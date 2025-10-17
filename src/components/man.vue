<template>
  <svg width="200" height="300" viewBox="0 0 200 300">
    <!-- Gallows -->
    <line x1="50" y1="250" x2="150" y2="250" stroke="black" stroke-width="4" />
    <line x1="100" y1="250" x2="100" y2="50" stroke="black" stroke-width="4" />
    <line x1="100" y1="50" x2="150" y2="50" stroke="black" stroke-width="4" />
    <line x1="150" y1="50" x2="150" y2="75" stroke="black" stroke-width="4" />

    <!-- Hat (Easy Mode, First Wrong Guess) -->
    <polygon v-if="difficulty === 'easy' && wrongGuesses > 0" points="125,75 175,75 150,50" fill="black" />

    <!-- Head (Second Wrong Guess for Easy/Medium, First for Hard) -->
    <circle v-show="wrongGuesses > (difficulty === 'easy' ? 1 : difficulty === 'medium' ? 0 : 0)" cx="150" cy="100" r="25" stroke="black" stroke-width="4" fill="none" />

    <!-- Glasses (Easy Mode, Third Wrong Guess) -->
    <g v-if="difficulty === 'easy' && wrongGuesses > 2">
      <circle cx="140" cy="100" r="8" stroke="black" stroke-width="2" fill="none" />
      <circle cx="160" cy="100" r="8" stroke="black" stroke-width="2" fill="none" />
      <line x1="148" y1="100" x2="152" y2="100" stroke="black" stroke-width="2" />
    </g>

    <!-- Body (Third or Second Wrong Guess for Easy/Medium, Second for Hard) -->
    <line v-show="wrongGuesses > (difficulty === 'easy' ? 3 : difficulty === 'medium' ? 1 : 1)" x1="150" y1="125" x2="150" y2="175" stroke="black" stroke-width="4" />

    <!-- Arms (Separate for Easy/Medium, Together for Hard) -->
    <line v-show="wrongGuesses > (difficulty === 'easy' ? 4 : difficulty === 'medium' ? 2 : 2)" x1="150" y1="135" x2="130" y2="160" stroke="black" stroke-width="4" />
    <line v-show="wrongGuesses > (difficulty === 'easy' ? 5 : difficulty === 'medium' ? 3 : 2)" x1="150" y1="135" x2="170" y2="160" stroke="black" stroke-width="4" />

    <!-- Legs (Separate for Easy/Medium, Together for Hard) -->
    <line v-show="wrongGuesses > (difficulty === 'easy' ? 6 : difficulty === 'medium' ? 4 : 3)" x1="150" y1="175" x2="130" y2="210" stroke="black" stroke-width="4" />
    <line v-show="wrongGuesses > (difficulty === 'easy' ? 7 : difficulty === 'medium' ? 5 : 3)" x1="150" y1="175" x2="170" y2="210" stroke="black" stroke-width="4" />
  </svg>
</template>

<script>
export default {
  name: "Man",
  props: {
    wrongGuesses: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
svg {
  display: block;
  margin: 0 auto;
}
</style>