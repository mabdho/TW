#!/usr/bin/env node
import{exec as o}from"child_process"
import{promisify as r}from"util"
const t=r(o);(async function(){void 0
try{const{stdout:r,stderr:s}=await t('curl -X POST http://localhost:5000/api/generate-all-pages-firebase -H "Content-Type: application/json" -d "{}"')
void 0,s
try{const o=JSON.parse(r)
o.success?(void 0,o.results&&o.results.length>0&&(void 0,o.results.forEach(o=>{void 0})),o.errors&&o.errors.length>0&&(void 0,o.errors.forEach(o=>{void 0}))):void 0}catch(o){void 0}}catch(r){void 0}})().catch(console.error)
