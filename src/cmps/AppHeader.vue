<template>
    <div class="navbar">
        <nav>
            <RouterLink to="/"><img class="logo" src="https://www.svgrepo.com/show/506408/bitcoin.svg" alt="bitcoin"></RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/statistics">Statistics</RouterLink>
            <RouterLink v-if="user" to="/user"><img src="https://www.svgrepo.com/show/446529/avatar.svg" alt="user"></RouterLink>
            <RouterLink v-else to="/login">Join</RouterLink>
        </nav>
    </div>
</template>

<script>
// import { RouterLink } from 'vue-router'

export default {
    computed: {
        user() {
            return this.$store.getters.user
        }
    }
}
</script>

<style lang="scss">
nav {
    display: grid;
    grid-template-columns: 1fr 10rem 10rem 6rem;
    gap: 2rem;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
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
            width: 40px;
            margin-top: 1rem;
        }

        .logo {
            width: 70px;
            filter: invert(1);
            margin-top: 2rem;
        }
    }
}

nav a.router-link-exact-active {
    color: white;
    font-weight: 600;
}
</style>