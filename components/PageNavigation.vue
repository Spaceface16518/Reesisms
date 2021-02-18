<template>
	<NuxtLink :aria-label="name" :to="page" class="page-navigation-button">
		<FontAwesomeIcon :icon="icon"></FontAwesomeIcon>
		<span class="page-navigation-button-label">{{ name }}</span>
	</NuxtLink>
</template>

<script lang="ts">
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		page: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: false,
			default: "",
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.page-navigation-button {
	flex: 0 0 auto;
	background: transparent;
	display: inline;
	font-size: 16px;
	padding: 10px;
	text-decoration: none;
	color: white;

	&.nuxt-link-active {
		color: $highlight-color;
	}
}

@media screen and (max-width: 600px) {
	.page-navigation-button-label {
		display: none;
	}
}
</style>
