<template>
    <div class="aboutContainer">
        <div class="one">
            <h1>Credits</h1>
            <ul>
            <li> <h2> <strong>Founder:</strong>Ahmed Assem</h2></li>
            <li> <h2> <strong>Employee:</strong> Malak Ayman</h2></li>
            </ul>
        </div>
        <div class="two">
            <h1 style="margin-top: 20px;"> Description</h1>
            <h2>Simple, guess the word or the man dies.</h2>
        </div>
        <div class="three">
            <h1 style="margin-top: 20px;">Budget</h1>
            <h2>$0</h2>
        </div>
        <div class="four">
            <h1 style="margin-top: 20px;">Goal</h1>
            <h2>N2afel web programming project.</h2>
        </div>
    </div>
</template>
<style>
.aboutContainer{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    height: 80vh;
    margin-top: 5rem;
    justify-content: center;
    place-items: center;
    text-align: center;
}
.aboutContainer h1{
    margin: -10px;
    text-decoration: underline;
}
.aboutContainer li h2{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.aboutContainer  h2{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.one{
    grid-row: 1;
    grid-column: 1;
}
.two{
    grid-row: 1;
    grid-column: 2;
}
</style>