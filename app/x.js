import{i as y}from"./2.js";import"./1.js";import"./0.js";import{h as b}from"./d.js";import{M as w}from"./9.js";import{b as j}from"./q.js";import{s as u,e as g,o as t,k as s,u as k,y as p,E as r,H as l,F as M}from"./-.js";import{_ as B}from"./e.js";import"./f.js";import"./b.js";var n;({auto_update:n}=y);var H={setup:()=>{var e,a,o,i,m,c,_,f,d;return[o,m,_,c]=b(),i=u(),a=u(),d=u(),f=void 0,e=()=>{c(),clearInterval(f)},g(async()=>{var v,h;i.value=await n.ver_now(),(a.value=j(await n.update_check()))&&(_(),[v,h]=await n.update(),a.value=j(v),e(),d.value=w(`\u66F4\u65B0\u65E5\u5FD7:

`+h))}),{now:i,latest:a,updated:d,minute:o,second:m,relaunch:()=>{n.relaunch()}}}};const N={key:0},T={key:0},V={key:0},C=p("\u66F4\u65B0\u6210\u529F\uFF0C"),E={key:1},F=["innerHTML"];function I(e,a){return t(),s(M,null,[k("p",null,[p("\u5F53\u524D\u7248\u672C "+r(e.now),1),e.latest===0?(t(),s("span",N,"(\u5F53\u524D\u7248\u672C\u662F\u6700\u65B0\u7684)")):l("",!0)]),e.latest?(t(),s("p",T,[p("\u6700\u65B0\u7248\u672C "+r(e.latest),1),e.updated?(t(),s("span",V,[C,k("a",{onClick:a[0]||(a[0]=(...o)=>e.relaunch&&e.relaunch(...o))},"\u70B9\u6B64\u91CD\u542F\u5E94\u7528")])):(t(),s("span",E,"(\u66F4\u65B0\u4E2D "+r(e.minute)+":"+r(e.second)+")",1))])):l("",!0),e.updated?(t(),s("main",{key:1,innerHTML:e.updated},null,8,F)):l("",!0)],64)}var O=B(H,[["render",I],["__scopeId","data-v-cfa709ba"]]);export{O as default};
