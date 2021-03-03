<template>
	<div class="quote-list">
		<div v-for="quote in quotes" :key="quote.id" class="quotes-list">
			<Quote :id="quote.id" :author="quote.author" :quote="quote.quote" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		quotes: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
.quote-list {
	background: $light-base-color;
}
</style>
