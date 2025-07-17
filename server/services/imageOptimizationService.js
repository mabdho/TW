import t from"sharp"
import i from"fs"
import e from"path"
export default class{constructor(t={}){this.targetSize=t.targetSize||102400,this.quality=t.quality||80,this.maxWidth=t.maxWidth||1200,this.maxHeight=t.maxHeight||800,this.outputDir=t.outputDir||"./public/optimized-images",i.existsSync(this.outputDir)||i.mkdirSync(this.outputDir,{recursive:!0})}getFileSize(t){try{return i.statSync(t).size}catch(e){return 0}}formatBytes(t,i=2){if(0===t)return"0 Bytes"
const e=i<0?0:i,r=Math.floor(Math.log(t)/Math.log(1024))
return parseFloat((t/Math.pow(1024,r)).toFixed(e))+" "+["Bytes","KB","MB","GB"][r]}async optimizeImage(r,o=null){try{if(!i.existsSync(r))return{success:!1,error:"Input file does not exist"}
const s=this.getFileSize(r),a=o||`optimized_${Date.now()}.webp`,h=e.join(this.outputDir,a),n=await this.getImageDimensions(r),{width:u,height:c}=this.calculateNewDimensions(n.width,n.height,this.maxWidth,this.maxHeight)
let m,g=this.quality,l=s
for(;g>10&&l>this.targetSize;)m=await t(r).resize(u,c,{fit:"inside",withoutEnlargement:!0}).webp({quality:g}).toBuffer(),l=m.length,l>this.targetSize&&(g-=5)
await t(m).toFile(h)
const d=this.getFileSize(h)
return{success:!0,originalFile:r,originalPath:r,optimizedPath:h,originalSize:s,optimizedSize:d,reduction:s>0?(s-d)/s*100:0,quality:g,format:"webp",filename:a,dimensions:{original:n,optimized:{width:u,height:c}}}}catch(s){return void 0,{success:!1,error:s.message||"Unknown optimization error"}}}async getImageDimensions(i){try{const e=await t(i).metadata()
return{width:e.width||0,height:e.height||0}}catch(e){return{width:0,height:0}}}calculateNewDimensions(t,i,e,r){if(t<=e&&i<=r)return{width:t,height:i}
const o=e/t,s=r/i,a=Math.min(o,s)
return{width:Math.round(t*a),height:Math.round(i*a)}}async optimizeFromBuffer(i,r=null){try{const o=r||`optimized_${Date.now()}.webp`,s=e.join(this.outputDir,o),a=await t(i).metadata(),h=i.length,{width:n,height:u}=this.calculateNewDimensions(a.width,a.height,this.maxWidth,this.maxHeight)
let c,m=this.quality,g=h
for(;m>10&&g>this.targetSize;)c=await t(i).resize(n,u,{fit:"inside",withoutEnlargement:!0}).webp({quality:m}).toBuffer(),g=c.length,g>this.targetSize&&(m-=5)
await t(c).toFile(s)
const l=this.getFileSize(s)
return{success:!0,originalSize:h,optimizedSize:l,reduction:h>0?(h-l)/h*100:0,quality:m,format:"webp",filename:o,dimensions:{original:{width:a.width,height:a.height},optimized:{width:n,height:u}}}}catch(o){return void 0,{success:!1,error:o.message||"Unknown buffer optimization error"}}}async batchOptimize(t,r=null){try{if(!i.existsSync(t))throw new Error("Input directory does not exist")
const o=i.readdirSync(t).filter(t=>{const i=e.extname(t).toLowerCase()
return[".jpg",".jpeg",".png",".gif",".bmp",".tiff",".webp"].includes(i)}),s=[]
r||this.outputDir
for(const i of o){const r=e.join(t,i),o=`optimized_${e.parse(i).name}.webp`
void 0
const a=await this.optimizeImage(r,o)
s.push(a)}return s}catch(o){throw void 0,o}}}