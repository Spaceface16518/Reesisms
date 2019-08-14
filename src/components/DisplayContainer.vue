<template>
    <div class="display-container" v-bind:id="this.id">
        <Quote v-bind:creator="creator" v-bind:text="quote"></Quote>
        <ReportFlag v-on:click="$emit('report', this.id)"></ReportFlag>
        <!-- TODO: route to report page instead of emitting event or something -->
    </div>
</template>

<script>
    import Quote from '@/components/Quote';
    import ReportFlag from "@/components/ReportFlag";

    export default {
        name: "DisplayContainer",
        components: {Quote, ReportFlag},
        props: ["quote", "id", "creator"]
    }
</script>

<style scoped>

</style>