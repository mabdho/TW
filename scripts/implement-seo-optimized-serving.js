import e from"fs"
import t from"path"
class n{constructor(){this.results=[],this.errors=[]}async implementSEOServing(){void 0
try{const n=t.join(process.cwd(),"server/index.ts")
let i=e.readFileSync(n,"utf-8")
if(i.includes("SEO-optimized serving"))return void 0,void 0
const s="\n// SEO-optimized serving middleware\n// Serves pre-rendered HTML to search engines for better indexing\n// Same content structure, different format (HTML vs React hydration)\napp.use((req, res, next) => {\n  const userAgent = req.get('User-Agent') || '';\n  \n  // Only serve HTML to legitimate search engine crawlers\n  const isSearchEngine = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot|applebot/i.test(userAgent);\n  \n  if (isSearchEngine) {\n    let htmlPath = null;\n    \n    // Route mapping for search engines (same content, HTML format)\n    const routeMap = {\n      '/': 'index.html',\n      '/destinations': 'destinations.html',\n      '/blogs': 'blogs.html',\n      '/privacy-policy': 'privacy-policy.html',\n      '/terms-of-service': 'terms-of-service.html',\n      '/cookie-policy': 'cookie-policy.html'\n    };\n    \n    // Check main routes\n    if (routeMap[req.path]) {\n      htmlPath = path.join(process.cwd(), 'dist/public', routeMap[req.path]);\n    }\n    // Check city routes\n    else if (req.path.startsWith('/best-things-to-do-in-')) {\n      htmlPath = path.join(process.cwd(), 'dist/public', req.path, 'index.html');\n    }\n    // Check blog routes\n    else if (req.path.startsWith('/blog/')) {\n      const blogId = req.path.replace('/blog/', '').replace('.html', '');\n      htmlPath = path.join(process.cwd(), 'dist/public/blog', blogId + '.html');\n    }\n    \n    // Serve HTML if exists, otherwise continue to React app\n    if (htmlPath && fs.existsSync(htmlPath)) {\n      console.log(`🔍 Serving pre-rendered HTML to search engine: ${req.path}`);\n      return res.sendFile(htmlPath);\n    }\n  }\n  \n  // Continue to React app for regular users and when HTML not available\n  next();\n});\n\n",r=i.indexOf("app.use(expressStaticGzip(")
if(r>-1)i=i.slice(0,r)+s+i.slice(r)
else{const e=i.indexOf('if (app.get("env") === "development")')
e>-1&&(i=i.slice(0,e)+s+i.slice(e))}e.writeFileSync(n,i,"utf-8"),this.results.push("Implemented SEO-optimized serving")}catch(n){this.errors.push(`Error implementing SEO serving: ${n.message}`)}}async generateMainPageHTML(){void 0
try{const i=t.join(process.cwd(),"dist/public")
e.existsSync(i)||e.mkdirSync(i,{recursive:!0})
const s=["index.html","destinations.html","blogs.html","privacy-policy.html","terms-of-service.html","cookie-policy.html"]
let r=0
for(const n of s)e.existsSync(t.join(i,n))&&r++
if(r>=3)return void 0,this.results.push("HTML files already available"),void 0
const{execSync:o}=await import("child_process")
try{o("npm run generate-html",{cwd:process.cwd(),stdio:"inherit"}),this.results.push("Generated HTML files for main pages")}catch(n){await this.createBasicHTMLFiles()}}catch(n){this.errors.push(`Error generating HTML files: ${n.message}`)}}async createBasicHTMLFiles(){void 0
const n=t.join(process.cwd(),"dist/public"),i=(e,t,n)=>`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>${e}</title>\n  <meta name="description" content="${t}">\n  <meta name="robots" content="index, follow">\n  <link rel="canonical" href="https://travelwanders.com/">\n  <script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "@type": "WebSite",\n    "name": "TravelWanders",\n    "description": "${t}",\n    "url": "https://travelwanders.com"\n  }\n  <\/script>\n</head>\n<body>\n  <div id="root">\n    <main>\n      <h1>${e}</h1>\n      ${n}\n    </main>\n  </div>\n</body>\n</html>`,s=[{file:"index.html",title:"Best Travel Guides & Destinations - TravelWanders",description:"Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.",content:"<p>Welcome to TravelWanders - your ultimate travel guide companion.</p>"},{file:"destinations.html",title:"All Destinations - TravelWanders",description:"Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.",content:"<p>Explore our comprehensive collection of travel destinations.</p>"},{file:"blogs.html",title:"Travel Blog - TravelWanders",description:"Read our travel blog for inspiration, tips, and stories from amazing destinations around the world.",content:"<p>Discover travel inspiration through our blog posts.</p>"}]
for(const r of s){const s=t.join(n,r.file)
e.existsSync(s)||e.writeFileSync(s,i(r.title,r.description,r.content))}this.results.push("Created basic HTML files")}async verifySEOImplementation(){void 0
try{const n=t.join(process.cwd(),"server/index.ts")
e.readFileSync(n,"utf-8").includes("SEO-optimized serving")?void 0:(void 0,this.errors.push("SEO middleware not found in server"))
const i=t.join(process.cwd(),"dist/public"),s=["index.html","destinations.html","blogs.html"]
let r=0
for(const o of s)e.existsSync(t.join(i,o))&&r++
void 0,r>=2?this.results.push("HTML files verified"):this.errors.push("Insufficient HTML files for SEO")}catch(n){this.errors.push(`Error verifying SEO implementation: ${n.message}`)}}generateReport(){void 0,this.results.forEach(e=>{}),this.errors.length>0&&(void 0,this.errors.forEach(e=>{}))}async runImplementation(){void 0,await this.implementSEOServing(),await this.generateMainPageHTML(),await this.verifySEOImplementation(),this.generateReport()}}(async function(){const e=new n
await e.runImplementation()})().catch(console.error)
export default n
