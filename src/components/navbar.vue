<template>
    <nav class="navbar">
        <h1 class="navbar__h1"><RouterLink to="/">Hangman</RouterLink> </h1>
        <ul class="navbar__links">
            <li><RouterLink to="/difficulty">Play</RouterLink> </li>
            <li><RouterLink to="/">About</RouterLink> </li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden; /* optional */
}
.navbar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgb(127, 113, 96);
    color: white;
    width: 100%;
}
.navbar__h1{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
}
.navbar__h1 a{
    text-decoration: none;
    color: white;
}
.navbar__links {
  display: flex;
  list-style: none;
  gap: 1rem;
  text-decoration: none;
}
.navbar__links li a{
    text-decoration: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:white;
    transition: color 0.5s ease;
}
</style>