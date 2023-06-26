<template>
    <main class="box-display">
        <form @submit.prevent="onSignupUser">
            <input v-model="user.name" type="text" placeholder="Add user name">
            <input v-model="user.password" type="password" placeholder="Password">
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
            user: null
        }
    },
    methods: {
        async onSignupUser() {
            this.$store.dispatch({type: 'signupUser', user: this.user})
            this.$router.push('/')
        }
    },
    created(){
        this.user = userService.getEmptyUser() 
    }
}
</script>

<style lang="scss">
</style>