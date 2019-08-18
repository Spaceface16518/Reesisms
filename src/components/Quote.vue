<template>
    <div>
        <!-- TODO: quote component -->
        <p><strong>{{text}}</strong></p>
    </div>
</template>

<script>
    export default {
        name: "Quote",
        props: ["text"]
    }
</script>

<style scoped>
    div {
        border: 0.1em;
    }
</style>