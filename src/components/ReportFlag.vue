<template>
    <div class="box" v-on:mouseleave="hover = false" v-on:mouseover="hover = true">
        <!-- TODO: box for report flag -->
        <!-- TODO: more info on hover -->
        <div v-show="hover">Report</div>

        <!-- TODO: use PNGs here? -->
        <!-- TODO: more image attributes -->
        <img alt="Red flag" decoding="async" src="../assets/red-flag.svg">
    </div>
</template>

<script>
    export default {
        name: "ReportFlag",
        data() {
            return {
                hover: false
            }
        }
    }
</script>

<style scoped>
    .box {
        background-color: inherit;
        color: inherit;
        justify-content: center;
        border: 0.5em dimgrey;
        border-radius: 0.05em;
        position: static;
        display: inline-block;
        padding: 0.3em;
    }

    .box > * {
        display: inline-block;
        padding: 0.1em;
    }

    .box:hover {
        background-color: dimgrey;
        color: white;
    }

    img {
        width: 1em;
        height: 1em;
    }
</style>