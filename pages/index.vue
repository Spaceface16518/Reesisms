<template>
	<div class="container">
		<aside class="quotes-preview">
			<div>
				<div v-for="quote in $data.quotes" :key="quote.id">
					<Quote
						:id="quote.id"
						:author="quote.author"
						:quote="quote.quote"
					></Quote>
				</div>
			</div>
			<div v-if="$fetchState.pending">
				<p>Loading...</p>
			</div>
			<div v-if="$fetchState.error">
				<p>Error loading quotes</p>
			</div>
		</aside>
		<main>
			<header>
				<h1>Reesisms</h1>
				<p>A site for the many cool quotes of Mr. Rees!</p>
			</header>
			<article>
				<!-- TODO: main site description -->
			</article>
		</main>
	</div>
</template>

<script lang="js">
import { db } from "@/fauna/query-manager";

export default {
	data() {
		return {
			quotes: [],
		};
	},
	async fetch() {
		const results = await db.getAllQuotes(5);
		this.quotes = results.data;
	},
	fetchOnServer: false,
};
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

h1 {
	font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

h2 {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}
</style>
