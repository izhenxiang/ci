import{a as R,_ as T}from"./e.js";import{i as V}from"./4.js";import{b as S}from"./1.js";import{O as B}from"./3.js";import{c as l}from"./.js";import{h as z}from"./d.js";import{D as F}from"./n.js";import{s as L}from"./c.js";import{d as P,s as _,k as i,F as g,G as y,u as o,y as D,E as I,D as d,z as G,A as H,o as n,H as W}from"./0.js";import"./g.js";import"./f.js";var b,N,j,f,O,c,m,A,k,C,h;({recbar:m}=V);[O,A,h,C]=z();k=e=>{var s,a,r;a=e.split(`
`),r=[];for(s of a)r.push(s.split(" "));return r};c=_(!1);b=!1;j=_();N=e=>{[h,C][e-0]()};f={reset:L,stop:()=>{S.stop(),C()},pause:()=>{var e;({value:e}=c),e=!e,S.pause(c.value=e),!!b&&N(e)}};B.start=()=>{h(),b=!0,j.value.className=""};l.src!=="camera"&&R(()=>import("./_.js"),["_.js","a.js","3.js",".js","g.js","1.js","f.js","0.js","4.js","7.js","6.js","q.js"]);var q={setup:()=>{var e,s,a,r,u,p,w,$;for(r=k(`audio \u9EA6\u514B\u98CE
video \u6444\u50CF\u5934`),w=P(k(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u7F6E\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),$=t=>()=>{l[t]=l[t]?"":localStorage[t],!c.value&&!l.video&&!l.audio&&f.pause()},p=["audio","video"],a=0,u=p.length;a<u;a++)s=p[a],f[s]=$(s);return e=_(),{go:t=>{var v;if(["pen","rect"].indexOf(t)+1){if({value:v}=e,v!==t){if(F.shape=e.value=t,v)return}else{e.value="",m.draw_x();return}m.draw();return}(f[t]||m[t])()},left:r,right:w,code:j,minute:O,second:A,pause:c,config:l,draw:e}}};const E=e=>(G("data-v-6acdb846"),e=e(),H(),e),J=["title","onClick"],K=E(()=>o("b",null,null,-1)),M={class:"pause",ref:"code"},Q=E(()=>o("span",null,":",-1)),U=["title","onClick"],X={key:0};function Y(e,s){return n(),i("nav",{class:d({pause:e.pause})},[(n(!0),i(g,null,y(e.left,([a,r],u)=>(n(),i("a",{class:d([a,e.config[a]?"":"x"]),title:r,onClick:p=>e.go(a)},null,10,J))),256)),K,o("code",M,[D(I(e.minute),1),Q,D(I(e.second),1)],512),(n(!0),i(g,null,y(e.right,([a,r],u)=>(n(),i(g,null,[o("a",{class:d([a]),title:r,onClick:p=>e.go(a)},null,10,U),[3].indexOf(u)+1?(n(),i("b",X)):W("",!0)],64))),256)),o("a",{class:d(["pen",{now:e.draw=="pen"}]),onClick:s[0]||(s[0]=a=>e.go("pen")),title:"\u753B\u7B14"},null,2),o("a",{class:d(["rect",{now:e.draw=="rect"}]),onClick:s[1]||(s[1]=a=>e.go("rect")),title:"\u753B\u6846"},null,2),o("a",{class:"left",onClick:s[2]||(s[2]=a=>e.go("left")),title:"\u6536\u8D77"}),o("a",{class:"expand",onClick:s[3]||(s[3]=a=>e.go("expand"))})],2)}var ue=T(q,[["render",Y],["__scopeId","data-v-6acdb846"]]);export{ue as default};
