<template>
    <div class="contact-preview">
        <img class="contact-img" :src="`https://robohash.org/${contact.name}.png`" alt="user-image">
        <h2>{{ contact.name }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        contact: { type: Object, required: true }
    }
}
</script>

<style>
.contact-preview {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.contact-img {
    width: 30px;
}
</style>