import{b as _}from"./q.js";import{i as n}from"./1.js";import{b as i}from"./z.js";import{M as u}from"./c.js";import{d as s,e as c,q as d,o as p,k as l,u as r,E as m,v,l as f,y as h}from"./9.js";import{_ as b}from"./b.js";import"./a.js";import"./d.js";var k={components:{btn:i},setup:()=>{var e,a;return a=s(),e=s(),c(async()=>{var t,o;return[o,t]=await n.auto_update.update(),a.value=_(o),e.value=u(`\u66F4\u65B0\u65E5\u5FD7:

`+t)}),{md:e,ver:a,relaunch:()=>{n.auto_update.relaunch()}}}};const y={class:"page"},M=["innerHTML"],C=h("\u70B9\u6B64\u91CD\u542F\u5E94\u7528\u66F4\u65B0");function g(e,a){const t=d("btn");return p(),l("div",y,[r("main",null,[r("h3",null,"\u81EA\u52A8\u5347\u7EA7\u6210\u529F ( \u7248\u672C "+m(e.ver)+")",1),r("main",{innerHTML:e.md},null,8,M)]),v(t,{onClick:e.relaunch},{default:f(()=>[C]),_:1},8,["onClick"])])}var L=b(k,[["render",g],["__scopeId","data-v-1108c2a5"]]);export{L as default};
