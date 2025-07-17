import o from"fs/promises"
import t from"path"
!async function(){try{const o=["London","Rome"]
for(const t of o)void 0,(await fetch(`http://localhost:5000/api/generate-page?city=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}})).ok}catch(o){void 0}}()
