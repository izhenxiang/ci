import{i as c}from"./4.js";import{b as p}from"./..js";import{O as d}from"./2.js";import{s as l,o as i,c as v,f as n,t as f,m,p as w,j as b,a as I,_ as h}from"./a.js";var r,u;({count_down:r,recbar:u}=c);var y={setup:()=>{var e,a;return e=l(3),a=l(!1),i(()=>{var s,t;return t=void 0,s=()=>{t=setInterval(()=>{var o;o=e.value-1,o===0?(r.hide(),p.start(),r.close()):e.value=o},1e3)},s(),d.pause=o=>{a.value=o,o?(clearInterval(t),t=void 0):t||s()}}),{n:e,pause:a,stop:u.cancel}}};const _=e=>(w("data-v-f14bce30"),e=e(),b(),e),S=_(()=>n("s",null,null,-1)),g=_(()=>n("i",null,"\u70B9\u6B64\u53D6\u6D88",-1));function k(e,a){return I(),v("a",{class:m({pause:e.pause}),onClick:a[0]||(a[0]=(...s)=>e.stop&&e.stop(...s))},[S,n("b",null,f(e.n),1),g],2)}var j=h(y,[["render",k],["__scopeId","data-v-f14bce30"]]);export{j as default};
