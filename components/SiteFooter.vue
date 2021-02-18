<template>
	<footer>
		<p>
			This website is licensed under
			<strong
				>MIT license (&copy; {{ new Date().getFullYear() }} Amrit
				Rathie)</strong
			>
			unless otherwise stated.
		</p>
		<div class="links">
			<!--suppress HtmlUnknownTarget -->
			<a href="/api/feed">RSS</a>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

footer {
	text-align: center;
}

.links {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;

	& > a {
		padding: 2px 5px;
		border-left: solid 1px $highlight-color;
		border-right: solid 1px $highlight-color;
		color: $highlight-color;
	}
}
</style>
