<template>
    <main class="contact-edit">
        <form @submit.prevent="onSaveContact" v-if="contact">
            <input v-model="contact.name" type="text" placeholder="Add a name">
            <input v-model="contact.email" type="text" placeholder="Add an email address">
            <input v-model="contact.phone" type="text" placeholder="Add a phone number">
            <button>
                Save<img src="https://www.svgrepo.com/show/511118/save.svg" alt="save">
            </button>
        </form>
        <RouterLink to="/contact">
            <button class="back-button">
                <img src="https://www.svgrepo.com/show/348038/back-left.svg" alt="back" />
            </button>
        </RouterLink>
    </main>
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
        if (contactId) {
            this.contact = await contactService.getContactById(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    },
    methods: {
        async onSaveContact() {
            await contactService.saveContact(this.contact)
            this.$router.push('/contact')
        }
    }
}
</script>

<style lang="scss">
.contact-edit {
    position: relative;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5rem;
    width: 40%;
    height: 60vh;
    margin: auto;
    text-align: center;
    padding-top: 2rem;

    input {
        display: block;
        margin-top: 1rem;
        margin-inline: auto;
        height: 3rem;
        width: 80%;
        border-radius: 2rem;
        font-size: 1.2rem;
        text-indent: 1rem;
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        border: 0;
        border-radius: 3rem;
        width: 10rem;
        height: 3rem;
        margin-top: 2rem;
        background-color: rgba(255, 255, 255, 0.8);
        margin-inline: auto;
        cursor: pointer;
        color: rgb(50, 50, 50);
        font-size: 1.3rem;

        img {
            width: 30px;
        }

    }

    .back-button {
        height: 3rem;
        background-color: rgba(255, 255, 255, 0.1);
        position: absolute;
        bottom: 3rem;
        left: 50%;
        translate: -50%;

        img {
            rotate: 20deg;
            width: 50px;
            filter: invert(.8);
        }
    }
}
</style>