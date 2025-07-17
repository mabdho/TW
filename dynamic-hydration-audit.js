#!/usr/bin/env node
import t from"fs"
import e from"path"
import{JSDOM as s}from"jsdom"
class i{constructor(){this.results={passed:[],failed:[],warnings:[],totalChecks:0,passedChecks:0}}extractSEODataFromHTML(e){if(!t.existsSync(e))return null
const i=t.readFileSync(e,"utf8"),a=new s(i).window.document
return{title:a.querySelector("title")?.textContent?.trim()||"",metaDescription:a.querySelector('meta[name="description"]')?.getAttribute("content")?.trim()||"",h1:a.querySelector("h1")?.textContent?.trim()||"",canonicalUrl:a.querySelector('link[rel="canonical"]')?.getAttribute("href")||"",ogTitle:a.querySelector('meta[property="og:title"]')?.getAttribute("content")||"",ogDescription:a.querySelector('meta[property="og:description"]')?.getAttribute("content")||"",twitterTitle:a.querySelector('meta[name="twitter:title"]')?.getAttribute("content")||"",twitterDescription:a.querySelector('meta[name="twitter:description"]')?.getAttribute("content")||""}}async getExpectedReactSEOData(t,e,s){try{if("static"===t)return{title:s.title,metaDescription:s.metaDescription,h1:s.h1}
if("city"===t){const t=this.extractCityInfoFromHTML(s,e)
return this.generateExpectedCitySEOData(t)}if("blog"===t){const t=this.extractBlogInfoFromHTML(s,e)
return this.generateExpectedBlogSEOData(t)}return s}catch(i){return void 0,s}}extractCityInfoFromHTML(t,e){let s="",i=""
if(t.title.includes("Best Things to Do in")){const e=t.title.match(/Best Things to Do in ([^,]+),\s*([^(]+)/)
e&&(s=e[1].trim(),i=e[2].trim())}if(!s&&e.includes("best-things-to-do-in-")){const t=e.match(/best-things-to-do-in-(.+)/)
t&&(s=t[1].replace(/-/g," ").replace(/\.html$/,""),s=s.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "))}return{cityName:s,country:i}}generateExpectedCitySEOData(t){const{cityName:e,country:s}=t,i=`Best Things to Do in ${e}, ${s} (2025 Guide)`,a=`Best Things to Do in ${e}, ${s} (2025 Guide)`
let o=`Discover the best things to do in ${e} — top attractions, hidden gems, and food spots. Complete ${e} travel guide.`
return o.length>160&&(o=`Discover amazing experiences in ${e}, ${s}. Complete travel guide with insider tips and must-visit attractions.`),o.length>160&&(o=o.substring(0,157)+"..."),{title:i,metaDescription:o,h1:a}}extractBlogInfoFromHTML(t,e){return{title:t.h1||t.title.replace(" - TravelWanders","")}}generateExpectedBlogSEOData(t){const{title:e}=t
return{title:`${e} - TravelWanders`,metaDescription:t.description||`Read about ${e.toLowerCase()} on TravelWanders. Discover travel tips, insights, and inspiration for your next adventure.`,h1:e}}compareValues(t,e,s,i){this.results.totalChecks++
const a=e===s
return a&&this.results.passedChecks++,{field:t,expected:e,actual:s,matches:a,page:i}}async auditPageDynamic(t,e,s="static"){void 0
const i=this.extractSEODataFromHTML(e)
if(!i)return void 0,null
void 0
const a=await this.getExpectedReactSEOData(s,t,i)
void 0
const o={page:t,htmlPath:e,pageType:s,checks:[],passed:0,failed:0},r=this.compareValues("Title",a.title,i.title,t),n=this.compareValues("Meta Description",a.metaDescription,i.metaDescription,t),c=this.compareValues("H1",a.h1,i.h1,t)
return o.checks.push(r,n,c),r.matches,n.matches,c.matches,i.ogTitle,i.title,i.ogDescription,i.metaDescription,i.twitterTitle,i.title,i.twitterDescription,i.metaDescription,void 0,o.passed=o.checks.filter(t=>t.matches).length,o.failed=o.checks.length-o.passed,o.checks.length>0&&(o.passed/o.checks.length*100).toFixed(1),void 0,0===o.failed?this.results.passed.push(o):this.results.failed.push(o),o}discoverAllPages(){const s=[],i=e.join(process.cwd(),"dist/public")
if(!t.existsSync(i))return void 0,s
const a=[{name:"Home Page",file:"home-seo.html",type:"static"},{name:"Blogs Page",file:"blogs-seo.html",type:"static"},{name:"Destinations Page",file:"destinations-seo.html",type:"static"},{name:"Cookie Policy",file:"cookie-policy.html",type:"static"},{name:"Privacy Policy",file:"privacy-policy.html",type:"static"},{name:"Terms of Service",file:"terms-of-service.html",type:"static"}]
for(const c of a){const a=e.join(i,c.file)
t.existsSync(a)&&s.push({name:c.name,path:a,type:c.type})}const o=t.readdirSync(i).filter(s=>{const a=e.join(i,s)
return t.statSync(a).isDirectory()&&s.startsWith("best-things-to-do-in-")})
for(const c of o){const a=e.join(i,c,"index.html")
if(t.existsSync(a)){const t=c.replace("best-things-to-do-in-","").replace(/-/g," ").split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")
s.push({name:`${t} City Page`,path:a,type:"city"})}}const r=t.readdirSync(i).filter(t=>t.startsWith("best-things-to-do-in-")&&t.endsWith(".html"))
for(const t of r){const a=e.join(i,t),o=t.replace("best-things-to-do-in-","").replace(".html","").replace(/-/g," ").split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")
s.push({name:`${o} City Page`,path:a,type:"city"})}const n=e.join(i,"blog")
if(t.existsSync(n)){const i=t.readdirSync(n).filter(t=>t.endsWith(".html"))
for(const t of i){const i=e.join(n,t),a=t.replace(".html","").replace(/-/g," ").split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")
s.push({name:`${a} Blog Post`,path:i,type:"blog"})}}return s}async runDynamicAudit(){void 0
const t=this.discoverAllPages()
if(0===t.length)return void 0,void 0
void 0,t.forEach((t,e)=>{void 0})
for(const e of t)await this.auditPageDynamic(e.name,e.path,e.type)
this.generateDynamicReport()}generateDynamicReport(){void 0
const e=this.results.passed.length+this.results.failed.length,s=e>0?(this.results.passed.length/e*100).toFixed(1):0,i=this.results.totalChecks>0?(this.results.passedChecks/this.results.totalChecks*100).toFixed(1):0
void 0,this.results.failed.length>0&&(void 0,this.results.failed.forEach(t=>{void 0,t.checks.forEach(t=>{t.matches})})),this.results.passed.length>0&&(void 0,this.results.passed.forEach(t=>{void 0})),0===this.results.failed.length
const a=`dynamic-hydration-audit-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`
try{t.writeFileSync(a,JSON.stringify({timestamp:(new Date).toISOString(),summary:{totalPages:e,passedPages:this.results.passed.length,failedPages:this.results.failed.length,passRate:parseFloat(s),totalChecks:this.results.totalChecks,passedChecks:this.results.passedChecks,checkPassRate:parseFloat(i)},passed:this.results.passed,failed:this.results.failed,warnings:this.results.warnings},null,2))}catch(o){void 0}}}export{i as DynamicHydrationAuditor}
import.meta.url===`file://${process.argv[1]}`&&async function(){const t=new i
await t.runDynamicAudit()}().catch(console.error)
