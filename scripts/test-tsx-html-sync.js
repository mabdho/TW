#!/usr/bin/env node
import t from"fs"
import e from"path";(new class{constructor(){this.tsxDir=e.join(process.cwd(),"client","src","pages","cities"),this.htmlDir=e.join(process.cwd(),"dist","public")}async testSynchronization(){void 0
const i={success:0,failed:0,total:0}
try{const o=t.readdirSync(this.tsxDir).filter(t=>t.endsWith(".tsx"))
i.total=o.length
for(const s of o){const o=s.replace(".tsx","")
void 0
const c=e.join(this.tsxDir,s),n=this.getHtmlPath(o),r=t.existsSync(c),a=t.existsSync(n)
void 0,r&&a?(void 0,await this.checkSyncNeeded(o,c,n)?(void 0,i.failed++):(void 0,i.success++)):(void 0,i.failed++)}void 0,i.success===i.total}catch(o){void 0}}getHtmlPath(i){const o=this.cityNameToSlug(i),s=e.join(this.htmlDir,`best-things-to-do-in-${o}`,"index.html"),c=e.join(this.htmlDir,`best-things-to-do-in-${o}.html`)
return t.existsSync(s)?s:t.existsSync(c)?c:s}cityNameToSlug(t){const e={"SãoPaulo":"sao-paulo",SanFrancisco:"san-francisco",SanDiego:"san-diego",Melbourne:"melbourne",Perth:"perth",Edinburgh:"edinburgh",London:"london",Rome:"rome",Berlin:"berlin",Tokyo:"tokyo",Seoul:"seoul",kyoto:"kyoto",Bali:"bali"}
return e[t]?e[t]:t.toLowerCase().replace(/[áàâã]/g,"a").replace(/[éèê]/g,"e").replace(/[íì]/g,"i").replace(/[óò]/g,"o").replace(/[úù]/g,"u").replace(/[ç]/g,"c").replace(/[ñ]/g,"n").replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}async checkSyncNeeded(e,i,o){try{const e=t.readFileSync(i,"utf-8"),s=t.readFileSync(o,"utf-8"),c=e.match(/title:\s*["']([^"']+)["']/),n=s.match(/<title>([^<]+)<\/title>/),r=(c?c[1].trim():"")===(n?n[1].trim():"")
return r,!r}catch(s){return void 0,!0}}}).testSynchronization()
