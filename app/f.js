import{s}from"./r.js";var n;n=r=>(r+"").padStart(2,"0");var i=()=>{var r,e,v,l;return r=s("00"),e=s("00"),[l,v]=(()=>{var t,a;return a=0,t=void 0,[()=>{t=setInterval(()=>{++a,r.value=n(parseInt(a/60)),e.value=n(a%60)},1e3)},()=>{clearInterval(t)}]})(),[r,e,l,v]};export{i as h};
