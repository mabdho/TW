import t from"fs"
import i from"path";(async function(){await async function(){void 0
const n="dist/public"
if(!t.existsSync(n))return void 0,void 0
const e=t.readdirSync(n),o=e.filter(t=>t.startsWith("best-things-to-do-in-")&&t.endsWith(".html")&&!t.includes("index"))
void 0,o.forEach(t=>{})
for(const s of o)try{const e=s.replace("best-things-to-do-in-","").replace(".html",""),o=i.join(n,s),c=i.join(n,`best-things-to-do-in-${e}`),r=i.join(c,"index.html")
t.existsSync(c)||t.mkdirSync(c,{recursive:!0})
const a=t.readFileSync(o,"utf-8")
t.writeFileSync(r,a,"utf-8"),t.unlinkSync(o)}catch(c){void 0}void 0,e.filter(e=>{const o=i.join(n,e)
return t.statSync(o).isDirectory()&&e.startsWith("best-things-to-do-in-")}).forEach(e=>{const o=i.join(n,e,"index.html")
t.existsSync(o)&&(t.statSync(o).size/1024).toFixed(1)})}(),function(){void 0
const i="server/html-generator.ts"
if(!t.existsSync(i))return void 0,void 0
let n=t.readFileSync(i,"utf-8")
if(n.includes("saveCityHtmlFile"))void 0
else{const e=n.indexOf("export async function saveHtmlFileToSubdirectory");-1!==e?(n=n.slice(0,e)+"\n// Utility function to save city HTML files with correct directory structure\nexport async function saveCityHtmlFile(cityName: string, content: string): Promise<string> {\n  const outputDir = getHtmlOutputDirectory();\n  const cityDir = path.join(outputDir, `best-things-to-do-in-${cityName.toLowerCase().replace(/\\s+/g, '-')}`);\n  await ensureDirectoryExists(cityDir);\n  \n  const filePath = path.join(cityDir, 'index.html');\n  await fs.writeFile(filePath, content, 'utf-8');\n  \n  // Auto-validate hydration compliance after HTML generation\n  await validateHydrationCompliance(`best-things-to-do-in-${cityName}/index.html`, content);\n  \n  return filePath;\n}\n\n"+n.slice(e),t.writeFileSync(i,n,"utf-8")):void 0}}()})().catch(console.error)
