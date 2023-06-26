<template>
    <article v-if="user" class="box-display">
        <img class="user-img" :src="`https://robohash.org/${user.name}.png`" alt="user-image">
        <h2>{{ user.name }}</h2>
        <div class="user-info"><img src="https://www.svgrepo.com/show/483120/icon-like-saving-bitcoin.svg" alt="bank">{{ user.balance }}</div>
        <div class="user-info"><img src="https://www.svgrepo.com/show/482927/payment-bitcoin.svg" alt="transactions">
            <pre>{{ user.transactions }}</pre>
        </div>

        <RouterLink to="/">
            <button class="back-button">
                <img src="https://www.svgrepo.com/show/348038/back-left.svg" alt="back">
            </button>
        </RouterLink>
    </article>
</template>

<script>

export default {
    data() {
        return {
            user: null
        }
    },
    async created() {
        this.user = this.$store.getters.user
    }
}
</script>

<style lang="scss">
</style>