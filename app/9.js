import{s as l}from"./a.js";var n;n=r=>(r+"").padStart(2,"0");var i=()=>{var r,e,v,s;return r=l("00"),e=l("00"),[s,v]=(()=>{var t,a;return a=0,t=void 0,[()=>{t=setInterval(()=>{++a,r.value=n(parseInt(a/60)),e.value=n(a%60)},1e3)},()=>{clearInterval(t)}]})(),[r,e,s,v]};export{i as h};
