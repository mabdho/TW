#!/usr/bin/env node
import t from"fs"
import e from"path"
import{execSync as s}from"child_process"
class i{constructor(){this.results={passed:[],failed:[],warnings:[]}}extractH1FromHTML(e){if(!t.existsSync(e))return null
const s=t.readFileSync(e,"utf8").match(/<h1[^>]*>(.*?)<\/h1>/s)
return s?s[1].replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim():null}extractTitleFromHTML(e){if(!t.existsSync(e))return null
const s=t.readFileSync(e,"utf8").match(/<title[^>]*>(.*?)<\/title>/s)
return s?s[1].trim():null}extractMetaDescriptionFromHTML(e){if(!t.existsSync(e))return null
const s=t.readFileSync(e,"utf8").match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/i)
return s?s[1].trim():null}auditPage(t,e,s,i,r){void 0
const o=this.extractH1FromHTML(e),a=this.extractTitleFromHTML(e),c=this.extractMetaDescriptionFromHTML(e),n={page:t,htmlPath:e,h1:{expected:s,actual:o,matches:o===s},title:{expected:i,actual:a,matches:a===i},description:{expected:r,actual:c,matches:c===r}}
return void 0,n.h1.matches&&n.title.matches&&n.description.matches?this.results.passed.push(n):this.results.failed.push(n),n}getExpectedValuesFromHTML(t){return{h1:this.extractH1FromHTML(t),title:this.extractTitleFromHTML(t),description:this.extractMetaDescriptionFromHTML(t)}}async runComprehensiveAudit(){void 0
const s=[{name:"Home Page",path:"dist/public/home-seo.html"},{name:"Blogs Page",path:"dist/public/blogs-seo.html"},{name:"Destinations Page",path:"dist/public/destinations-seo.html"},{name:"Cookie Policy",path:"dist/public/cookie-policy.html"},{name:"Privacy Policy",path:"dist/public/privacy-policy.html"},{name:"Terms of Service",path:"dist/public/terms-of-service.html"}],i="dist/public"
if(t.existsSync(i)){const r=t.readdirSync(i).filter(s=>{const r=e.join(i,s)
return t.statSync(r).isDirectory()&&s.startsWith("best-things-to-do-in-")})
for(const c of r){const r=e.join(i,c,"index.html")
if(t.existsSync(r)){const t=c.replace("best-things-to-do-in-","").replace(/-/g," ").split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")
s.push({name:`${t} City Page`,path:r})}}const o=t.readdirSync(i).filter(t=>t.startsWith("best-things-to-do-in-")&&t.endsWith(".html"))
for(const t of o){const r=e.join(i,t),o=t.replace("best-things-to-do-in-","").replace(".html","").replace(/-/g," ").split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")
s.push({name:`${o} City Page`,path:r})}const a=e.join(i,"blog")
if(t.existsSync(a)){const i=t.readdirSync(a).filter(t=>t.endsWith(".html"))
for(const t of i){const i=e.join(a,t),r=t.replace(".html","").replace(/-/g," ").split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")
s.push({name:`${r} Blog Post`,path:i})}}}void 0
for(const e of s){if(!t.existsSync(e.path)){void 0
continue}const s=this.getExpectedValuesFromHTML(e.path)
this.auditPage(e.name,e.path,s.h1,s.title,s.description)}this.generateSummaryReport()}generateSummaryReport(){void 0
const t=this.results.passed.length+this.results.failed.length;(this.results.passed.length/t*100).toFixed(1),void 0,this.results.failed.length>0&&(void 0,this.results.failed.forEach(t=>{void 0,t.h1.matches,t.title.matches,t.description.matches})),this.results.passed.length>0&&(void 0,this.results.passed.forEach(t=>{void 0})),this.results.failed.length}}(async function(){const t=new i
await t.runComprehensiveAudit()})().catch(console.error)
export{i as HydrationAuditor}
