<template>
	<div>
		<h1>The MIT License (MIT)</h1>
		<img
			alt="Profile Picture of Amrit Rathie"
			aria-hidden="true"
			height="200"
			src="https://avatars.githubusercontent.com/Spaceface16518"
			width="200"
		/>
		<p class="copyright-declaration">
			Copyright &copy; {{ new Date().getFullYear() }} Amrit Rathie
			<a href="mailto:amrit.rathie@gmail.com">&lt;amrit.rathie@gmail.com&gt;</a>
		</p>

		<p class="license-text">
			Permission is hereby granted, free of charge, to any person obtaining a
			copy of this software and associated documentation files (the “Software”),
			to deal in the Software without restriction, including without limitation
			the rights to use, copy, modify, merge, publish, distribute, sublicense,
			and/or sell copies of the Software, and to permit persons to whom the
			Software is furnished to do so, subject to the following conditions:
		</p>
		<p class="license-text">
			The above copyright notice and this permission notice shall be included in
			all copies or substantial portions of the Software.
		</p>
		<p class="license-text emph">
			THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
			THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
			FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
			DEALINGS IN THE SOFTWARE.
		</p>
	</div>
</template>

<script>
export default {
	name: "License",
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.copyright-declaration {
	color: $secondary-color;
}

.license-text {
	padding: 5px;

	&.emph {
		color: $highlight-color;
	}
}

img {
	display: block;
	float: right;
	border-radius: 100%;
	box-shadow: rgba(0, 0, 0, 0.23) 0 3px 10px, rgba(0, 0, 0, 0.16) 0 3px 10px;
	transition: box-shadow 0.2s ease-in-out;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.23) 0 5px 12px, rgba(0, 0, 0, 0.16) 0 5px 12px;
	}
}
</style>
