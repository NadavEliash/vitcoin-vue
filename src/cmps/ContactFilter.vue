<template>
    <div class="contact-filter">
        <input type="text" @input="onSetFilterBy" v-model="filterBy.txt" placeholder="search for contacts">
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    data() {
        return {
            filterBy: {
                txt: ''
            }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}

</script>

<style></style>