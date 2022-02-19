import{a as A,_ as D}from"./h.js";import{c as L}from"./-.js";import{m as O}from"./l.js";import{i as N}from"./2.js";import{s as d,e as R,C as W,k as P,D as $,F,u as t,E as m,o as S,z as H,A as X}from"./$.js";import"./r.js";import"./1.js";import"./..js";import"./i.js";import"./4.js";var V=/Win/.test(navigator.userAgent),Y=e=>new Promise(r=>setTimeout(r,e)),w,p;({camera:p}=N);w="video";var Z={setup:()=>{var e,r,i,c,f,g,v,h,k,y,_,u,I,j,b,B;return B=d(),g=d(),r=void 0,V?(c=f=void 0,I="pointermove",_=async o=>{var s,a;return{screenX:s,screenY:a}=o,await p.move(s-c,a-f)},k=async o=>{await _(o)},u=!1,h=async o=>{console.log(o),o.button===0&&o.target.tagName!=="A"&&(await p.init(),u=!0,c=o.screenX,f=o.screenY,r.setPointerCapture(o.pointerId),r.addEventListener(I,k))},j=async o=>{u&&(await _(o),r.releasePointerCapture(o.pointerId),r.removeEventListener(I,k),u=!1)},y=o=>{j(o)}):h=y=()=>{},i=d(!1),e=async o=>{for(var s,a;;){try{a=await O(o)}catch(n){s=n,console.error(o,s),i.value={audio:"\u9EA6\u514B\u98CE",video:"\u6444\u50CF\u5934"}[o],await Y(1e3);continue}return i.value=!1,a}},R(async()=>{var o,s,a,n,C;if(V&&(document.body.style.appRegion="no-drag",r=g.value),L.src==="camera"){s=[],a=["audio",w];for(o of a)n=await e(o),n&&(o===w&&(C=n),s=s.concat(n.getTracks()));setTimeout(async()=>{var E;E=new MediaStream(s),W(()=>{var z,M,x,T;({video:T,audio:z}=L),M={video:T,audio:z},x=E.getTracks();for(o of x)o.enabled=!!M[o.kind]}),(await A(()=>import("./$!.js"),["$!.js","1.js","-.js","r.js","..js","i.js","$.js","2.js","g.js"])).default(E)})}else C=await e(w);B.value.srcObject=C}),b=d(outerWidth),v=d(0),{v:B,main:g,size:b,mirror:v,mouseup:y,mousedown:h,err:i,w:o=>{b.value=o,p.size(o)},turn:()=>{v.value=!v.value},x:()=>{L.video=""}}}};const l=e=>(H("data-v-44cbbd1a"),e=e(),X(),e),q={key:0},G=l(()=>t("svg",{fill:"none",height:"11",viewBox:"0 0 10 11",width:"10",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"5",cy:"5.5",opacity:"0.6",r:"4.5",stroke:"var(--c)"})],-1)),J=l(()=>t("svg",{class:"now",fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"12",cy:"12",fill:"var(--c)",opacity:"0.7",r:"4.5",stroke:"var(--c)"})],-1)),K=[G,J],Q=l(()=>t("svg",{fill:"none",height:"15",viewBox:"0 0 14 15",width:"14",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"7",cy:"7.5",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),U=l(()=>t("svg",{class:"now",fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"12",cy:"12.5",fill:"var(--c)",opacity:"0.7",r:"6.5",stroke:"var(--c)"})],-1)),ee=[Q,U],oe=l(()=>t("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[t("g",{opacity:"0.6"},[t("path",{d:"M10 18.5V6.5L3 18.5H10Z",fill:"var(--c)",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),t("path",{d:"M14 18.5V6.5L21 18.5H14Z",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),re=[oe],te=l(()=>t("svg",{fill:"none",height:"25",viewBox:"0 0 24 25",width:"24",xmlns:"http://www.w3.org/2000/svg"},[t("g",{opacity:"0.6"},[t("path",{d:"M16 8.5L8 16.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"}),t("path",{d:"M16 16.5L8 8.5",stroke:"var(--c)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})])],-1)),ie=[te];function se(e,r){return S(),P("main",{onLostpointercapture:r[4]||(r[4]=(...i)=>e.mouseup&&e.mouseup(...i)),onPointercancel:r[5]||(r[5]=(...i)=>e.mouseup&&e.mouseup(...i)),onPointerdown:r[6]||(r[6]=(...i)=>e.mousedown&&e.mousedown(...i)),onPointerup:r[7]||(r[7]=(...i)=>e.mouseup&&e.mouseup(...i)),ref:"main"},[e.err?(S(),P("h3",q,"\u8BF7\u6388\u6743"+$(e.err),1)):(S(),P(F,{key:1},[t("video",{class:m({mirror:e.mirror}),autoplay:"",ref:"v"},null,2),t("nav",null,[t("a",{class:m({now:e.size<=250}),onClick:r[0]||(r[0]=i=>e.w(200))},K,2),t("a",{class:m({now:e.size>=310}),onClick:r[1]||(r[1]=i=>e.w(320))},ee,2),t("a",{class:m({mirror:e.mirror}),onClick:r[2]||(r[2]=(...i)=>e.turn&&e.turn(...i))},re,2),t("a",{onClick:r[3]||(r[3]=(...i)=>e.x&&e.x(...i))},ie)])],64))],544)}var fe=D(Z,[["render",se],["__scopeId","data-v-44cbbd1a"]]);export{fe as default};
