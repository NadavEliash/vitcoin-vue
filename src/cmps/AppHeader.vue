<template>
    <div class="navbar">
        <nav>
            <RouterLink to="/"><img class="logo" src="https://www.svgrepo.com/show/506408/bitcoin.svg" alt="bitcoin">
            </RouterLink>
            <h3 v-if="user" class="balance">Your Current Balance: ₿{{ balance }}</h3>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/statistics">Statistics</RouterLink>
            <div v-if="user" class="user-avatar">
                <img @click="isUserBar = !isUserBar" src="https://www.svgrepo.com/show/446529/avatar.svg" alt="user" />
                <div v-if="isUserBar" class="user-bar">
                    <RouterLink to="/user" @click="isUserBar = false">User details</RouterLink>
                    <h3 @click="logout">Logout</h3>
                </div>
            </div>
            <RouterLink v-else to="/login">Join</RouterLink>
        </nav>
    </div>
</template>

<script>
// import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            isUserBar: false
        }
    },
    methods: {
        logout() {
            this.$store.dispatch({ type: 'logout' })
            this.isUserBar = false
        }
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        balance() {
            return this.$store.getters.user.balance
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

    .balance {
        position: absolute;
        left: 40%;
        translate: -50% 5%;
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
    }

    .user-avatar {
        position: relative;

        img {
            width: 40px;
            margin-top: 1rem;
            margin-left: 3rem;
            cursor: pointer;
        }

        .user-bar {
            position: absolute;
            right: 8px;
            padding: .7rem;
            border-radius: .5rem;
            width: max-content;
            background-color: rgba(255, 255, 255, 0.1);
            font-size: 1rem;
            color: rgb(255, 255, 255);
            cursor: pointer;

            a {
                font-size: 1.25rem;
                color: rgb(255, 255, 255);
                margin-top: 2rem;
            }

            h3{
                margin-block: .6rem;
            }
        }
    }

    a {
        color: bisque;
        text-decoration: none;
        text-align: end;
        padding: 0;
        margin: 0;

        &:first-child {
            text-align: start;
        }

        .logo {
            width: 70px;
            filter: invert(1);
            translate: 0 20%;
        }

    }
}


nav a.router-link-exact-active {
    color: white;
    font-weight: 600;
}
</style>