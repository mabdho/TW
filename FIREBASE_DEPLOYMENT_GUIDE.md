# Firebase Static HTML Generator - Deployment Guide

## Quick Start

Your Firebase Static HTML Generator is now ready for deployment! Here's how to get it running:

### 1. Deploy to Firebase
```bash
# Deploy functions and hosting
firebase deploy --only functions,hosting
```

### 2. Access Admin Interface
After deployment, visit:
```
https://your-project.web.app/admin
```

### 3. Generate Your First City Page
1. Click "Generate Single City Page"
2. Enter "Milan" (or "Porto", "Zurich")
3. Watch the progress bar
4. View the generated page at the provided link

## What You Get

### Complete HTML Pages
Each generated page includes:
- **Hero Section**: City image and description
- **Highlights**: Key attractions
- **Discovery Cards**: Local secrets, photo spots, dining
- **Top Attractions**: Detailed attraction information
- **FAQs**: Frequently asked questions
- **SEO Optimization**: Meta tags, structured data

### Admin Interface Features
- One-click generation of all city pages
- Single city page generation
- Real-time progress tracking
- Status updates and error handling
- Preview links to generated pages

## Testing Locally

### Firebase Emulator
```bash
cd functions
npm run serve
```

### Access Local Admin
```
http://localhost:5000/admin
```

## File Locations

### Generated HTML Files
- Location: `public/[city-name].html`
- Example: `public/best-things-to-do-in-milan.html`

### Admin Interface
- Location: `public/admin.html`
- URL: `/admin`

### Firebase Functions
- Location: `functions/src/index.ts`
- API Endpoints: `/api/generate-page`, `/api/generate-all-pages`

## API Usage

### Generate Single Page
```bash
curl -X POST "https://your-project.web.app/api/generate-page?cityName=Milan"
```

### Generate All Pages
```bash
curl -X POST "https://your-project.web.app/api/generate-all-pages"
```

## Current Available Cities

- Milan (Italy)
- Porto (Portugal)
- Zurich (Switzerland)

## Generated Page Features

### SEO Optimization
- Complete meta tags
- Canonical URLs
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Cards

### Content Sections
- Hero with city image
- Highlights grid
- Discovery cards
- Attractions list
- FAQ section
- Professional footer

### Performance
- Inline CSS for fast loading
- Optimized images
- Mobile-responsive design
- Clean HTML structure

## Next Steps

1. **Deploy**: Use `firebase deploy --only functions,hosting`
2. **Test**: Visit `/admin` and generate a city page
3. **Verify**: Check generated HTML at the provided links
4. **SEO**: Submit generated pages to search engines

## Support

If you encounter any issues:
1. Check the Firebase Console logs
2. Verify your city TSX files are in the correct format
3. Ensure all dependencies are installed
4. Check the admin interface for error messages

Your Firebase Static HTML Generator is now ready to convert all your TSX city files into beautiful, SEO-optimized HTML pages!