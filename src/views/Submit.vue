<template>
    <div>
        <!-- TODO: submission guidelines -->
        <form v-on:submit="submitHandler">
            <p><label for="quote">Quote: </label><input id="quote" name="quote" required type="text"
                                                        v-model="quote"></p>
            <input type="submit" value="Submit">
        </form>

        <div class="display" v-show="quote !== ''">
            <Quote v-bind:text="quote"></Quote>
        </div>
    </div>
</template>

<script>
    import Quote from "@/components/Quote";
    import {client, db, login} from "@/db";

    export default {
        name: "Submit",
        components: {Quote},
        data() {
            return {
                quote: "",
            }
        },
        methods: {
            async submitHandler(event) {
                // Intercept the event
                event.preventDefault();

                // Send data to database
                await login();
                await db.collection("quotes").insertOne({
                    quote: this.quote,
                    owner_id: client.auth.user.id
                }).then(() => {
                    this.$router.push("/");
                    // eslint-disable-next-line no-console
                }).catch(err => console.error(err));
            }
        }
    }
</script>

<style scoped>

</style>