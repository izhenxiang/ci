import{i as _}from"./2.js";import{b as c}from"./0.js";import{O as p}from"./1.js";import{s as n,e as i,k as v,u as t,E as f,D as m,z as b,A as w,o as I}from"./-.js";import{_ as j}from"./e.js";var l,u;({count_down:l,recbar:u}=_);var y={setup:()=>{var e,a;return e=n(3),a=n(!1),i(()=>{var o,r;return r=void 0,o=()=>{r=setInterval(()=>{var s;s=e.value-1,s===0?(c.start(),l.close()):e.value=s},1e3)},o(),p.pause=s=>{a.value=s,s?(clearInterval(r),r=void 0):r||o()}}),{n:e,pause:a,stop:u.cancel}}};const d=e=>(b("data-v-651d9bb9"),e=e(),w(),e),h=d(()=>t("s",null,null,-1)),k=d(()=>t("i",null,"\u70B9\u6B64\u53D6\u6D88",-1));function S(e,a){return I(),v("a",{class:m({pause:e.pause}),onClick:a[0]||(a[0]=(...o)=>e.stop&&e.stop(...o))},[h,t("b",null,f(e.n),1),k],2)}var D=j(y,[["render",S],["__scopeId","data-v-651d9bb9"]]);export{D as default};
