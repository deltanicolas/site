import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useAsyncError,
    useRouteError,
} from 'react-router';
import '../i18n';
import { useButton } from '@react-aria/button';
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type ReactNode,
    Component,
} from 'react';
import './global.css';

import fetch from '@/__create/fetch';
import { useNavigate } from 'react-router';
import { serializeError } from 'serialize-error';
import { Toaster } from 'sonner';

// Importa la favicon come file statico
import faviconImg from '../__create/favicon.png';

import type { Route } from './+types/root';

export const links = () => [];

if (globalThis.window && globalThis.window !== undefined) {
    globalThis.window.fetch = fetch;
}

// ... (Le funzioni ErrorBoundary rimangono uguali, non toccarle) ...
function SharedErrorBoundary({ isOpen, children }: { isOpen: boolean; children?: ReactNode }) {
    // ... lascia questo codice com'è ...
    return (
        <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className="bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 max-w-md w-full mx-4 shadow-lg">
                {/* ... contenuto modale errore ... */}
                Error Detected
            </div>
        </div>
    );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    return <SharedErrorBoundary isOpen={true} />;
}

// ... (InternalErrorBoundary e ErrorBoundaryWrapper rimangono uguali) ...

export const ClientOnly: React.FC<{loader: () => ReactNode}> = ({ loader }) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => { setIsMounted(true); }, []);
    if (!isMounted) return null;
    return <>{loader()}</>;
};

export function Layout({ children }: { children: ReactNode }) {
    const navigate = useNavigate();

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data.type === 'sandbox:navigation') {
                navigate(event.data.pathname);
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [navigate]);

    return (
        <html lang="it">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
            <link rel="icon" href={faviconImg} />
        </head>
        <body>
        {/* Rimosso LoadFontsSSR che causava il crash */}
        <ClientOnly loader={() => children} />
        <Toaster position="bottom-right" />
        <ScrollRestoration />
        <Scripts />
        <script src="https://kit.fontawesome.com/2c15cc0cc7.js" crossOrigin="anonymous" async />
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}