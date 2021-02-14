<template>
	<NuxtLink :aria-label="name" :to="page" class="page-navigation-button">
		<FontAwesomeIcon :icon="icon"></FontAwesomeIcon>
		<span>{{ name }}</span>
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
.page-navigation-button {
	flex: 0 0 auto;
	background: transparent;
	display: block;
	font-size: 16px;
	padding: 15px;
	text-decoration: none;
	color: var(--theme-text);

	&.nuxt-link-active {
		background: var(--theme-background);
		color: var(--theme-highlight);
	}
}
</style>
