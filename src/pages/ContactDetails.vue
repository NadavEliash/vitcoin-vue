<template>
    <article v-if="contact" class="contact-details">
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.email }}</h3>
        <h3>{{ contact.phone }}</h3>

        <RouterLink to="/contact">
            <button>Back</button>
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

<style></style>