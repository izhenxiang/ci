import{a as V,_ as z}from"./i.js";import{i as h}from"./3.js";import{b as _}from"./1.js";import{O as F}from"./2.js";import{c as l}from"./5.js";import{h as L}from"./d.js";import{D as P}from"./-.js";import{d as j,s as b,k as p,F as R,R as A,u as o,y as E,D as N,E as c,z as W,A as q,o as d}from"./o.js";import"./n.js";import"./j.js";var v,O,C,g,T,i,f,B,k,y,$,n;({recbar:f}=h);[T,B,$,y]=L();k=e=>{var r,a,s;a=e.split(`
`),s=[];for(r of a)s.push(r.split(" "));return s};i=b(!1);v=!1;C=b();O=e=>{[$,y][e-0]()};n=()=>{var e;({value:e}=i),e=!e,_.pause(i.value=e),!!v&&O(e)};g={pause:n,reset:async()=>{v&&(i.value||n(),await h.confirm.show("reset")?_.reset():n())},cancel:async()=>{if(i.value||n(),!v){f.cancel();return}await h.confirm.show("cancel")?_.cancel():n()},stop:()=>{_.stop(),y()}};F.start=()=>{$(),v=!0,C.value.className=""};l.src!=="camera"&&V(()=>import("./6.js"),["6.js","f.js","2.js","$.js","3.js","5.js","n.js","1.js","j.js","o.js","c.js","k.js","4.js","v.js"]);var G={setup:()=>{var e,r,a,s,m,u,D,I;for(s=k(`video \u6444\u50CF\u5934
audio \u9EA6\u514B\u98CE`),D=j(k(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u7F6E\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),I=t=>()=>{l[t]=l[t]?"":localStorage[t],!i.value&&!l.video&&!l.audio&&l.src==="camera"&&g.pause()},u=["audio","video"],a=0,m=u.length;a<m;a++)r=u[a],g[r]=I(r);return e=b(),{go:t=>{var w;if(["pen","rect"].indexOf(t)+1){if({value:w}=e,w!==t){if(P.shape=e.value=t,w)return}else{e.value="",f.draw_x();return}f.draw();return}(g[t]||f[t])()},left:s,right:D,code:C,minute:T,second:B,pause:i,config:l,draw:e}}};const S=e=>(W("data-v-0efde5fa"),e=e(),q(),e),H=["title","onClick"],J=S(()=>o("b",null,null,-1)),K={class:"pause",ref:"code"},M=S(()=>o("span",null,":",-1)),Q=["title","onClick"],U={class:"draw"},X=S(()=>o("b",null,null,-1));function Y(e,r){return d(),p("nav",{class:c({pause:e.pause})},[(d(!0),p(R,null,A(e.left,([a,s],m)=>(d(),p("a",{class:c([a,e.config[a]?"":"x"]),title:s,onClick:u=>e.go(a)},null,10,H))),256)),J,o("code",K,[E(N(e.minute),1),M,E(N(e.second),1)],512),(d(!0),p(R,null,A(e.right,([a,s],m)=>(d(),p("a",{class:c([a]),title:s,onClick:u=>e.go(a)},null,10,Q))),256)),o("div",U,[X,o("a",{class:c(["pen",{now:e.draw=="pen"}]),onClick:r[0]||(r[0]=a=>e.go("pen")),title:"\u753B\u7B14"},null,2),o("a",{class:c(["rect",{now:e.draw=="rect"}]),onClick:r[1]||(r[1]=a=>e.go("rect")),title:"\u753B\u6846"},null,2)]),o("a",{class:"left",onClick:r[2]||(r[2]=a=>e.go("left")),title:"\u6536\u8D77"}),o("a",{class:"expand",onClick:r[3]||(r[3]=a=>e.go("expand"))})],2)}var ne=z(G,[["render",Y],["__scopeId","data-v-0efde5fa"]]);export{ne as default};
