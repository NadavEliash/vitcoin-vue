<template>
    <div class="navbar">
        <nav>
            <img @click="onLogo" class="logo" src="https://www.svgrepo.com/show/506408/bitcoin.svg" alt="bitcoin">
            <section @click="closeResponsiveNavbar" class="responsive-navbar" :class="{ show: isResponsiveNavbar }">
                <RouterLink v-if="isResponsiveNavbar" to="/">Home</RouterLink>
                <RouterLink to="/contact">Contacts</RouterLink>
                <RouterLink to="/statistics">Statistics</RouterLink>
                <div v-if="user" class="user-avatar">
                    <div v-if="isResponsiveNavbar"><a href="#" @click="logout">Logout</a></div>
                    <div v-else>
                        <img @click="isUserBar = !isUserBar" src="https://www.svgrepo.com/show/446529/avatar.svg"
                            alt="user" />
                        <div v-if="isUserBar" class="user-bar">
                            <RouterLink to="/user" @click="isUserBar = false">User details</RouterLink>
                            <h3 @click="logout">Logout</h3>
                        </div>
                    </div>
                </div>
                <RouterLink v-else to="/login">Join</RouterLink>
                <div :class="{ 'balance': true, 'responsive': isResponsiveNavbar }">
                    <p>Current Rate: <span>₿1 = {{ rate.toLocaleString("en-US", { style: "currency", currency: "USD" })
                    }}</span></p>
                    <!-- <p v-if="user"> Your wallet: <span>₿{{ balance }}
                            = {{ (rate * balance).toLocaleString("en-US", { style: "currency", currency: "USD" }) }}
                        </span></p> -->
                </div>
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
            if (window.innerWidth <= 900) {
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
        },
        rate() {
            const UsdRate = this.$store.getters.rate
            return (1 / UsdRate)
        }
    },
    created() {
        this.$store.dispatch({ type: 'loadRate' })
    }
}
</script>

<style lang="scss">
nav {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    height: 10vh;

    .logo {
        width: 70px;
        filter: invert(1);
        cursor: pointer;
    }

    .balance {
        align-self: start;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        line-height: 2.5rem;
        font-size: 1.2rem;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 2rem;
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
        color: white;
        box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, .5);
        padding-block: 1rem;
        padding-inline: 2rem;

        p {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 1rem;
        }

        img {
            width: 30px;
            filter: invert(1);
            translate: 0 5%;
        }

        &.box {
            translate: 0 20%;
        }

        &.responsive {
            margin-inline: auto;
            width: max(90%, 260px);
            background-color: transparent;
            box-shadow: none;
            text-shadow: none;
            font-size: min(1.5rem, 2.5vh);
            margin-top: auto;
            margin-bottom: 2rem;
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


    }

    .responsive-navbar {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 3rem;

        @media(max-width: 900px) {
            position: fixed;
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 100%;
            align-items: center;
            background-color: rgba(3, 4, 29, 0.95);
            font-size: 2.5rem;
            gap: 2rem;
            padding: 1rem;
            left: -100%;
            top: 0;
            opacity: 0.6;
            transition: .4s;
            pointer-events: none;

            &.show {
                opacity: 1;
                left: 0;
                transition: .6s;
                z-index: 10;
                cursor: pointer;
                pointer-events: all;

                .user-avatar {
                    width: 100%;
                }

                a {
                    display: block;
                    width: 100%;
                    height: 4rem;
                    text-align: center;

                    &:hover {
                        background-color: rgba(255, 255, 255, .1);
                    }
                }
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