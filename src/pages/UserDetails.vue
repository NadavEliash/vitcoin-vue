<template>
    <article v-if="user" class="box-display">
        <img class="user-img" :src="`https://robohash.org/${user.name}.png`" alt="user-image">
        <h2>{{ user.name }}</h2>
        <div class="user-info"> Your balance: {{ user.balance }}
            <img src="https://www.svgrepo.com/show/483120/icon-like-saving-bitcoin.svg" alt="bank" />
        </div>
        <TransactionList />

        <RouterLink to="/">
            <button class="back-button">
                <img src="https://www.svgrepo.com/show/348038/back-left.svg" alt="back">
            </button>
        </RouterLink>
    </article>
</template>

<script>
import TransactionList from '@/cmps/TransactionList.vue';

export default {
    data() {
        return {
            user: null
        };
    },
    async created() {
        this.user = this.$store.getters.user;
    },
    components: { TransactionList }
}
</script>

<style lang="scss"></style>