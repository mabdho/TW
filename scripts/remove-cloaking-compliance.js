import e from"fs"
import s from"path"
class t{constructor(){this.results=[],this.errors=[]}async removeServerCloaking(){void 0
try{const t=s.join(process.cwd(),"server/index.ts")
let r=e.readFileSync(t,"utf-8")
r=r.replace(/\/\*[\s\S]*?Enhanced bot detection[\s\S]*?\*\/[\s\S]*?\s*/g,""),r=r.replace(/\/\/[\s\S]*?Enhanced bot detection[\s\S]*?\s*/g,""),r=r.replace(/\s*/g,""),r=r.replace(/\/\*[\s\S]*?cloaking[\s\S]*?\*\/[\s\S]*?app\.use\([\s\S]*?\}\);/g,""),r=r.replace(/\/\/[\s\S]*?cloaking[\s\S]*?app\.use\([\s\S]*?\}\);/g,""),r=r.replace(/app\.use\(\(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g,""),r=r.replace(/app\.get\(\[.*?\], \(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g,""),r=r.replace(/app\.get\('\/best-things-to-do-in-.*?', \(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g,""),r=r.replace(/\/\*[\s\S]*?bot detection[\s\S]*?\*\//g,""),r=r.replace(/\/\/[\s\S]*?bot detection[\s\S]*?\n/g,""),r=r.replace(/🤖 Serving static HTML to bot[\s\S]*?\n/g,""),e.writeFileSync(t,r,"utf-8"),this.results.push("Removed all cloaking from server")}catch(t){this.errors.push(`Error removing server cloaking: ${t.message}`)}}async removeFirebaseCloaking(){void 0
try{const t=s.join(process.cwd(),"server/firebase-server.ts")
if(e.existsSync(t)){let s=e.readFileSync(t,"utf-8")
s=s.replace(/\s*/g,""),s=s.replace(/const isSearchEngineBot[\s\S]*?}\s*;/g,""),s=s.replace(/app\.get\('\/.*?', \(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g,""),s=s.replace(/app\.get\(\[.*?\], \(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g,""),s=s.replace(/\/\/ Bot detection middleware[\s\S]*?\}\);/g,""),e.writeFileSync(t,s,"utf-8"),this.results.push("Removed Firebase cloaking")}}catch(t){this.errors.push(`Error removing Firebase cloaking: ${t.message}`)}}async removeScriptCloaking(){void 0
try{const t=s.join(process.cwd(),"scripts"),r=e.readdirSync(t)
for(const i of r)if(i.endsWith(".js")&&(i.includes("compliance")||i.includes("cloaking"))){const r=s.join(t,i)
let n=e.readFileSync(r,"utf-8")
n=n.replace(/\s*/g,""),n=n.replace(/const isSearchEngineBot[\s\S]*?}\s*;/g,""),n=n.replace(/app\.use\(\(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g,""),n=n.replace(/app\.get\([\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g,""),e.writeFileSync(r,n,"utf-8")}this.results.push("Removed cloaking from scripts")}catch(t){this.errors.push(`Error removing script cloaking: ${t.message}`)}}async implementCompliantStaticGeneration(){void 0
try{const t=s.join(process.cwd(),"server/index.ts")
let r=e.readFileSync(t,"utf-8")
const i="\n// Google-compliant static file serving\n// Same content served to all users (no user-agent discrimination)\napp.use(express.static('dist/public', {\n  index: false, // Let React handle routing\n  maxAge: '1h',\n  setHeaders: (res, path) => {\n    if (path.endsWith('.html')) {\n      res.setHeader('Cache-Control', 'public, max-age=3600');\n    }\n  }\n}));\n\n",n=r.indexOf('if (app.get("env") === "development")')
n>-1&&(r=r.slice(0,n)+i+r.slice(n)),e.writeFileSync(t,r,"utf-8"),this.results.push("Implemented compliant static generation")}catch(t){this.errors.push(`Error implementing static generation: ${t.message}`)}}async removeCloakingSEOFiles(){void 0
try{const t=s.join(process.cwd(),"dist/public"),r=["home-seo.html","destinations-seo.html","blogs-seo.html"]
for(const i of r){const r=s.join(t,i)
e.existsSync(r)&&e.unlinkSync(r)}this.results.push("Removed cloaking SEO files")}catch(t){this.errors.push(`Error removing SEO files: ${t.message}`)}}generateReport(){void 0,this.results.forEach(e=>{}),this.errors.length>0&&(void 0,this.errors.forEach(e=>{}))}async runCompleteRemoval(){void 0,await this.removeServerCloaking(),await this.removeFirebaseCloaking(),await this.removeScriptCloaking(),await this.implementCompliantStaticGeneration(),await this.removeCloakingSEOFiles(),this.generateReport()}}(async function(){const e=new t
await e.runCompleteRemoval()})().catch(console.error)
export default t
