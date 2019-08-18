<template>
    <div class="display-container" v-bind:id="this.id">
        <Quote v-bind:text="quote"></Quote>
        <router-link v-bind:to="'/details/' + this.id">
            <DetailsButton class="details-button" v-if="owner === me"></DetailsButton>
        </router-link>
        <!-- TODO: route to report page instead of emitting event or something -->
    </div>
</template>

<script>
    import Quote from '@/components/Quote';
    import DetailsButton from "@/components/DetailsButton";
    import {client} from '@/db';

    export default {
        name: "DisplayContainer",
        components: {Quote, DetailsButton},
        props: ["quote", "id", "owner"],
        data() {
            return {
                me: client.auth.user.id
            }
        }
    }
</script>

<style scoped>
    .display-container {
        position: relative;
        display: inline-block;
        padding: 2em;
        border: #2c3e50 solid;
        border-radius: 0.3em;
        margin: 1em;
    }

    .details-button {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
</style>