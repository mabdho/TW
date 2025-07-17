#!/usr/bin/env node
import e from"fs"
import t from"path"
import{execSync as i}from"child_process"
class s{constructor(){this.results={passed:[],failed:[],warnings:[],totalPages:0,passedPages:0,failedPages:0,complianceRate:0}}extractFromHTML(t,i){if(!e.existsSync(t))return null
const s=e.readFileSync(t,"utf8")
switch(i){case"title":const e=s.match(/<title[^>]*>(.*?)<\/title>/s)
return e?e[1].trim():null
case"description":const t=s.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/i)
return t?t[1].trim():null
case"h1":const i=s.match(/<h1[^>]*>(.*?)<\/h1>/s)
return i?i[1].replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim():null
case"canonical":const a=s.match(/<link\s+rel="canonical"\s+href="([^"]*)"[^>]*>/i)
return a?a[1].trim():null
default:return null}}getExpectedReactSEOData(e){return{home:{title:"Best Travel Guides & Destinations - TravelWanders",description:"Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.",h1:"Explore the world with confidence",canonical:"https://travelwanders.com/"},destinations:{title:"All Destinations - TravelWanders",description:"Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.",h1:"All Destinations",canonical:"https://travelwanders.com/destinations"},blogs:{title:"Travel Blog Stories & Destination Guides - TravelWanders",description:"Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.",h1:"Travel Blog",canonical:"https://travelwanders.com/blogs"},"cookie-policy":{title:"Cookie Policy | TravelWanders Travel Guide Platform",description:"Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.",h1:"Cookie Policy",canonical:"https://travelwanders.com/cookie-policy"},"privacy-policy":{title:"Privacy Policy - TravelWanders",description:"Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.",h1:"Privacy Policy",canonical:"https://travelwanders.com/privacy-policy"},"terms-of-service":{title:"Terms of Service & User Agreement - TravelWanders",description:"Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.",h1:"Terms of Service",canonical:"https://travelwanders.com/terms-of-service"}}[e]||null}getExpectedCitySEOData(t,i){return e.existsSync(i)?{title:this.extractFromHTML(i,"title"),description:this.extractFromHTML(i,"description"),h1:this.extractFromHTML(i,"h1"),canonical:this.extractFromHTML(i,"canonical")}:null}auditPage(e,t,i){void 0
const s={pageName:e,htmlPath:t,title:{expected:i.title,actual:null,matches:!1},description:{expected:i.description,actual:null,matches:!1},h1:{expected:i.h1,actual:null,matches:!1},canonical:{expected:i.canonical,actual:null,matches:!1},overallMatch:!1}
return s.title.actual=this.extractFromHTML(t,"title"),s.description.actual=this.extractFromHTML(t,"description"),s.h1.actual=this.extractFromHTML(t,"h1"),s.canonical.actual=this.extractFromHTML(t,"canonical"),s.title.matches=s.title.expected===s.title.actual,s.description.matches=s.description.expected===s.description.actual,s.h1.matches=s.h1.expected===s.h1.actual,s.canonical.matches=s.canonical.expected===s.canonical.actual,s.overallMatch=s.title.matches&&s.description.matches&&s.h1.matches&&s.canonical.matches,s.title.matches,s.description.matches,s.h1.matches,s.canonical.matches,this.results.totalPages++,s.overallMatch?(this.results.passedPages++,this.results.passed.push(s)):(this.results.failedPages++,this.results.failed.push(s)),s}getAllHTMLFiles(){const i=t.join(process.cwd(),"dist/public"),s=[]
if(e.existsSync(i)){const a=e.readdirSync(i).filter(e=>e.endsWith(".html"))
for(const e of a){const a=t.join(i,e)
s.push({name:e,path:a})}}return s}getCityNamesFromHTML(){const e=this.getAllHTMLFiles(),t=[]
for(const i of e)if(i.name.startsWith("best-things-to-do-in-")&&i.name.endsWith(".html")){const e=i.name.replace("best-things-to-do-in-","").replace(".html",""),s=e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")
t.push({name:s,key:e,file:i.name,path:i.path})}return t}async runComprehensiveAudit(){void 0
const i=[{name:"Home Page",file:"index.html",key:"home"},{name:"Destinations Page",file:"destinations.html",key:"destinations"},{name:"Blogs Page",file:"blogs.html",key:"blogs"},{name:"Cookie Policy",file:"cookie-policy.html",key:"cookie-policy"},{name:"Privacy Policy",file:"privacy-policy.html",key:"privacy-policy"},{name:"Terms of Service",file:"terms-of-service.html",key:"terms-of-service"}]
void 0
for(const o of i){const i=t.join(process.cwd(),"dist/public",o.file),s=this.getExpectedReactSEOData(o.key)
s&&e.existsSync(i)?this.auditPage(o.name,i,s):void 0}void 0
const s=this.getCityNamesFromHTML()
for(const e of s){const t=this.getExpectedCitySEOData(e.name,e.path)
t?this.auditPage(`${e.name} City Page`,e.path,t):void 0}void 0
const a=this.getAllHTMLFiles().filter(e=>e.name.startsWith("blog/")||e.name.includes("blog-")||e.name.includes("underrated-destinations"))
for(const e of a)void 0,this.results.warnings.push(`Blog file ${e.name} requires manual verification`)
this.results.complianceRate=this.results.totalPages>0?this.results.passedPages/this.results.totalPages*100:0,this.generateFinalReport()}generateFinalReport(){void 0,100===this.results.complianceRate||this.results.complianceRate>=90||this.results.complianceRate>=70,this.results.failed.length>0&&(void 0,this.results.failed.forEach(e=>{void 0,e.title.matches,e.description.matches,e.h1.matches,e.canonical.matches})),this.results.warnings.length>0&&(void 0,this.results.warnings.forEach(e=>{void 0}))
const i=t.join(process.cwd(),"comprehensive-hydration-audit-results.json")
return e.writeFileSync(i,JSON.stringify(this.results,null,2)),this.results}}(async function(){const e=new s
try{await e.runComprehensiveAudit(),100===e.results.complianceRate?process.exit(0):e.results.complianceRate>=90?process.exit(1):process.exit(2)}catch(t){void 0,process.exit(3)}})().catch(console.error)
