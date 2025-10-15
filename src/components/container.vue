<template>
    <keyboard></keyboard>
    <man></man>
    <words></words>
</template>

<script setup>
    import keyboard from './keyboard.vue';
    import man from './man.vue';
    import words from './words.vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    const store = useStore()
    const router = useRouter()

</script>

<style>

</style>