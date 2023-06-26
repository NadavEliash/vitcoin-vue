import { contactService } from '@/services/contactService.js'

export default {
    strict: true,
    state() {
        return {
            contacts: null
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
    },
    actions: {
        async loadContacts(context) {
            const contacts = await contactService.getContacts()
            context.commit({ type: 'setContacts', contacts })
        },
        async removeContact(context, { contactId }) {
            context.commit({ type: 'removeContact', contactId })
            await contactService.deleteContact(contactId)
        },
        async saveContact(context, { contact }) {
            await contactService.saveContact(contact)
            const contacts = await contactService.getContacts()
            context.commit({ type: 'setContacts', contacts })
        }
    },
    getters: {
        contacts(state) {
            return state.contacts
        }
    }
}