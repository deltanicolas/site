// @ts-ignore
import React, { Suspense } from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// STILI
import './app/global.css';

// COMPONENTI
import Header from './components/Header';
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';

// PAGINA 404
// @ts-ignore
import NotFound from './app/__create/not-found.tsx';


const Layout = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <div className="app-container">
                <Suspense fallback={<div style={{padding: 20, color: 'white'}}>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </div>
    );
};

function AppRoutes() {

    const pages = import.meta.glob('./app/**/page.{jsx,tsx}', { eager: true });

    const routes = Object.keys(pages).map((path) => {
        const name = path
            .replace(/^\.\/app/, '')
            .replace(/\/page\.(jsx|tsx)$/, '');
        const routePath = name === '' ? '/' : name;

        // @ts-ignore
        const Component = pages[path].default;
        if (!Component) return null;

        return <Route key={path} path={routePath} element={<Component />} />;
    });

    return (
        <Routes>
            {/* GRUPPO 1: Pagine CON Header (dentro Layout) */}
            <Route element={<Layout />}>
                {routes}
                {/* Aggiungi qui eventuali altre pagine che DEVONO avere l'header */}
            </Route>

            {/* GRUPPO 2: Pagine SENZA Header (fuori Layout) */}
            {/* La 404 sta qui fuori, quindi sarà "nuda" (solo il suo contenuto) */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
        </BrowserRouter>
    </React.StrictMode>
);