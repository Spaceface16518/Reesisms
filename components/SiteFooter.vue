<template>
	<footer>
		<p>
			This website is licensed under <strong>MIT</strong> (&#169;
			{{ new Date().getFullYear() }}) unless otherwise stated.
		</p>
		<div class="links">
			<a>RSS</a>
		</div>
	</footer>
</template>

<style scoped>
footer {
	text-align: center;
}

.links {
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 1rem;
}

.links > :not(:last-child)::after {
	content: "•";
	padding: 0 5px;
}
</style>
