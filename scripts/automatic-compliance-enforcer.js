#!/usr/bin/env node
import{execSync as t}from"child_process"
import s from"fs"
import e from"path"
class i{constructor(){this.auditResults={},this.fixActions=[],this.errors=[]}async enforceCompliance(){void 0
try{void 0
const s=t("node comprehensive-audit-system.js",{cwd:process.cwd(),encoding:"utf8"})
this.parseAuditResults(s),void 0,void 0,this.calculateOverallScore()<100&&await this.applyAutomaticFixes()
const e=t("node comprehensive-audit-system.js",{cwd:process.cwd(),encoding:"utf8"})
this.parseAuditResults(e)
const i=this.calculateOverallScore()
i>=100?this.logSuccess():this.logFailure(i),await this.writeEnforcementLog()}catch(s){throw this.logError(s),s}}calculateOverallScore(t=this.auditResults){return t.htmlTsxScore||t.hydrationScore||t.cloakingScore?((t.htmlTsxScore||0)+(t.hydrationScore||0)+(t.cloakingScore||0))/3:0}async applyAutomaticFixes(){this.auditResults.htmlTsxScore<100&&(void 0,await this.fixHtmlTsxSync()),this.auditResults.hydrationScore<100&&(void 0,await this.fixHydrationIssues()),this.auditResults.cloakingScore<100&&(void 0,await this.fixCloakingIssues())}async fixHtmlTsxSync(){const t=this.auditResults.htmlTsxMismatches||[]
for(const e of t)try{await this.alignTsxWithHtml(e),this.fixActions.push(`Fixed HTML/TSX sync for ${e.pageName}`)}catch(s){this.errors.push(`Failed to fix HTML/TSX sync for ${e.pageName}: ${s.message}`)}}async fixHydrationIssues(){const t=this.auditResults.hydrationErrors||[]
for(const e of t)try{await this.fixHydrationMismatch(e),this.fixActions.push(`Fixed hydration for ${e.pageName}`)}catch(s){this.errors.push(`Failed to fix hydration for ${e.pageName}: ${s.message}`)}}async fixCloakingIssues(){const t=this.auditResults.cloakingIssues||[]
for(const e of t)try{await this.fixCloakingIssue(e),this.fixActions.push(`Fixed cloaking for ${e.route}`)}catch(s){this.errors.push(`Failed to fix cloaking for ${e.route}: ${s.message}`)}}async alignTsxWithHtml(t){const e=this.getHtmlPathFromPageName(t.pageName),i=this.getTsxPathFromPageName(t.pageName)
if(!s.existsSync(e))throw new Error(`HTML file not found: ${e}`)
if(!s.existsSync(i))throw new Error(`TSX file not found: ${i}`)
const o=s.readFileSync(e,"utf-8"),r=this.extractHtmlSourceData(o)
let a=s.readFileSync(i,"utf-8")
a=this.updateTsxSeoData(a,r),s.writeFileSync(i,a,"utf-8")}async fixHydrationMismatch(t){await this.alignTsxWithHtml(t)}async fixCloakingIssue(t){await this.regenerateStaticHtml(t.route)}extractHtmlSourceData(t){const s=t.match(/<title>([^<]+)<\/title>/),e=t.match(/<meta name="description" content="([^"]+)"/),i=t.match(/<h1[^>]*>([^<]+)<\/h1>/)
return{title:s?s[1]:"",description:e?e[1]:"",h1:i?i[1]:""}}updateTsxSeoData(t,s){return s.title&&(t=t.replace(/title:\s*["']([^"']+)["']/,`title: "${s.title}"`)),s.description&&(t=t.replace(/description:\s*["']([^"']+)["']/,`description: "${s.description}"`)),s.h1&&(t=t.replace(/<h1[^>]*>([^<]+)<\/h1>/,`<h1>${s.h1}</h1>`)),t}getTsxPathFromPageName(t){const s=t.replace("best-things-to-do-in-",""),i=s.charAt(0).toUpperCase()+s.slice(1)+".tsx"
return e.join(process.cwd(),"client/src/pages/cities",i)}getHtmlPathFromPageName(t){return t.includes("best-things-to-do-in-")?e.join(process.cwd(),"dist/public",t,"index.html"):e.join(process.cwd(),"dist/public",t+".html")}async regenerateStaticHtml(s){try{t('node -e "import(\\"./server/routes.js\\").then(m => m.regenerateStaticFiles())"',{cwd:process.cwd(),encoding:"utf8"})}catch(e){void 0,t("node scripts/direct-html-generator.js",{cwd:process.cwd(),encoding:"utf8"})}}parseAuditResults(t){const s=t.match(/HTML\/TSX Synchronization: ([\d.]+)%/),e=t.match(/Hydration Compliance: ([\d.]+)%/),i=t.match(/Cloaking Implementation: ([\d.]+)%/)
this.auditResults={htmlTsxScore:s?parseFloat(s[1]):0,hydrationScore:e?parseFloat(e[1]):0,cloakingScore:i?parseFloat(i[1]):0,htmlTsxMismatches:this.extractMismatchesFromOutput(t,"HTML/TSX"),hydrationErrors:this.extractMismatchesFromOutput(t,"Hydration"),cloakingIssues:this.extractMismatchesFromOutput(t,"Cloaking")}}extractMismatchesFromOutput(t,s){const e=[],i=t.match(/❌ ([^:]+): /g)
return i&&i.forEach(t=>{const i=t.replace("❌ ","").replace(": ","")
e.push({pageName:`best-things-to-do-in-${i.toLowerCase()}`,type:s,issue:"Synchronization mismatch"})}),e}logSuccess(){void 0,this.fixActions.forEach(t=>{}),this.errors.length>0&&(void 0,this.errors.forEach(t=>{}))}logFailure(t){void 0,this.errors.forEach(t=>{})}logError(t){void 0}async writeEnforcementLog(){const t={timestamp:(new Date).toISOString(),auditResults:this.auditResults,fixActions:this.fixActions,errors:this.errors,finalScore:this.calculateOverallScore()},i=e.join(process.cwd(),"compliance-enforcement.log")
s.writeFileSync(i,JSON.stringify(t,null,2),"utf-8")}}export{i as AutomaticComplianceEnforcer}
import.meta.url===`file://${process.argv[1]}`&&(new i).enforceCompliance().then(()=>{void 0,process.exit(0)}).catch(t=>{void 0,process.exit(1)})
