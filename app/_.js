import{b as d}from"./g.js";import{i as o}from"./0.js";import{b as c}from"./s.js";import{M as i}from"./7.js";import{d as s,e as _,q as u,o as p,k as l,u as r,E as m,v,l as f,y as b}from"./$.js";import{_ as h}from"./d.js";import"./a.js";import"./e.js";var j={components:{btn:c},setup:()=>{var e,a;return a=s(),e=s(),_(async()=>{var t,n;return[n,t]=await o.auto_update.update(),a.value=d(n),e.value=i(`\u66F4\u65B0\u65E5\u5FD7:

`+t)}),{md:e,ver:a,relaunch:()=>{o.auto_update.relaunch()}}}};const k={class:"page"},y=["innerHTML"],M=b("\u70B9\u6B64\u91CD\u542F\u5E94\u7528\u66F4\u65B0");function x(e,a){const t=u("btn");return p(),l("div",k,[r("main",null,[r("h3",null,"\u81EA\u52A8\u5347\u7EA7\u6210\u529F ( \u7248\u672C "+m(e.ver)+")",1),r("main",{innerHTML:e.md},null,8,y)]),v(t,{onClick:e.relaunch},{default:f(()=>[M]),_:1},8,["onClick"])])}var H=h(j,[["render",x],["__scopeId","data-v-1108c2a5"]]);export{H as default};
