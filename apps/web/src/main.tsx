import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// 1. CAMBIA HashRouter in BrowserRouter
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import './app/global.css';
import Header from './components/Header'; // Assicurati che il percorso sia giusto

// 2. Import della 404.
// Se il file è src/_create/not_found.jsx (o .js), questo percorso è corretto se main.jsx è in src/
import NotFound from './app/__create/not-found.tsx';

const Layout = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <div className="app-container">
                <Suspense fallback={<div>Caricamento...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};

function AppRoutes() {
    const pages = import.meta.glob('./app/**/page.jsx', { eager: true });

    const routes = Object.keys(pages).map((path) => {
        const name = path
            .replace(/^\.\/app/, '')
            .replace(/\/page\.jsx$/, '');
        const routePath = name === '' ? '/' : name;

        // @ts-ignore
        const Component = pages[path].default;
        if (!Component) return null;

        return <Route key={path} path={routePath} element={<Component />} />;
    });

    return (
        <Routes>
            <Route element={<Layout />}>
                {routes}

                {/* 3. FIX PAGINA BIANCA 404 */}
                {/* Se NotFound è undefined (import sbagliato), usiamo un fallback */}
                <Route path="*" element={ NotFound ? <NotFound /> : <h1>ERRORE: Controlla export pagina 404</h1> } />
            </Route>
        </Routes>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Usa BrowserRouter per URL puliti senza # */}
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </React.StrictMode>
);