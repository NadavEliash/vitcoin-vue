<template>
    <section class="transaction">
        <h2 v-if="transactions.length">Last Transactions:</h2>
        <h3 v-else>No transactions yet...</h3>
        <li class="transaction-list" v-if="transactions.length" v-for="transaction in transactions" :key="transaction.at">
            You >>
            <RouterLink :to="`/contact/${transaction.toId}`">{{ transaction.to }}</RouterLink>
            <p> ₿{{ transaction.amount }} </p>
            <img src="https://www.svgrepo.com/show/482927/payment-bitcoin.svg" alt="transactions" />
        </li>
    </section>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            transactions: []
        };
    },
    computed: {
        userName() { return this.$store.getters.user.name; }
    },
    created() {
        let userTransactions = this.$store.getters.user.transactions;
        if (userTransactions.length > 3)
            userTransactions = userTransactions.slice(0, 3);
        this.transactions = userTransactions;
    },
    components: { RouterLink }
}
</script>

<style lang="scss">
.transaction {
    margin-inline: auto;
    padding-block: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding-inline: 2rem;

    h2 {
        font-weight: 600;
        font-size: min(2rem, 5vw);
    }

    .transaction-list {
        list-style: none;
        font-size: 1.3rem;
        margin-block: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        img {
            width: 35px;
            filter: invert(.8);
        }

        a {
            text-decoration: none;
            font-weight: 600;
            color: rgb(145, 145, 167);
            margin-left: 1rem;
            flex-grow: 1;
        }

        p {
            margin-right: 1rem;
        }
    }

    @media(max-width: 600px) {

        .transaction-list {
            font-size: 2.5vh;
            line-height: 2.5vh;

            img {
                display: none;
            }
        }
    }
}
</style>