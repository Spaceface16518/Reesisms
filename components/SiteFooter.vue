<template>
	<footer>
		<p>
			This website is licensed under
			<strong>MIT (&copy; {{ new Date().getFullYear() }})</strong> unless
			otherwise stated.
		</p>
		<div class="links">
			<a>RSS</a>
		</div>
	</footer>
</template>

<style scoped>
.links > :not(:last-child)::after {
	content: "•";
	padding: 0 5px;
}
</style>
