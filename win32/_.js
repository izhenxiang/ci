import{s as m,n as f,c as v,r as y,o as g,a as h}from"./n.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};L();const O="modulepreload",_={},P="/",s=function(t,a){return!a||a.length===0?t():Promise.all(a.map(n=>{if(n=`${P}${n}`,n in _)return;_[n]=!0;const e=n.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":O,e||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),e)return new Promise((d,p)=>{i.addEventListener("load",d),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};function D(r){switch(r){case"./page/area.vue":return s(()=>import("./r.js"),["r.js","1.css","1.js","0.js","q.js","6.css","n.js"]);case"./page/camera.vue":return s(()=>import("./h.js"),["h.js",".css",".js","l.js","0.js","..js","y.js","n.js","-.js","1.js","v.js"]);case"./page/confirm_cancel.vue":return s(()=>import("./3.js"),["3.js","a.js","9.css","1.js","q.js","6.css","n.js"]);case"./page/confirm_reset.vue":return s(()=>import("./e.js"),["e.js","a.js","9.css","1.js","q.js","6.css","n.js"]);case"./page/count_down.vue":return s(()=>import("./f.js"),["f.js","3.css","1.js","..js","0.js","n.js"]);case"./page/draw.vue":return s(()=>import("./w.js"),["w.js","5.css","1.js","0.js","i.js","l.js","..js","y.js","n.js"]);case"./page/main.vue":return s(()=>import("./$.js"),["$.js","0.css","2.css","5.js","1.js","n.js","o.js","8.css"]);case"./page/recbar.vue":return s(()=>import("./8.js"),["8.js","..css","2.css","1.js","..js","0.js","v.js","n.js",".js","l.js","y.js","i.js","g.js","-.css"]);case"./page/update.vue":return s(()=>import("./7.js"),["7.js","4.css","2.css","o.js","8.css","n.js","1.js","0.js","..js","y.js"]);default:return new Promise(function(t,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}var R={setup:()=>{var r;return r=m(),(async()=>{var t;({hash:t}=location),r.value=(await D(`./page/${t.slice(1).split("/",1)[0]}.vue`)).default,f(E.xing)})(),{c:r}}};function k(r,t){return g(),v(y(r.c))}var w=(r,t)=>{const a=r.__vccOpts||r;for(const[n,e]of t)a[n]=e;return a},A=w(R,[["render",k]]),c,l,u;(async()=>{var r;return r=await s(()=>import("./9.js"),[]),r.init({app:c,logErrors:!0,dsn:"https://87194e6db51949b3943a6879e8f190cd@sentry.dalukuankuan.com/5"})})();u=document;l=u.createElement("p");u.oncontextmenu=r=>{r.preventDefault()};u.body.appendChild(l);c=h(A);c.mount(l);export{w as _,s as a};
