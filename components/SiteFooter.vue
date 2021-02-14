<template>
	<footer>
		<p>
			This website is licensed under
			<strong>MIT (&copy; {{ new Date().getFullYear() }})</strong> unless
			otherwise stated.
		</p>
		<div class="links">
			<!--suppress HtmlUnknownTarget -->
			<a href="/api/feed">RSS</a>
		</div>
	</footer>
</template>

<style scoped>
.links > a {
	padding: 2px 5px;
	border-left: solid 1px var(--theme-highlight);
	border-right: solid 1px var(--theme-highlight);
	color: var(--theme-highlight);
}
</style>
