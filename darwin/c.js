import{s as m,n as f,c as v,r as y,o as g,a as h}from"./w.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};L();const O="modulepreload",_={},P="/",s=function(t,a){return!a||a.length===0?t():Promise.all(a.map(n=>{if(n=`${P}${n}`,n in _)return;_[n]=!0;const e=n.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":O,e||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),e)return new Promise((d,p)=>{i.addEventListener("load",d),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};function D(r){switch(r){case"./page/area.vue":return s(()=>import("./2.js"),["2.js","1.css","..js","-.js",".js","6.css","w.js"]);case"./page/camera.vue":return s(()=>import("./6.js"),["6.js",".css","1.js","e.js","-.js","$.js","y.js","w.js","g.js","..js","_.js"]);case"./page/confirm_cancel.vue":return s(()=>import("./x.js"),["x.js","j.js","9.css","..js",".js","6.css","w.js"]);case"./page/confirm_reset.vue":return s(()=>import("./d.js"),["d.js","j.js","9.css","..js",".js","6.css","w.js"]);case"./page/count_down.vue":return s(()=>import("./i.js"),["i.js","3.css","..js","$.js","-.js","w.js"]);case"./page/draw.vue":return s(()=>import("./z.js"),["z.js","5.css","..js","-.js","o.js","e.js","$.js","y.js","w.js"]);case"./page/main.vue":return s(()=>import("./h.js"),["h.js","0.css","2.css","8.js","..js","w.js","4.js","8.css"]);case"./page/recbar.vue":return s(()=>import("./0.js"),["0.js","..css","2.css","..js","$.js","-.js","_.js","1.js","e.js","y.js","w.js","o.js","q.js","-.css"]);case"./page/update.vue":return s(()=>import("./7.js"),["7.js","4.css","2.css","4.js","8.css","w.js","..js","-.js","$.js","y.js"]);default:return new Promise(function(t,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}var R={setup:()=>{var r;return r=m(),(async()=>{var t;({hash:t}=location),r.value=(await D(`./page/${t.slice(1).split("/",1)[0]}.vue`)).default,f(E.xing)})(),{c:r}}};function k(r,t){return g(),v(y(r.c))}var w=(r,t)=>{const a=r.__vccOpts||r;for(const[n,e]of t)a[n]=e;return a},A=w(R,[["render",k]]),c,l,u;(async()=>{var r;return r=await s(()=>import("./b.js"),[]),r.init({app:c,logErrors:!0,dsn:"https://87194e6db51949b3943a6879e8f190cd@sentry.dalukuankuan.com/5"})})();u=document;l=u.createElement("p");u.oncontextmenu=r=>{r.preventDefault()};u.body.appendChild(l);c=h(A);c.mount(l);export{w as _,s as a};
