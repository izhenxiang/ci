import{a as F,_ as L}from"./f.js";import{i as C}from"./1.js";import{b as w}from"./..js";import{O as P}from"./0.js";import{d as M}from"./d.js";/* empty css        */import{c as i}from"./7.js";import{s as d,g as W,b as q,n as T,d as v,F as A,R as D,j as G,i as l,l as O,t as V,u as f,p as H,m as J,h as K,o as m}from"./v.js";import{D as Q}from"./o.js";import{z as U}from"./3.js";import"./g.js";import"./x.js";var h;h=e=>(e+"").padStart(2,"0");var X=()=>{var e,a,t,r;return e=d("00"),a=d("00"),[r,t]=(()=>{var s,o;return o=0,s=void 0,[()=>{s=setInterval(()=>{++o,e.value=h(parseInt(o/60)),a.value=h(o%60)},1e3)},()=>{clearInterval(s)}]})(),[e,a,r,t]},g,B,$,k,E,u,_,j,I,S,y,p;({recbar:_}=C);[E,j,y,S]=X();I=e=>{var a,t,r;t=e.split(`
`),r=[];for(a of t)r.push(a.split(" "));return r};u=d(!1);g=!1;$=d();B=e=>{[y,S][e-0]()};p=()=>{var e;({value:e}=u),e=!e,w.pause(u.value=e),g&&B(e)};k={pause:p,reset:()=>{g&&(u.value||p(),T(async()=>await C.confirm.show("reset")?w.reset():p()))},cancel:()=>{if(!g){_.cancel();return}u.value||p(),T(async()=>await C.confirm.show("cancel")?w.cancel():p())},stop:()=>{w.stop(),S()}};P.start=()=>{y(),g=!0,$.value.className=""};i.src!=="camera"&&F(()=>import("./w.js"),["w.js","-.js","0.js","n.js","1.js","7.js","g.js","..js","x.js","v.js","c.js","j.js","8.js"]);var Y={components:{zAudio:U},setup:()=>{var e,a,t,r,s,o,c,N,R;for(r=I("video \u6444\u50CF\u5934"),N=W(I(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u65B0\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),R=n=>()=>{i[n]=i[n]?"":localStorage[n],!u.value&&!i.video&&!i.audio&&i.src==="camera"&&k.pause()},c=["audio","video"],t=0,s=c.length;t<s;t++)a=c[t],k[a]=R(a);return e=d(),o=d(),q(()=>{M(o.value)}),{go:n=>{var b;if(["pen","rect"].indexOf(n)+1){if({value:b}=e,b!==n){if(Q.shape=e.value=n,b)return}else{e.value="",_.draw_x();return}_.draw();return}(k[n]||_[n])()},left:r,nav:o,right:N,code:$,minute:E,second:j,pause:u,config:i,draw:e}}};const z=e=>(H("data-v-0f2cba44"),e=e(),J(),e),Z=["title","onClick"],x=z(()=>l("b",null,null,-1)),ee={class:"pause",ref:"code"},ae=z(()=>l("span",null,":",-1)),re=["title","onClick"],te={class:"draw"},se=z(()=>l("b",null,null,-1));function oe(e,a){const t=K("z-audio");return m(),v("nav",{class:f({pause:e.pause}),ref:"nav"},[(m(!0),v(A,null,D(e.left,([r,s],o)=>(m(),v("a",{class:f([r,e.config[r]?"":"x"]),title:s,onClick:c=>e.go(r)},null,10,Z))),256)),G(t,{onClick:a[0]||(a[0]=r=>e.go("audio"))}),x,l("code",ee,[O(V(e.minute),1),ae,O(V(e.second),1)],512),(m(!0),v(A,null,D(e.right,([r,s],o)=>(m(),v("a",{class:f([r]),title:s,onClick:c=>e.go(r)},null,10,re))),256)),l("div",te,[se,l("a",{class:f(["pen",{now:e.draw=="pen"}]),onClick:a[1]||(a[1]=r=>e.go("pen")),title:"\u753B\u7B14"},null,2),l("a",{class:f(["rect",{now:e.draw=="rect"}]),onClick:a[2]||(a[2]=r=>e.go("rect")),title:"\u753B\u6846"},null,2)]),l("a",{class:"left",onClick:a[3]||(a[3]=r=>e.go("left")),title:"\u6536\u8D77"}),l("a",{class:"expand",onClick:a[4]||(a[4]=r=>e.go("expand"))})],2)}var we=L(Y,[["render",oe],["__scopeId","data-v-0f2cba44"]]);export{we as default};
