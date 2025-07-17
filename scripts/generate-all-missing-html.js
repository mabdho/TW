#!/usr/bin/env node
import{execSync as e}from"child_process"
import t from"fs"
import n from"path";(new class{constructor(){this.serverUrl="http://localhost:3000",this.results=[],this.errors=[]}async generateAllMissingFiles(){void 0
try{await this.generateCityHtmlFiles(),await this.generateStaticPages(),await this.updateServerCloaking(),await this.runFinalAudit(),this.results.forEach(e=>{}),this.errors.length>0&&(void 0,this.errors.forEach(e=>{}))}catch(e){void 0,process.exit(1)}}async generateCityHtmlFiles(){void 0
const e=n.join(process.cwd(),"client/src/pages/cities"),s=t.readdirSync(e).filter(e=>e.endsWith(".tsx")).map(e=>e.replace(".tsx",""))
void 0
const{generateCompleteHTML:i,extractCityDataFromTSX:r}=await import("../server/html-generator.js")
for(const o of s)try{const s=n.join(e,`${o}.tsx`),a=await r(s)
if(a){const e=i(a),s=a.cityName.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),r=n.join(process.cwd(),"dist/public",`best-things-to-do-in-${s}`)
t.mkdirSync(r,{recursive:!0})
const o=n.join(r,"index.html")
t.writeFileSync(o,e,"utf-8"),this.results.push(`${a.cityName} HTML generated (${(e.length/1024).toFixed(2)} KB)`)}else this.errors.push(`Could not extract data from ${o}`)}catch(a){this.errors.push(`Error processing ${o}: ${a.message}`)}}async generateStaticPages(){void 0
const{generateHomePageHTML:e,generateDestinationsPageHTML:s,generateBlogsPageHTML:i,generatePrivacyPolicyHTML:r,generateTermsOfServiceHTML:a,generateCookiePolicyHTML:o}=await import("../server/html-generator.js"),c=[{name:"Home",generator:e,filename:"home-seo.html"},{name:"Destinations",generator:s,filename:"destinations-seo.html"},{name:"Blogs",generator:i,filename:"blogs-seo.html"},{name:"Privacy Policy",generator:r,filename:"privacy-policy.html"},{name:"Terms of Service",generator:a,filename:"terms-of-service.html"},{name:"Cookie Policy",generator:o,filename:"cookie-policy.html"}],l=n.join(process.cwd(),"dist/public")
t.mkdirSync(l,{recursive:!0})
for(const g of c)try{const e=g.generator(),s=n.join(l,g.filename)
t.writeFileSync(s,e,"utf-8"),this.results.push(`${g.name} HTML generated (${(e.length/1024).toFixed(2)} KB)`)}catch(h){this.errors.push(`Error generating ${g.name}: ${h.message}`)}}async updateServerCloaking(){void 0
try{const e=n.join(process.cwd(),"server/index.ts")
let s=t.readFileSync(e,"utf-8")
const i="\n// Enhanced bot detection for 100% compliance\nfunction isSearchEngineBot(userAgent) {\n  if (!userAgent) return false;\n  \n  const botPatterns = [\n    /googlebot/i, /bingbot/i, /slurp/i, /duckduckbot/i, /baiduspider/i, \n    /yandexbot/i, /facebookexternalhit/i, /twitterbot/i, /linkedinbot/i,\n    /whatsapp/i, /telegrambot/i, /discordbot/i, /applebot/i, /crawler/i,\n    /spider/i, /bot/i, /archiver/i, /scraper/i\n  ];\n  \n  return botPatterns.some(pattern => pattern.test(userAgent));\n}\n",r="\n// Enhanced cloaking routes for 100% compliance\nconst path = require('path');\nconst fs = require('fs');\n\n// Legal pages cloaking\napp.get(['/privacy-policy', '/terms-of-service', '/cookie-policy'], (req, res, next) => {\n  const userAgent = req.get('User-Agent') || '';\n  \n  if (isSearchEngineBot(userAgent)) {\n    const pageName = req.path.substring(1);\n    const htmlPath = path.join(process.cwd(), 'dist/public', pageName + '.html');\n    \n    if (fs.existsSync(htmlPath)) {\n      return res.sendFile(htmlPath);\n    }\n  }\n  \n  next();\n});\n\n// City pages cloaking\napp.get('/best-things-to-do-in-:cityName', (req, res, next) => {\n  const userAgent = req.get('User-Agent') || '';\n  \n  if (isSearchEngineBot(userAgent)) {\n    const cityName = req.params.cityName;\n    const htmlPath = path.join(process.cwd(), 'dist/public', 'best-things-to-do-in-' + cityName, 'index.html');\n    \n    if (fs.existsSync(htmlPath)) {\n      return res.sendFile(htmlPath);\n    }\n  }\n  \n  next();\n});\n\n// Main pages cloaking\napp.get(['/', '/destinations', '/blogs'], (req, res, next) => {\n  const userAgent = req.get('User-Agent') || '';\n  \n  if (isSearchEngineBot(userAgent)) {\n    let filename = '';\n    switch(req.path) {\n      case '/': filename = 'home-seo.html'; break;\n      case '/destinations': filename = 'destinations-seo.html'; break;\n      case '/blogs': filename = 'blogs-seo.html'; break;\n    }\n    \n    if (filename) {\n      const htmlPath = path.join(process.cwd(), 'dist/public', filename);\n      if (fs.existsSync(htmlPath)) {\n        return res.sendFile(htmlPath);\n      }\n    }\n  }\n  \n  next();\n});\n"
if(!s.includes("Enhanced bot detection")){const e=s.indexOf("import")
e>-1&&(s=s.slice(0,e)+i+"\n"+s.slice(e))}if(!s.includes("Enhanced cloaking routes")){const e=s.indexOf("app.use(vite.middlewares)")
e>-1&&(s=s.slice(0,e)+r+"\n"+s.slice(e))}t.writeFileSync(e,s,"utf-8"),this.results.push("Server cloaking enhanced")}catch(e){this.errors.push(`Error updating server cloaking: ${e.message}`)}}async runFinalAudit(){void 0
try{const t=e("node comprehensive-audit-system.js",{cwd:process.cwd(),encoding:"utf8"})
void 0
const n=t.match(/🎯 OVERALL SCORE: ([\d.]+)%/)
if(n){const e=parseFloat(n[1])
e>=100||e>=90,void 0}t.match(/📋 DETAILED BREAKDOWN:([\s\S]*?)🚀 PRODUCTION READINESS/),0}catch(t){this.errors.push(`Error running final audit: ${t.message}`)}}}).generateAllMissingFiles().then(()=>{void 0,process.exit(0)}).catch(e=>{void 0,process.exit(1)})
