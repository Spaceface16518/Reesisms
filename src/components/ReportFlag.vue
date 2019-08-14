<template>
    <div class="box" v-bind:class="{clicked: this.clicked}" v-on:click="clicked = true">
        <!-- TODO: box for report flag -->
        <!-- TODO: more info on hover -->
        <div v-if="clicked">Reported</div>
        <div v-else>Report</div>

        <!-- TODO: use PNGs here? -->
        <!-- TODO: more image attributes -->
        <img alt="Success" decoding="async" src="../assets/check-mark.svg" v-if="clicked">
        <img alt="Red flag" decoding="async" src="../assets/red-flag.svg"
             v-else>
    </div>
</template>

<script>
    export default {
        name: "ReportFlag",
        data() {
            return {
                clicked: false
            }
        }
    }
</script>

<style scoped>
    .box {
        background-color: inherit;
        color: inherit;
        justify-content: center;
        border: 0.1em dimgrey;
        border-radius: 0.05em;
    }

    .box > div {
        padding: 0.3em;
    }

    .box:hover {
        background-color: dimgrey;
        color: white;
    }

    /*noinspection CssUnusedSymbol*/
    .clicked {
        background-color: dimgrey !important;
        color: white !important;
    }

    img {
        width: 1em;
        height: 1em;
        display: inline;
    }
</style>