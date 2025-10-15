<template>
<div>
  <audio
    ref="bgAudio"
    src="/entertainer.mp3"
    autoplay
    loop
    controls
    style="display: none;"
  >
  </audio>
<router-view></router-view>
</div>
</template>
<script setup>
import container from './components/container.vue';
import welcome from './components/welcome.vue';
import { ref, onMounted } from 'vue';
const bgAudio = ref(null)
onMounted(()=>{
  const audio = bgAudio.value
  audio.volume = 0.3
  audio.play().catch(()=> {
    console.warn("Autoplay stopped by browser!")
  })
})
</script>
<style>

</style>