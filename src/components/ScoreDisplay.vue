<template>
    <div class="score-display">
        <div class="inner-display" v-bind:class="{clicked: this.clicked}">
            <!-- TODO: add image -->
            <div class="clap-item-container">
                <div class="clap-icon">👏</div>
            </div>
            <div class="clap-item-container">
                <p class="clap-count">{{score}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ScoreDisplay",
        props: ["score"],
        data() {
            return {
                clicked: false
            }
        }
    }
</script>

<style scoped>
    .clicked {
        background-color: #42b983; /* TODO: finalize this color */
    }
</style>