<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="navbar">
        <nav>
            <RouterLink to="/"><img src="https://www.svgrepo.com/show/506408/bitcoin.svg" alt="bitcoin"></RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/statistics">Statistics</RouterLink>
        </nav>
    </div>
</template>

<style lang="scss">
nav {
    display: grid;
    grid-template-columns: 1fr 10rem 10rem;
    gap: 2rem;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    caret-color: transparent;
    height: 10vh;

    a {
        color: bisque;
        text-decoration: none;
        text-align: end;
        padding: 0;
        margin: 0;

        &:first-child {
            text-align: start;
        }
        
        img {
            width: 70px;
            filter: invert(1);
            margin-top: 1rem;
        }
    }
}

nav a.router-link-exact-active {
    color: white;
    font-weight: 600;
}
</style>