import{i as p}from"./5.js";import{b as d}from"./1.js";import{O as i}from"./3.js";import{s as n,e as c,k as v,u as t,D as f,E as m,z as b,A as w,o as I}from"./o.js";import{_ as y}from"./h.js";var l,u;({count_down:l,recbar:u}=p);var h={setup:()=>{var e,a;return e=n(3),a=n(!1),c(()=>{var s,r;return r=void 0,s=()=>{r=setInterval(()=>{var o;o=e.value-1,o===0?(d.start(),l.close()):e.value=o},1e3)},s(),i.pause=o=>{a.value=o,o?(clearInterval(r),r=void 0):r||s()}}),{n:e,pause:a,stop:u.cancel}}};const _=e=>(b("data-v-651d9bb9"),e=e(),w(),e),k=_(()=>t("s",null,null,-1)),S=_(()=>t("i",null,"\u70B9\u6B64\u53D6\u6D88",-1));function g(e,a){return I(),v("a",{class:m({pause:e.pause}),onClick:a[0]||(a[0]=(...s)=>e.stop&&e.stop(...s))},[k,t("b",null,f(e.n),1),S],2)}var N=y(h,[["render",g],["__scopeId","data-v-651d9bb9"]]);export{N as default};
