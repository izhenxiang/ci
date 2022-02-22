var s=r=>{var t,i,a,e,f;if(!!r){for({length:i,byteOffset:t}=r,f=new DataView(r.buffer.slice(t,t+i)),a=[],e=0;e<i;)a.push(f.getUint16(e,!1)),e+=2;return a.join(".")}};export{s as b};
