import{a as I,_ as M}from"./d.js";import{c as g}from"./.js";import{m as z}from"./-.js";import{i as C}from"./3.js";import{d as E}from"./u.js";import{s as c,b as L,q as T,d as _,t as V,F as b,i as o,u as v,o as k,p as O,m as D}from"./q.js";import"./n.js";import"./1.js";import"./..js";import"./x.js";var P=e=>new Promise(r=>setTimeout(r,e)),w,j;({camera:j}=C);w="video";var $={setup:()=>{var e,r,a,m,d,p,h;return h=c(),m=c(),r=c(!1),e=async t=>{for(var i,l;;){try{l=await z(t)}catch(s){i=s,console.error(t,i),r.value={audio:"\u9EA6\u514B\u98CE",video:"\u6444\u50CF\u5934"}[t],await P(1e3);continue}return r.value=!1,l}},a=g.src==="camera",L(async()=>{var t,i,l,s,u;if(E(m.value),a){i=[],l=["audio",w];for(t of l)s=await e(t),s&&(t===w&&(u=s),i=i.concat(s.getTracks()));setTimeout(async()=>{var f;f=new MediaStream(i),T(()=>{var y,x,B,S;({video:S,audio:y}=g),x={video:S,audio:y},B=f.getTracks();for(t of B)t.enabled=!!x[t.kind]}),(await I(()=>import("./g.js"),["g.js","1.js","5.js","3.js",".js","n.js","..js","x.js","q.js","8.js"])).default(f)})}else u=await e(w);h.value.srcObject=u}),p=c(outerWidth),d=c(a?0:localStorage.\u4EBA\u50CF\u955C\u50CF-0),{v:h,main:m,size:p,mirror:d,err:r,w:t=>{localStorage.\u4EBA\u50CF\u5C3A\u5BF8=t,p.value=t,j.size(t)},turn:()=>{localStorage.\u4EBA\u50CF\u955C\u50CF=(d.value=!d.value)-0},x:()=>{g.video=""}}}};const n=e=>(O("data-v-457784f0"),e=e(),D(),e),F={ref:"main"},H={key:0},R=n(()=>o("svg",{fill:"none",height:"11",viewBox:"0 0 10 11",width:"10",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"5",cy:"5.5",opacity:"0.6",r:"4.5",stroke:"var(--c)"})],-1)),Z=n(()=>o("svg",{class:"now",fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"12",cy:"12",fill:"var(--c)",opacity:"0.7",r:"4.5",stroke:"var(--c)"})],-1)),q=[R,Z],A=n(()=>o("svg",{fill:"none",height:"15",viewBox:"0 0 14 15",width:"14",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"7",cy:"7.5",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),N=n(()=>o("svg",{class:"now",fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"12",cy:"12.5",fill:"var(--c)",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),W=[A,N],G=n(()=>o("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("g",{opacity:"0.6"},[o("path",{d:"M10 18.5V6.5L3 18.5H10Z",fill:"var(--c)",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),o("path",{d:"M14 18.5V6.5L21 18.5H14Z",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),J=[G],K=n(()=>o("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[o("g",{opacity:"0.6"},[o("path",{d:"M16 8.5L8 16.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),o("path",{d:"M16 16.5L8 8.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),Q=[K];function U(e,r){return k(),_("main",F,[e.err?(k(),_("h3",H,"\u8BF7\u6388\u6743"+V(e.err),1)):(k(),_(b,{key:1},[o("video",{class:v({mirror:e.mirror}),autoplay:"",ref:"v"},null,2),o("nav",null,[o("a",{class:v({now:e.size<=250}),onClick:r[0]||(r[0]=a=>e.w(204))},q,2),o("a",{class:v({now:e.size>=310}),onClick:r[1]||(r[1]=a=>e.w(324))},W,2),o("a",{class:v({mirror:e.mirror}),onClick:r[2]||(r[2]=(...a)=>e.turn&&e.turn(...a))},J,2),o("a",{onClick:r[3]||(r[3]=(...a)=>e.x&&e.x(...a))},Q)])],64))],512)}var le=M($,[["render",U],["__scopeId","data-v-457784f0"]]);export{le as default};
