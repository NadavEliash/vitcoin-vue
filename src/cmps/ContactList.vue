<template>
    <TransitionGroup name="list" tag="ul" class="contact-list-ul">
        <li class="contact-list" v-for="contact in contacts" :key="contact._id">
            <ContactPreview :contact="contact" />
            <section class="action">
                <RouterLink :to="`/contact/${contact._id}`">
                    <button>Details</button>
                </RouterLink>
                <RouterLink :to="`/contact/edit/${contact._id}`">
                    <button>Edit</button>
                </RouterLink>
                <button @click="onRemoveContact(contact._id)">Remove</button>
            </section>
        </li>
    </TransitionGroup>
</template>

<script>
import ContactPreview from '@/cmps/ContactPreview.vue'

export default {
    props: {
        contacts: { type: Array, required: true }
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: {
        ContactPreview
    }
}
</script>

<style lang="scss">
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}

.contact-list-ul {
    padding: 0;
}

.contact-list {
    width: 40%;
    list-style: none;
    margin-block: 1rem;
    background-color: rgba($color: #a6a6a6, $alpha: 0.1);
    border-radius: 1.5rem;
    padding: .5rem;
}
</style>