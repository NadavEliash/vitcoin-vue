<template>
    <li class="transaction-list" v-if="transactions.length" v-for="transaction in transactions" :key="transaction.at">
        You transfered {{ transaction.amount }}฿ to {{ transaction.to }}
        <img src="https://www.svgrepo.com/show/482927/payment-bitcoin.svg" alt="transactions" />
    </li>
</template>

<script>
export default {
    data() {
        return {
            transactions: []
        }
    },
    computed: {
        userName() { return this.$store.getters.user.name }
    },
    created() {
        let userTransactions = this.$store.getters.user.transactions
        if (userTransactions.length > 3) userTransactions = userTransactions.slice(0, 3)
        this.transactions = userTransactions
    }

}
</script>

<style lang="scss">
.transaction-list {
    list-style: none;
    width: 80%;
    margin-inline: auto;
    font-size: 1.3rem;
    margin-block: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2rem;
    padding-block: 1rem;
    background-color: rgba(255, 255, 255, 0.02);
    border-radius: 3rem;

    img {
        width: 35px;
        filter: invert(.8);
    }
}
</style>