<template>
    <div class="display-container" v-bind:id="this.id">
        <Quote v-bind:creator="creator" v-bind:text="quote"></Quote>
        <ReportFlag class="report-flag" v-on:click="$emit('report', this.id)"></ReportFlag>
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
    .display-container {
        position: relative;
        display: inline-block;
        padding: 2em;
        /*margin: 1em;*/
    }

    .report-flag {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
</style>