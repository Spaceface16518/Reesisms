<template>
	<div class="container">
		<aside class="panel search-panel">
			<SearchInput></SearchInput>
		</aside>
		<aside class="panel input-panel">
			<QuoteForm></QuoteForm>
		</aside>
		<new-quote-button />
		<main class="panel center-panel">
			<Nuxt></Nuxt>
		</main>
		<nav class="panel navigation-panel">
			<PageNavigation icon="home" name="Home" page="/"></PageNavigation>
			<PageNavigation icon="heart" name="Liked" page="/liked"></PageNavigation>
			<PageNavigation
				icon="bookmark"
				name="Bookmarked"
				page="/bookmarked"
			></PageNavigation>
			<PageNavigation
				icon="list"
				name="Categories"
				page="/categories"
			></PageNavigation>
		</nav>
		<SiteFooter />
	</div>
</template>

<style lang="scss">
@import "../assets/scss/variables.scss";

html {
	/* TODO: custom typography */
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	background: $base-color;
	color: white;
}

a {
	color: $highlight-color;
	text-decoration: none;
}

body {
	margin: 0;
}

.container {
	padding: 0 10px;
	min-height: 100vh;
	@media screen and (min-width: 415px) {
		margin-top: 10px;
		min-height: calc(100vh - 10px);
	}
	width: min-content;
	margin-left: auto;
	margin-right: auto;

	// Responsive grid layout
	display: grid;
	@media screen and (min-width: 415px) {
		grid-column-gap: 10px;
		grid-row-gap: 10px;
	}
	$main-col: minmax(min-content, 600px);
	$secondary-col: 285px;
	$small-row: 48px;
	// small screens (like phones)
	grid-template-columns: $main-col;
	grid-template-rows: $small-row 1fr;
	// medium-sized screens
	@media screen and (min-width: $min-mid-screen) {
		grid-template-columns: $secondary-col $main-col;
		grid-template-rows: $small-row $small-row 1fr;
	}
	// full-sized (wide) screens
	@media screen and (min-width: $min-wide-screen) {
		grid-template-columns: $secondary-col $main-col $secondary-col;
	}

	align-content: space-between;
	justify-content: center;

	& > .panel {
		width: 100%;
		padding: 0 10px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		&.center-panel {
			background: $light-base-color;
			height: 100%;

			grid-column: 1;
			grid-row: 2;
			@media screen and (min-width: $min-mid-screen) {
				grid-column: 2;
				grid-row: 2 / span 2;
			}
			@media screen and (min-width: $min-wide-screen) {
				grid-column: 2;
				grid-row: 1 / span 3;
			}
		}

		&.input-panel {
			height: min-content;

			display: none;

			@media screen and (min-width: $min-mid-screen) {
				display: block;
				grid-column: 1;
				grid-row: 2;
			}
		}

		&.search-panel {
			height: min-content;
			display: none;

			@media screen and (min-width: $min-mid-screen) {
				display: block;
				grid-column: 1;
				grid-row: 1;
			}
		}

		&.navigation-panel {
			position: sticky;
			height: 48px;
			overflow-y: hidden;
			overflow-x: scroll;

			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			grid-column: 1;
			grid-row: 1 / span 2;
			@media screen and (min-width: $min-mid-screen) {
				grid-column: 2;
			}
			@media screen and (min-width: $min-wide-screen) {
				position: unset;
				height: min-content;
				overflow-y: auto;
				overflow-x: auto;
				flex-direction: column;
				align-items: normal;

				grid-column: 3;
				grid-row-end: span 3;
			}
		}
	}

	footer {
		display: none;
		@media screen and (min-width: $min-mid-screen) {
			display: block;
			margin: 10px 0;
			height: min-content;

			grid-column: 1;
			grid-row: 3;
			align-self: end;
		}
	}
}
</style>
