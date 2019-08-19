<template>
    <div>
        <div style="cursor: pointer">
            <p @click="editMode = !editMode">Edit your submission</p>
            <form v-if="editMode" v-on:submit="updateHandler">
                <!-- TODO: better formatting for this -->
                <!-- TODO: Add submission criteria -->
                <!-- TODO: Mark edited submissions -->
                <label>Quote: <input required type="text" v-model="quote"></label>
                <input type="submit" value="Update">
            </form>
            <p @click="deleteHandler">Delete this quote</p>
        </div>

        <DisplayContainer v-bind:id="this.$route.params.id" v-bind:owner="owner"
                          v-bind:quote="quote"></DisplayContainer>
        <!-- TODO: reports integration -->
    </div>
</template>

<script>
    import DisplayContainer from "@/components/DisplayContainer";
    import {client, db, login} from "@/db";
    import {BSON} from "mongodb-stitch-browser-sdk"

    export default {
        name: "Details",
        components: {DisplayContainer},
        data() {
            return {
                reports: [],
                quote: "",
                owner: "",
                isOwned: false,
                editMode: false,
            }
        },
        async created() {
            await login();
            await db.collection("quotes").findOne({
                _id: new BSON.ObjectId(this.$route.params.id),
                owner_id: client.auth.user.id
            }).then(quoteDocument => {
                this.quote = quoteDocument.quote;
                this.owner = quoteDocument.owner_id;
                this.isOwned = quoteDocument.owner_id === client.auth.user.id;
            }).catch(() => this.quote = "There was an error retrieving this quote");
            // TODO: assert id's are the same?
        },
        methods: {
            async updateHandler(event) {
                // Intercept the event
                event.preventDefault();

                // Send data to database
                await login();
                await db.collection("quotes").updateOne({
                    _id: new BSON.ObjectId(this.$route.params.id),
                    owner_id: this.owner
                }, {
                    $set: {
                        quote: this.quote
                    }
                }).then(() => {
                    this.$router.push("/");
                    // eslint-disable-next-line no-console
                }).catch(err => console.error(err));
            },
            async deleteHandler(event) {
                event.preventDefault();

                await login();
                if (confirm("Are you sure you want to delete this?")) {
                    await db.collection("quotes").deleteOne({
                        _id: new BSON.ObjectId(this.$route.params.id),
                        owner_id: this.owner
                    });
                    await this.$router.push('/');
                }
            }
        }
    }
</script>

<style scoped>

</style>