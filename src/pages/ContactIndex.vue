<template>
    <ContactFilter @filter="onSetFilterBy" />
    <RouterLink to="/contact/edit">
        <button class="add-contact">Add contact</button>
    </RouterLink>
    <ContactList v-if="contacts" :contacts="filteredContacts" @remove="onRemoveContact" />
</template>

<script>
import ContactList from '@/cmps/ContactList.vue'
import ContactFilter from '@/cmps/ContactFilter.vue'

export default {
    data() {
        return {
            filterBy: {}
        }
    },
    methods: {
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        },
        onRemoveContact(contactId) {
            this.$store.dispatch({ type: 'removeContact', contactId })
        }
    },
    computed: {
        contacts() {
            return this.$store.getters.contacts
        },
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        }
    },
    async created() {
        this.$store.dispatch({ type: 'loadContacts' })
    },
    components: {
        ContactList,
        ContactFilter
    }
}
</script>



<style lang="scss">
.add-contact {
    height: 2.5rem;
    width: 40%;
    border-radius: 3rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-left: 50%;
    translate: -50%;
    border: 0;
    background-color: rgba($color: #ffffff, $alpha: .1);
    color: bisque;
    cursor: pointer;

    &:hover {
        transition: .4s;
        box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.4);
    }
}
</style>