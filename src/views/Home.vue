<template>
    <div class="home">
        <!-- TODO: get rid of bullet in display list -->
        <p v-if="loading">Loading quotes...</p>
        <ul>
            <li v-bind:key="q._id.toString()" v-for="q in quotes">
                <DisplayContainer v-bind:creator="q.creator" v-bind:id="q._id"
                                  v-bind:quote="q.quote"></DisplayContainer>
            </li>
        </ul>
    </div>
</template>

<script>
    import {db} from "@/db";
    import DisplayContainer from "@/components/DisplayContainer";

    export default {
        name: "Home",
        components: {DisplayContainer},
        data() {
            return {
                loading: true,
                quotes: undefined
            }
        },
        watch: {
            "$route": "fetchData"
        },
        async created() {
            this.loading = true;
            await this.fetchData();
            this.loading = false;
        },
        methods: {
            fetchData() {
                return db.collection("quotes").find({}).asArray().then(quoteArray => {
                    this.quotes = quoteArray;
                }).catch(err => {
                    // eslint-disable-next-line no-console
                    console.error(err);
                })
            }
        }
    }
</script>

<style scoped>
</style>