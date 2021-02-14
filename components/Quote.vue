<template>
	<article :class="detailed ? 'detailed' : ''">
		<p class="quote-text">{{ quote }}</p>
		<p v-if="author" class="quote-author">Submitted by {{ author }}</p>
		<div v-if="id" class="action-bar">
			<button class="action-button">
				<FontAwesomeIcon icon="heart"></FontAwesomeIcon>
			</button>
			<button class="action-button">
				<FontAwesomeIcon icon="bookmark"></FontAwesomeIcon>
			</button>
			<NuxtLink
				:to="'/quotes/' + encodeURIComponent(id)"
				class="quote-button-detail"
			>
				<button class="action-button">
					<FontAwesomeIcon icon="info"></FontAwesomeIcon>
				</button>
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
		detailed: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
article {
	width: 100%;
	border: 5px;
	border-radius: 0.3em;
	padding: 1em;
	font-size: 16px;
}

.quote-text {
	font-weight: bold;
}

.quote-author {
	font-style: italic;
}

.action-bar {
	display: flex;
	flex-flow: row nowrap;
	margin-top: 10px;
}

.detailed {
	&.article {
		font-size: 19px;
	}

	& > .quote-text {
		font-size: 19px;
	}

	& > .action-bar {
		margin-top: 0;
		border-top: 1px solid #35495e;
		border-bottom: 1px solid #35495e;
		padding: 10px 0;
	}
}
</style>
