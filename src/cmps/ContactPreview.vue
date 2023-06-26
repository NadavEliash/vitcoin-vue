<template>
    <div class="contact-preview">
        <h2 @click="$router.push(`/contact/${contact._id}`)">{{ contact.name }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        contact: { type: Object, required: true }
    }
}
</script>