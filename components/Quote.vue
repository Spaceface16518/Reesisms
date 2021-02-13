<template>
	<article>
		<p class="quote-text">{{ quote }}</p>
		<p v-if="author" class="quote-author">Submitted by {{ author }}</p>
		<div v-if="id" class="quote-buttons">
			{{ /* TODO: details button graphic rather than text */ }}
			<NuxtLink
				:to="'/quotes/' + encodeURIComponent(id)"
				class="quote-button-detail"
			>
				details
			</NuxtLink>
		</div>
	</article>
</template>

<script lang="ts">
export default {
	props: {
		quote: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: false,
			default: "",
		},
		id: {
			type: String,
			required: false,
			default: "",
		},
	},
};
</script>

<style scoped>
article {
	border: 5px;
	border-radius: 0.3em;
	padding: 2em;
	margin: 1em;
	display: flex;
}

.quote-text {
	font-weight: bold;
	font-size: large;
}

.quote-author {
	font-size: small;
}

div.quote-buttons {
	order: -1;
	height: min-content;
	display: flex;
	flex-flow: column-reverse wrap;
	justify-content: flex-end;
	width: available;
}
</style>
