import{a as R,_ as T}from"./b.js";import{i as V}from"./1.js";import{b as S}from"./..js";import{O as B}from"./0.js";import{c as l}from"./.js";import{h as z}from"./a.js";import{D as F}from"./l.js";import{s as L}from"./_.js";import{d as P,s as _,k as i,F as g,G as y,u as o,y as D,E as I,D as c,z as G,A as H,o as n,H as W}from"./-.js";import"./f.js";import"./c.js";var b,N,j,f,O,d,m,A,k,C,h;({recbar:m}=V);[O,A,h,C]=z();k=e=>{var a,s,r;s=e.split(`
`),r=[];for(a of s)r.push(a.split(" "));return r};d=_(!1);b=!1;j=_();N=e=>{[h,C][e-0]()};f={reset:L,stop:()=>{S.stop(),C()},pause:()=>{var e;({value:e}=d),e=!e,S.pause(d.value=e),!!b&&N(e)}};B.start=()=>{h(),b=!0,j.value.className=""};l.src!=="camera"&&R(()=>import("./h.js"),["h.js","4.js","0.js",".js","f.js","..js","c.js","-.js","1.js","9.js","3.js","2.js","o.js"]);var q={setup:()=>{var e,a,s,r,u,p,w,$;for(r=k(`video \u6444\u50CF\u5934
audio \u9EA6\u514B\u98CE`),w=P(k(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u7F6E\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),$=t=>()=>{l[t]=l[t]?"":localStorage[t],!d.value&&!l.video&&!l.audio&&f.pause()},p=["audio","video"],s=0,u=p.length;s<u;s++)a=p[s],f[a]=$(a);return e=_(),{go:t=>{var v;if(["pen","rect"].indexOf(t)+1){if({value:v}=e,v!==t){if(F.shape=e.value=t,v)return}else{e.value="",m.draw_x();return}m.draw();return}(f[t]||m[t])()},left:r,right:w,code:j,minute:O,second:A,pause:d,config:l,draw:e}}};const E=e=>(G("data-v-bc31ccc6"),e=e(),H(),e),J=["title","onClick"],K=E(()=>o("b",null,null,-1)),M={class:"pause",ref:"code"},Q=E(()=>o("span",null,":",-1)),U=["title","onClick"],X={key:0};function Y(e,a){return n(),i("nav",{class:c({pause:e.pause})},[(n(!0),i(g,null,y(e.left,([s,r],u)=>(n(),i("a",{class:c([s,e.config[s]?"":"x"]),title:r,onClick:p=>e.go(s)},null,10,J))),256)),K,o("code",M,[D(I(e.minute),1),Q,D(I(e.second),1)],512),(n(!0),i(g,null,y(e.right,([s,r],u)=>(n(),i(g,null,[o("a",{class:c([s]),title:r,onClick:p=>e.go(s)},null,10,U),[3].indexOf(u)+1?(n(),i("b",X)):W("",!0)],64))),256)),o("a",{class:c(["pen",{now:e.draw=="pen"}]),onClick:a[0]||(a[0]=s=>e.go("pen")),title:"\u753B\u7B14"},null,2),o("a",{class:c(["rect",{now:e.draw=="rect"}]),onClick:a[1]||(a[1]=s=>e.go("rect")),title:"\u753B\u6846"},null,2),o("a",{class:"left",onClick:a[2]||(a[2]=s=>e.go("left")),title:"\u6536\u8D77"}),o("a",{class:"expand",onClick:a[3]||(a[3]=s=>e.go("expand"))})],2)}var ue=T(q,[["render",Y],["__scopeId","data-v-bc31ccc6"]]);export{ue as default};
