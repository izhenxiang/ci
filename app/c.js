import{a as b,_ as z}from"./g.js";import{c as k}from"./.js";import{m as M}from"./7.js";import{i as x}from"./2.js";import{s as B,e as A,C,k as V,u as r,D as F,F as L,o as O,z as S,A as D}from"./..js";import"./k.js";import"./1.js";import"./0.js";import"./h.js";import"./3.js";var E=/Win/.test(navigator.userAgent),u,v;({camera:v}=x);u="video";var N={setup:()=>{var e,o,t,n,c,w,f,d,l,a;return a=B(),E?(d=l=o=t=e=void 0,c=()=>e=requestAnimationFrame(async()=>{var s,i;[s,i]=await x.mouse(),(s!==d||i!==l)&&(d=s,l=i,v.move(s-o,i-t)),c()}),w=s=>{s.target.tagName==="VIDEO"&&(cancelAnimationFrame(e),v.init(),o=d=s.screenX,t=l=s.screenY,c())},f=()=>{cancelAnimationFrame(e)}):w=f=()=>{},A(async()=>{var s,i,h,m,g;if(E&&(document.getElementsByTagName("nav")[0].style.appRegion=a.value.style.appRegion="no-drag"),k.src==="camera"){i=[],h=["audio",u];for(s of h)m=await M(s),s===u&&m&&(a.value.srcObject=m),i=i.concat(m.getTracks());g=new MediaStream(i),C(()=>{var _,j,y,I;({video:I,audio:_}=k),j={video:I,audio:_},y=g.getTracks();for(s of y)s.enabled=!!j[s.kind]}),(await b(()=>import("./_.js"),["_.js","1.js",".js","k.js","0.js","h.js","..js","2.js","d.js"])).default(g)}else a.value.srcObject=await M(u)}),n=B(0),{v:a,mirror:n,mouseup:f,mousedown:w,size:s=>{v.size(s)},turn:()=>{n.value=!n.value},x:()=>{k.video=""}}}};const p=e=>(S("data-v-2874271e"),e=e(),D(),e),R=p(()=>r("svg",{fill:"none",height:"11",viewBox:"0 0 10 11",width:"10",xmlns:"http://www.w3.org/2000/svg"},[r("circle",{cx:"5",cy:"5.5",opacity:"0.6",r:"4.5",stroke:"var(--c)"})],-1)),T=[R],$=p(()=>r("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[r("circle",{cx:"12",cy:"12.5",fill:"var(--c)",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),H=[$],P=p(()=>r("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[r("g",{opacity:"0.6"},[r("path",{d:"M10 18.5V6.5L3 18.5H10Z",fill:"var(--c)",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),r("path",{d:"M14 18.5V6.5L21 18.5H14Z",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),W=[P],Z=p(()=>r("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[r("g",{opacity:"0.6"},[r("path",{d:"M16 8.5L8 16.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),r("path",{d:"M16 16.5L8 8.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),q=[Z];function X(e,o){return O(),V(L,null,[r("video",{class:F({mirror:e.mirror}),onMousedown:o[0]||(o[0]=(...t)=>e.mousedown&&e.mousedown(...t)),onMousemove:o[1]||(o[1]=(...t)=>e.mousemove&&e.mousemove(...t)),onMouseup:o[2]||(o[2]=(...t)=>e.mouseup&&e.mouseup(...t)),autoplay:"",ref:"v"},null,34),r("nav",null,[r("a",{onClick:o[3]||(o[3]=t=>e.size(200))},T),r("a",{onClick:o[4]||(o[4]=t=>e.size(320))},H),r("a",{onClick:o[5]||(o[5]=(...t)=>e.turn&&e.turn(...t))},W),r("a",{onClick:o[6]||(o[6]=(...t)=>e.x&&e.x(...t))},q)])],64)}var te=z(N,[["render",X],["__scopeId","data-v-2874271e"]]);export{te as default};
