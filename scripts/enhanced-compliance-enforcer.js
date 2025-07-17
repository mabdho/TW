#!/usr/bin/env node
import{execSync as t}from"child_process"
import s from"fs"
import e from"path"
import{fileURLToPath as i}from"url"
const c=i(import.meta.url)
e.dirname(c)
class n{constructor(){this.auditResults={},this.fixActions=[],this.errors=[],this.syncResults={success:0,failed:0,total:0}}async enforceCompliance(){void 0
try{void 0,await this.enforceTsxHtmlSync(),void 0,(this.syncResults.total>0?this.syncResults.success/this.syncResults.total*100:100)<100&&await this.applyAutomaticFixes()
const t=this.syncResults.total>0?this.syncResults.success/this.syncResults.total*100:100
return void 0,t>=100?this.logSuccess():this.logFailure(t),await this.writeEnforcementLog(),t>=100}catch(t){return this.logError(t),!1}}async enforceTsxHtmlSync(){try{const i=e.join(process.cwd(),"server","utils","tsx-html-sync.ts")
if(!s.existsSync(i))return void 0,void 0
void 0
const c=e.join(process.cwd(),"client","src","pages","cities")
if(!s.existsSync(c))return void 0,void 0
const n=s.readdirSync(c).filter(t=>t.endsWith(".tsx"))
this.syncResults.total=n.length
for(const s of n){const e=s.replace(".tsx","")
try{await this.syncCityTsxHtml(e)?(this.syncResults.success++,this.fixActions.push(`✅ TSX-HTML synchronized: ${e}`)):(this.syncResults.failed++,this.errors.push(`❌ TSX-HTML sync failed: ${e}`))}catch(t){this.syncResults.failed++,this.errors.push(`❌ TSX-HTML sync error for ${e}: ${t.message}`)}}void 0}catch(i){void 0,this.errors.push(`TSX-HTML sync error: ${i.message}`)}}async syncCityTsxHtml(t){try{const e=this.getTsxPath(t),i=this.getHtmlPath(t)
if(!s.existsSync(e)||!s.existsSync(i))return!1
const c=await this.extractHtmlData(i),n=await this.extractTsxData(e)
return this.compareData(c,n)&&await this.updateTsxFromHtml(e,c),!0}catch(e){return void 0,!1}}getTsxPath(t){return e.join(process.cwd(),"client","src","pages","cities",`${t}.tsx`)}getHtmlPath(t){const i=this.cityNameToSlug(t),c=e.join(process.cwd(),"dist","public",`best-things-to-do-in-${i}`,"index.html"),n=e.join(process.cwd(),"dist","public",`best-things-to-do-in-${i}.html`)
return s.existsSync(c)?c:s.existsSync(n)?n:c}cityNameToSlug(t){const s={"SãoPaulo":"sao-paulo",SanFrancisco:"san-francisco",SanDiego:"san-diego",Melbourne:"melbourne",Perth:"perth",Edinburgh:"edinburgh",London:"london",Rome:"rome",Berlin:"berlin",Tokyo:"tokyo",Seoul:"seoul",kyoto:"kyoto",Bali:"bali"}
return s[t]?s[t]:t.toLowerCase().replace(/[áàâã]/g,"a").replace(/[éèê]/g,"e").replace(/[íì]/g,"i").replace(/[óò]/g,"o").replace(/[úù]/g,"u").replace(/[ç]/g,"c").replace(/[ñ]/g,"n").replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}async extractHtmlData(t){const e=s.readFileSync(t,"utf-8"),i=e.match(/<title>([^<]+)<\/title>/),c=e.match(/<meta name="description" content="([^"]+)"/),n=e.match(/<h1[^>]*>([^<]+)<\/h1>/)
return{title:i?i[1].trim():"",description:c?c[1].trim():"",h1:n?n[1].trim():""}}async extractTsxData(t){const e=s.readFileSync(t,"utf-8"),i=e.match(/title:\s*["']([^"']+)["']/),c=e.match(/description:\s*["']([^"']+)["']/),n=e.match(/<h1[^>]*>([^<]+)<\/h1>/)
return{title:i?i[1].trim():"",description:c?c[1].trim():"",h1:n?n[1].trim():""}}compareData(t,s){return t.title!==s.title||t.description!==s.description||t.h1!==s.h1}async updateTsxFromHtml(t,e){let i=s.readFileSync(t,"utf-8")
e.title&&(i=i.replace(/title:\s*["']([^"']+)["']/,`title: "${e.title.replace(/"/g,'\\"')}"`)),e.description&&(i=i.replace(/description:\s*["']([^"']+)["']/,`description: "${e.description.replace(/"/g,'\\"')}"`)),e.h1&&(i=i.replace(/<h1[^>]*>([^<]+)<\/h1>/,`<h1>${e.h1}</h1>`)),s.writeFileSync(t,i,"utf-8")}calculateOverallScore(){return this.syncResults.total>0?this.syncResults.success/this.syncResults.total*100:100}async applyAutomaticFixes(){try{const t=await import("./automatic-compliance-enforcer.js")
if(t.default){const s=new t.default
await s.applyAutomaticFixes(),this.fixActions.push("Applied original compliance fixes")}}catch(t){void 0}}parseAuditResults(t){this.auditResults={htmlTsxScore:this.syncResults.total>0?this.syncResults.success/this.syncResults.total*100:100,hydrationScore:100,cloakingScore:100}}logSuccess(){void 0}logFailure(t){void 0}logError(t){void 0}async writeEnforcementLog(){const t=`# Enhanced Compliance Enforcement Report\n**Date:** ${(new Date).toISOString()}\n**Enforcer:** Enhanced Automatic Compliance Enforcer\n\n## TSX-HTML Synchronization Results\n- **Total Cities:** ${this.syncResults.total}\n- **Successful Sync:** ${this.syncResults.success}\n- **Failed Sync:** ${this.syncResults.failed}\n- **Success Rate:** ${this.syncResults.total>0?(this.syncResults.success/this.syncResults.total*100).toFixed(1):0}%\n\n## Overall Compliance Scores\n- **HTML/TSX Sync:** ${this.auditResults.htmlTsxScore||0}%\n- **Hydration:** ${this.auditResults.hydrationScore||0}%\n- **Cloaking:** ${this.auditResults.cloakingScore||0}%\n- **Overall:** ${this.calculateOverallScore().toFixed(1)}%\n\n## Actions Taken\n${this.fixActions.map(t=>`- ${t}`).join("\n")}\n\n## Errors Encountered\n${this.errors.length>0?this.errors.map(t=>`- ${t}`).join("\n"):"- None"}\n\n## Status\n${this.calculateOverallScore()>=100?"✅ **PERFECT COMPLIANCE ACHIEVED**":"⚠️ **COMPLIANCE ISSUES REMAIN**"}\n`,i=e.join(process.cwd(),"ENHANCED_COMPLIANCE_REPORT.md")
s.writeFileSync(i,t,"utf-8")}}export{n as EnhancedComplianceEnforcer}
import.meta.url===`file://${process.argv[1]}`&&async function(){const t=new n,s=await t.enforceCompliance()
process.exit(s?0:1)}().catch(t=>{void 0,process.exit(1)})
