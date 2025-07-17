#!/usr/bin/env node
import e from"fs"
import s from"path"
import{fileURLToPath as t}from"url"
import{JSDOM as i}from"jsdom"
const a=t(import.meta.url),l=s.dirname(a)
class n{constructor(){this.results={totalPages:0,compliantPages:0,issues:[],compliance:{title:{passed:0,failed:0,details:[]},metaDescription:{passed:0,failed:0,details:[]},headings:{passed:0,failed:0,details:[]},images:{passed:0,failed:0,details:[]},internalLinks:{passed:0,failed:0,details:[]},structuredData:{passed:0,failed:0,details:[]},openGraph:{passed:0,failed:0,details:[]},twitter:{passed:0,failed:0,details:[]},canonical:{passed:0,failed:0,details:[]},mobile:{passed:0,failed:0,details:[]},performance:{passed:0,failed:0,details:[]},accessibility:{passed:0,failed:0,details:[]}}}}async auditAllHTMLPages(){void 0
const e=await this.findAllHTMLFiles()
this.results.totalPages=e.length
for(const s of e)await this.auditHTMLFile(s)
this.generateComprehensiveReport()}async findAllHTMLFiles(){const t=[],i=s.join(l,"dist","public")
if(e.existsSync(i)){const a=e.readdirSync(i)
for(const l of a){const a=s.join(i,l),n=e.statSync(a)
if(n.isFile()&&l.endsWith(".html"))t.push(a)
else if(n.isDirectory()){const i=s.join(a,"index.html")
e.existsSync(i)&&t.push(i)}}}return t}async auditHTMLFile(t){const a=s.relative(l,t)
void 0
try{const s=e.readFileSync(t,"utf-8"),l=new i(s).window.document,n={file:a,issues:[],passed:[],score:0}
this.auditTitleTag(l,n),this.auditMetaDescription(l,n),this.auditHeadingStructure(l,n),this.auditImageSEO(l,n),this.auditInternalLinks(l,n),this.auditStructuredData(l,n),this.auditOpenGraph(l,n),this.auditTwitterCards(l,n),this.auditCanonicalURL(l,n),this.auditMobileFriendly(l,n),this.auditPerformanceSEO(l,n),this.auditAccessibilitySEO(l,n)
const r=n.passed.length+n.issues.length
n.score=r>0?Math.round(n.passed.length/r*100):0,n.score>=90&&this.results.compliantPages++,n.issues.length>0&&(void 0,n.issues.forEach(e=>{}))}catch(n){void 0}}auditTitleTag(e,s){const t=e.querySelector("title")
if(t&&t.textContent.trim()){const e=t.textContent.trim()
e.length<30||e.length>60?(s.issues.push(`Title length not optimal: ${e.length} chars (30-60 recommended)`),this.results.compliance.title.failed++):(s.passed.push("Title tag optimal length"),this.results.compliance.title.passed++)}else s.issues.push("Missing or empty title tag"),this.results.compliance.title.failed++}auditMetaDescription(e,s){const t=e.querySelector('meta[name="description"]')
if(t&&t.getAttribute("content")){const e=t.getAttribute("content").trim()
e.length<120||e.length>160?(s.issues.push(`Meta description length not optimal: ${e.length} chars (120-160 recommended)`),this.results.compliance.metaDescription.failed++):(s.passed.push("Meta description optimal length"),this.results.compliance.metaDescription.passed++)}else s.issues.push("Missing meta description"),this.results.compliance.metaDescription.failed++}auditHeadingStructure(e,s){const t=e.querySelectorAll("h1")
0===t.length?(s.issues.push("Missing H1 tag"),this.results.compliance.headings.failed++):t.length>1?(s.issues.push(`Multiple H1 tags found: ${t.length} (should be 1)`),this.results.compliance.headings.failed++):(s.passed.push("Proper H1 structure"),this.results.compliance.headings.passed++),0===e.querySelectorAll("h2, h3, h4, h5, h6").length?(s.issues.push("No subheadings (H2-H6) found"),this.results.compliance.headings.failed++):(s.passed.push("Subheadings present"),this.results.compliance.headings.passed++)}auditImageSEO(e,s){const t=e.querySelectorAll("img")
let i=0,a=0
t.forEach(e=>{e.getAttribute("alt")||i++,e.getAttribute("width")&&e.getAttribute("height")||a++}),i>0?(s.issues.push(`${i} images missing alt text`),this.results.compliance.images.failed++):t.length>0&&(s.passed.push("All images have alt text"),this.results.compliance.images.passed++),a>0?(s.issues.push(`${a} images missing width/height attributes`),this.results.compliance.images.failed++):t.length>0&&(s.passed.push("All images have dimensions"),this.results.compliance.images.passed++)}auditInternalLinks(e,s){const t=e.querySelectorAll('a[href^="/"], a[href^="#"], a[href*="travelwanders.com"]')
t.length<3?(s.issues.push("Insufficient internal links for SEO"),this.results.compliance.internalLinks.failed++):(s.passed.push(`Good internal linking: ${t.length} links`),this.results.compliance.internalLinks.passed++)}auditStructuredData(e,s){const t=e.querySelectorAll('script[type="application/ld+json"]')
0===t.length?(s.issues.push("Missing structured data (JSON-LD)"),this.results.compliance.structuredData.failed++):(s.passed.push(`Structured data present: ${t.length} schemas`),this.results.compliance.structuredData.passed++)}auditOpenGraph(e,s){let t=0
e.querySelector('meta[property="og:title"]')||t++,e.querySelector('meta[property="og:description"]')||t++,e.querySelector('meta[property="og:image"]')||t++,t>0?(s.issues.push(`Missing Open Graph tags: ${t}/3`),this.results.compliance.openGraph.failed++):(s.passed.push("Complete Open Graph implementation"),this.results.compliance.openGraph.passed++)}auditTwitterCards(e,s){const t=e.querySelector('meta[name="twitter:card"]'),i=e.querySelector('meta[name="twitter:title"]')
t&&i?(s.passed.push("Twitter Cards implemented"),this.results.compliance.twitter.passed++):(s.issues.push("Incomplete Twitter Cards implementation"),this.results.compliance.twitter.failed++)}auditCanonicalURL(e,s){e.querySelector('link[rel="canonical"]')?(s.passed.push("Canonical URL present"),this.results.compliance.canonical.passed++):(s.issues.push("Missing canonical URL"),this.results.compliance.canonical.failed++)}auditMobileFriendly(e,s){e.querySelector('meta[name="viewport"]')?(s.passed.push("Mobile viewport configured"),this.results.compliance.mobile.passed++):(s.issues.push("Missing viewport meta tag"),this.results.compliance.mobile.failed++)}auditPerformanceSEO(e,s){const t=e.querySelectorAll('link[rel="preload"]'),i=e.querySelectorAll('link[rel="dns-prefetch"], link[rel="preconnect"]')
0===t.length&&0===i.length?(s.issues.push("No performance optimization tags (preload/prefetch)"),this.results.compliance.performance.failed++):(s.passed.push("Performance optimization implemented"),this.results.compliance.performance.passed++)}auditAccessibilitySEO(e,s){e.documentElement.getAttribute("lang")?(s.passed.push("Language attribute present"),this.results.compliance.accessibility.passed++):(s.issues.push("Missing lang attribute on html element"),this.results.compliance.accessibility.failed++)}generateComprehensiveReport(){void 0
const e=Math.round(this.results.compliantPages/this.results.totalPages*100)
void 0,Object.entries(this.results.compliance).forEach(([e,s])=>{const t=s.passed+s.failed
t>0&&Math.round(s.passed/t*100)}),e>=95||e>=85}getCompliancePercentage(e){let s=0,t=0
return e.forEach(e=>{const i=this.results.compliance[e]
s+=i.passed,t+=i.passed+i.failed}),t>0?Math.round(s/t*100):0}}!async function(){try{const e=new n
await e.auditAllHTMLPages()}catch(e){void 0,process.exit(1)}}()
