#!/usr/bin/env node
import{execSync as t}from"child_process"
import s from"fs"
import e from"path"
class i{constructor(){this.results={staticAudit:null,reactMonitoring:null,timestamp:(new Date).toISOString(),status:"pending"}}async runBasicAudit(){void 0
try{const s=t("node hydration-audit.js",{encoding:"utf8",stdio:"pipe"})
void 0
const e=s.match(/Passed: (\d+)/),i=s.match(/Failed: (\d+)/),r=s.match(/Enterprise-level hydration compliance: ([\d.]+)%/)
return this.results.basicAudit={passed:e?parseInt(e[1]):0,failed:i?parseInt(i[1]):0,compliance:r?parseFloat(r[1]):0,status:i&&0===parseInt(i[1])?"perfect":"issues_found"},this.results.basicAudit}catch(s){return void 0,this.results.basicAudit={status:"error",error:s.message},this.results.basicAudit}}async runComprehensiveAudit(){void 0
try{const s=t("node comprehensive-hydration-audit.js",{encoding:"utf8",stdio:"pipe"})
void 0
const e=s.match(/Pages Audited: (\d+)/),i=s.match(/Pages Passed: (\d+)/),r=s.match(/Pages Failed: (\d+)/),a=s.match(/Checks Passed: (\d+) \(([\d.]+)%\)/)
return this.results.staticAudit={totalPages:e?parseInt(e[1]):0,pagesPassed:i?parseInt(i[1]):0,pagesFailed:r?parseInt(r[1]):0,checksCompliance:a?parseFloat(a[2]):0,status:r&&0===parseInt(r[1])?"perfect":"issues_found"},this.results.staticAudit}catch(s){return void 0,this.results.staticAudit={status:"error",error:s.message},this.results.staticAudit}}async checkServerStatus(){try{const t=await import("node-fetch").then(t=>t.default)
return(await t("http://localhost:5000/",{timeout:5e3,method:"HEAD"})).ok}catch(t){return!1}}generateFinalReport(){void 0,(new Date).toLocaleString(),void 0,this.results.basicAudit&&(void 0,"perfect"===this.results.basicAudit.status||this.results.basicAudit.status),this.results.staticAudit&&(void 0,"perfect"===this.results.staticAudit.status||this.results.staticAudit.status),this.results.reactMonitoring&&(void 0,"perfect"===this.results.reactMonitoring.status||"issues_found"===this.results.reactMonitoring.status||this.results.reactMonitoring.status)
const t="error"===this.results.basicAudit?.status||"error"===this.results.staticAudit?.status||"error"===this.results.reactMonitoring?.status,e="issues_found"===this.results.basicAudit?.status||"issues_found"===this.results.staticAudit?.status||"issues_found"===this.results.reactMonitoring?.status
return t?(void 0,this.results.status="error"):e?(void 0,this.results.status="good_with_issues"):(void 0,this.results.status="perfect"),"perfect"===this.results.status||"good_with_issues"===this.results.status,s.writeFileSync("complete-hydration-audit-results.json",JSON.stringify(this.results,null,2)),this.results}async runCompleteAudit(){if(void 0,await this.runBasicAudit(),await this.runComprehensiveAudit(),await this.checkServerStatus()){void 0
try{void 0,this.results.reactMonitoring={status:"skipped",reason:"Puppeteer not installed - install with: npm install puppeteer"}}catch(t){void 0,this.results.reactMonitoring={status:"skipped",reason:"Puppeteer not installed"}}}else void 0,this.results.reactMonitoring={status:"skipped",reason:"Server not running"}
return this.generateFinalReport()}}import.meta.url===`file://${process.argv[1]}`&&!async function(){const t=new i
try{const s=await t.runCompleteAudit()
"perfect"===s.status?process.exit(0):"good_with_issues"===s.status?process.exit(1):process.exit(2)}catch(s){void 0,process.exit(3)}}()
export{i as CompleteHydrationAudit}
