import{s as f,n as m,c as p,r as v,o as h,a as y}from"./-.js";const g=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};g();const b="modulepreload",l={},L="/",a=function(r,s){return!s||s.length===0?r():Promise.all(s.map(o=>{if(o=`${L}${o}`,o in l)return;l[o]=!0;const e=o.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":b,e||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),e)return new Promise((d,_)=>{i.addEventListener("load",d),i.addEventListener("error",_)})})).then(()=>r())};function O(t){switch(t){case"./page/area.vue":return a(()=>import("./e.js"),["e.js","8.css","2.js","1.js","f.js","-.js","..js","3.css","$.js","5.css"]);case"./page/camera.vue":return a(()=>import("./r.js"),["r.js","0.css",".js","i.js","1.js","0.js","f.js","-.js","4.js","3.js","2.js"]);case"./page/count_down.vue":return a(()=>import("./8.js"),["8.js","$.css","2.js","0.js","1.js","-.js"]);case"./page/draw.vue":return a(()=>import("./g.js"),["g.js","..css","2.js","1.js","n.js","i.js","0.js","f.js","-.js"]);case"./page/main.vue":return a(()=>import("./o.js").then(function(r){return r.m}),["o.js","4.css","a.js","2.js","-.js"]);case"./page/recbar.vue":return a(()=>import("./j.js"),["j.js","2.css","2.js","0.js","1.js",".js","i.js","f.js","-.js","c.js","n.js","b.js"]);default:return new Promise(function(r,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}var P={setup:()=>{var t;return t=f(),(async()=>{var r;({hash:r}=location),t.value=(await O(`./page/${r.slice(1).split("/",1)[0]}.vue`)).default,m(E.loaded)})(),{c:t}}};function k(t,r){return h(),p(v(t.c))}var w=(t,r)=>{const s=t.__vccOpts||t;for(const[o,e]of r)s[o]=e;return s},R=w(P,[["render",k]]),u,c;c=document;u=c.createElement("div");c.oncontextmenu=()=>!1;c.body.appendChild(u);y(R).mount(u);export{w as _,a};
