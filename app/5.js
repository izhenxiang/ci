import{i as w}from"./3.js";import"./1.js";import"./..js";import{h as M}from"./a.js";import{M as b}from"./7.js";import{b as y}from"./k.js";import{s as d,e as g,k as t,u as k,y as l,D as s,I as p,F as B,o as r}from"./.js";import{_ as I}from"./d.js";import"./e.js";var n;({auto_update:n}=w);var N={setup:()=>{var e,a,o,u,_,m,v,c,i;return[o,_,v,m]=M(),u=d(),a=d(),i=d(),c=void 0,e=()=>{m(),clearInterval(c)},g(async()=>{var h,f;u.value=await n.ver_now(),(a.value=y(await n.update_check()))&&(v(),[h,f]=await n.update(),a.value=y(h),e(),i.value=b(`\u66F4\u65B0\u65E5\u5FD7:

`+f))}),{now:u,latest:a,updated:i,minute:o,second:_,relaunch:()=>{n.relaunch()}}}};const T={key:0},V={key:0},C={key:0},D=l("\u66F4\u65B0\u6210\u529F\uFF0C"),F={key:1},H=["innerHTML"];function L(e,a){return r(),t(B,null,[k("p",null,[l("\u5F53\u524D\u7248\u672C "+s(e.now),1),e.latest===0?(r(),t("span",T,"(\u5F53\u524D\u7248\u672C\u662F\u6700\u65B0\u7684)")):p("",!0)]),e.latest?(r(),t("p",V,[l("\u6700\u65B0\u7248\u672C "+s(e.latest),1),e.updated?(r(),t("span",C,[D,k("a",{onClick:a[0]||(a[0]=(...o)=>e.relaunch&&e.relaunch(...o))},"\u70B9\u6B64\u91CD\u542F\u5E94\u7528")])):(r(),t("span",F,"(\u66F4\u65B0\u4E2D "+s(e.minute)+":"+s(e.second)+")",1))])):p("",!0),e.updated?(r(),t("main",{key:1,innerHTML:e.updated},null,8,H)):p("",!0)],64)}var K=I(N,[["render",L],["__scopeId","data-v-c352b71a"]]);export{K as default};
