import{s as m,n as f,c as v,r as y,o as g,a as h}from"./o.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}};L();const O="modulepreload",_={},P="/",s=function(t,a){return!a||a.length===0?t():Promise.all(a.map(o=>{if(o=`${P}${o}`,o in _)return;_[o]=!0;const e=o.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":O,e||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),e)return new Promise((d,p)=>{i.addEventListener("load",d),i.addEventListener("error",p)})})).then(()=>t())};function D(r){switch(r){case"./page/area.vue":return s(()=>import("./$-.js"),["$-.js","9.css","3.js","1.js","e.js","o.js","7.js","0.css","$0.js","3.css"]);case"./page/camera.vue":return s(()=>import("./$!.js"),["$!.js","..css","5.js","j.js","1.js","0.js","e.js","o.js","g.js","4.js","3.js"]);case"./page/confirm_cancel.vue":return s(()=>import("./.js"),[".js","l.js","7.css","3.js","$0.js","3.css","o.js"]);case"./page/confirm_reset.vue":return s(()=>import("./..js"),["..js","l.js","7.css","3.js","$0.js","3.css","o.js"]);case"./page/count_down.vue":return s(()=>import("./f.js"),["f.js",".css","3.js","0.js","1.js","o.js"]);case"./page/draw.vue":return s(()=>import("./r.js"),["r.js","-.css","3.js","1.js","-.js","j.js","0.js","e.js","o.js"]);case"./page/main.vue":return s(()=>import("./n.js"),["n.js","2.css","_.js","3.js","o.js","k.js"]);case"./page/recbar.vue":return s(()=>import("./9.js"),["9.js","$.css","3.js","0.js","1.js","5.js","j.js","e.js","o.js","a.js","-.js"]);case"./page/update.vue":return s(()=>import("./v.js"),["v.js","4.css","3.js","1.js","0.js","a.js","o.js","8.js","e.js","k.js"]);default:return new Promise(function(t,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}var R={setup:()=>{var r;return r=m(),(async()=>{var t;({hash:t}=location),r.value=(await D(`./page/${t.slice(1).split("/",1)[0]}.vue`)).default,f(E.xing)})(),{c:r}}};function k(r,t){return g(),v(y(r.c))}var A=(r,t)=>{const a=r.__vccOpts||r;for(const[o,e]of t)a[o]=e;return a},I=A(R,[["render",k]]),c,l,u;(async()=>{var r;return r=await s(()=>import("./x.js"),[]),r.init({app:c,logErrors:!0,dsn:"https://87194e6db51949b3943a6879e8f190cd@sentry.dalukuankuan.com/5"})})();u=document;l=u.createElement("p");u.oncontextmenu=r=>{r.preventDefault()};u.body.appendChild(l);c=h(I);c.mount(l);export{A as _,s as a};
