import{a as P,_ as j}from"./_.js";import{i as k}from"./..js";import{b as g}from"./$.js";import{O as z}from"./-.js";import{d as M}from"./5.js";/* empty css        */import{c as i}from"./9.js";import{s as d,g as W,b as q,n as N,d as c,F as O,R as A,i as l,l as B,t as E,u as v,p as G,m as H,o as f}from"./x.js";import{D as J}from"./q.js";import"./a.js";import"./y.js";var C;C=e=>(e+"").padStart(2,"0");var K=()=>{var e,r,a,t;return e=d("00"),r=d("00"),[t,a]=(()=>{var n,s;return s=0,n=void 0,[()=>{n=setInterval(()=>{++s,e.value=C(parseInt(s/60)),r.value=C(s%60)},1e3)},()=>{clearInterval(n)}]})(),[e,r,t,a]},_,V,S,w,F,u,m,L,I,$,y,p;({recbar:m}=k);[F,L,y,$]=K();I=e=>{var r,a,t;a=e.split(`
`),t=[];for(r of a)t.push(r.split(" "));return t};u=d(!1);_=!1;S=d();V=e=>{[y,$][e-0]()};p=()=>{var e;({value:e}=u),e=!e,g.pause(u.value=e),!!_&&V(e)};w={pause:p,reset:()=>{_&&(u.value||p(),N(async()=>await k.confirm.show("reset")?g.reset():p()))},cancel:()=>{if(!_){m.cancel();return}u.value||p(),N(async()=>await k.confirm.show("cancel")?g.cancel():p())},stop:()=>{g.stop(),$()}};z.start=()=>{y(),_=!0,S.value.className=""};i.src!=="camera"&&P(()=>import("./4.js"),["4.js","d.js","-.js","b.js","..js","9.js","a.js","$.js","y.js","x.js","8.js","g.js","2.js","s.js"]);var Q={setup:()=>{var e,r,a,t,n,s,b,T,D;for(t=I(`video \u6444\u50CF\u5934
audio \u9EA6\u514B\u98CE`),T=W(I(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u65B0\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),D=o=>()=>{i[o]=i[o]?"":localStorage[o],!u.value&&!i.video&&!i.audio&&i.src==="camera"&&w.pause()},b=["audio","video"],a=0,n=b.length;a<n;a++)r=b[a],w[r]=D(r);return e=d(),s=d(),q(()=>{M(s.value)}),{go:o=>{var h;if(["pen","rect"].indexOf(o)+1){if({value:h}=e,h!==o){if(J.shape=e.value=o,h)return}else{e.value="",m.draw_x();return}m.draw();return}(w[o]||m[o])()},left:t,nav:s,right:T,code:S,minute:F,second:L,pause:u,config:i,draw:e}}};const R=e=>(G("data-v-41abdd4c"),e=e(),H(),e),U=["title","onClick"],X=R(()=>l("b",null,null,-1)),Y={class:"pause",ref:"code"},Z=R(()=>l("span",null,":",-1)),x=["title","onClick"],ee={class:"draw"},ae=R(()=>l("b",null,null,-1));function re(e,r){return f(),c("nav",{class:v({pause:e.pause}),ref:"nav"},[(f(!0),c(O,null,A(e.left,([a,t],n)=>(f(),c("a",{class:v([a,e.config[a]?"":"x"]),title:t,onClick:s=>e.go(a)},null,10,U))),256)),X,l("code",Y,[B(E(e.minute),1),Z,B(E(e.second),1)],512),(f(!0),c(O,null,A(e.right,([a,t],n)=>(f(),c("a",{class:v([a]),title:t,onClick:s=>e.go(a)},null,10,x))),256)),l("div",ee,[ae,l("a",{class:v(["pen",{now:e.draw=="pen"}]),onClick:r[0]||(r[0]=a=>e.go("pen")),title:"\u753B\u7B14"},null,2),l("a",{class:v(["rect",{now:e.draw=="rect"}]),onClick:r[1]||(r[1]=a=>e.go("rect")),title:"\u753B\u6846"},null,2)]),l("a",{class:"left",onClick:r[2]||(r[2]=a=>e.go("left")),title:"\u6536\u8D77"}),l("a",{class:"expand",onClick:r[3]||(r[3]=a=>e.go("expand"))})],2)}var fe=j(Q,[["render",re],["__scopeId","data-v-41abdd4c"]]);export{fe as default};
