<template>
    <main class="box-display">
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
            this.$store.dispatch({type: 'saveContact', contact: this.contact})
            this.$router.push('/contact')
        }
    }
}
</script>

<style lang="scss">
</style>