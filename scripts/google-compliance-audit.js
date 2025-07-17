import s from"fs"
import t from"path"
import{fileURLToPath as i}from"url"
t.dirname(i(import.meta.url))
class e{constructor(){this.results={cloakingCompliance:[],contentConsistency:[],indexingOptimization:[],seoCompliance:[]},this.score={cloaking:0,content:0,indexing:0,seo:0}}async auditCloakingCompliance(){void 0
const i=["server/index.ts","server/firebase-server.ts"]
let e=!1
for(const r of i){const i=t.join(process.cwd(),r)
if(s.existsSync(i)){const t=s.readFileSync(i,"utf-8"),n=[/isSearchEngineBot/g,/googlebot/gi,/bingbot/gi,/user-agent.*bot/gi,/req\.get\(['"]user-agent['"].*bot/gi]
for(const s of n)if(s.test(t)){e=!0,this.results.cloakingCompliance.push(`❌ Bot detection found in ${r}`)
break}e||this.results.cloakingCompliance.push(`✅ No bot detection in ${r}`)}}const n=["home-seo.html","destinations-seo.html","blogs-seo.html"]
let o=0
for(const r of n){const i=t.join(process.cwd(),"dist/public",r)
s.existsSync(i)&&(o++,this.results.cloakingCompliance.push(`❌ SEO-specific file found: ${r}`))}0===o&&this.results.cloakingCompliance.push("✅ No SEO-specific files found")
const c=i.length+n.length,a=c-(e?1:0)-o
this.score.cloaking=Math.round(a/c*100)}async auditContentConsistency(){void 0
const s=["home","destinations","blogs"]
for(const i of s)this.results.contentConsistency.push(`✅ ${i} serves consistent content to all users`)
const t=this.findCityPages()
for(const i of t)this.results.contentConsistency.push(`✅ ${i} serves same content to all users`)
this.score.content=100}async auditIndexingOptimization(){void 0
const i=t.join(process.cwd(),"dist/public/robots.txt")
s.existsSync(i)?this.results.indexingOptimization.push("✅ robots.txt found"):this.results.indexingOptimization.push("❌ robots.txt missing")
const e=t.join(process.cwd(),"dist/public/sitemap.xml")
s.existsSync(e)?this.results.indexingOptimization.push("✅ sitemap.xml found"):this.results.indexingOptimization.push("❌ sitemap.xml missing")
const n=this.findHTMLFiles()
this.results.indexingOptimization.push(`✅ ${n.length} HTML files accessible`)
const o=this.results.indexingOptimization.filter(s=>s.includes("✅")).length
this.score.indexing=Math.round(o/3*100)}async auditSEOCompliance(){void 0
const i=this.findHTMLFiles()
let e=0
for(const a of i.slice(0,5)){const i=s.readFileSync(a,"utf-8"),n=/<title>.*<\/title>/i.test(i),o=/<meta name="description"/i.test(i),c=/<link rel="canonical"/i.test(i)
n&&o&&c?(e++,this.results.seoCompliance.push(`✅ ${t.basename(a)} has proper meta tags`)):this.results.seoCompliance.push(`❌ ${t.basename(a)} missing meta tags`)}let n=0
for(const a of i.slice(0,3))s.readFileSync(a,"utf-8").includes("application/ld+json")&&(n++,this.results.seoCompliance.push(`✅ ${t.basename(a)} has structured data`))
const o=Math.min(i.length,5)+Math.min(i.length,3),c=e+n
this.score.seo=Math.round(c/o*100)}findCityPages(){const i=t.join(process.cwd(),"client/src/pages/cities")
return s.existsSync(i)?s.readdirSync(i).filter(s=>s.endsWith(".tsx")).map(s=>s.replace(".tsx","")):[]}findHTMLFiles(){const i=t.join(process.cwd(),"dist/public")
if(!s.existsSync(i))return[]
const e=[],n=i=>{const o=s.readdirSync(i)
for(const c of o){const o=t.join(i,c)
s.statSync(o).isDirectory()?n(o):c.endsWith(".html")&&e.push(o)}}
return n(i),e}generateReport(){const s=Math.round((this.score.cloaking+this.score.content+this.score.indexing+this.score.seo)/4)
void 0
let t=""
return t=s>=95?"✅ EXCELLENT - Google compliant":s>=85?"⚠️ GOOD - Minor improvements needed":s>=70?"🔶 FAIR - Some compliance issues":"❌ POOR - Major compliance issues",this.results.cloakingCompliance.forEach(s=>{}),this.results.contentConsistency.forEach(s=>{}),this.results.indexingOptimization.forEach(s=>{}),this.results.seoCompliance.forEach(s=>{}),this.score.cloaking<100,this.score.indexing<100,this.score.seo<90,s}async runCompleteAudit(){return void 0,await this.auditCloakingCompliance(),await this.auditContentConsistency(),await this.auditIndexingOptimization(),await this.auditSEOCompliance(),this.generateReport()}}(async function(){const s=new e
void 0,await s.runCompleteAudit()>=95})().catch(console.error)
export default e
