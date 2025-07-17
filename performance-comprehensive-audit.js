import s from"fs"
import e from"path"
import{fileURLToPath as t}from"url"
import{dirname as i}from"path"
i(t(import.meta.url))
class n{constructor(){this.results={coreWebVitals:{score:0,issues:[],strengths:[]},bundleOptimization:{score:0,issues:[],strengths:[]},resourceOptimization:{score:0,issues:[],strengths:[]},caching:{score:0,issues:[],strengths:[]},networkOptimization:{score:0,issues:[],strengths:[]},overallScore:0}}async auditPerformance(){void 0,await this.auditCoreWebVitals(),await this.auditBundleOptimization(),await this.auditResourceOptimization(),await this.auditCaching(),await this.auditNetworkOptimization(),this.calculateOverallScore(),this.generatePerformanceReport()}async auditCoreWebVitals(){void 0
const t=this.results.coreWebVitals,i=this.findIndexHtml()
if(i){const e=s.readFileSync(i,"utf-8")
e.includes("<style>")&&e.includes("critical")?(t.score+=25,t.strengths.push("✅ Critical CSS inlining implemented")):t.issues.push("❌ Critical CSS not inlined - impacts FCP"),e.includes('rel="preload"')&&(t.score+=20,t.strengths.push("✅ Resource preloading for faster LCP")),(e.includes("font-display:swap")||e.includes("&display=swap"))&&(t.score+=15,t.strengths.push("✅ Font optimization to prevent layout shift")),e.includes('loading="lazy"')&&(t.score+=15,t.strengths.push("✅ Image lazy loading implemented")),e.includes("width=")&&e.includes("height=")&&(t.score+=10,t.strengths.push("✅ Image dimensions specified - prevents CLS")),(e.includes("service-worker")||e.includes("sw.js"))&&(t.score+=15,t.strengths.push("✅ Service worker for caching"))}const n=["client/src/utils/performance.ts","client/src/utils/performanceOptimizer.ts","client/src/hooks/usePerformanceOptimization.ts"]
for(const r of n)s.existsSync(r)&&(t.score+=10,t.strengths.push(`✅ Performance utility: ${e.basename(r)}`))
void 0}async auditBundleOptimization(){void 0
const e=this.results.bundleOptimization,t=JSON.parse(s.readFileSync("package.json","utf-8"))
t.scripts&&(t.scripts["build:optimized"]&&(e.score+=20,e.strengths.push("✅ Optimized build script found")),t.scripts["optimize:css"]&&(e.score+=15,e.strengths.push("✅ CSS optimization script found")),t.scripts["optimize:js"]&&(e.score+=15,e.strengths.push("✅ JavaScript optimization script found")),t.scripts["analyze:bundle"]&&(e.score+=10,e.strengths.push("✅ Bundle analysis script found")))
const i={...t.dependencies,...t.devDependencies},n=["terser","csso","cssnano","vite-plugin-compression","rollup-plugin-terser","babel-plugin-react-remove-properties"]
let r=0
for(const s of n)i[s]&&(r++,e.strengths.push(`✅ Optimization tool: ${s}`))
e.score+=r/n.length*30
const o=this.findViteConfig()
if(o){const t=s.readFileSync(o,"utf-8");(t.includes("chunkSizeWarningLimit")||t.includes("manualChunks"))&&(e.score+=20,e.strengths.push("✅ Code splitting configuration found"))}const c=this.getBundleFiles()
if(c.length>0){const s=c.filter(s=>s.size>5e5)
0===s.length?(e.score+=10,e.strengths.push("✅ No large bundle files detected")):e.issues.push(`❌ Large bundle files detected: ${s.length} files > 500KB`)}void 0}async auditResourceOptimization(){void 0
const t=this.results.resourceOptimization,i=["client/src/components/ImageOptimized.tsx","client/src/components/ImageOptimizer.tsx","client/src/utils/imageOptimization.ts","client/src/services/ImageOptimizationService.ts"]
let n=0
for(const c of i)s.existsSync(c)&&(n++,t.strengths.push(`✅ Image optimization: ${e.basename(c)}`))
t.score+=n/i.length*30,s.existsSync("client/src/components/CriticalResourceLoader.tsx")&&(t.score+=20,t.strengths.push("✅ Critical resource loader implemented"))
const r=["client/src/components/DynamicCityRoute.tsx"]
for(const e of r)if(s.existsSync(e)){const i=s.readFileSync(e,"utf-8")
i.includes("lazy(")&&i.includes("import(")&&(t.score+=25,t.strengths.push("✅ Dynamic imports and lazy loading implemented"))}this.findImageOptimizationReferences().some(s=>s.includes("webp")||s.includes("avif"))&&(t.score+=15,t.strengths.push("✅ Modern image formats (WebP/AVIF) supported"))
const o=["vite.config.ts","package.json"]
for(const e of o)if(s.existsSync(e)){const i=s.readFileSync(e,"utf-8")
if(i.includes("compression")||i.includes("gzip")){t.score+=10,t.strengths.push("✅ Compression configuration found")
break}}void 0}async auditCaching(){void 0
const e=this.results.caching,t=["public/sw.js","dist/public/sw.js"]
let i=!1
for(const o of t)if(s.existsSync(o)){i=!0,e.score+=30,e.strengths.push("✅ Service worker implemented")
const t=s.readFileSync(o,"utf-8")
t.includes("cache")&&(e.score+=20,e.strengths.push("✅ Service worker caching strategy")),(t.includes("networkFirst")||t.includes("cacheFirst"))&&(e.score+=15,e.strengths.push("✅ Advanced caching strategies"))
break}i||e.issues.push("❌ No service worker found - missing caching optimization")
const n=["server/index.ts","server/firebase-server.ts"]
for(const o of n)if(s.existsSync(o)){const t=s.readFileSync(o,"utf-8");(t.includes("Cache-Control")||t.includes("ETag"))&&(e.score+=20,e.strengths.push("✅ HTTP caching headers configured"))}const r=this.findViteConfig()
if(r){const t=s.readFileSync(r,"utf-8")
t.includes("rollupOptions")&&t.includes("output")&&(e.score+=15,e.strengths.push("✅ Build output optimization for caching"))}void 0}async auditNetworkOptimization(){void 0
const e=this.results.networkOptimization,t=this.findIndexHtml()
if(t){const i=s.readFileSync(t,"utf-8")
i.includes("dns-prefetch")&&(e.score+=15,e.strengths.push("✅ DNS prefetch implemented")),i.includes("preconnect")&&(e.score+=20,e.strengths.push("✅ Preconnect hints implemented")),i.includes("prefetch")&&(e.score+=15,e.strengths.push("✅ Resource prefetch implemented"))}const i=this.findAllHtmlFiles()
let n=!1
for(const c of i){const e=s.readFileSync(c,"utf-8")
if(e.includes("unsplash.com")||e.includes("cdn.")){n=!0
break}}n&&(e.score+=20,e.strengths.push("✅ CDN usage detected"))
const r=["server/index.ts","server/firebase-server.ts"]
for(const c of r)if(s.existsSync(c)){const t=s.readFileSync(c,"utf-8")
t.includes("Link:")&&t.includes("rel=")&&(e.score+=15,e.strengths.push("✅ HTTP/2 server push hints"))}const o=this.getBundleFiles()
o.length>0&&o.length<10?(e.score+=15,e.strengths.push("✅ Optimal number of bundle files")):o.length>=10&&e.issues.push(`❌ Too many bundle files: ${o.length} (should be < 10)`),this.findImageOptimizationReferences().length>0&&(e.score+=15,e.strengths.push("✅ Image optimization reduces network load"))}findIndexHtml(){const e=["client/index.html","index.html","public/index.html","dist/index.html"]
for(const t of e)if(s.existsSync(t))return t
return null}findViteConfig(){const e=["vite.config.ts","vite.config.js","vite.config.ssr.ts"]
for(const t of e)if(s.existsSync(t))return t
return null}findAllHtmlFiles(){const t=[],i=["dist/public","public"]
for(const n of i)s.existsSync(n)&&s.readdirSync(n,{recursive:!0}).forEach(s=>{s.endsWith(".html")&&t.push(e.join(n,s))})
return t}findImageOptimizationReferences(){const t=[],i=["client/src/components","client/src/utils","client/src/services"]
for(const n of i)s.existsSync(n)&&s.readdirSync(n).forEach(i=>{if(i.toLowerCase().includes("image")&&(i.endsWith(".ts")||i.endsWith(".tsx"))){const r=s.readFileSync(e.join(n,i),"utf-8")
t.push(r)}})
return t}getBundleFiles(){const t=[],i="dist"
if(s.existsSync(i)){const n=i=>{s.readdirSync(i,{withFileTypes:!0}).forEach(r=>{const o=e.join(i,r.name)
if(r.isDirectory())n(o)
else if(r.name.endsWith(".js")||r.name.endsWith(".css")){const e=s.statSync(o)
t.push({path:o,name:r.name,size:e.size})}})}
n(i)}return t}calculateOverallScore(){const s=[this.results.coreWebVitals.score,this.results.bundleOptimization.score,this.results.resourceOptimization.score,this.results.caching.score,this.results.networkOptimization.score]
this.results.overallScore=s.reduce((s,e)=>s+e,0)/s.length}generatePerformanceReport(){void 0
let s="F"
this.results.overallScore>=90?s="A+":this.results.overallScore>=80?s="A":this.results.overallScore>=70?s="B":this.results.overallScore>=60?s="C":this.results.overallScore>=50&&(s="D")
const e=[...this.results.coreWebVitals.issues,...this.results.bundleOptimization.issues,...this.results.resourceOptimization.issues,...this.results.caching.issues,...this.results.networkOptimization.issues]
return e.length>0&&(void 0,e.forEach(s=>{})),this.results}}export{n as PerformanceAuditor}
