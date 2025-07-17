#!/usr/bin/env node
async function i(i){try{const e=await o.readFile(i,"utf8"),s=Buffer.byteLength(e,"utf8")
void 0
const r=await n(e,u)
if(r.error)return void 0,{success:!1,originalSize:s,minifiedSize:s}
const t=r.code,c=Buffer.byteLength(t,"utf8")
await o.writeFile(i,t,"utf8")
const a=((s-c)/s*100).toFixed(2)
return void 0,{success:!0,originalSize:s,minifiedSize:c,compressionRatio:parseFloat(a)}}catch(e){return void 0,{success:!1,originalSize:0,minifiedSize:0}}}async function e(i){try{const e=await o.readFile(i,"utf8"),s=Buffer.byteLength(e,"utf8")
void 0
const r=c(e,z).css,t=Buffer.byteLength(r,"utf8")
await o.writeFile(i,r,"utf8")
const n=((s-t)/s*100).toFixed(2)
return void 0,{success:!0,originalSize:s,optimizedSize:t,compressionRatio:parseFloat(n)}}catch(e){return void 0,{success:!1,originalSize:0,optimizedSize:0}}}async function s(i){try{const e=await o.readFile(i),s=e.length
if(s<1024)return{success:!1,reason:"File too small"}
const r=a(e,{level:9}),t=i+".gz"
await o.writeFile(t,r)
const n=l(e,{params:{0:6,1:22}}),c=i+".br"
return await o.writeFile(c,n),(100*(1-r.length/s)).toFixed(2),(100*(1-n.length/s)).toFixed(2),void 0,g.compression.gzip.files++,g.compression.gzip.originalSize+=s,g.compression.gzip.compressedSize+=r.length,g.compression.brotli.files++,g.compression.brotli.originalSize+=s,g.compression.brotli.compressedSize+=n.length,{success:!0,originalSize:s,gzipSize:r.length,brotliSize:n.length}}catch(e){return void 0,{success:!1}}}import o from"fs/promises"
import r from"path"
import{glob as t}from"glob"
import{minify as n}from"terser"
import{minify as c}from"csso"
import{gzipSync as a,brotliCompressSync as l}from"zlib"
import{fileURLToPath as f}from"url"
const p=r.dirname(f(import.meta.url)),m=r.resolve(p,".."),d=r.join(m,"client","dist","public"),u={compress:{drop_console:!0,drop_debugger:!0,pure_funcs:["console.log","console.info","console.debug","console.warn","console.error"],passes:3,unsafe:!0,unsafe_comps:!0,unsafe_math:!0,unsafe_proto:!0,unsafe_regexp:!0,pure_getters:!0,keep_fargs:!1,hoist_funs:!0,hoist_vars:!0,side_effects:!1,dead_code:!0,unused:!0,conditionals:!0,evaluate:!0,loops:!0,reduce_vars:!0,collapse_vars:!0,join_vars:!0,sequences:!0,properties:!0,comparisons:!0,booleans:!0,typeofs:!0,if_return:!0,drop_unreachable:!1,inline:2},mangle:{toplevel:!0,safari10:!0,properties:{regex:/^_/}},format:{comments:!1,ascii_only:!0,beautify:!1,braces:!1,semicolons:!1},sourceMap:!1,toplevel:!0,ie8:!1,safari10:!0},z={restructure:!0,forceMediaMerge:!0,comments:!1,usage:{blacklist:{classes:["unused-*"]}}},g={startTime:Date.now(),files:{js:{processed:0,originalSize:0,minifiedSize:0,compressionRatio:0},css:{processed:0,originalSize:0,minifiedSize:0,compressionRatio:0},html:{processed:0,originalSize:0,compressedSize:0,compressionRatio:0}},compression:{gzip:{files:0,originalSize:0,compressedSize:0,ratio:0},brotli:{files:0,originalSize:0,compressedSize:0,ratio:0}}};(async function(){void 0
try{try{await o.access(d)}catch{void 0,process.exit(1)}await async function(){void 0
const e=[...await t("**/*.js",{cwd:d,absolute:!0}),...await t("**/*.mjs",{cwd:d,absolute:!0})]
void 0
for(const s of e){const e=await i(s)
e.success&&(g.files.js.processed++,g.files.js.originalSize+=e.originalSize,g.files.js.minifiedSize+=e.minifiedSize)}g.files.js.processed>0&&(g.files.js.compressionRatio=((g.files.js.originalSize-g.files.js.minifiedSize)/g.files.js.originalSize*100).toFixed(2))}(),await async function(){void 0
const i=await t("**/*.css",{cwd:d,absolute:!0})
void 0
for(const s of i){const i=await e(s)
i.success&&(g.files.css.processed++,g.files.css.originalSize+=i.originalSize,g.files.css.minifiedSize+=i.optimizedSize)}g.files.css.processed>0&&(g.files.css.compressionRatio=((g.files.css.originalSize-g.files.css.minifiedSize)/g.files.css.originalSize*100).toFixed(2))}(),await async function(){void 0
const i=await t("**/*.{js,css,html,json,xml,txt,svg}",{cwd:d,absolute:!0})
void 0
for(const e of i)await s(e)
g.compression.gzip.files>0&&(g.compression.gzip.ratio=(100*(1-g.compression.gzip.compressedSize/g.compression.gzip.originalSize)).toFixed(2)),g.compression.brotli.files>0&&(g.compression.brotli.ratio=(100*(1-g.compression.brotli.compressedSize/g.compression.brotli.originalSize)).toFixed(2))}(),function(){((Date.now()-g.startTime)/1e3).toFixed(2)
const i=g.files.js.originalSize+g.files.css.originalSize,e=g.files.js.minifiedSize+g.files.css.minifiedSize
i>0&&((i-e)/i*100).toFixed(2)}()}catch(r){void 0,process.exit(1)}})().catch(console.error)
