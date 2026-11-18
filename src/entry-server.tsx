import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './App.tsx';
import {renderServerHeadTags, resolveBaseUrl, resolvePageSeo} from './config/seo.ts';

export interface SsrRenderResult {
  html: string;
  headTags: string;
  statusCode: number;
}

export function render(url: string, requestOrigin?: string): SsrRenderResult {
  const {seo, isNotFound} = resolvePageSeo(url);
  const baseUrl = resolveBaseUrl(requestOrigin);
  const headTags = renderServerHeadTags(seo, baseUrl);

  const html = renderToString(
    <React.StrictMode>
      <App initialPath={url} />
    </React.StrictMode>,
  );

  return {
    html,
    headTags,
    statusCode: isNotFound ? 404 : 200,
  };
}
