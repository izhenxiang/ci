import{a as V,_ as z}from"./e.js";import{i as w}from"./..js";import{b as h}from"./$.js";import{O as F}from"./-.js";import{c as l}from"./d.js";import{h as L}from"./$..js";import{D as P}from"./v.js";import{s as j}from"./j.js";import{d as W,s as b,k as u,F as R,R as A,u as o,y as E,D as N,E as p,z as q,A as G,o as c}from"./x.js";import"./q.js";import"./f.js";var f,O,C,m,T,i,d,B,k,y,$,_;({recbar:d}=w);[T,B,$,y]=L();k=e=>{var r,a,s;a=e.split(`
`),s=[];for(r of a)s.push(r.split(" "));return s};i=b(!1);f=!1;C=b();O=e=>{[$,y][e-0]()};_=()=>{var e;({value:e}=i),e=!e,h.pause(i.value=e),!!f&&O(e)};m={pause:_,reset:async()=>{f&&await w.confirm.show("reset")&&j()},cancel:async()=>{f||d.cancel(),i.value||_(),await w.confirm.show("cancel")?h.cancel():_()},stop:()=>{h.stop(),y()}};F.start=()=>{$(),f=!0,C.value.className=""};l.src!=="camera"&&V(()=>import("./6.js"),["6.js","8.js","-.js","d.js","q.js","$.js","f.js","x.js","..js","c.js","i.js","1.js","y.js"]);var H={setup:()=>{var e,r,a,s,v,n,D,I;for(s=k(`video \u6444\u50CF\u5934
audio \u9EA6\u514B\u98CE`),D=W(k(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u7F6E\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),I=t=>()=>{l[t]=l[t]?"":localStorage[t],!i.value&&!l.video&&!l.audio&&l.src==="camera"&&m.pause()},n=["audio","video"],a=0,v=n.length;a<v;a++)r=n[a],m[r]=I(r);return e=b(),{go:t=>{var g;if(["pen","rect"].indexOf(t)+1){if({value:g}=e,g!==t){if(P.shape=e.value=t,g)return}else{e.value="",d.draw_x();return}d.draw();return}(m[t]||d[t])()},left:s,right:D,code:C,minute:T,second:B,pause:i,config:l,draw:e}}};const S=e=>(q("data-v-7c80a2d6"),e=e(),G(),e),J=["title","onClick"],K=S(()=>o("b",null,null,-1)),M={class:"pause",ref:"code"},Q=S(()=>o("span",null,":",-1)),U=["title","onClick"],X={class:"draw"},Y=S(()=>o("b",null,null,-1));function Z(e,r){return c(),u("nav",{class:p({pause:e.pause})},[(c(!0),u(R,null,A(e.left,([a,s],v)=>(c(),u("a",{class:p([a,e.config[a]?"":"x"]),title:s,onClick:n=>e.go(a)},null,10,J))),256)),K,o("code",M,[E(N(e.minute),1),Q,E(N(e.second),1)],512),(c(!0),u(R,null,A(e.right,([a,s],v)=>(c(),u("a",{class:p([a]),title:s,onClick:n=>e.go(a)},null,10,U))),256)),o("div",X,[Y,o("a",{class:p(["pen",{now:e.draw=="pen"}]),onClick:r[0]||(r[0]=a=>e.go("pen")),title:"\u753B\u7B14"},null,2),o("a",{class:p(["rect",{now:e.draw=="rect"}]),onClick:r[1]||(r[1]=a=>e.go("rect")),title:"\u753B\u6846"},null,2)]),o("a",{class:"left",onClick:r[2]||(r[2]=a=>e.go("left")),title:"\u6536\u8D77"}),o("a",{class:"expand",onClick:r[3]||(r[3]=a=>e.go("expand"))})],2)}var pe=z(H,[["render",Z],["__scopeId","data-v-7c80a2d6"]]);export{pe as default};
