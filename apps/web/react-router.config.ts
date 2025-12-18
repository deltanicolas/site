import type { Config } from '@react-router/dev/config';

export default {
	// Cartella dove risiede l'app
	appDirectory: './src/app',

	// DISABILITA SSR: Fondamentale per generare un sito statico (SPA)
	ssr: false,

	// Se vuoi generare file HTML fisici per ogni pagina, elenca le rotte qui:
	async prerender() {
		return ["/", "/chi-siamo", "/contatti", "/applicazioni", "/guardian", "/matrix"];
	},
} satisfies Config;