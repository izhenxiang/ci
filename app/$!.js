import{i as p}from"./3.js";import{b as d}from"./0.js";import{O as i}from"./1.js";import{s as n,b as c,d as v,g as r,t as f,q as m,p as b,k as w,o as I}from"./r.js";import{_ as y}from"./b.js";var l,u;({count_down:l,recbar:u}=p);var g={setup:()=>{var e,a;return e=n(3),a=n(!1),c(()=>{var s,t;return t=void 0,s=()=>{t=setInterval(()=>{var o;o=e.value-1,o===0?(d.start(),l.close()):e.value=o},1e3)},s(),i.pause=o=>{a.value=o,o?(clearInterval(t),t=void 0):t||s()}}),{n:e,pause:a,stop:u.cancel}}};const _=e=>(b("data-v-651d9bb9"),e=e(),w(),e),h=_(()=>r("s",null,null,-1)),k=_(()=>r("i",null,"\u70B9\u6B64\u53D6\u6D88",-1));function S(e,a){return I(),v("a",{class:m({pause:e.pause}),onClick:a[0]||(a[0]=(...s)=>e.stop&&e.stop(...s))},[h,r("b",null,f(e.n),1),k],2)}var x=y(g,[["render",S],["__scopeId","data-v-651d9bb9"]]);export{x as default};
