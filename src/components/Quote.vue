<template>
    <div>
        <!-- TODO: quote component -->
        <p><strong>{{text}}</strong></p>
        <p>Submitted by {{creator}}</p>
    </div>
</template>

<script>
    export default {
        name: "Quote",
        props: ["text", "creator"]
    }
</script>

<style scoped>
    div {
        border: 0.1em;
    }
</style>