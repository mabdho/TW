#!/usr/bin/env node
async function e(e){try{const i=await o.readFile(e,"utf8"),t=Buffer.byteLength(i,"utf8")
if(0===t)return l.skipped++,void 0
void 0
const r=await s(i,c)
if(r.error)return void 0,l.errors++,void 0
const n=r.code,a=Buffer.byteLength(n,"utf8")
a<t?(await o.writeFile(e,n,"utf8"),((t-a)/t*100).toFixed(2),void 0,l.processed++,l.totalOriginalSize+=t,l.totalMinifiedSize+=a):(void 0,l.skipped++)}catch(i){void 0,l.errors++}}import o from"fs/promises"
import i from"path"
import{glob as t}from"glob"
import{minify as s}from"terser"
import{fileURLToPath as r}from"url"
const n=i.dirname(r(import.meta.url)),a=i.resolve(n,".."),c={compress:{drop_console:!0,drop_debugger:!0,pure_funcs:["console.log","console.info","console.debug","console.warn","console.error"],passes:2,dead_code:!0,unused:!0,conditionals:!0,evaluate:!0,loops:!0,reduce_vars:!0,collapse_vars:!0,join_vars:!0,sequences:!0,properties:!0,comparisons:!0,booleans:!0,typeofs:!0,if_return:!0,inline:2,hoist_funs:!0,hoist_vars:!0,side_effects:!1,global_defs:{"process.env.NODE_ENV":"production"}},mangle:{toplevel:!0,safari10:!0},format:{comments:!1,beautify:!1,semicolons:!1},sourceMap:!1,toplevel:!0,ie8:!1,safari10:!0,keep_classnames:!1,keep_fnames:!1},l={processed:0,skipped:0,errors:0,totalOriginalSize:0,totalMinifiedSize:0,startTime:Date.now()}
!async function(){void 0
try{const o=await async function(){const e=["**/*.js","dist/**/*.js","scripts/**/*.js","server/**/*.js","public/**/*.js","client/**/*.js"]
let o=[]
for(const s of e)try{const e=await t(s,{cwd:a,absolute:!0,ignore:["node_modules/**",".cache/**",".git/**"]})
o=o.concat(e)}catch(i){void 0}return[...new Set(o)].filter(e=>{return o=e,![/node_modules/,/\.cache/,/\.git/,/\.min\.js$/,/\.mjs$/,/vite\.config/,/rollup\.config/,/webpack\.config/,/postcss\.config/,/tailwind\.config/,/jest\.config/,/babel\.config/,/eslint\.config/,/prettier\.config/].some(e=>e.test(o))
var o})}()
if(0===o.length)return void 0,void 0
void 0
const i=5
for(let t=0;t<o.length;t+=i){const s=o.slice(t,t+i)
await Promise.all(s.map(o=>e(o)))}((Date.now()-l.startTime)/1e3).toFixed(2),void 0,l.processed>0&&((l.totalOriginalSize-l.totalMinifiedSize)/l.totalOriginalSize*100).toFixed(2),void 0,!void l.errors}catch(o){void 0,process.exit(1)}}()
