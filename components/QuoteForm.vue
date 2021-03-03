<template>
	<form>
		<label>
			<span>Submit a quote</span>
			<textarea placeholder="Submit a quote"></textarea>
		</label>
		<button type="submit">Submit</button>
	</form>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

form {
	display: flex;
	flex-flow: column nowrap;
	padding: 15px;
}

textarea {
	min-height: 100px;
	width: 100%;
	padding: 10px;
	border-radius: 4px;
	font-family: inherit;
	font-size: inherit;
	resize: none;
	overflow: hidden;
	border: none;
}

button {
	align-self: flex-start;
	color: white;
	margin: 10px 0;
	background: $primary-color;
	&:hover {
		background: $secondary-color;
	}
	transition: background-color linear 100ms;
	border: none;
	border-radius: 4px;
	padding: 4px 8px;
	font-size: 1.1em;
	cursor: pointer;
}

@media screen {
	span {
		display: none;
	}
}
</style>
