<template>
    <article v-if="contact" class="box-display">
        <img class="contact-img" :src="`https://robohash.org/${contact.name}.png`" alt="user-image">
        <h2>{{ contact.name }}</h2>
        <div class="contact-info"><img src="https://www.svgrepo.com/show/491226/email.svg" alt="email">{{ contact.email }}</div>
        <div class="contact-info"><img src="https://www.svgrepo.com/show/511098/phone.svg" alt="phone">{{ contact.phone }}</div>

        <RouterLink to="/contact">
            <button class="back-button">
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
</style>