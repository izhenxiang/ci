import{a as T,_ as V}from"./e.js";import{i as B}from"./3.js";import{b as I}from"./..js";import{O as z}from"./2.js";import{c as l}from"./-.js";import{h as F}from"./c.js";import{D as L}from"./_.js";import{s as P}from"./7.js";import{d as j,s as w,k as n,F as g,R as S,u as o,y as D,D as N,E as d,z as W,A as q,o as u,I as G}from"./.js";import"./q.js";import"./f.js";var f,O,C,v,R,m,i,A,k,b,h;({recbar:i}=B);[R,A,h,b]=F();k=e=>{var a,r,t;r=e.split(`
`),t=[];for(a of r)t.push(a.split(" "));return t};m=w(!1);f=!1;C=w();O=e=>{[h,b][e-0]()};v={reset:async()=>{f&&await i.confirm("\u786E\u8BA4\u91CD\u5F55\uFF1F",["\u91CD\u5F55","\u7EE7\u7EED\u5F55\u5236"])||P()},cancel:async()=>{f&&await i.confirm("\u786E\u8BA4\u53D6\u6D88\uFF1F",["\u786E\u8BA4","\u7EE7\u7EED\u5F55\u5236"])||i.cancel()},stop:()=>{I.stop(),b()},pause:()=>{var e;({value:e}=m),e=!e,I.pause(m.value=e),!!f&&O(e)}};z.start=()=>{h(),f=!0,C.value.className=""};l.src!=="camera"&&T(()=>import("./0.js"),["0.js","$$.js","2.js","-.js","q.js","..js","f.js",".js","3.js","d.js","i.js","4.js","v.js"]);var H={setup:()=>{var e,a,r,t,p,c,y,$;for(t=k(`video \u6444\u50CF\u5934
audio \u9EA6\u514B\u98CE`),y=j(k(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u7F6E\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),$=s=>()=>{l[s]=l[s]?"":localStorage[s],!m.value&&!l.video&&!l.audio&&l.src==="camera"&&v.pause()},c=["audio","video"],r=0,p=c.length;r<p;r++)a=c[r],v[a]=$(a);return e=w(),{go:s=>{var _;if(["pen","rect"].indexOf(s)+1){if({value:_}=e,_!==s){if(L.shape=e.value=s,_)return}else{e.value="",i.draw_x();return}i.draw();return}(v[s]||i[s])()},left:t,right:y,code:C,minute:R,second:A,pause:m,config:l,draw:e}}};const E=e=>(W("data-v-5cd1fe9c"),e=e(),q(),e),J=["title","onClick"],K=E(()=>o("b",null,null,-1)),M={class:"pause",ref:"code"},Q=E(()=>o("span",null,":",-1)),U=["title","onClick"],X={key:0};function Y(e,a){return u(),n("nav",{class:d({pause:e.pause})},[(u(!0),n(g,null,S(e.left,([r,t],p)=>(u(),n("a",{class:d([r,e.config[r]?"":"x"]),title:t,onClick:c=>e.go(r)},null,10,J))),256)),K,o("code",M,[D(N(e.minute),1),Q,D(N(e.second),1)],512),(u(!0),n(g,null,S(e.right,([r,t],p)=>(u(),n(g,null,[o("a",{class:d([r]),title:t,onClick:c=>e.go(r)},null,10,U),[3].indexOf(p)+1?(u(),n("b",X)):G("",!0)],64))),256)),o("a",{class:d(["pen",{now:e.draw=="pen"}]),onClick:a[0]||(a[0]=r=>e.go("pen")),title:"\u753B\u7B14"},null,2),o("a",{class:d(["rect",{now:e.draw=="rect"}]),onClick:a[1]||(a[1]=r=>e.go("rect")),title:"\u753B\u6846"},null,2),o("a",{class:"left",onClick:a[2]||(a[2]=r=>e.go("left")),title:"\u6536\u8D77"}),o("a",{class:"expand",onClick:a[3]||(a[3]=r=>e.go("expand"))})],2)}var ue=V(H,[["render",Y],["__scopeId","data-v-5cd1fe9c"]]);export{ue as default};
