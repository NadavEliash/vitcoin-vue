<template>
    <div class="home-page">
        <h1>Trade. <span class="invest">Invest.</span> <span class="earn">Earn.</span></h1>
        <div :class="isStart ? 'login show' : 'login'" @click="correctRoute">{{ buttonTxt }}</div>
        <div v-if="user" class="transaction-home">
            <TransactionList />
        </div>
    </div>
</template>

<script>
import TransactionList from '@/cmps/TransactionList.vue'

export default {
    data() {
        return {
            isStart: false
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        buttonTxt() {
            const txt = this.user ? `Let's fund` : "Get started!";
            return txt;
        },
        correctRoute() {
            const route = this.user ? this.$router.push("/contact") : this.$router.push("/login");
        }
    },
    created() {
        setTimeout(() => {
            this.isStart = true;
        }, 1700);
    },
    components: { TransactionList }
}
</script>

<style lang="scss">
.home-page {

    h1 {
        width: 10rem;
        margin-top: 8vh;
        margin-left: 2rem;
        font-size: 4rem;
        line-height: 6rem;
        font-weight: 600;
        text-align: center;
        animation: .5s show;
        text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4);

        @media(min-width: 900px) {
            width: 100%;
            margin-left: 0;
            margin-top: 20vh;
            font-size: 6rem;
        }

        .invest {
            font-weight: 600;
            text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4);
            animation: 1s invest;
        }

        .earn {
            font-weight: 600;
            text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4);
            animation: 1.5s earn;
        }
    }

    @keyframes show {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes invest {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes earn {
        0% {
            opacity: 0;
        }

        66% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .login {
        font-size: 2.5rem;
        font-weight: 600;
        background-color: rgba(255, 255, 255, 0.3);
        width: 40%;
        min-width: 300px;
        text-align: center;
        border-radius: 0 3rem 3rem 0;
        padding: 1rem;
        margin-left: 2rem;
        margin-top: 2rem;
        opacity: 0;
        cursor: pointer;

        @media(min-width: 900px) {
            border-radius: 3rem;
            margin-top: 4rem;
            margin-inline: auto;
        }

        &.show {
            opacity: 1;
            transition: 1s;

            &:hover {
                box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 1);
            }
        }
    }

    .transaction-home {
        width: 60%;
        margin-inline: auto;
        margin-top: 2.5rem;

        .transaction-list {
            width: 90%;
            box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, .5);
        }

    }
}
</style>