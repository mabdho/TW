import React from 'react';
import type { PageContext } from './types';

export { PageShell };

function PageShell({ 
  children, 
  pageContext 
}: { 
  children: React.ReactNode; 
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <div className="min-h-screen bg-background">
        {children}
      </div>
    </React.StrictMode>
  );
}