import{i as w}from"./..js";import"./-.js";import"./$.js";import{h as b}from"./9.js";import{M}from"./d.js";import{b as k}from"./i.js";import{s as d,e as g,o as t,k as o,u as y,y as p,E as s,I as l,F as B}from"./8.js";import{_ as I}from"./c.js";import"./e.js";var r;({auto_update:r}=w);var N={setup:()=>{var e,a,n,i,m,_,c,v,u;return[n,m,c,_]=b(),i=d(),a=d(),u=d(),v=void 0,e=()=>{_(),clearInterval(v)},g(async()=>{var h,f;i.value=await r.ver_now(),(a.value=k(await r.update_check()))&&(c(),[h,f]=await r.update(),a.value=k(h),e(),u.value=M(`\u66F4\u65B0\u65E5\u5FD7:

`+f))}),{now:i,latest:a,updated:u,minute:n,second:m,relaunch:()=>{r.relaunch()}}}};const T={key:0},V={key:0},C={key:0},E=p("\u66F4\u65B0\u6210\u529F\uFF0C"),F={key:1},H=["innerHTML"];function L(e,a){return t(),o(B,null,[y("p",null,[p("\u5F53\u524D\u7248\u672C "+s(e.now),1),e.latest===0?(t(),o("span",T,"(\u5F53\u524D\u7248\u672C\u662F\u6700\u65B0\u7684)")):l("",!0)]),e.latest?(t(),o("p",V,[p("\u6700\u65B0\u7248\u672C "+s(e.latest),1),e.updated?(t(),o("span",C,[E,y("a",{onClick:a[0]||(a[0]=(...n)=>e.relaunch&&e.relaunch(...n))},"\u70B9\u6B64\u91CD\u542F\u5E94\u7528")])):(t(),o("span",F,"(\u66F4\u65B0\u4E2D "+s(e.minute)+":"+s(e.second)+")",1))])):l("",!0),e.updated?(t(),o("main",{key:1,innerHTML:e.updated},null,8,H)):l("",!0)],64)}var K=I(N,[["render",L],["__scopeId","data-v-be7239c0"]]);export{K as default};
