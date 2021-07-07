<template>
    <div @click="showDesc = !showDesc">
			<p class="short"><strong>{{ short }}</strong></p>
				<p v-show="showDesc" class="long" aria-hidden="false">{{ long }}</p>
    </div>
</template>

<script>
    export default {
        name: "Announcement",
				props: ["short", "long"],
				data() {
					return {
						showDesc: false
					}
				}
    }
</script>

<style scoped>
    div {
				background-color: whitesmoke;
				padding: 1em 0.5em;
    }
</style>
