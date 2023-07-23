<template>
    <TransitionGroup name="list" tag="ul" class="contact-list-ul">
        <li class="contact-list" v-for="contact in contacts" :key="contact._id"
            @click="$router.push(`/contact/${contact._id}`)">
            <ContactPreview :contact="contact" />
            <section class="action">
                <RouterLink :to="`/contact/edit/${contact._id}`">
                    <button @click.stop>
                        <img src="https://www.svgrepo.com/show/510965/edit-pencil-01.svg" alt="edit">
                    </button>
                </RouterLink>
                <button @click.stop="onRemoveMsg(contact.name)">
                    <img src="https://www.svgrepo.com/show/502608/delete-2.svg" alt="delete">
                </button>
            </section>
            <div v-if="showMsg?.name === contact.name" class="remove-msg">Are you sure you want to remove <span>{{
                contact.name }}</span>?
                <button @click.stop="onRemoveContact(contact._id)">Yes</button>
                <button @click.stop="closeMsg()">No</button>
                <div class="background-clicker" @click.stop="closeMsg()"></div>
            </div>
        </li>
    </TransitionGroup>
</template>

<script>
import ContactPreview from '@/cmps/ContactPreview.vue'

export default {
    props: {
        contacts: { type: Array, required: true }
    },
    data() {
        return {
            showMsg: {},
        }
    },
    methods: {
        onRemoveMsg(name) {
            this.showMsg = { name }
        },
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
        },
        closeMsg() {
            this.showMsg = null
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
    margin-top: 2rem;
    height: 62vh;
    max-width: 600px;
    min-width: 320px;
    overflow-y: scroll;
    margin-inline: auto;

    &::-webkit-scrollbar {
        display: block;
        width: .7rem;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.1);
        outline: 1px solid slategrey;
        border-radius: 1rem;
    }
}


.contact-list {
    width: 97%;
    list-style: none;
    margin-block: 1rem;
    background-color: rgba($color: #a6a6a6, $alpha: 0.1);
    border-radius: 2rem;
    padding: .8rem;
    margin-inline: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &:first-child {
        margin-top: 6px;
    }

    &:hover {
        transition: .2s;
        box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.4);
    }
}

.action {
    margin-top: .7rem;
    text-align: end;

    button {
        margin-inline: 5px;
        padding-inline: 5px;
        background-color: transparent;
        border-radius: 50%;
        cursor: pointer;
        border: 0;
    }

    img {
        width: 25px;
        filter: invert(.8);

        &:hover {
            scale: 1.1;
            transition: .4s;
        }
    }
}

.remove-msg {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: max(260px, 30%);
    text-align: center;
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-size: 1.2rem;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 2rem;
    color: white;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, .5);
    padding: 1rem;
    z-index: 100;

    button {
        margin-inline: auto;
        margin-top: 1rem;
        border: 0;
        border-radius: 3rem;
        width: 20%;
        height: 3rem;
        font-weight: 600;
        background-color: rgb(255, 88, 88);
        cursor: pointer;
    }

    .background-clicker {
        position: fixed;
        left: -50vw;
        top: -50vh;
        width: 200vw;
        height: 200vh;
        background-color: rgba(255, 255, 255, 0.1);
        z-index: -10;
        cursor: default;
    }
}
</style>