<template>
    <main class="box-display">
        <h2>Let's go!</h2>
        <h3 class="login-explanation">As a member you'll get ₿100 to share with your contacts</h3>
        <form @submit.prevent="onLogin">
            <input v-model="user.name" type="text" placeholder="Your name">
            <button> Login </button>
        </form>
        <RouterLink to="/">
            <button class="back-button">
                Not today..
            </button>
        </RouterLink>
    </main>
</template>

<script>
import { userService } from '@/services/userService.js'

export default {
    data() {
        return {
            user: {
                name: ''
            }
        }
    },
    methods: {
        async onLogin() {
            const currUser = await userService.getUser(this.user.name)
            if (currUser) {
                this.$store.dispatch({ type: 'loginUser', user: currUser })
            } else {
                const newUser = userService.getEmptyUser()
                newUser.name = this.user.name
                this.$store.dispatch({ type: 'signupUser', user: newUser })
            }
            this.$router.push('/contact')
        }
    },
}
</script>

<style lang="scss">
    .login-explanation {
        margin-bottom: 2rem;
        margin-inline: 21%;
        font-size: 1.5rem;
}
</style>