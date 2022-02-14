import{a as S,_ as D}from"./f.js";import{c as E}from"./r.js";import{m as b}from"./l.js";import{i as T}from"./3.js";import{s as L,e as H,C as N,k as R,u as r,D as m,F as $,o as A,z as F,A as W}from"./a.js";import"./w.js";import"./1.js";import"./..js";import"./h.js";import"./4.js";var M,w,f,O;M=!0;({camera:f}=T);w="video";O=(e,o,i,d)=>Math.sqrt((e-i)**2+(o-d)**2);var X={setup:()=>{var e,o,i,d,g,h,k,_,I,B,C,c;return c=L(),e=void 0,M?(o=i=void 0,I="pointermove",_=async t=>{var s,n;return{screenX:s,screenY:n}=t,await f.move(s-o,n-i)},h=async t=>{var s,n,u,l,a;if([u,l]=await _(t),a=Math.round(outerHeight/2),s=u+a,n=l+a,O(x,y,s,n)>=a){B(t);return}},g=t=>{t.button===0&&t.target.tagName==="VIDEO"&&(f.init(),o=t.screenX,i=t.screenY,e.setPointerCapture(t.pointerId),e.addEventListener(I,h))},B=async t=>{await _(t),e.releasePointerCapture(t.pointerId),e.removeEventListener(I,h)},k=t=>{B(t)}):g=k=()=>{},H(async()=>{var t,s,n,u,l,a;if(M&&(document.body.style.appRegion="no-drag",e=c.value),E.src==="camera"){n=[],u=["audio",w];for(s of u)l=await b(s),s===w&&l&&(a=l),n=n.concat(l.getTracks());setTimeout(async()=>{var p;p=new MediaStream(n),N(()=>{var P,j,z,V;({video:V,audio:P}=E),j={video:V,audio:P},z=p.getTracks();for(s of z)s.enabled=!!j[s.kind]}),(await S(()=>import("./y.js"),["y.js","1.js","r.js","w.js","..js","h.js","a.js","3.js","e.js"])).default(p)})}else a=await b(w);try{c.value.srcObject=a}catch(p){t=p,console.error(t),location.reload()}}),C=L(outerWidth),d=L(0),{v:c,size:C,mirror:d,mouseup:k,mousedown:g,w:t=>{C.value=t,f.size(t)},turn:()=>{d.value=!d.value},x:()=>{E.video=""}}}};const v=e=>(F("data-v-23c6002f"),e=e(),W(),e),Y=v(()=>r("svg",{fill:"none",height:"11",viewBox:"0 0 10 11",width:"10",xmlns:"http://www.w3.org/2000/svg"},[r("circle",{cx:"5",cy:"5.5",opacity:"0.6",r:"4.5",stroke:"var(--c)"})],-1)),Z=v(()=>r("svg",{class:"now",fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[r("circle",{cx:"12",cy:"12",fill:"var(--c)",opacity:"0.7",r:"4.5",stroke:"var(--c)"})],-1)),q=[Y,Z],G=v(()=>r("svg",{fill:"none",height:"15",viewBox:"0 0 14 15",width:"14",xmlns:"http://www.w3.org/2000/svg"},[r("circle",{cx:"7",cy:"7.5",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),J=v(()=>r("svg",{class:"now",fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[r("circle",{cx:"12",cy:"12.5",fill:"var(--c)",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),K=[G,J],Q=v(()=>r("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[r("g",{opacity:"0.6"},[r("path",{d:"M10 18.5V6.5L3 18.5H10Z",fill:"var(--c)",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),r("path",{d:"M14 18.5V6.5L21 18.5H14Z",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),U=[Q],ee=v(()=>r("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[r("g",{opacity:"0.6"},[r("path",{d:"M16 8.5L8 16.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),r("path",{d:"M16 16.5L8 8.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),oe=[ee];function re(e,o){return A(),R($,null,[r("video",{class:m({mirror:e.mirror}),onLostpointercapture:o[0]||(o[0]=(...i)=>e.mouseup&&e.mouseup(...i)),onPointercancel:o[1]||(o[1]=(...i)=>e.mouseup&&e.mouseup(...i)),onPointerdown:o[2]||(o[2]=(...i)=>e.mousedown&&e.mousedown(...i)),onPointerup:o[3]||(o[3]=(...i)=>e.mouseup&&e.mouseup(...i)),autoplay:"",ref:"v"},null,34),r("nav",null,[r("a",{class:m({now:e.size<=250}),onClick:o[4]||(o[4]=i=>e.w(200))},q,2),r("a",{class:m({now:e.size>=310}),onClick:o[5]||(o[5]=i=>e.w(320))},K,2),r("a",{class:m({mirror:e.mirror}),onClick:o[6]||(o[6]=(...i)=>e.turn&&e.turn(...i))},U,2),r("a",{onClick:o[7]||(o[7]=(...i)=>e.x&&e.x(...i))},oe)])],64)}var ce=D(X,[["render",re],["__scopeId","data-v-23c6002f"]]);export{ce as default};
