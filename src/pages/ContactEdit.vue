<template>
    <form @submit.prevent="onSaveContact" v-if="contact" class="contact-edit">
        <input v-model="contact.name" type="text">
        <input v-model="contact.email" type="text">
        <input v-model="contact.phone" type="text">
        <button>Save</button>
    </form>
    <RouterLink to="/contact">
        <button>Back</button>
    </RouterLink>
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
        onSaveContact() {
            contactService.saveContact(this.contact)
            this.$router.push('/contact')
        }
    }
}
</script>

<style></style>