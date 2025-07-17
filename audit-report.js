import{ComprehensiveAuditSystem as s}from"./comprehensive-audit-system.js"
import{SEOAuditor as e}from"./seo-comprehensive-audit.js"
import{PerformanceAuditor as t}from"./performance-comprehensive-audit.js"
import i from"fs"
import r from"path"
class n{constructor(){this.results={performance:{score:0,issues:[],strengths:[]},seo:{score:0,issues:[],strengths:[]},security:{score:0,issues:[],strengths:[]},codeQuality:{score:0,issues:[],strengths:[]},bundleOptimization:{score:0,issues:[],strengths:[]},overallScore:0}}async auditProject(){void 0,await this.auditPerformance(),await this.auditSEO(),await this.auditSecurity(),await this.auditCodeQuality(),await this.auditBundleOptimization(),this.calculateOverallScore(),this.generateReport()}async auditPerformance(){void 0
const s=this.results.performance,e=["client/src/utils/performance.ts","client/src/utils/performanceOptimizer.ts","client/src/hooks/usePerformanceOptimization.ts","client/src/utils/bundleOptimizer.ts"]
let t=0
for(const c of e)i.existsSync(c)&&(t++,s.strengths.push(`✅ Performance optimization: ${r.basename(c)}`))
s.score+=t/e.length*30
const n=["client/src/components/ImageOptimized.tsx","client/src/components/CriticalResourceLoader.tsx","client/src/services/ImageOptimizationService.ts"]
let o=0
for(const c of n)i.existsSync(c)&&(o++,s.strengths.push(`✅ Image optimization: ${r.basename(c)}`))
if(s.score+=o/n.length*25,i.existsSync("client/src/components/DynamicCityRoute.tsx")){const e=i.readFileSync("client/src/components/DynamicCityRoute.tsx","utf-8")
e.includes("lazy(")&&e.includes("import(")&&(s.score+=25,s.strengths.push("✅ Dynamic imports and lazy loading implemented"))}(i.existsSync("public/sw.js")||i.existsSync("dist/public/sw.js"))&&(s.score+=20,s.strengths.push("✅ Service worker implemented"))}async auditSEO(){void 0
const s=this.results.seo,e=["client/src/utils/seo.ts","client/src/utils/seoOptimization.ts","client/src/utils/structuredData.ts","client/src/components/SEOHead.tsx"]
let t=0
for(const l of e)i.existsSync(l)&&(t++,s.strengths.push(`✅ SEO system: ${r.basename(l)}`))
s.score+=t/e.length*25
const n=i.existsSync("dist/public/sitemap.xml")||i.existsSync("public/sitemap.xml"),o=i.existsSync("dist/public/robots.txt")||i.existsSync("public/robots.txt")
n?(s.score+=20,s.strengths.push("✅ Sitemap.xml found")):s.issues.push("❌ Sitemap.xml missing"),o?(s.score+=15,s.strengths.push("✅ Robots.txt found")):s.issues.push("❌ Robots.txt missing"),i.existsSync("client/src/App.tsx")&&i.readFileSync("client/src/App.tsx","utf-8").includes("best-things-to-do-in-")&&(s.score+=20,s.strengths.push("✅ SEO-friendly URL structure"))
const c=this.findHTMLFiles()
let u=0
for(const r of c)i.readFileSync(r,"utf-8").includes("application/ld+json")&&u++
u>0&&(s.score+=20,s.strengths.push(`✅ Structured data found in ${u} pages`))}async auditSecurity(){void 0
const s=this.results.security,e=["client/src/hooks/useAuth.ts","server/routes.ts"]
let t=0
for(const c of e)i.existsSync(c)&&(t++,s.strengths.push(`✅ Authentication: ${r.basename(c)}`))
s.score+=t/e.length*30
const n=JSON.parse(i.readFileSync("package.json","utf-8"));({...n.dependencies,...n.devDependencies}).zod&&(s.score+=25,s.strengths.push("✅ Input validation with Zod")),n.homepage&&n.homepage.startsWith("https://")&&(s.score+=20,s.strengths.push("✅ HTTPS configuration"))
const o=["server/index.ts","server/firebase-server.ts"]
for(const r of o)if(i.existsSync(r)){const e=i.readFileSync(r,"utf-8");(e.includes("helmet")||e.includes("security"))&&(s.score+=15,s.strengths.push("✅ Security headers configured"))}(i.existsSync(".env")||i.existsSync(".env.example"))&&(s.score+=10,s.strengths.push("✅ Environment variables configured"))}async auditCodeQuality(){void 0
const s=this.results.codeQuality
i.existsSync("tsconfig.json")&&(s.score+=25,s.strengths.push("✅ TypeScript configuration")),i.existsSync("shared/schema.ts")&&(s.score+=20,s.strengths.push("✅ Shared schema definitions"))
const e=["client/src/components","client/src/pages","client/src/utils","client/src/hooks"]
let t=0
for(const o of e)i.existsSync(o)&&(t+=5,s.strengths.push(`✅ Organized structure: ${r.basename(o)}`))
s.score+=t
const n=["client/src/pages/not-found.tsx"]
for(const r of n)i.existsSync(r)&&(s.score+=15,s.strengths.push("✅ Error handling implemented"))
i.existsSync("vite.config.ts")&&(s.score+=15,s.strengths.push("✅ Build configuration"))}async auditBundleOptimization(){void 0
const s=this.results.bundleOptimization,e=JSON.parse(i.readFileSync("package.json","utf-8"))
if(e.scripts){const t=["build:optimized","optimize:css","optimize:js","analyze:bundle"]
let i=0
for(const r of t)e.scripts[r]&&(i++,s.strengths.push(`✅ Optimization script: ${r}`))
s.score+=i/t.length*40}const t={...e.dependencies,...e.devDependencies},r=["terser","csso","cssnano","vite-plugin-compression"]
let n=0
for(const i of r)t[i]&&(n++,s.strengths.push(`✅ Optimization tool: ${i}`))
s.score+=n/r.length*30
let o=!0
t["lucide-react"]&&(o=!1,s.issues.push("❌ Lucide-react still in dependencies - bundle bloat")),o&&(s.score+=30,s.strengths.push("✅ Lucide-react removed - bundle optimized"))}findHTMLFiles(){const s=[],e=["dist/public","public"]
for(const t of e)i.existsSync(t)&&i.readdirSync(t).forEach(e=>{e.endsWith(".html")&&s.push(r.join(t,e))})
return s}calculateOverallScore(){const s=[this.results.performance.score,this.results.seo.score,this.results.security.score,this.results.codeQuality.score,this.results.bundleOptimization.score]
this.results.overallScore=s.reduce((s,e)=>s+e,0)/s.length}generateReport(){void 0,this.results.overallScore>=90||this.results.overallScore>=80||this.results.overallScore>=70||this.results.overallScore>=60
const s=[...this.results.performance.strengths,...this.results.seo.strengths,...this.results.security.strengths,...this.results.codeQuality.strengths,...this.results.bundleOptimization.strengths]
s.length>0&&(void 0,s.slice(0,10).forEach(s=>{}))
const e=[...this.results.performance.issues,...this.results.seo.issues,...this.results.security.issues,...this.results.codeQuality.issues,...this.results.bundleOptimization.issues]
e.length>0&&(void 0,e.forEach(s=>{}))}}import.meta.url===`file://${process.argv[1]}`&&async function(){void 0
const i=new s
await i.runAllAudits()
const r=new e
await r.auditSEO()
const o=new t
await o.auditPerformance()
const c=new n
await c.auditProject()
const u=(i.results.overallScore+r.results.overallScore+o.results.overallScore+c.results.overallScore)/4
void 0,u>=85||u>=70}().catch(console.error)
export{n as ProjectAuditor}
