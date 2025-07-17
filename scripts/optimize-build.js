#!/usr/bin/env node
function i(i){return e.stat(i).then(i=>i.size).catch(()=>0)}function t(){void 0
const t=s.join(l,"assets")
return new Promise(async o=>{const a=[]
try{await(n=t,e.readdir(n,{withFileTypes:!0}).then(t=>{const o=t.map(async t=>{const o=s.join(n,t.name)
if(t.isFile()&&t.name.endsWith(".js")){const e=await i(o)
a.push({name:t.name,path:o,size:e,compressed:!1})}})
return Promise.all(o)})),a.sort((i,t)=>t.size-i.size)
let r=0,c=0
for(const t of a){r+=t.size
const o=t.path+".br",e=await i(o)
e>0?(c+=e,t.compressed=!0):c+=t.size}void 0
const m=((r-c)/r*100).toFixed(1)
void 0,o({files:a,totalOriginal:r,totalCompressed:c,compressionRatio:m})}catch(r){void 0,o({files:[],totalOriginal:0,totalCompressed:0,compressionRatio:0})}var n})}async function o(i){try{const t=await e.readFile(i),o=t.length
if(o<1024)return
const s=n(t),r=i+".br"
await e.writeFile(r,s)
const c=a(t,{level:9}),m=i+".gz"
await e.writeFile(m,c),(100*(1-s.length/o)).toFixed(1),(100*(1-c.length/o)).toFixed(1)}catch(t){void 0}}import e from"fs/promises"
import s from"path"
import{gzipSync as a,brotliCompressSync as n}from"zlib"
import{fileURLToPath as r}from"url"
const c=s.dirname(r(import.meta.url)),m=s.resolve(c,".."),l=s.join(m,"client","dist","public");(async function(){try{void 0,await t(),await(void 0,new Promise(async i=>{const t=s.join(l,"assets")
try{const a=await e.readdir(t,{withFileTypes:!0})
for(const i of a)i.isFile()&&(i.name.endsWith(".js")||i.name.endsWith(".css"))&&await o(s.join(t,i.name))
void 0,i()}catch(a){void 0,i()}})),void 0,(i=await t()).compressionRatio>50||i.compressionRatio}catch(a){void 0,process.exit(1)}var i})().catch(console.error)
