import {
	type RouteConfigEntry,
	index,
	route,
} from '@react-router/dev/routes';

// ============================================================================
// FIX CRITICO: Usa import.meta.glob invece di node:fs
// Vite sostituirà questo con la lista dei file statici durante la build.
// Il parametro { eager: false } è default, restituisce i percorsi come chiavi.
// ============================================================================
const pages = import.meta.glob('./**/page.jsx');

function generateRoutes(): RouteConfigEntry[] {
	const routes: RouteConfigEntry[] = [];

	// Iteriamo su tutte le chiavi trovate (es: "./page.jsx", "./chi-siamo/page.jsx")
	for (const path in pages) {

		// Pulizia del path per trasformarlo in URL
		// 1. Rimuove "./" all'inizio
		// 2. Rimuove "/page.jsx" alla fine
		// 3. Rimuove "page.jsx" se è nella root
		let routePath = path
			.replace(/^\.\//, '')
			.replace(/\/page\.jsx$/, '')
			.replace(/^page\.jsx$/, '');

		// Se routePath è vuoto, significa che è la pagina Home (root)
		if (routePath === '') {
			// "index" crea la rotta "/"
			routes.push(index(path));
			continue;
		}

		// Gestione Parametri Dinamici (es. [id], [...slug])
		// Trasforma la sintassi dei file in sintassi URL React Router
		const segments = routePath.split('/');
		const processedSegments = segments.map((segment) => {
			// Se inizia con [ e finisce con ]
			if (segment.startsWith('[') && segment.endsWith(']')) {
				const paramName = segment.slice(1, -1);

				// Catch-all: [...ids] diventa *
				if (paramName.startsWith('...')) {
					return '*';
				}
				// Opzionale: [[id]] diventa :id?
				if (paramName.startsWith('[') && paramName.endsWith(']')) {
					return `:${paramName.slice(1, -1)}?`;
				}
				// Standard: [id] diventa :id
				return `:${paramName}`;
			}
			return segment;
		});

		// Ricostruiamo l'URL finale
		const finalUrl = processedSegments.join('/');

		// Aggiungiamo la rotta alla configurazione
		// Primo argomento: URL (es. "chi-siamo"), Secondo: percorso file relativo
		routes.push(route(finalUrl, path));
	}

	// Aggiungi la pagina 404 personalizzata alla fine
	routes.push(route('*?', './__create/not-found.tsx'));

	return routes;
}

export default generateRoutes();