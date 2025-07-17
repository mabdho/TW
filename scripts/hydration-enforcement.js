const t=require("fs"),e=require("path"),{execSync:n}=require("child_process")
class i{constructor(){this.auditResults={},this.fixedComponents=[],this.enforcementLog=[]}async enforceHTMLGeneration(t,e){void 0
try{"city"===t?await this.enforceCityHydration(e):"blog"===t?await this.enforceBlogHydration(e):void 0}catch(n){throw void 0,n}}async enforceCityHydration(n){const i=n.cityName,o=e.join(process.cwd(),"dist","public",`best-things-to-do-in-${i.toLowerCase()}.html`)
if(void 0,!t.existsSync(o))return void 0,void 0
const a=t.readFileSync(o,"utf8"),r=this.extractSEODataFromHTML(a),s=this.generateReactCitySEOData(n),c=this.compareSEOData(r,s)
if(0===c.length)return void 0,void 0
void 0,await this.alignReactWithHTML(r,"city",i),this.enforcementLog.push({pageType:"city",pageName:i,mismatches:c.length,timestamp:(new Date).toISOString(),status:"fixed"})}async enforceBlogHydration(n){const i=n.id,o=e.join(process.cwd(),"dist","public","blog",`${i}.html`)
if(void 0,!t.existsSync(o))return void 0,void 0
const a=t.readFileSync(o,"utf8"),r=this.extractSEODataFromHTML(a),s=this.generateReactBlogSEOData(n),c=this.compareSEOData(r,s)
if(0===c.length)return void 0,void 0
void 0,await this.alignReactWithHTML(r,"blog",i),this.enforcementLog.push({pageType:"blog",pageName:i,mismatches:c.length,timestamp:(new Date).toISOString(),status:"fixed"})}extractSEODataFromHTML(t){const e=t.match(/<title>(.*?)<\/title>/),n=t.match(/<meta name="description" content="(.*?)"/),i=t.match(/<h1[^>]*>(.*?)<\/h1>/)
return{title:e?e[1]:"",description:n?n[1]:"",h1:i?i[1]:""}}compareSEOData(t,e){const n=[]
return t.title!==e.title&&n.push({field:"title",html:t.title,react:e.title}),t.description!==e.description&&n.push({field:"description",html:t.description,react:e.description}),t.h1!==e.h1&&n.push({field:"h1",html:t.h1,react:e.h1}),n}async alignReactWithHTML(n,i,o){if(void 0,"city"===i){const i=e.join(process.cwd(),"client","src","pages","cities",`${o}.tsx`)
if(!t.existsSync(i))return void 0,void 0
let a=t.readFileSync(i,"utf8")
a=this.updateCitySEOFunction(a,n),t.writeFileSync(i,a),this.fixedComponents.push({type:"city",name:o,path:i,timestamp:(new Date).toISOString()})}"blog"===i,0}updateCitySEOFunction(t,e){const n=/title=\{"([^"]+)"\}/
n.test(t)&&(t=t.replace(n,`title={"${e.title}"}`))
const i=/description=\{`([^`]+)`\}/
return i.test(t)&&(t=t.replace(i,`description={\`${e.description}\`}`)),t}updateBlogSEOFunction(t,e){return t}async validateBeforeGeneration(t,e){if(void 0,!("city"!==t||e.cityName&&e.country))throw new Error("City data missing required fields: cityName, country")
if(!("blog"!==t||e.title&&e.excerpt))throw new Error("Blog data missing required fields: title, excerpt")
return void 0,!0}async validateAfterGeneration(t,e){return void 0,await this.enforceHTMLGeneration(t,e),!0}generateReactCitySEOData(t){const{cityName:e,country:n}=t,i=`15 Best Things to Do in ${e}, ${n} (2025 Guide)`,o=`15 Best Things to Do in ${e}, ${n} (2025 Guide)`
let a=`Best things to do in ${e}: Discover amazing experiences in ${e}, ${n}. Complete travel guide with insider tips and must-visit attractions.`
return a.length>160&&(a=a.substring(0,157)+"..."),{title:i,description:a,h1:o}}generateReactBlogSEOData(t){const{title:e,excerpt:n,category:i}=t,o=`${e} - ${i} | TravelWanders`,a=e
let r=n
return r.length<100&&(r=`${n} Discover more ${i.toLowerCase()} travel tips and guides on TravelWanders.`),r.length>160&&(r=r.substring(0,157)+"..."),{title:o,description:r,h1:a}}generateEnforcementReport(){const n=e.join(process.cwd(),"hydration-enforcement-report.md"),i=`# Hydration Enforcement Report\n\n**Generated**: ${(new Date).toISOString()}\n\n## Summary\n- **Total Enforcements**: ${this.enforcementLog.length}\n- **Fixed Components**: ${this.fixedComponents.length}\n- **Success Rate**: ${this.enforcementLog.filter(t=>"fixed"===t.status).length}/${this.enforcementLog.length}\n\n## Enforcement Log\n${this.enforcementLog.map(t=>`\n### ${t.pageType.toUpperCase()}: ${t.pageName}\n- **Mismatches**: ${t.mismatches}\n- **Status**: ${t.status}\n- **Timestamp**: ${t.timestamp}\n`).join("\n")}\n\n## Fixed Components\n${this.fixedComponents.map(t=>`\n- **${t.type}**: ${t.name}\n- **Path**: ${t.path}\n- **Fixed**: ${t.timestamp}\n`).join("\n")}\n\n## Recommendations\n- All future content generation should use hydration enforcement hooks\n- HTML files remain the source of truth for SEO metadata\n- React components are automatically aligned with HTML output\n- Run hydration audit after enforcement to verify compliance\n\n## Next Steps\n1. Integrate enforcement hooks into all content generation workflows\n2. Set up automated enforcement on content modification\n3. Monitor compliance through regular audits\n4. Extend enforcement to additional page types as needed\n`
t.writeFileSync(n,i)}}module.exports={HydrationEnforcer:i},require.main===module&&async function(){const t=new i
void 0
const e=["London","Rome","Edinburgh"]
for(const n of e)await t.enforceHTMLGeneration("city",{cityName:n,country:"Example"})
t.generateEnforcementReport()}().catch(console.error)
