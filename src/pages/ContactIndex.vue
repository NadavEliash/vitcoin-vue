<template>
    <ContactFilter @filter="onSetFilterBy" />
    <RouterLink to="/contact/edit">
        <button>Add contact</button>
    </RouterLink>
    <ContactList v-if="contacts" :contacts="filteredContacts" @remove="onRemoveContact" />
</template>

<script>
import ContactList from '@/cmps/ContactList.vue'
import ContactFilter from '@/cmps/ContactFilter.vue'

import { contactService } from '@/services/contactService.js'

export default {
    data() {
        return {
            contacts: null,
            filterBy: {}
        }
    },
    methods: {
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        },
        onRemoveContact(contactId) {
            const idx = this.contacts.findIndex(contact => contact._id === contactId)
            this.contacts.splice(idx, 1)
            contactService.deleteContact(contactId)
        }
    },
    computed: {
            filteredContacts() {
                const regex = new RegExp(this.filterBy.txt, 'i')
                return this.contacts.filter(contact => regex.test(contact.name))
            }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        ContactList,
        ContactFilter
    }
}
</script>



<style></style>