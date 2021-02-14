<template>
	<div class="container">
		<aside class="panel input-panel">
			<SearchInput></SearchInput>
			<QuoteForm></QuoteForm>
		</aside>
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
:root {
	--light: #adefd1;
	--dark: #00203f;
	--theme-background: var(--light);
	--theme-highlight: var(--light);
	--theme-foreground: var(--light);
	--theme-text: var(--dark);

	@media screen and (prefers-color-scheme: dark) {
		--theme-background: var(--dark);
		--theme-highlight: var(--light);
		--theme-foreground: darken(var(--light), 20%);
		--theme-text: white;
	}
}

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
	background: var(--theme-background);
	color: var(--theme-text);
}
body {
	margin: 0;
}

.container {
	padding: 0 10px;
	min-height: 100vh;
	width: min-content;
	margin-left: auto;
	margin-right: auto;

	display: grid;
	grid-template-columns: 285px minmax(min-content, 600px) 285px;
	grid-column-gap: 10px;

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: min-content auto;
	}

	align-content: space-between;
	justify-content: center;

	& > .panel {
		height: 100%;
		width: 100%;
		padding: 0 10px;
		overflow: hidden;
		margin-top: 10px;
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		&.center-panel {
			grid-column: 2;
			grid-row-start: 1;
		}

		&.input-panel {
			grid-column: 1;
		}

		&.navigational-panel {
			height: calc(100% - 20px);
			overflow-y: auto;
			grid-column: 3;
		}
	}

	footer {
		margin: 10px 0;
		height: min-content;
	}
}
</style>
