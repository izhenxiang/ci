import{i as d}from"./5.js";import{b as p}from"./3.js";import{O as c}from"./4.js";import{s as l,e as i,k as v,u as n,D as f,E as m,z as w,A as b,o as I}from"./b.js";import{_ as h}from"./e.js";var t,u;({count_down:t,recbar:u}=d);var y={setup:()=>{var e,a;return e=l(3),a=l(!1),i(()=>{var s,r;return r=void 0,s=()=>{r=setInterval(()=>{var o;o=e.value-1,o===0?(t.hide(),p.start(),t.close()):e.value=o},1e3)},s(),c.pause=o=>{a.value=o,o?(clearInterval(r),r=void 0):r||s()}}),{n:e,pause:a,stop:u.cancel}}};const _=e=>(w("data-v-0b39fdc6"),e=e(),b(),e),k=_(()=>n("s",null,null,-1)),S=_(()=>n("i",null,"\u70B9\u6B64\u53D6\u6D88",-1));function g(e,a){return I(),v("a",{class:m({pause:e.pause}),onClick:a[0]||(a[0]=(...s)=>e.stop&&e.stop(...s))},[k,n("b",null,f(e.n),1),S],2)}var N=h(y,[["render",g],["__scopeId","data-v-0b39fdc6"]]);export{N as default};
