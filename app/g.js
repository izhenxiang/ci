import{s as m,n as f,c as v,r as y,o as g,a as h}from"./$.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}};L();const O="modulepreload",_={},P="/",s=function(t,a){return!a||a.length===0?t():Promise.all(a.map(o=>{if(o=`${P}${o}`,o in _)return;_[o]=!0;const e=o.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":O,e||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),e)return new Promise((d,p)=>{i.addEventListener("load",d),i.addEventListener("error",p)})})).then(()=>t())};function b(r){switch(r){case"./page/area.vue":return s(()=>import("./d.js"),["d.js","8.css","2.js","1.js","h.js","$.js","o.js","2.css","3.js","3.css"]);case"./page/camera.vue":return s(()=>import("./7.js"),["7.js","-.css","-.js","s.js","1.js","..js","h.js","$.js","k.js","4.js","2.js"]);case"./page/count_down.vue":return s(()=>import("./q.js"),["q.js","$.css","2.js","..js","1.js","$.js"]);case"./page/draw.vue":return s(()=>import("./w.js"),["w.js","..css","2.js","1.js","a.js","s.js","..js","h.js","$.js"]);case"./page/main.vue":return s(()=>import("./c.js"),["c.js","1.css","f.js","2.js","$.js","l.js"]);case"./page/recbar.vue":return s(()=>import("./e.js"),["e.js","6.css","2.js","..js","1.js","-.js","s.js","h.js","$.js","b.js","a.js","8.js"]);case"./page/update.vue":return s(()=>import("./5.js"),["5.js",".css","2.js","1.js","..js","b.js","$.js","_.js","h.js","l.js"]);default:return new Promise(function(t,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}var w={setup:()=>{var r;return r=m(),(async()=>{var t;({hash:t}=location),r.value=(await b(`./page/${t.slice(1).split("/",1)[0]}.vue`)).default,f(E.xing)})(),{c:r}}};function D(r,t){return g(),v(y(r.c))}var R=(r,t)=>{const a=r.__vccOpts||r;for(const[o,e]of t)a[o]=e;return a},k=R(w,[["render",D]]),u,l,c;(async()=>{var r;return r=await s(()=>import("./i.js"),[]),r.init({app:u,logErrors:!0,dsn:"http://b8a7d158032c49c0bbd9adc792cbb632@sentry.izhenxiang.com/4"})})();c=document;l=c.createElement("p");c.oncontextmenu=r=>{r.preventDefault()};c.body.appendChild(l);u=h(k);u.mount(l);export{R as _,s as a};
