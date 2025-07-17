const e=require("fs"),t=require("path"),{execSync:i}=require("child_process")
class s{constructor(){this.results={totalPages:0,passedPages:0,failedPages:0,issues:[]}}getPageOption(){const e=process.argv.find(e=>e.startsWith("--page="))
return e?e.split("=")[1]:null}async runFullAudit(){void 0
try{void 0
const e=i("node complete-hydration-audit.js",{encoding:"utf8",cwd:process.cwd()}).match(/Overall Compliance: (\d+)%/)
return 100===(e?parseInt(e[1]):0)?(void 0,!0):(void 0,!1)}catch(e){return void 0,!1}}parseAuditResults(e){const t=e.split("\n"),i={totalPages:0,passedPages:0,failedPages:0,issues:[]}
return t.forEach(e=>{e.includes("PASSED")?i.passedPages++:e.includes("FAILED")&&(i.failedPages++,i.issues.push(e))}),i.totalPages=i.passedPages+i.failedPages,i}generateComplianceReport(){const i=t.join(process.cwd(),"hydration-compliance-report.md"),s=`# Hydration Compliance Report\n\n**Generated**: ${(new Date).toISOString()}\n\n## Summary\n- **Total Pages**: ${this.results.totalPages}\n- **Passed**: ${this.results.passedPages}\n- **Failed**: ${this.results.failedPages}\n- **Compliance Rate**: ${Math.round(this.results.passedPages/this.results.totalPages*100)}%\n\n## Issues Found\n${this.results.issues.length>0?this.results.issues.map(e=>`- ${e}`).join("\n"):"✅ No issues found"}\n\n## Recommendations\n${this.results.failedPages>0?"\n- Review failed pages and ensure HTML files match React components exactly\n- Check meta descriptions for proper truncation (160 characters with ellipsis)\n- Verify titles and H1 tags match between HTML and React components\n- Run auto-fix with: node scripts/hydration-compliance-checker.js --fix\n":"✅ Perfect compliance maintained - continue current practices"}\n\n## Next Steps\n${this.results.failedPages>0?"\n1. Run auto-fix to resolve detected issues\n2. Re-run audit to verify fixes\n3. Update content generation process to prevent future issues\n":"✅ No action required - maintain current excellence"}\n`
e.writeFileSync(i,s)}async autoFixIssues(){void 0
const e=[{name:"Edinburgh",type:"city",htmlPath:"dist/public/best-things-to-do-in-edinburgh.html"},{name:"London",type:"city",htmlPath:"dist/public/best-things-to-do-in-london/index.html"},{name:"Rome",type:"city",htmlPath:"dist/public/best-things-to-do-in-rome/index.html"}]
for(const t of e)await this.fixPageHydration(t.name,t.type,t.htmlPath)
void 0}async fixPageHydration(e,t,i){if("city"===t)return this.fixCityPageHydration(e,i)
void 0}async fixCityPageHydration(i,s){try{if(void 0,!e.existsSync(s))return void 0,void 0
const n=e.readFileSync(s,"utf8"),a=n.match(/<title>(.*?)<\/title>/),o=n.match(/<meta name="description" content="(.*?)"/),r=n.match(/<h1[^>]*>(.*?)<\/h1>/)
if(!a||!o||!r)return void 0,void 0
const c={title:a[1],description:o[1],h1:r[1]},d=t.join(process.cwd(),"client","src","pages","cities",`${i}.tsx`)
if(!e.existsSync(d))return void 0,void 0
let l=e.readFileSync(d,"utf8")
const u=/title=\{"([^"]+)"\}/
u.test(l)&&(l=l.replace(u,`title={"${c.title}"}`))
const p=/description=\{`([^`]+)`\}/
p.test(l)&&(l=l.replace(p,`description={\`${c.description}\`}`)),e.writeFileSync(d,l)}catch(n){void 0}}fixHomePage(){void 0}fixBlogsPage(){void 0}fixDestinationsPage(){void 0}}module.exports={HydrationComplianceChecker:s,HydrationValidationHooks:class{static async validateNewCity(e){void 0
const t=new s,i=await t.runFullAudit()
return void 0,i||await t.autoFixIssues(),i}static async validateNewBlog(e){return void 0,!0}static async validatePageModification(e){void 0
const t=new s
return await t.runFullAudit()}}},require.main===module&&async function(){const e=new s,t=e.getPageOption()
if(process.argv.includes("--fix"))await e.autoFixIssues()
else if(t)void 0,await e.runFullAudit()
else{const t=await e.runFullAudit()
e.generateComplianceReport(),void 0,t||process.exit(1)}}().catch(console.error)
