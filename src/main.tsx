import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (typeof window !== 'undefined') {
  (window as Window & {gm_authFailure?: () => void}).gm_authFailure = () => {
    window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
  };

  const originalConsoleError = console.error;
  console.error = (...args: unknown[]) => {
    originalConsoleError.apply(console, args);
    const message = args.map((item) => String(item)).join(' ');
    if (message.includes('OverQuotaMapError') || message.includes('QuotaExceededError')) {
      window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
    }
  };
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const hasServerRenderedMarkup =
    rootElement.hasChildNodes() && !rootElement.innerHTML.includes('<!--app-html-->');

  const appTree = (
    <React.StrictMode>
      <App initialPath={window.location.pathname} />
    </React.StrictMode>
  );

  if (hasServerRenderedMarkup) {
    hydrateRoot(rootElement, appTree);
  } else {
    createRoot(rootElement).render(appTree);
  }
}
