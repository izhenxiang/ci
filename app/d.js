import{s as f,n as m,c as p,r as v,o as h,a as y}from"./-.js";const g=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};g();const L="modulepreload",l={},O="/",a=function(r,s){return!s||s.length===0?r():Promise.all(s.map(o=>{if(o=`${O}${o}`,o in l)return;l[o]=!0;const e=o.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":L,e||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),e)return new Promise((d,_)=>{i.addEventListener("load",d),i.addEventListener("error",_)})})).then(()=>r())};function P(t){switch(t){case"./page/area.vue":return a(()=>import("./k.js"),["k.js","8.css","1.js","0.js","e.js","-.js","s.js","4.css","2.js","5.css"]);case"./page/camera.vue":return a(()=>import("./i.js"),["i.js","0.css",".js","g.js","0.js","..js","e.js","-.js","6.js","3.js","1.js"]);case"./page/count_down.vue":return a(()=>import("./j.js"),["j.js","$.css","1.js","..js","0.js","-.js"]);case"./page/draw.vue":return a(()=>import("./u.js"),["u.js","..css","1.js","0.js","q.js","g.js","..js","e.js","-.js"]);case"./page/main.vue":return a(()=>import("./_.js").then(function(r){return r.m}),["_.js","3.css","a.js","1.js","-.js"]);case"./page/recbar.vue":return a(()=>import("./x.js"),["x.js","2.css","1.js","..js","0.js",".js","g.js","e.js","-.js","c.js","q.js","b.js"]);default:return new Promise(function(r,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}var b={setup:()=>{var t;return t=f(),(async()=>{var r;({hash:r}=location),t.value=(await P(`./page/${r.slice(1).split("/",1)[0]}.vue`)).default,m(E.loaded)})(),{c:t}}};function k(t,r){return h(),p(v(t.c))}var w=(t,r)=>{const s=t.__vccOpts||t;for(const[o,e]of r)s[o]=e;return s},R=w(b,[["render",k]]),u,c;c=document;u=c.createElement("div");c.oncontextmenu=()=>!1;c.body.appendChild(u);y(R).mount(u);export{w as _,a};
