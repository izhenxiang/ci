import{i as p}from"./0.js";import{b as i}from"./$.js";import{O as c}from"./-.js";import{s as l,b as d,d as v,i as n,t as f,u as m,p as b,m as w,o as I}from"./v.js";import{_ as h}from"./_.js";var r,u;({count_down:r,recbar:u}=p);var y={setup:()=>{var e,a;return e=l(3),a=l(!1),d(()=>{var s,t;return t=void 0,s=()=>{t=setInterval(()=>{var o;o=e.value-1,o===0?(r.hide(),i.start(),r.close()):e.value=o},1e3)},s(),c.pause=o=>{a.value=o,o?(clearInterval(t),t=void 0):t||s()}}),{n:e,pause:a,stop:u.cancel}}};const _=e=>(b("data-v-f14bce30"),e=e(),w(),e),S=_(()=>n("s",null,null,-1)),g=_(()=>n("i",null,"\u70B9\u6B64\u53D6\u6D88",-1));function k(e,a){return I(),v("a",{class:m({pause:e.pause}),onClick:a[0]||(a[0]=(...s)=>e.stop&&e.stop(...s))},[S,n("b",null,f(e.n),1),g],2)}var z=h(y,[["render",k],["__scopeId","data-v-f14bce30"]]);export{z as default};
