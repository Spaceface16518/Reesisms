export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Reesisms",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "A website for the many cool quotes of Mr. Rees",
			},
		],
		// link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/axios"],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	publicRuntimeConfig: {
		axios: {
			baseURL:
				process.env.NODE_ENV === "production"
					? process.env.BASE_URL ||
					  process.env.VERCEL_URL ||
					  "http://localhost:3000/"
					: "http://localhost:3000/",
		},
	},
};
