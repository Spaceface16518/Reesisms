<template>
    <div class="home">
        <p v-if="status">{{status}}</p>
        <ul v-else>
            <li v-bind:key="q._id.toString()" v-for="q in quotes">
                <DisplayContainer v-bind:id="q._id" v-bind:owner="q.owner_id"
                                  v-bind:quote="q.quote"></DisplayContainer>
            </li>
        </ul>
    </div>
</template>

<script>
    import {db, login} from "@/db";
    import DisplayContainer from "@/components/DisplayContainer";

    export default {
        name: "Home",
        components: {DisplayContainer},
        data() {
            return {
                status: null,
                quotes: undefined
            }
        },
        async created() {
            this.status = "Loading quotes...";
            await this.fetchData();
            this.status = null;
        },
        methods: {
            async fetchData() {
                await login();
                return db.collection("quotes").find({}).asArray().then(quoteArray => {
                    this.quotes = quoteArray.reverse();
                }).catch(err => {
                    this.status = "There was an error loading the quotes. Refresh the page to try again.";
                    // eslint-disable-next-line no-console
                    console.error(err);
                })
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        padding-inline-start: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: flex-start;
        align-content: space-around;
    }

    .home {
        position: center;
    }
</style>