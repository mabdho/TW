import t from"fs"
import s from"path"
import{execSync as i}from"child_process"
class e{constructor(){this.results={cities:[],blogs:[],staticPages:[],summary:{totalChecked:0,synchronized:0,needsSync:0,missing:0,issues:[]}}}extractTSXSEOData(s){try{const i=t.readFileSync(s,"utf8"),e=i.match(/title=\{?[`"']([^`"']+)[`"']\}?/)||i.match(/title:\s*[`"']([^`"']+)[`"']/),n=e?e[1]:"",c=i.match(/description=\{?`([^`]+)`\}?/)||i.match(/description=\{?[`"']([^`"']+)[`"']\}?/)||i.match(/description:\s*[`"']([^`"']+)[`"']/),o=c?c[1]:"",r=i.match(/<h1[^>]*>([^<]+)<\/h1>/)||i.match(/h1:\s*[`"']([^`"']+)[`"']/)||i.match(/headline:\s*[`"']([^`"']+)[`"']/),a=r?r[1]:n,h=i.match(/cityName=\{?[`"']([^`"']+)[`"']\}?/)||i.match(/cityName:\s*[`"']([^`"']+)[`"']/),l=i.match(/country=\{?[`"']([^`"']+)[`"']\}?/)||i.match(/country:\s*[`"']([^`"']+)[`"']/)
return{title:n.trim(),description:o.trim(),h1:a.trim(),cityName:h?h[1].trim():"",country:l?l[1].trim():""}}catch(i){return void 0,null}}extractHTMLSEOData(s){try{const i=t.readFileSync(s,"utf8"),e=i.match(/<title[^>]*>([^<]+)<\/title>/),n=e?e[1].trim():"",c=i.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']+)["\'][^>]*>/),o=c?c[1].trim():"",r=i.match(/<h1[^>]*>([^<]+)<\/h1>/),a=r?r[1].trim():"",h=i.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>(.*?)<\/script>/gs),l=h?h.length:0,m=i.match(/<meta[^>]*property=["\']og:title["\'][^>]*content=["\']([^"']+)["\'][^>]*>/),d=i.match(/<meta[^>]*property=["\']og:description["\'][^>]*content=["\']([^"']+)["\'][^>]*>/),u=i.match(/<a[^>]*href=["\']\/best-things-to-do-in-[^"']+["\'][^>]*>/g),p=u?u.length:0,y=i.includes("🔗 Related Destinations")
return{title:n,description:o,h1:a,structuredData:l,ogTitle:m?m[1].trim():"",ogDescription:d?d[1].trim():"",fileSize:t.statSync(s).size,interlinks:p,hasRelatedSection:y}}catch(i){return void 0,null}}compareSEOData(t,s,i){const e=[]
let n=0,c=0
return c++,t.title&&s.title?t.title===s.title?n++:e.push({type:"title_mismatch",tsx:t.title,html:s.title,severity:"high"}):!t.title&&s.title?e.push({type:"title_missing_tsx",html:s.title,severity:"medium"}):t.title&&!s.title&&e.push({type:"title_missing_html",tsx:t.title,severity:"high"}),c++,t.description&&s.description?t.description===s.description?n++:e.push({type:"description_mismatch",tsx:t.description,html:s.description,severity:"high"}):!t.description&&s.description&&e.push({type:"description_missing_tsx",html:s.description,severity:"medium"}),c++,t.h1&&s.h1?t.h1===s.h1?n++:e.push({type:"h1_mismatch",tsx:t.h1,html:s.h1,severity:"medium"}):!t.h1&&s.h1&&e.push({type:"h1_missing_tsx",html:s.h1,severity:"low"}),c++,s.interlinks&&s.interlinks>=2?n++:e.push({type:"missing_interlinks",html:s.interlinks||0,severity:"high",message:"City pages should have at least 2 interlinks to other cities/content"}),c++,s.hasRelatedSection?n++:e.push({type:"missing_related_section",severity:"high",message:'Missing "🔗 Related Destinations" section'}),{fileName:i,score:n/5*100,totalChecks:5,passedChecks:n,issues:e,isSync:0===e.length}}auditCityComponents(){void 0
const i="client/src/pages/cities"
if(!t.existsSync(i))return void 0,void 0
const e=t.readdirSync(i).filter(t=>t.endsWith(".tsx"))
for(const n of e){const e=n.replace(".tsx",""),c=s.join(i,n)
let o
o="newyork"===e.toLowerCase()?"best-things-to-do-in-new-york":`best-things-to-do-in-${e.toLowerCase()}`
const r=s.join("dist/public",o),a=s.join(r,"index.html")
if(!t.existsSync(a)){void 0,this.results.summary.missing++
continue}const h=this.extractTSXSEOData(c),l=this.extractHTMLSEOData(a)
if(!h||!l){void 0
continue}const m=this.compareSEOData(h,l,e)
this.results.cities.push(m),m.isSync?(void 0,this.results.summary.synchronized++):(void 0,m.issues.forEach(t=>{void 0}),this.results.summary.needsSync++),this.results.summary.totalChecked++}}auditStaticPages(){void 0
const i=[{tsx:"client/src/pages/Home.tsx",html:"dist/public/home-seo.html"},{tsx:"client/src/pages/Destinations.tsx",html:"dist/public/destinations-seo.html"},{tsx:"client/src/pages/Blogs.tsx",html:"dist/public/blogs-seo.html"}]
for(const e of i){const i=s.basename(e.tsx,".tsx")
if(!t.existsSync(e.tsx)||!t.existsSync(e.html)){void 0,this.results.summary.missing++
continue}const n=this.extractTSXSEOData(e.tsx),c=this.extractHTMLSEOData(e.html)
if(!n||!c){void 0
continue}const o=this.compareSEOData(n,c,i)
this.results.staticPages.push(o),o.isSync?(void 0,this.results.summary.synchronized++):(void 0,o.issues.forEach(t=>{void 0}),this.results.summary.needsSync++),this.results.summary.totalChecked++}}generateReport(){void 0
const{totalChecked:s,synchronized:i,needsSync:e,missing:n}=this.results.summary
void 0,void 0,e>0&&[...this.results.cities,...this.results.staticPages].filter(t=>!t.isSync).forEach(t=>{void 0,t.issues.forEach(t=>{t.type})}),void 0,i>0&&[...this.results.cities,...this.results.staticPages].filter(t=>t.isSync).forEach(t=>{void 0}),void 0
const c=`tsx-html-sync-audit-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`
t.writeFileSync(c,JSON.stringify(this.results,null,2))}async runCompleteAudit(){void 0,this.auditCityComponents(),this.auditStaticPages(),this.generateReport()}}(async function(){const t=new e
await t.runCompleteAudit()})().catch(console.error)
