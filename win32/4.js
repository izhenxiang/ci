import{i as _}from"./3.js";import"./0.js";import{D as h}from"./l.js";import{s as p,b as c,q as g,d as w,u as b,o as k}from"./r.js";import{_ as y}from"./f.js";import"./o.js";import"./..js";import"./z.js";var f,d;({recbar:d}=_);f={rect:e=>{var t,n,r,a,i,o;return a=t=i=o=0,e.lineWidth=2,e.strokeStyle="rgba(255,0,0,.8)",r=!1,n=void 0,{mousedown:s=>{r=!0,i=s.clientX,o=s.clientY},mousemove:s=>{var u,l;r&&({clientX:u,clientY:l}=s,a=u-i,t=l-o,n?e.putImageData(n,0,0):n=e.getImageData(0,0,innerWidth,innerHeight),e.strokeRect(i,o,a,t))},mouseup:s=>{a=0,r=!1,n=void 0}}},pen:e=>{var t,n;return e.lineWidth=3,e.lineCap="round",e.strokeStyle="rgba(255,70,30,.8)",n=!1,t=r=>{var a,i;return{clientX:a,clientY:i}=r,e.lineTo(a,i),e.stroke(),e.beginPath(),e.moveTo(a,i)},{mousedown:r=>{n=!0,t(r)},mouseup:r=>{n=!1,e.beginPath()},mousemove:r=>{n&&t(r)}}}};var E={setup:()=>{var e,t;return e=p(),t=p(),c(()=>{var n,r,a;r=e.value,r.height=innerHeight,r.width=innerWidth,n=r.getContext("2d"),a=void 0,r.addEventListener("mouseup",()=>{d.top()}),g(()=>{var i,o,s,u,l,v,m;if(i=h.shape,i!==t.value){if(a){s=Object.entries(a);for(m of s)[o,l]=m,r.removeEventListener(o,l)}t.value=i,a=f[i](n),u=Object.entries(a);for(v of u)[o,l]=v,r.addEventListener(o,l);return d.draw_top()}})}),{shape:t,c:e}}};function W(e,t){return k(),w("canvas",{class:b([e.shape]),ref:"c"},null,2)}var z=y(E,[["render",W],["__scopeId","data-v-06942346"]]);export{z as default};
