import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

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
