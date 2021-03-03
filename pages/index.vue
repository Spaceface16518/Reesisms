<template>
	<div>
		<QuoteList :quotes="$data.quotes" />
		{{ /* TODO: load more */ }}
		<div v-if="$fetchState.pending">Loading quotes...</div>
		<div v-if="$fetchState.error">Error loading quotes</div>
	</div>
</template>

<script lang="js">
import { queryManager } from "@/fauna/query-manager";

export default {
	data() {
		return {
			quotes: [],
		};
	},
	async fetch() {
		const db = queryManager.getInstance(this.$config.bootstrapToken);
		const results = await db.getAllQuotes(5);
		this.quotes = results.data;
	},
	fetchOnServer: false,
};
</script>
