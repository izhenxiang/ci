import{b as d}from"./k.js";import{i as o}from"./..js";import{b as i}from"./f.js";import{M as _}from"./5.js";import{d as s,e as c,q as u,o as p,k as l,u as r,D as m,v,l as f,y as h}from"./e.js";import{_ as b}from"./_.js";import"./g.js";import"./b.js";var j={components:{btn:i},setup:()=>{var e,a;return a=s(),e=s(),c(async()=>{var t,n;return[n,t]=await o.auto_update.update(),a.value=d(n),e.value=_(`\u66F4\u65B0\u65E5\u5FD7:

`+t)}),{md:e,ver:a,relaunch:()=>{o.auto_update.relaunch()}}}};const k={class:"page"},y=["innerHTML"],M=h("\u70B9\u6B64\u91CD\u542F\u5E94\u7528\u66F4\u65B0");function x(e,a){const t=u("btn");return p(),l("div",k,[r("main",null,[r("h3",null,"\u81EA\u52A8\u5347\u7EA7\u6210\u529F ( \u7248\u672C "+m(e.ver)+")",1),r("main",{innerHTML:e.md},null,8,y)]),v(t,{onClick:e.relaunch},{default:f(()=>[M]),_:1},8,["onClick"])])}var H=b(j,[["render",x],["__scopeId","data-v-879a1f74"]]);export{H as default};
