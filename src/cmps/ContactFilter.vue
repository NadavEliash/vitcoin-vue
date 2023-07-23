<template>
    <div class="contact-filter">
        <input type="text" @input="onSetFilterBy" v-model="filterBy.txt" placeholder="search for contacts">
        <img src="https://www.svgrepo.com/show/507849/search.svg" alt="search">
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

<style lang="scss">
.contact-filter {
    margin-top: 8vh;
    position: relative;
    max-width: 600px;
    min-width: 320px;
    margin-inline: auto;

    input {
        height: 3rem;
        width: 100%;
        border-radius: 2rem;
        font-size: 1.2rem;
        text-indent: 1rem;
    }

    img {
        width: 25px;
        position: absolute;
        translate: -160% 45%;

    }
}
</style>