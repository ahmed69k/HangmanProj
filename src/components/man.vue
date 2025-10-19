<template>
  <svg width="250" height="320" viewBox="0 0 250 320">
    <!-- Gallows (wood) -->
    <line x1="60" y1="280" x2="180" y2="280" stroke="#6b3e1d" stroke-width="8" stroke-linecap="round" />
    <line x1="100" y1="280" x2="100" y2="40" stroke="#6b3e1d" stroke-width="8" stroke-linecap="round" />
    <line x1="100" y1="40" x2="170" y2="40" stroke="#6b3e1d" stroke-width="8" stroke-linecap="round" />
    <line x1="170" y1="40" x2="170" y2="70" stroke="#6b3e1d" stroke-width="5" stroke-linecap="round" />

    <!-- Rope -->
    <line
      v-if="wrongGuesses > 0"
      x1="170"
      y1="70"
      x2="170"
      y2="90"
      stroke="#d2b48c"
      stroke-width="3"
      stroke-dasharray="3"
    />

    <!-- Hat -->
    <g v-if="showPart('hat')">
      <rect x="145" y="83" width="50" height="6" fill="#222" rx="2" />
      <rect x="155" y="60" width="30" height="25" fill="#222" rx="3" />
      <rect x="155" y="60" width="30" height="5" fill="#444" opacity="0.5" />
    </g>

    <!-- Head -->
    <circle
      v-if="showPart('head')"
      cx="170"
      cy="110"
      r="25"
      stroke="#333"
      stroke-width="4"
      fill="white"
    />

    <!-- Glasses (new for easy mode) -->
    <g v-if="showPart('glasses')">
      <circle cx="160" cy="105" r="7" stroke="#000" stroke-width="2" fill="none" />
      <circle cx="180" cy="105" r="7" stroke="#000" stroke-width="2" fill="none" />
      <line x1="167" y1="105" x2="173" y2="105" stroke="#000" stroke-width="2" />
    </g>

    <!-- Face -->
    <g v-if="showPart('head')">
      <template v-if="!isDead">
        <circle cx="160" cy="105" r="3" fill="#000" />
        <circle cx="180" cy="105" r="3" fill="#000" />
        <path
          :d="wrongGuesses >= deathThreshold ? 'M158 122 Q170 132 182 122' : 'M158 120 Q170 125 182 120'"
          stroke="#000"
          stroke-width="2"
          fill="none"
        />
      </template>

      <!-- Dead face -->
      <template v-else>
        <line x1="155" y1="100" x2="165" y2="110" stroke="#000" stroke-width="2" />
        <line x1="165" y1="100" x2="155" y2="110" stroke="#000" stroke-width="2" />
        <line x1="175" y1="100" x2="185" y2="110" stroke="#000" stroke-width="2" />
        <line x1="185" y1="100" x2="175" y2="110" stroke="#000" stroke-width="2" />
        <path d="M158 125 Q170 110 182 125" stroke="#000" stroke-width="3" fill="none" />
      </template>
    </g>

    <!-- Body -->
    <line
      v-if="showPart('body')"
      x1="170"
      y1="135"
      x2="170"
      y2="190"
      stroke="#333"
      stroke-width="4"
      stroke-linecap="round"
    />

    <!-- Arms -->
    <line
      v-if="showPart('leftArm')"
      x1="170"
      y1="145"
      x2="145"
      y2="165"
      stroke="#333"
      stroke-width="4"
      stroke-linecap="round"
    />
    <line
      v-if="showPart('rightArm')"
      x1="170"
      y1="145"
      x2="195"
      y2="165"
      stroke="#333"
      stroke-width="4"
      stroke-linecap="round"
    />

    <!-- Legs -->
    <line
      v-if="showPart('leftLeg')"
      x1="170"
      y1="190"
      x2="150"
      y2="230"
      stroke="#333"
      stroke-width="4"
      stroke-linecap="round"
    />
    <line
      v-if="showPart('rightLeg')"
      x1="170"
      y1="190"
      x2="190"
      y2="230"
      stroke="#333"
      stroke-width="4"
      stroke-linecap="round"
    />

    <!-- Ground shadow -->
    <ellipse cx="170" cy="240" rx="30" ry="6" fill="rgba(0,0,0,0.2)" v-if="showPart('body')" />
  </svg>
</template>

<script>
export default {
  name: "Man",
  props: {
    wrongGuesses: Number,
    difficulty: String,
  },
  computed: {
    thresholds() {
      return {
        easy: {
          hat: 1,
          head: 2,
          glasses: 3, // 👈 new part added here
          body: 4,
          leftArm: 5,
          rightArm: 6,
          leftLeg: 7,
          rightLeg: 8,
        },
        medium: {
          head: 1,
          body: 2,
          leftArm: 3,
          rightArm: 4,
          leftLeg: 5,
          rightLeg: 6,
        },
        hard: {
          head: 1,
          body: 2,
          arms: 3,
          legs: 4,
        },
      };
    },
    deathThreshold() {
      if (this.difficulty === "easy") return 9; // 👈 raised by 1 since we added glasses
      if (this.difficulty === "medium") return 6;
      return 4;
    },
    isDead() {
      return this.wrongGuesses >= this.deathThreshold;
    },
  },
  methods: {
    showPart(part) {
      const d = this.difficulty;
      const w = this.wrongGuesses;
      const t = this.thresholds[d];
      if (d === "hard") {
        if (part === "leftArm" || part === "rightArm") return w >= t.arms;
        if (part === "leftLeg" || part === "rightLeg") return w >= t.legs;
      }
      return w >= (t[part] || Infinity);
    },
  },
};
</script>

<style scoped>
svg {
  display: block;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
}
</style>
