import{s as f,n as m,c as p,r as v,o as h,a as y}from"./b2a71417.js";const g=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};g();const b="modulepreload",l={},L="./",s=function(r,n){return!n||n.length===0?r():Promise.all(n.map(i=>{if(i=`${L}${i}`,i in l)return;l[i]=!0;const e=i.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":b,e||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),e)return new Promise((d,_)=>{a.addEventListener("load",d),a.addEventListener("error",_)})})).then(()=>r())};function w(t){switch(t){case"./page/area.vue":return s(()=>import("./4dc020d7.js"),["4dc020d7.js","6997de26.css","19696688.js","b2a71417.js","14fa0606.js","ddb6e8aa.css","242a5e10.js"]);case"./page/camera.vue":return s(()=>import("./4b5dfa66.js"),["4b5dfa66.js","e9d762d2.css","513644be.js","242a5e10.js","19696688.js","b2a71417.js"]);case"./page/config.vue":return s(()=>import("./3939b41b.js"),["3939b41b.js","5ccb53fe.css","19696688.js","b2a71417.js"]);case"./page/count_down.vue":return s(()=>import("./0d80cb67.js"),["0d80cb67.js","e7b09de8.css","19696688.js","b2a71417.js"]);case"./page/main.vue":return s(()=>import("./990231a2.js"),["990231a2.js","1ad74b6a.css","b2a71417.js","242a5e10.js","19696688.js","513644be.js","14fa0606.js","ddb6e8aa.css"]);case"./page/recbar.vue":return s(()=>import("./5b5cc325.js"),["5b5cc325.js","7c0cf9e7.css","19696688.js","242a5e10.js","b2a71417.js"]);default:return new Promise(function(r,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}var O={setup:()=>{var t;return t=f(),(async()=>{var r;r=async()=>{var n;({hash:n}=location),t.value=(await w(`./page/${n.slice(1)}.vue`)).default},await r(),m(E.loaded),window.addEventListener("hashchange",r)})(),{c:t}}};function P(t,r){return h(),p(v(t.c))}var k=(t,r)=>{const n=t.__vccOpts||t;for(const[i,e]of r)n[i]=e;return n},R=k(O,[["render",P]]),c,u;u=document;c=u.createElement("div");u.body.appendChild(c);y(R).mount(c);export{k as _};