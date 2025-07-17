#!/usr/bin/env node
const t=require("fs"),e=require("path"),i=require("sharp")
class s{constructor(t={}){this.targetSize=t.targetSize||102400,this.quality=t.quality||80,this.format=t.format||"webp",this.maxWidth=t.maxWidth||1200,this.maxHeight=t.maxHeight||800}getFileSize(e){try{return t.statSync(e).size}catch(i){return 0}}formatBytes(t,e=2){if(0===t)return"0 Bytes"
const i=e<0?0:e,s=Math.floor(Math.log(t)/Math.log(1024))
return parseFloat((t/Math.pow(1024,s)).toFixed(i))+" "+["Bytes","KB","MB","GB"][s]}async optimizeImage(t,e){try{const s=this.getFileSize(t)
void 0
const o=await i(t).metadata()
void 0
let r=i(t);(o.width>this.maxWidth||o.height>this.maxHeight)&&(r=r.resize(this.maxWidth,this.maxHeight,{fit:"inside",withoutEnlargement:!0}))
let a=this.quality,n=0
const c=10
for(;n<c;){const t=await r.toFormat(this.format,{quality:a,progressive:!0,mozjpeg:!0,optimizeScans:!0,quantisationTable:0}).toBuffer()
if(t.length<=this.targetSize||a<=10){await i(t).toFile(e)
const o=this.getFileSize(e),r=((s-o)/s*100).toFixed(1)
return void 0,{success:!0,originalSize:s,optimizedSize:o,reduction:parseFloat(r),quality:a,format:this.format}}a-=5,n++}throw new Error("Could not optimize to target size")}catch(s){return void 0,{success:!1,error:s.message}}}async optimizeDirectory(i,s){const o=[".jpg",".jpeg",".png",".gif",".bmp",".tiff",".webp"]
t.existsSync(s)||t.mkdirSync(s,{recursive:!0})
const r=t.readdirSync(i).filter(t=>o.includes(e.extname(t).toLowerCase()))
if(0===r.length)return void 0,void 0
void 0
const a=[]
for(const t of r){const o=e.join(i,t),r=e.parse(t).name+".webp",n=e.join(s,r),c=await this.optimizeImage(o,n)
a.push({file:t,...c})}this.generateReport(a)}generateReport(t){const e=t.filter(t=>t.success),i=t.filter(t=>!t.success)
if(void 0,e.length>0){const t=e.reduce((t,e)=>t+e.originalSize,0);((t-e.reduce((t,e)=>t+e.optimizedSize,0))/t*100).toFixed(1)}i.length>0&&(void 0,i.forEach(t=>{}))}}require.main===module&&async function(){const e=process.argv.slice(2)
0===e.length&&(void 0,process.exit(1))
const i=e[0],o=e[1]||"optimized",r={}
for(let t=2;t<e.length;t+=2){const i=e[t],s=e[t+1]
switch(i){case"--target-size":r.targetSize=1024*parseInt(s)
break
case"--quality":r.quality=parseInt(s)
break
case"--max-width":r.maxWidth=parseInt(s)
break
case"--max-height":r.maxHeight=parseInt(s)}}const a=new s(r),n=t.statSync(i)
n.isFile()?(await a.optimizeImage(i,o)).success?void 0:(void 0,process.exit(1)):n.isDirectory()?await a.optimizeDirectory(i,o):(void 0,process.exit(1))}().catch(console.error),module.exports=s
