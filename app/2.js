import{a as T,_ as V}from"./b.js";import{i as B}from"./1.js";import{b as I}from"./-.js";import{O as z}from"./..js";import{c as u}from"./l.js";import{h as F}from"./_.js";import{D as L}from"./i.js";import{s as P}from"./6.js";import{d as j,s as w,k as i,F as g,R as S,u as o,y as D,E as N,D as d,z as W,A as q,o as n,I as G}from"./9.js";import"./v.js";import"./d.js";var f,O,C,v,R,m,l,A,k,b,h;({recbar:l}=B);[R,A,h,b]=F();k=e=>{var r,a,t;a=e.split(`
`),t=[];for(r of a)t.push(r.split(" "));return t};m=w(!1);f=!1;C=w();O=e=>{[h,b][e-0]()};v={reset:async()=>{f&&await l.confirm("\u786E\u8BA4\u91CD\u65B0\u5F55\u5236\uFF1F",["\u91CD\u5F55","\u7EE7\u7EED\u5F55\u5236"])||P()},cancel:async()=>{f&&await l.confirm("\u786E\u8BA4\u53D6\u6D88\u5F55\u5236\uFF1F",["\u786E\u8BA4","\u7EE7\u7EED\u5F55\u5236"])||l.cancel()},stop:()=>{I.stop(),b()},pause:()=>{var e;({value:e}=m),e=!e,I.pause(m.value=e),!!f&&O(e)}};z.start=()=>{h(),f=!0,C.value.className=""};u.src!=="camera"&&T(()=>import("./h.js"),["h.js","$.js","..js","l.js","v.js","-.js","d.js","9.js","1.js","a.js","g.js","3.js","t.js"]);var H={setup:()=>{var e,r,a,t,p,c,y,$;for(t=k(`video \u6444\u50CF\u5934
audio \u9EA6\u514B\u98CE`),y=j(k(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u7F6E\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),$=s=>()=>{u[s]=u[s]?"":localStorage[s],!m.value&&!u.video&&!u.audio&&v.pause()},c=["audio","video"],a=0,p=c.length;a<p;a++)r=c[a],v[r]=$(r);return e=w(),{go:s=>{var _;if(["pen","rect"].indexOf(s)+1){if({value:_}=e,_!==s){if(L.shape=e.value=s,_)return}else{e.value="",l.draw_x();return}l.draw();return}(v[s]||l[s])()},left:t,right:y,code:C,minute:R,second:A,pause:m,config:u,draw:e}}};const E=e=>(W("data-v-2850ca62"),e=e(),q(),e),J=["title","onClick"],K=E(()=>o("b",null,null,-1)),M={class:"pause",ref:"code"},Q=E(()=>o("span",null,":",-1)),U=["title","onClick"],X={key:0};function Y(e,r){return n(),i("nav",{class:d({pause:e.pause})},[(n(!0),i(g,null,S(e.left,([a,t],p)=>(n(),i("a",{class:d([a,e.config[a]?"":"x"]),title:t,onClick:c=>e.go(a)},null,10,J))),256)),K,o("code",M,[D(N(e.minute),1),Q,D(N(e.second),1)],512),(n(!0),i(g,null,S(e.right,([a,t],p)=>(n(),i(g,null,[o("a",{class:d([a]),title:t,onClick:c=>e.go(a)},null,10,U),[3].indexOf(p)+1?(n(),i("b",X)):G("",!0)],64))),256)),o("a",{class:d(["pen",{now:e.draw=="pen"}]),onClick:r[0]||(r[0]=a=>e.go("pen")),title:"\u753B\u7B14"},null,2),o("a",{class:d(["rect",{now:e.draw=="rect"}]),onClick:r[1]||(r[1]=a=>e.go("rect")),title:"\u753B\u6846"},null,2),o("a",{class:"left",onClick:r[2]||(r[2]=a=>e.go("left")),title:"\u6536\u8D77"}),o("a",{class:"expand",onClick:r[3]||(r[3]=a=>e.go("expand"))})],2)}var ue=V(H,[["render",Y],["__scopeId","data-v-2850ca62"]]);export{ue as default};
