<template>
    <div class="transfer-funds" v-if="user">
        <h4>Your balance: {{ user.balance }} <img src="https://cdn-icons-png.flaticon.com/512/991/991959.png"
                alt="bitcoin" /></h4>
        <form @submit.prevent="onFund">
            <div class="amount-line">
                <h4>Transfer</h4><input v-model.number="transaction.amount" type="number">
                <img src="https://cdn-icons-png.flaticon.com/512/991/991959.png" alt="bitcoin" />
            </div>
            <button>Fund {{ contact.name }}</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: null,
            transaction: {
                toId: this.contact._id,
                to: this.contact.name,
                at: Date.now(),
                amount: 1
            }
        }
    },
    props: {
        contact: { type: Object, requred: true }
    },
    created() {
        this.user = this.$store.getters.user
    },
    methods: {
        async onFund() {
            if (this.transaction.amount > this.user.balance) return
            await this.$store.dispatch({ type: 'setTransaction', transaction: this.transaction })
            this.user = this.$store.getters.user
        }
    }
}
</script>

<style lang="scss">
.transfer-funds {
    width: 80%;
    margin-inline: auto;
    background-color: rgba(0, 0, 0, .4);
    border-radius: 2rem;
    font-size: 1.5rem;
    padding: 1rem;

    img {
        width: 30px;
        filter: invert(.9);
        translate: 0 20%;
    }

    .amount-line {
        width: max-content;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-inline: auto;

        input {
            width: 4rem;
            border-radius: 1rem;
            height: 3rem;
            text-align: center;
            text-indent: 0;
            background-color: rgba(0, 0, 0, .3);
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        h4 {
            translate: 0 10%;
        }
    }

    button {
        &:hover {
            background-color: rgba(7, 239, 15, 0.4);
        }
    }
}
</style>