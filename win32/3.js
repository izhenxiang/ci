import{i as _}from"./2.js";import{b as d}from"./-.js";import{O as i}from"./..js";import{s as l,o as p,v,c as f,f as r,t as m,m as w,p as y,j as I,a as h,_ as b}from"./a.js";var n,u;({count_down:n,recbar:u}=_);var k={setup:()=>{var e,a;return e=l(3),a=l(!1),p(()=>{var o,t;return t=void 0,o=()=>{t=setInterval(async()=>{var s;s=e.value-1,s===0?(await n.hide(),v(()=>{d.start(),n.close()})):e.value=s},1e3)},o(),i.pause=s=>{a.value=s,s?(clearInterval(t),t=void 0):t||o()}}),{n:e,pause:a,stop:u.cancel}}};const c=e=>(y("data-v-18275cd5"),e=e(),I(),e),S=c(()=>r("s",null,null,-1)),g=c(()=>r("i",null,"\u70B9\u6B64\u53D6\u6D88",-1));function B(e,a){return h(),f("a",{class:w({pause:e.pause}),onClick:a[0]||(a[0]=(...o)=>e.stop&&e.stop(...o))},[S,r("b",null,m(e.n),1),g],2)}var j=b(k,[["render",B],["__scopeId","data-v-18275cd5"]]);export{j as default};
