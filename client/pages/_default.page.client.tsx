import { hydrateRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';

export { render };

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const container = document.getElementById('root');
  if (container) {
    hydrateRoot(container, page);
  }
}