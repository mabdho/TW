import { renderPage } from 'vite-plugin-ssr/server';
import { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function handleSSR(req: Request, res: Response) {
  const url = req.originalUrl;
  
  try {
    const pageContextInit = {
      urlOriginal: url,
      userAgent: req.headers['user-agent']
    };

    const pageContext = await renderPage(pageContextInit);
    
    if (pageContext.httpResponse) {
      const { body, statusCode, headers } = pageContext.httpResponse;
      
      // Set headers
      if (headers) {
        Object.entries(headers).forEach(([name, value]) => {
          res.setHeader(name, value as string);
        });
      }
      
      // Set status and send response
      res.status(statusCode).send(body);
    } else {
      // Page not found
      res.status(404).send('Page not found');
    }
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
}

// Configure static file serving for production
export function configureStaticFiles(app: any) {
  const distPath = path.join(__dirname, '../dist');
  app.use(express.static(distPath));
}