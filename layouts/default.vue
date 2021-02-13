<template>
	<div>
		<SiteHeader />
		<Nuxt></Nuxt>
		<SiteFooter />
	</div>
</template>

<style>
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

nav > * {
	padding: 0.5em;
	/*margin: 0.8em 1em;*/
}

nav {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
