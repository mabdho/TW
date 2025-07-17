import e from"fs"
import s from"path"
import{JSDOM as t}from"jsdom"
class i{constructor(){this.results={technicalSEO:{score:0,issues:[],strengths:[]},onPageSEO:{score:0,issues:[],strengths:[]},structuredData:{score:0,issues:[],strengths:[]},performanceSEO:{score:0,issues:[],strengths:[]},mobileSEO:{score:0,issues:[],strengths:[]},overallScore:0}}async auditSEO(){void 0,await this.auditTechnicalSEO(),await this.auditOnPageSEO(),await this.auditStructuredData(),await this.auditPerformanceSEO(),await this.auditMobileSEO(),this.calculateOverallScore(),this.generateSEOReport()}async auditTechnicalSEO(){void 0
const s=this.results.technicalSEO
if(e.existsSync("dist/public/robots.txt")||e.existsSync("public/robots.txt")){s.score+=15,s.strengths.push("✅ Robots.txt found")
const t=e.existsSync("dist/public/robots.txt")?"dist/public/robots.txt":"public/robots.txt"
e.readFileSync(t,"utf-8").includes("Sitemap:")&&(s.score+=5,s.strengths.push("✅ Sitemap reference in robots.txt"))}else s.issues.push("❌ Robots.txt missing - critical for search engine crawling")
if(e.existsSync("dist/public/sitemap.xml")||e.existsSync("public/sitemap.xml")){s.score+=15,s.strengths.push("✅ Sitemap.xml found")
const t=e.existsSync("dist/public/sitemap.xml")?"dist/public/sitemap.xml":"public/sitemap.xml"
e.readFileSync(t,"utf-8").includes("<urlset")&&(s.score+=5,s.strengths.push("✅ Valid XML sitemap structure"))}else s.issues.push("❌ Sitemap.xml missing - critical for search engine indexing")
const t="client/src/utils/seo.ts"
e.existsSync(t)&&e.readFileSync(t,"utf-8").includes("canonical")&&(s.score+=10,s.strengths.push("✅ Canonical URL implementation found")),e.existsSync("client/src/pages/not-found.tsx")&&(s.score+=10,s.strengths.push("✅ 404 error handling implemented"))
const i="client/src/App.tsx"
e.existsSync(i)&&e.readFileSync(i,"utf-8").includes("best-things-to-do-in-")&&(s.score+=15,s.strengths.push("✅ SEO-friendly URL structure"))
const n=JSON.parse(e.readFileSync("package.json","utf-8"))
n.homepage&&n.homepage.startsWith("https://")&&(s.score+=10,s.strengths.push("✅ HTTPS configuration detected")),(e.existsSync("public/sw.js")||e.existsSync("dist/public/sw.js"))&&(s.score+=10,s.strengths.push("✅ Service worker implemented"))}async auditOnPageSEO(){void 0
const i=this.results.onPageSEO,n=this.findHTMLFiles()
let r=0,c=0
for(const o of n){r++
const n=e.readFileSync(o,"utf-8"),l=new t(n).window.document
let u=0
const a=s.basename(o),h=l.querySelector("title")
h&&h.textContent.trim().length>0&&(u+=20,h.textContent.length<=60&&(u+=10))
const d=l.querySelector('meta[name="description"]')
if(d&&d.getAttribute("content")){u+=20
const e=d.getAttribute("content").length
e>=120&&e<=160&&(u+=10)}const p=l.querySelectorAll("h1")
1===p.length?u+=15:p.length>1&&(u+=5),l.querySelectorAll("h1, h2, h3, h4, h5, h6").length>3&&(u+=10)
const m=l.querySelectorAll("img")
let S=0
m.forEach(e=>{e.getAttribute("alt")&&S++}),m.length>0&&(u+=S/m.length*15),u>=70?(c++,i.strengths.push(`✅ ${a} - Good on-page SEO`)):i.issues.push(`❌ ${a} - Poor on-page SEO (${u}/100)`)}i.score=r>0?c/r*100:0}async auditStructuredData(){void 0
const t=this.results.structuredData,i=this.findHTMLFiles()
let n=0,r=0
for(const c of i){n++
const i=e.readFileSync(c,"utf-8")
let o=!1
i.includes("application/ld+json")&&(o=!0,t.strengths.push(`✅ ${s.basename(c)} - JSON-LD structured data found`)),i.includes("og:title")&&i.includes("og:description")&&(o=!0,t.strengths.push(`✅ ${s.basename(c)} - OpenGraph tags found`)),i.includes("twitter:card")&&(o=!0,t.strengths.push(`✅ ${s.basename(c)} - Twitter Cards found`)),o?r++:t.issues.push(`❌ ${s.basename(c)} - No structured data found`)}t.score=n>0?r/n*100:0}async auditPerformanceSEO(){void 0
const s=this.results.performanceSEO,t=this.findIndexHtml()
if(t){const i=e.readFileSync(t,"utf-8")
i.includes('rel="preload"')&&(s.score+=20,s.strengths.push("✅ Resource preloading implemented")),i.includes('rel="prefetch"')&&(s.score+=10,s.strengths.push("✅ Resource prefetching implemented")),i.includes('rel="preconnect"')&&(s.score+=15,s.strengths.push("✅ DNS preconnect implemented")),(i.includes("font-display:swap")||i.includes("&display=swap"))&&(s.score+=15,s.strengths.push("✅ Font optimization implemented")),i.includes('loading="lazy"')&&(s.score+=20,s.strengths.push("✅ Image lazy loading implemented")),i.includes("<script")&&!i.includes("  ")&&i.length>1e3&&(s.score+=20,s.strengths.push("✅ HTML minification detected"))}void 0}async auditMobileSEO(){void 0
const s=this.results.mobileSEO,t=this.findIndexHtml()
if(t){const i=e.readFileSync(t,"utf-8")
if(i.includes('name="viewport"')){s.score+=30,s.strengths.push("✅ Viewport meta tag found")
const e=i.match(/name="viewport"\s+content="([^"]+)"/)
e&&e[1].includes("width=device-width")&&(s.score+=20,s.strengths.push("✅ Proper viewport configuration"))}else s.issues.push("❌ Viewport meta tag missing");(i.includes("responsive")||i.includes("mobile-first"))&&(s.score+=15,s.strengths.push("✅ Responsive design detected")),i.includes("tailwind")&&(s.score+=20,s.strengths.push("✅ Responsive CSS framework detected")),(i.includes("touch")||i.includes("mobile"))&&(s.score+=15,s.strengths.push("✅ Touch-friendly elements detected"))}void 0}findHTMLFiles(){const t=[]
return e.existsSync("dist/public")&&e.readdirSync("dist/public").forEach(e=>{e.endsWith(".html")&&t.push(s.join("dist/public",e))}),e.existsSync("public")&&e.readdirSync("public").forEach(e=>{e.endsWith(".html")&&t.push(s.join("public",e))}),t}findIndexHtml(){const s=["client/index.html","index.html","public/index.html","dist/index.html"]
for(const t of s)if(e.existsSync(t))return t
return null}calculateOverallScore(){const e=[this.results.technicalSEO.score,this.results.onPageSEO.score,this.results.structuredData.score,this.results.performanceSEO.score,this.results.mobileSEO.score]
this.results.overallScore=e.reduce((e,s)=>e+s,0)/e.length}generateSEOReport(){void 0
let e="F"
this.results.overallScore>=90?e="A+":this.results.overallScore>=80?e="A":this.results.overallScore>=70?e="B":this.results.overallScore>=60?e="C":this.results.overallScore>=50&&(e="D")
const s=[...this.results.technicalSEO.issues,...this.results.onPageSEO.issues,...this.results.structuredData.issues,...this.results.performanceSEO.issues,...this.results.mobileSEO.issues]
return s.length>0&&(void 0,s.forEach(e=>{})),this.results}}export{i as SEOAuditor}
