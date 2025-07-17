const t="travelwanders-v1",e=["/","/favicon.ico","/favicon.svg","/destinations","/blogs"],a=["/api/","/admin"],n=["/assets/",".js",".css",".png",".jpg",".jpeg",".gif",".svg",".woff",".woff2"]
self.addEventListener("install",a=>{void 0,a.waitUntil(caches.open(t).then(t=>(void 0,t.addAll(e))).then(()=>(void 0,self.skipWaiting())).catch(t=>{void 0}))}),self.addEventListener("activate",e=>{void 0,e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>{if(e!==t&&"travelwanders-offline-v1"!==e)return void 0,caches.delete(e)}))).then(()=>(void 0,self.clients.claim())))}),self.addEventListener("fetch",e=>{const i=e.request,s=new URL(i.url)
if("GET"===i.method&&s.protocol.startsWith("http"))return a.some(t=>s.pathname.startsWith(t))?(e.respondWith(async function(e){try{const a=await fetch(e)
return a.ok&&(await caches.open(t)).put(e,a.clone()),a}catch(a){void 0
const t=await caches.match(e)
if(t)return t
if("navigate"===e.mode)return caches.match("/")
throw a}}(i)),void 0):n.some(t=>s.pathname.includes(t))?(e.respondWith(async function(e){const a=await caches.match(e)
if(a)return a
try{const a=await fetch(e)
return a.ok&&(await caches.open(t)).put(e,a.clone()),a}catch(n){throw void 0,n}}(i)),void 0):(e.respondWith(async function(e){const a=await caches.open(t),n=await a.match(e),i=fetch(e).then(t=>(t.ok&&a.put(e,t.clone()),t)).catch(t=>{void 0})
return n||i}(i)),void 0)}),self.addEventListener("sync",t=>{void 0,"background-sync"===t.tag&&t.waitUntil(async function(){void 0}())}),self.addEventListener("message",e=>{void 0,e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting(),e.data&&"GET_VERSION"===e.data.type&&e.ports[0].postMessage({version:t})})
