<template>
    <div class="navbar">
        <nav>
            <img @click="onLogo" class="logo" src="https://www.svgrepo.com/show/506408/bitcoin.svg" alt="bitcoin">
            <h3 v-if="user" class="balance"><img src="https://www.svgrepo.com/show/222676/wallet.svg" alt="wallet"> ₿{{
                balance }}</h3>
            <section @click="closeResponsiveNavbar" class="responsive-navbar" :class="{ show: isResponsiveNavbar }">
                <RouterLink v-if="isResponsiveNavbar" to="/">Home</RouterLink>
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
            </section>
        </nav>
    </div>
</template>

<script>
// import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            isUserBar: false,
            isResponsiveNavbar: false
        }
    },
    methods: {
        logout() {
            this.$store.dispatch({ type: 'logout' })
            this.isUserBar = false
        },
        onResponsiveNavbar() {
            this.isResponsiveNavbar = true
        },
        closeResponsiveNavbar() {
            this.isResponsiveNavbar = false
        },
        onLogo() {
            if (window.innerWidth <= 600) {
                this.onResponsiveNavbar()
                console.log(this.isResponsiveNavbar)
            }
            else { this.$router.push('/') }
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
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    height: 10vh;

    .balance {
        position: absolute;
        translate: 10vw 8px;
        display: flex;
        flex-direction: row;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 2rem;
        padding: 1rem;
        padding-top: .5rem;
        text-indent: 1rem;
        line-height: 2.5rem;
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
        font-size: 1.3rem;
        color: white;

        img {
            width: 30px;
            filter: invert(1);
            translate: 0 -12%;
        }
    }

    .logo {
        width: 70px;
        filter: invert(1);
        translate: 0 10%;
        cursor: pointer;
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


    }

    .responsive-navbar {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4rem;

        @media(max-width: 600px) {
            position: fixed;
            display: flex;
            flex-direction: column;
            width: 100vw;
            align-items: center;
            background-color: rgba(3, 4, 29, 0.9);
            font-size: 2.5rem;
            gap: 2rem;
            padding: 1rem;
            margin-left: -18rem;
            margin-top: 18rem;
            opacity: 0;
            scale: 1 0;
            transition: .4s;
            pointer-events: none;

            &.show {
                margin-left: -2.5rem;
                scale: 1 1;
                opacity: 1;
                transition: .6s;
                z-index: 10;
                cursor: pointer;
                pointer-events: all;
            }
        }

        .user-avatar {
            position: relative;

            img {
                width: 40px;
                margin-top: 1rem;
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

                h3 {
                    margin-block: .6rem;
                }
            }
        }

    }
}

nav a.router-link-exact-active {
    color: white;
    font-weight: 600;
}
</style>