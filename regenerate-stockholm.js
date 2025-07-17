import{generateCompleteHTML as t,extractCityDataFromTSX as i}from"./server/html-generator.ts"
import{mkdir as o,writeFile as r}from"fs/promises"
import{existsSync as s}from"fs"
import e from"path"
!async function(a){try{void 0
const c=`./client/src/pages/cities/${a}.tsx`,m=await i(c)
if(!m)return void 0,void 0
void 0
const n=await t(m),f=`./dist/public/best-things-to-do-in-${a.toLowerCase()}`,p=e.join(f,"index.html")
s(f)||await o(f,{recursive:!0}),await r(p,n,"utf-8")}catch(c){void 0}}(process.argv[2]||"Stockholm")
