#!/usr/bin/env node
import e from"fs/promises"
import t from"path"
import{existsSync as s}from"fs";(async function(){void 0
try{const{generateHomePageHTML:r,generateDestinationsPageHTML:c,generateBlogsPageHTML:n,generatePrivacyPolicyHTML:p,generateTermsOfServiceHTML:g,generateCookiePolicyHTML:m,generateCompleteHTML:h,extractCityDataFromTSX:l,readBlogDataFromFileSystem:u,generateIndividualBlogHTML:d}=await import("./server/html-generator.ts"),{getSitemap:w,getRobotsTxt:f}=await import("./server/routes/seo.ts"),v=[],y=[],F=t.join(process.cwd(),"dist","public")
await e.mkdir(F,{recursive:!0})
try{void 0
const s=r(),a=t.join(F,"home-seo.html")
await e.writeFile(a,s,"utf-8")
const i=await e.stat(a)
v.push({page:"Homepage",path:a,size:`${(i.size/1024).toFixed(2)} KB`,success:!0})}catch(a){y.push({page:"Homepage",error:a.message})}try{void 0
const s=c(),a=t.join(F,"destinations-seo.html")
await e.writeFile(a,s,"utf-8")
const i=await e.stat(a)
v.push({page:"Destinations",path:a,size:`${(i.size/1024).toFixed(2)} KB`,success:!0})}catch(a){y.push({page:"Destinations",error:a.message})}try{void 0
const s=n(),a=t.join(F,"blogs-seo.html")
await e.writeFile(a,s,"utf-8")
const i=await e.stat(a)
v.push({page:"Blogs",path:a,size:`${(i.size/1024).toFixed(2)} KB`,success:!0})}catch(a){y.push({page:"Blogs",error:a.message})}try{void 0
const s=[{name:"Privacy Policy",generator:p,filename:"privacy-policy.html"},{name:"Terms of Service",generator:g,filename:"terms-of-service.html"},{name:"Cookie Policy",generator:m,filename:"cookie-policy.html"}]
for(const a of s){const s=a.generator(),i=t.join(F,a.filename)
await e.writeFile(i,s,"utf-8")
const o=await e.stat(i)
v.push({page:a.name,path:i,size:`${(o.size/1024).toFixed(2)} KB`,success:!0})}}catch(a){y.push({page:"Legal Pages",error:a.message})}try{void 0
const a=t.join(process.cwd(),"client","src","pages","cities")
if(s(a)){const s=(await e.readdir(a)).filter(e=>e.endsWith(".tsx"))
for(const o of s){const s=o.replace(".tsx",""),r=t.join(a,o)
try{const s=await l(r)
if(s){const a=h(s),i=t.join(F,`best-things-to-do-in-${s.cityName.toLowerCase()}`)
await e.mkdir(i,{recursive:!0})
const o=t.join(i,"index.html")
await e.writeFile(o,a,"utf-8")
const r=await e.stat(o)
v.push({page:`${s.cityName} City Guide`,path:o,size:`${(r.size/1024).toFixed(2)} KB`,success:!0})}}catch(i){y.push({page:`${s} City Page`,error:i.message})}}}}catch(a){y.push({page:"City Pages",error:a.message})}try{void 0
const s=u()
for(const a of s)try{const s=d(a),i=t.join(F,"blog")
await e.mkdir(i,{recursive:!0})
const o=t.join(i,`${a.id}.html`)
await e.writeFile(o,s,"utf-8")
const r=await e.stat(o)
v.push({page:`Blog: ${a.title}`,path:o,size:`${(r.size/1024).toFixed(2)} KB`,success:!0})}catch(o){y.push({page:`Blog: ${a.title}`,error:o.message})}}catch(a){y.push({page:"Individual Blog Pages",error:a.message})}try{void 0
const s=await w(),a=t.join(F,"sitemap.xml")
await e.writeFile(a,s,"utf-8")
const i=await e.stat(a)
v.push({page:"Sitemap",path:a,size:`${(i.size/1024).toFixed(2)} KB`,success:!0})}catch(a){y.push({page:"Sitemap",error:a.message})}try{void 0
const s=f(),a=t.join(F,"robots.txt")
await e.writeFile(a,s,"utf-8")
const i=await e.stat(a)
v.push({page:"Robots.txt",path:a,size:`${(i.size/1024).toFixed(2)} KB`,success:!0})}catch(a){y.push({page:"Robots.txt",error:a.message})}void 0,v.length>0&&(void 0,v.forEach(e=>{void 0})),y.length>0&&(void 0,y.forEach(e=>{void 0})),v.reduce((e,t)=>e+parseFloat(t.size.replace(" KB","")),0)}catch(a){void 0,process.exit(1)}})().catch(console.error)
