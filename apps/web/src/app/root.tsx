import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useAsyncError,
  useLocation,
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

import { toPng } from 'html-to-image';
import fetch from '@/__create/fetch';
import { useNavigate } from 'react-router';
import { serializeError } from 'serialize-error';
import { Toaster } from 'sonner';
// @ts-ignore
import { LoadFonts } from 'virtual:load-fonts.jsx';
import { HotReloadIndicator } from '../__create/HotReload';
import { useSandboxStore } from '../__create/hmr-sandbox-store';
import type { Route } from './+types/root';
import { useDevServerHeartbeat } from '../__create/useDevServerHeartbeat';

export const links = () => [];

if (globalThis.window && globalThis.window !== undefined) {
  globalThis.window.fetch = fetch;
}

const LoadFontsSSR = import.meta.env.SSR ? LoadFonts : null;

function SharedErrorBoundary({
                               isOpen,
                               children,
                             }: {
  isOpen: boolean;
  children?: ReactNode;
}): React.ReactElement {
  return (
      <div
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
      >
        <div className="bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 max-w-md w-full mx-4 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center">
                <span className="text-black text-[1.125rem] leading-none">!</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex flex-col gap-1">
                <p className="font-light text-[#F2F2F2] text-sm">App Error Detected</p>
                <p className="text-[#959697] text-sm font-light">
                  An error occurred while trying to use your app.
                </p>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <SharedErrorBoundary isOpen={true} />;
}

function InternalErrorBoundary({ error: errorArg }: Route.ErrorBoundaryProps) {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  const error = errorArg ?? asyncError ?? routeError;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const animateTimer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(animateTimer);
  }, []);

  const { buttonProps: copyButtonProps } = useButton(
      {
        onPress: useCallback(() => {
          navigator.clipboard.writeText(JSON.stringify(serializeError(error)));
        }, [error]),
      },
      useRef<HTMLButtonElement>(null)
  );

  return (
      <SharedErrorBoundary isOpen={isOpen}>
        <button
            className="flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px] w-fit"
            type="button"
            {...copyButtonProps}
        >
          Copy error
        </button>
      </SharedErrorBoundary>
  );
}

class ErrorBoundaryWrapper extends Component<{children: ReactNode}, {hasError: boolean, error: any}> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: any) { return { hasError: true, error }; }
  render() {
    if (this.state.hasError) return <InternalErrorBoundary error={this.state.error} params={{}} />;
    return this.props.children;
  }
}

export const ClientOnly: React.FC<{loader: () => ReactNode}> = ({ loader }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  if (!isMounted) return null;
  return (
      <ErrorBoundaryWrapper>
        <>{loader()}</>
      </ErrorBoundaryWrapper>
  );
};

export function Layout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;

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
        <link rel="icon" href="/src/__create/favicon.png" />
      </head>
      <body>
      <ClientOnly loader={() => children} />
      <Toaster position="bottom-right" />
      <ScrollRestoration />
      <Scripts />
      <script src="https://kit.fontawesome.com/2c15cc0cc7.js" crossOrigin="anonymous" async />
      </body>
      </html>
  );
}

// IL FIX PRINCIPALE: Rimosso SessionProvider che non esiste
export default function App() {
  return <Outlet />;
}