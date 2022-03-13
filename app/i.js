import{a as D,_ as N}from"./8.js";import{c as C}from"./7.js";import{m as R}from"./g.js";import{i as W}from"./2.js";import{s as v,b as $,q as A,d as b,t as F,F as H,i as t,u as m,o as j,p as X,m as Y}from"./w.js";import"./_.js";import"./1.js";import"./0.js";import"./z.js";import"./3.js";var T=/Win/.test(navigator.userAgent),Z=e=>new Promise(r=>setTimeout(r,e)),p,w;({camera:w}=W);p="video";var q={setup:()=>{var e,r,i,c,g,f,h,d,k,y,_,I,u,S,M,B,E;return E=v(),h=v(),r=void 0,T?(c=g=void 0,S="pointermove",I=async o=>{var a,s;return{screenX:a,screenY:s}=o,await w.move(a-c,s-g)},y=async o=>{await I(o)},u=!1,k=async o=>{var a;o.button===0&&({target:a}=o,a.tagName==="VIDEO"&&(await w.init(),u=!0,c=o.screenX,g=o.screenY,r.setPointerCapture(o.pointerId),r.addEventListener(S,y)))},M=async o=>{u&&(await I(o),r.releasePointerCapture(o.pointerId),r.removeEventListener(S,y),u=!1)},_=o=>{M(o)}):k=_=()=>{},i=v(!1),e=async o=>{for(var a,s;;){try{s=await R(o)}catch(n){a=n,console.error(o,a),i.value={audio:"\u9EA6\u514B\u98CE",video:"\u6444\u50CF\u5934"}[o],await Z(1e3);continue}return i.value=!1,s}},f=C.src==="camera",$(async()=>{var o,a,s,n,L;if(T&&(document.body.style.appRegion="no-drag",r=h.value),f){a=[],s=["audio",p];for(o of s)n=await e(o),n&&(o===p&&(L=n),a=a.concat(n.getTracks()));setTimeout(async()=>{var P;P=new MediaStream(a),A(()=>{var V,x,z,O;({video:O,audio:V}=C),x={video:O,audio:V},z=P.getTracks();for(o of z)o.enabled=!!x[o.kind]}),(await D(()=>import("./a.js"),["a.js","1.js","c.js","2.js","7.js","_.js","0.js","z.js","w.js","6.js"])).default(P)})}else L=await e(p);E.value.srcObject=L}),B=v(outerWidth),d=v(f?0:localStorage.\u4EBA\u50CF\u955C\u50CF-0),{v:E,main:h,size:B,mirror:d,mouseup:_,mousedown:k,err:i,w:o=>{localStorage.\u4EBA\u50CF\u5C3A\u5BF8=o,B.value=o,w.size(o)},turn:()=>{localStorage.\u4EBA\u50CF\u955C\u50CF=(d.value=!d.value)-0},x:()=>{C.video=""}}}};const l=e=>(X("data-v-40e02e34"),e=e(),Y(),e),G={key:0},J=l(()=>t("svg",{fill:"none",height:"11",viewBox:"0 0 10 11",width:"10",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"5",cy:"5.5",opacity:"0.6",r:"4.5",stroke:"var(--c)"})],-1)),K=l(()=>t("svg",{class:"now",fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"12",cy:"12",fill:"var(--c)",opacity:"0.7",r:"4.5",stroke:"var(--c)"})],-1)),Q=[J,K],U=l(()=>t("svg",{fill:"none",height:"15",viewBox:"0 0 14 15",width:"14",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"7",cy:"7.5",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),ee=l(()=>t("svg",{class:"now",fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"12",cy:"12.5",fill:"var(--c)",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),oe=[U,ee],re=l(()=>t("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[t("g",{opacity:"0.6"},[t("path",{d:"M10 18.5V6.5L3 18.5H10Z",fill:"var(--c)",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),t("path",{d:"M14 18.5V6.5L21 18.5H14Z",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),te=[re],ie=l(()=>t("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[t("g",{opacity:"0.6"},[t("path",{d:"M16 8.5L8 16.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),t("path",{d:"M16 16.5L8 8.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),ae=[ie];function se(e,r){return j(),b("main",{onLostpointercapture:r[4]||(r[4]=(...i)=>e.mouseup&&e.mouseup(...i)),onPointercancel:r[5]||(r[5]=(...i)=>e.mouseup&&e.mouseup(...i)),onPointerdown:r[6]||(r[6]=(...i)=>e.mousedown&&e.mousedown(...i)),onPointerup:r[7]||(r[7]=(...i)=>e.mouseup&&e.mouseup(...i)),ref:"main"},[e.err?(j(),b("h3",G,"\u8BF7\u6388\u6743"+F(e.err),1)):(j(),b(H,{key:1},[t("video",{class:m({mirror:e.mirror}),autoplay:"",ref:"v"},null,2),t("nav",null,[t("a",{class:m({now:e.size<=250}),onClick:r[0]||(r[0]=i=>e.w(204))},Q,2),t("a",{class:m({now:e.size>=310}),onClick:r[1]||(r[1]=i=>e.w(324))},oe,2),t("a",{class:m({mirror:e.mirror}),onClick:r[2]||(r[2]=(...i)=>e.turn&&e.turn(...i))},te,2),t("a",{onClick:r[3]||(r[3]=(...i)=>e.x&&e.x(...i))},ae)])],64))],544)}var fe=N(q,[["render",se],["__scopeId","data-v-40e02e34"]]);export{fe as default};
