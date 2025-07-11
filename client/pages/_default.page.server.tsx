import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { PageShell } from './PageShell';
import type { PageContextServer } from './types';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'urlPathname', 'documentProps'];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  
  // Generate the HTML for the page
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // Get document props for SEO
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'TravelWanders - Discover Amazing Destinations';
  const description = (documentProps && documentProps.description) || 'Discover the best travel destinations, attractions, and experiences with TravelWanders. Your ultimate guide to exploring the world.';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://travelwanders.com${pageContext.urlPathname}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        <link rel="canonical" href="https://travelwanders.com${pageContext.urlPathname}" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}