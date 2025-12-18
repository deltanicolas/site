import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: "src/app",
	ssr: false,
	// Usa "/" se sei in locale o su dominio root.
	basename: "/",

	// AGGIUNGI QUESTO: Forza la creazione di index.html
	async prerender() {
		return ["/"];
	},
} satisfies Config;