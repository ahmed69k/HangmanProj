<template>
    <h1>{{ maskedWord }}</h1>
</template>
<script setup>
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    const store = useStore()
    const maskedWord = computed(()=>{
        if(!store.state.word) return ''

        return store.state.word
            .split('')
            .map(ch => (store.state.guessedLetters.includes(ch) ? ch: '_'))
            .join(' ')
    })
</script>
<style>

</style>