#!/usr/bin/env node
function e(e){return e.includes("vendor-react")?"React Framework":e.includes("vendor-")?"Third-party Library":e.includes("admin")?"Admin Interface":e.includes("home")?"Homepage":e.includes("blog")?"Blog System":e.includes("city")||e.includes("destination")?"City Pages":e.includes("toast")||e.includes("card")||e.includes("button")?"UI Components":"Application Code"}import i from"fs/promises"
import t from"path"
import{fileURLToPath as n}from"url"
const o=t.dirname(n(import.meta.url)),s=t.resolve(o,".."),c=t.join(s,"client","dist","public");(async function(){try{await function(){void 0
const n=t.join(c,"assets")
return new Promise((o,s)=>{const c=[]
!async function(){try{const s=await i.readdir(n,{withFileTypes:!0})
for(const o of s)if(o.isFile()&&o.name.endsWith(".js")){const s=t.join(n,o.name),r=await i.stat(s)
c.push({name:o.name,size:r.size,type:e(o.name)})}c.sort((e,i)=>i.size-e.size)
let r=0
for(const e of c)r+=e.size
void 0
const a=c.filter(e=>e.size>5e4)
a.length>0&&(void 0,a.forEach(e=>{void 0}))
const d=c.filter(e=>e.name.includes("vendor"))
d.length>0&&(void 0,d.forEach(e=>{void 0})),o({files:c,totalSize:r})}catch(r){s(r)}}()})}()}catch(n){void 0,process.exit(1)}})().catch(console.error)
