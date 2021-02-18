<template>
	<NuxtLink :to="href" aria-label="New Quote" class="new-quote-button">
		<FontAwesomeIcon icon="plus" />
	</NuxtLink>
</template>

<script lang="ts">
export default {
	props: {
		href: {
			type: String,
			required: false,
			default: "/new",
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.new-quote-button {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3.9375rem;
	height: 3.9375rem;
	bottom: 1.3125rem;
	right: 1.3125rem;
	background: $primary-color;
	color: white;
	border-radius: 50%;
	font-size: 21px;
	line-height: 21px;
	text-decoration: none;
	box-shadow: 1px 2px 10px black;

	@media screen and (min-width: $min-mid-screen) {
		display: none;
	}
}
</style>
