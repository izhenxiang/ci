import{s as c,b as F,o as L,O as R,l as P,c as v,F as T,R as A,g as M,f as l,i as D,t as V,m as f,p as W,j as q,e as G,a as m,_ as H}from"./9.js";import{i as C}from"./0.js";import{b as w}from"./$.js";import{O as J}from"./-.js";import{d as K}from"./5.js";/* empty css        */import{c as i}from"./j.js";import{D as Q}from"./u.js";import{z as U}from"./_.js";import"./i.js";import"./y.js";var h;h=e=>(e+"").padStart(2,"0");var X=()=>{var e,a,t,r;return e=c("00"),a=c("00"),[r,t]=(()=>{var s,o;return o=0,s=void 0,[()=>{s=setInterval(()=>{++o,e.value=h(parseInt(o/60)),a.value=h(o%60)},1e3)},()=>{clearInterval(s)}]})(),[e,a,r,t]},g,B,$,k,E,u,_,j,I,S,y,p;({recbar:_}=C);[E,j,y,S]=X();I=e=>{var a,t,r;t=e.split(`
`),r=[];for(a of t)r.push(a.split(" "));return r};u=c(!1);g=!1;$=c();B=e=>{[y,S][e-0]()};p=()=>{var e;({value:e}=u),e=!e,w.pause(u.value=e),g&&B(e)};k={pause:p,reset:()=>{g&&(u.value||p(),R(async()=>await C.confirm.show("reset")?w.reset():p()))},cancel:()=>{if(!g){_.cancel();return}u.value||p(),R(async()=>await C.confirm.show("cancel")?w.cancel():p())},stop:()=>{w.stop(),S()}};J.start=()=>{y(),g=!0,$.value.className=""};i.src!=="camera"&&P(()=>import("./.js"),[".js","2.js","-.js","4.js","0.js","j.js","i.js","$.js","y.js","9.js","7.css","6.js","3.js","h.js"]);var Y={components:{zAudio:U},setup:()=>{var e,a,t,r,s,o,d,N,O;for(r=I("video \u6444\u50CF\u5934"),N=F(I(`pause \u6682\u505C
stop \u7ED3\u675F\u5F55\u5236
reset \u91CD\u65B0\u5F55\u5236
cancel \u53D6\u6D88\u5F55\u5236`)),O=n=>()=>{i[n]=i[n]?"":localStorage[n],!u.value&&!i.video&&!i.audio&&i.src==="camera"&&k.pause()},d=["audio","video"],t=0,s=d.length;t<s;t++)a=d[t],k[a]=O(a);return e=c(),o=c(),L(()=>{K(o.value)}),{go:n=>{var b;if(["pen","rect"].indexOf(n)+1){if({value:b}=e,b!==n){if(Q.shape=e.value=n,b)return}else{e.value="",_.draw_x();return}_.draw();return}(k[n]||_[n])()},left:r,nav:o,right:N,code:$,minute:E,second:j,pause:u,config:i,draw:e}}};const z=e=>(W("data-v-0f2cba44"),e=e(),q(),e),Z=["title","onClick"],x=z(()=>l("b",null,null,-1)),ee={class:"pause",ref:"code"},ae=z(()=>l("span",null,":",-1)),re=["title","onClick"],te={class:"draw"},se=z(()=>l("b",null,null,-1));function oe(e,a){const t=G("z-audio");return m(),v("nav",{class:f({pause:e.pause}),ref:"nav"},[(m(!0),v(T,null,A(e.left,([r,s],o)=>(m(),v("a",{class:f([r,e.config[r]?"":"x"]),title:s,onClick:d=>e.go(r)},null,10,Z))),256)),M(t,{onClick:a[0]||(a[0]=r=>e.go("audio"))}),x,l("code",ee,[D(V(e.minute),1),ae,D(V(e.second),1)],512),(m(!0),v(T,null,A(e.right,([r,s],o)=>(m(),v("a",{class:f([r]),title:s,onClick:d=>e.go(r)},null,10,re))),256)),l("div",te,[se,l("a",{class:f(["pen",{now:e.draw=="pen"}]),onClick:a[1]||(a[1]=r=>e.go("pen")),title:"\u753B\u7B14"},null,2),l("a",{class:f(["rect",{now:e.draw=="rect"}]),onClick:a[2]||(a[2]=r=>e.go("rect")),title:"\u753B\u6846"},null,2)]),l("a",{class:"left",onClick:a[3]||(a[3]=r=>e.go("left")),title:"\u6536\u8D77"}),l("a",{class:"expand",onClick:a[4]||(a[4]=r=>e.go("expand"))})],2)}var ge=H(Y,[["render",oe],["__scopeId","data-v-0f2cba44"]]);export{ge as default};
