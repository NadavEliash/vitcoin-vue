<template>
    <article v-if="contact" class="contact-details">
        <img :src="`https://robohash.org/${contact.name}.png`" alt="user-image">
        <h2>{{ contact.name }}</h2>
        <div><img src="https://www.svgrepo.com/show/491226/email.svg" alt="email">{{ contact.email }}</div>
        <div><img src="https://www.svgrepo.com/show/511098/phone.svg" alt="phone">{{ contact.phone }}</div>

        <RouterLink to="/contact">
            <button>
                <img src="https://www.svgrepo.com/show/348038/back-left.svg" alt="back">
            </button>
        </RouterLink>
    </article>
</template>

<script>
import { contactService } from '@/services/contactService.js'

export default {
    data() {
        return {
            contact: null
        }
    },
    async created() {
        const contactId = this.$route.params.id
        this.contact = await contactService.getContactById(contactId)
    }
}
</script>

<style lang="scss">
.contact-details {
    caret-color: transparent;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5rem;
    width: 40%;
    height: 60vh;
    margin: auto;
    text-align: center;

    img {
        width: 250px;
    }

    h2 {
        font-size: 2rem;
        font-weight: 600;
    }

    div {
        font-size: 1.3rem;
        margin-block: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        img {
            width: 40px;
            filter: invert(.8);
        }
    }

    button {
        border: 0;
        border-radius: 3rem;
        width: 10rem;
        height: 5rem;
        margin-top: 2rem;
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;

        img {
            rotate: 20deg;
            width: 80px;
            filter: invert(.8);
        }
    }
}
</style>