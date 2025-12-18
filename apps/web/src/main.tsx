import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// STILI
import './app/global.css';

// COMPONENTI
// Assicurati che Header.jsx sia dentro src/components/
import Header from './components/Header';
// Assicurati di aver creato il file ScrollToTop.jsx nel PASSO 1
import ScrollToTop from './components/ScrollToTop';

// PAGINA 404
// Percorso preso dal tuo codice originale
import NotFound from './app/__create/not-found.tsx';

// --- LAYOUT ---
// L'Header sta SOLO qui
const Layout = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <div className="app-container">
                <Suspense fallback={<div style={{padding: 20, color: 'white'}}>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};

function AppRoutes() {
    // Cerca sia file .jsx che .tsx
    const pages = import.meta.glob('./app/**/page.{jsx,tsx}', { eager: true });

    const routes = Object.keys(pages).map((path) => {
        const name = path
            .replace(/^\.\/app/, '')           // Rimuove ./app
            .replace(/\/page\.(jsx|tsx)$/, ''); // Rimuove /page.jsx o /page.tsx

        const routePath = name === '' ? '/' : name;

        // @ts-ignore
        const Component = pages[path].default;
        if (!Component) return null;

        return <Route key={path} path={routePath} element={<Component />} />;
    });

    return (
        <Routes>
            <Route element={<Layout />}>
                {/* 1. Rotte generate automaticamente */}
                {routes}

                {/* 2. Rotta 404 */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            {/* Questo risolve il problema dello scroll e dell'header */}
            <ScrollToTop />
            <AppRoutes />
        </BrowserRouter>
    </React.StrictMode>
);