import{a as L,_ as P}from"./8.js";import{i as k}from"./0.js";import{b as g}from"./-.js";import{O as j}from"./..js";import{c as i}from"./5.js";import{s as m,g as z,n as D,d as c,F as N,R as O,i as o,l as A,t as B,u as d,p as W,m as q,o as v}from"./y.js";import{D as G}from"./q.js";import"./_.js";import"./z.js";var b;b=e=>(e+"").padStart(2,"0");var H=()=>{var e,a,r,t;return e=m("00"),a=m("00"),[t,r]=(()=>{var n,s;return s=0,n=void 0,[()=>{n=setInterval(()=>{++s,e.value=b(parseInt(s/60)),a.value=b(s%60)},1e3)},()=>{clearInterval(n)}]})(),[e,a,t,r]},_,E,I,w,V,u,f,F,C,y,S,p;({recbar:f}=k);[V,F,S,y]=H();C=e=>{var a,r,t;r=e.split(`
`),t=[];for(a of r)t.push(a.split(" "));return t};u=m(!1);_=!1;I=m();E=e=>{[S,y][e-0]()};p=()=>{var e;({value:e}=u),e=!e,g.pause(u.value=e),!!_&&E(e)};w={pause:p,reset:()=>{_&&(u.value||p(),D(async()=>await k.confirm.show("reset")?g.reset():p()))},cancel:()=>{if(!_){f.cancel();return}u.value||p(),D(async()=>await k.confirm.show("cancel")?g.cancel():p())},stop:()=>{g.stop(),y()}};j.start=()=>{S(),_=!0,I.value.className=""};i.src!=="camera"&&L(()=>import("./4.js"),["4.js","7.js","..js","b.js","0.js","5.js","_.js","-.js","z.js","y.js","3.js","i.js","1.js","s.js"]);var J={setup:()=>{var e,a,r,t,n,s,R,T;for(t=C(`video \u6444\u50CF\u5934
audio \u9EA6\u514B\u98CE`),R=z(C(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u65B0\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),T=l=>()=>{i[l]=i[l]?"":localStorage[l],!u.value&&!i.video&&!i.audio&&i.src==="camera"&&w.pause()},s=["audio","video"],r=0,n=s.length;r<n;r++)a=s[r],w[a]=T(a);return e=m(),{go:l=>{var h;if(["pen","rect"].indexOf(l)+1){if({value:h}=e,h!==l){if(G.shape=e.value=l,h)return}else{e.value="",f.draw_x();return}f.draw();return}(w[l]||f[l])()},left:t,right:R,code:I,minute:V,second:F,pause:u,config:i,draw:e}}};const $=e=>(W("data-v-372f139a"),e=e(),q(),e),K=["title","onClick"],M=$(()=>o("b",null,null,-1)),Q={class:"pause",ref:"code"},U=$(()=>o("span",null,":",-1)),X=["title","onClick"],Y={class:"draw"},Z=$(()=>o("b",null,null,-1));function x(e,a){return v(),c("nav",{class:d({pause:e.pause})},[(v(!0),c(N,null,O(e.left,([r,t],n)=>(v(),c("a",{class:d([r,e.config[r]?"":"x"]),title:t,onClick:s=>e.go(r)},null,10,K))),256)),M,o("code",Q,[A(B(e.minute),1),U,A(B(e.second),1)],512),(v(!0),c(N,null,O(e.right,([r,t],n)=>(v(),c("a",{class:d([r]),title:t,onClick:s=>e.go(r)},null,10,X))),256)),o("div",Y,[Z,o("a",{class:d(["pen",{now:e.draw=="pen"}]),onClick:a[0]||(a[0]=r=>e.go("pen")),title:"\u753B\u7B14"},null,2),o("a",{class:d(["rect",{now:e.draw=="rect"}]),onClick:a[1]||(a[1]=r=>e.go("rect")),title:"\u753B\u6846"},null,2)]),o("a",{class:"left",onClick:a[2]||(a[2]=r=>e.go("left")),title:"\u6536\u8D77"}),o("a",{class:"expand",onClick:a[3]||(a[3]=r=>e.go("expand"))})],2)}var ue=P(J,[["render",x],["__scopeId","data-v-372f139a"]]);export{ue as default};
