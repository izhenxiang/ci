import{a as R,_ as T}from"./_.js";import{i as V}from"./..js";import{b as S}from"./$.js";import{O as B}from"./-.js";import{c as l}from"./7.js";import{h as z}from"./9.js";import{D as F}from"./j.js";import{s as L}from"./i.js";import{d as P,s as g,k as i,u as t,F as c,G as y,y as D,E as I,D as p,z as G,A as H,o as n,H as W}from"./.js";import"./2.js";import"./a.js";var j,N,k,m,O,f,v,A,b,h,C;({recbar:v}=V);[O,A,C,h]=z();b=e=>{var a,s,r;s=e.split(`
`),r=[];for(a of s)r.push(a.split(" "));return r};f=g(!1);j=!1;k=g();N=e=>{[C,h][e-0]()};m={reset:L,stop:()=>{S.stop(),h()},pause:()=>{var e;({value:e}=f),e=!e,S.pause(f.value=e),!!j&&N(e)}};B.start=()=>{C(),j=!0,k.value.className=""};l.src!=="camera"&&R(()=>import("./u.js"),["u.js","5.js","-.js","h.js","7.js","2.js","$.js","a.js",".js","..js","t.js","0.js","s.js"]);var q={setup:()=>{var e,a,s,r,u,d,w,$;for(r=b(`audio \u9EA6\u514B\u98CE
video \u6444\u50CF\u5934`),w=P(b(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u7F6E\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),$=o=>()=>{l[o]=l[o]?"":localStorage[o],!f.value&&!l.video&&!l.audio&&m.pause()},d=["audio","video"],s=0,u=d.length;s<u;s++)a=d[s],m[a]=$(a);return e=g(),{go:o=>{var _;if(["pen","rect"].indexOf(o)+1){if({value:_}=e,_!==o){if(F.shape=e.value=o,_)return}else{e.value="",v.draw_x();return}v.draw();return}(m[o]||v[o])()},left:r,right:w,code:k,minute:O,second:A,pause:f,config:l,draw:e}}};const E=e=>(G("data-v-60fe248f"),e=e(),H(),e),J={class:"expand"},K=["title","onClick"],M=E(()=>t("b",null,null,-1)),Q={class:"pause",ref:"code"},U=E(()=>t("span",null,":",-1)),X=["title","onClick"],Y={key:0};function Z(e,a){return n(),i(c,null,[t("div",J,[t("a",{onClick:a[0]||(a[0]=s=>e.go("expand"))})]),t("nav",{class:p({pause:e.pause})},[(n(!0),i(c,null,y(e.left,([s,r],u)=>(n(),i("a",{class:p([s,e.config[s]?"":"x"]),title:r,onClick:d=>e.go(s)},null,10,K))),256)),M,t("code",Q,[D(I(e.minute),1),U,D(I(e.second),1)],512),(n(!0),i(c,null,y(e.right,([s,r],u)=>(n(),i(c,null,[t("a",{class:p([s]),title:r,onClick:d=>e.go(s)},null,10,X),[3].indexOf(u)+1?(n(),i("b",Y)):W("",!0)],64))),256)),t("a",{class:p(["pen",{now:e.draw=="pen"}]),onClick:a[1]||(a[1]=s=>e.go("pen")),title:"\u753B\u7B14"},null,2),t("a",{class:p(["rect",{now:e.draw=="rect"}]),onClick:a[2]||(a[2]=s=>e.go("rect")),title:"\u753B\u6846"},null,2),t("a",{class:"left",onClick:a[3]||(a[3]=s=>e.go("left")),title:"\u6536\u8D77"})],2)],64)}var de=T(q,[["render",Z],["__scopeId","data-v-60fe248f"]]);export{de as default};
