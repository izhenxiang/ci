import{i as j}from"./f055c35d.js";import"./c73e65f4.js";import{h as w}from"./48db47c4.js";import{b as k,M as b}from"./0f4f4be3.js";import{s as u,e as g,o as t,B as n,q as y,v as l,C as r,G as p,F as M}from"./9426e368.js";import{_ as B}from"./index.js";import"./ea62816e.js";var s;({auto_update:s}=j);var C={setup:()=>{var e,a,o,i,m,c,_,v,d;return[o,m,_,c]=w(),i=u(),a=u(),d=u(),v=void 0,e=()=>{c(),clearInterval(v)},g(async()=>{var f,h;i.value=await s.ver_now(),(a.value=k(await s.update_check()))&&(_(),[f,h]=await s.update(),a.value=k(f),e(),d.value=b(`\u66F4\u65B0\u65E5\u5FD7:

`+h))}),{now:i,latest:a,updated:d,minute:o,second:m,relaunch:()=>{s.relaunch()}}}};const N={key:0},T={key:0},V={key:0},F=l("\u66F4\u65B0\u6210\u529F\uFF0C"),H={key:1},I=["innerHTML"];function L(e,a){return t(),n(M,null,[y("p",null,[l("\u5F53\u524D\u7248\u672C "+r(e.now),1),e.latest===0?(t(),n("span",N,"(\u5F53\u524D\u7248\u672C\u662F\u6700\u65B0\u7684)")):p("",!0)]),e.latest?(t(),n("p",T,[l("\u6700\u65B0\u7248\u672C "+r(e.latest),1),e.updated?(t(),n("span",V,[F,y("a",{onClick:a[0]||(a[0]=(...o)=>e.relaunch&&e.relaunch(...o))},"\u70B9\u6B64\u91CD\u542F\u5E94\u7528")])):(t(),n("span",H,"(\u66F4\u65B0\u4E2D "+r(e.minute)+":"+r(e.second)+")",1))])):p("",!0),e.updated?(t(),n("main",{key:1,innerHTML:e.updated},null,8,I)):p("",!0)],64)}var A=B(C,[["render",L],["__scopeId","data-v-a4440d7c"]]);export{A as default};
