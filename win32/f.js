import{i as _}from"./0.js";import"./-.js";import{D as c}from"./u.js";import{s as p,o as h,k as g,c as w,m as k,a as b,_ as y}from"./9.js";import"./i.js";import"./$.js";import"./y.js";var f,v;({recbar:v}=_);f={rect:e=>{var t,n,r,a,i,o;return a=t=i=o=0,e.lineWidth=2,e.strokeStyle="rgba(255,0,0,.8)",r=!1,n=void 0,{mousedown:s=>{r=!0,i=s.clientX,o=s.clientY},mousemove:s=>{var u,l;r&&({clientX:u,clientY:l}=s,a=u-i,t=l-o,n?e.putImageData(n,0,0):n=e.getImageData(0,0,innerWidth,innerHeight),e.strokeRect(i,o,a,t))},mouseup:s=>{a=0,r=!1,n=void 0}}},pen:e=>{var t,n;return e.lineWidth=3,e.lineCap="round",e.strokeStyle="rgba(255,70,30,.8)",n=!1,t=r=>{var a,i;return{clientX:a,clientY:i}=r,e.lineTo(a,i),e.stroke(),e.beginPath(),e.moveTo(a,i)},{mousedown:r=>{n=!0,t(r)},mouseup:r=>{n=!1,e.beginPath()},mousemove:r=>{n&&t(r)}}}};var E={setup:()=>{var e,t;return e=p(),t=p(),h(()=>{var n,r,a;r=e.value,r.height=innerHeight,r.width=innerWidth,n=r.getContext("2d"),a=void 0,r.addEventListener("mouseup",()=>{v.top()}),g(()=>{var i,o,s,u,l,d,m;if(i=c.shape,i!==t.value){if(a){s=Object.entries(a);for(m of s)[o,l]=m,r.removeEventListener(o,l)}t.value=i,a=f[i](n),u=Object.entries(a);for(d of u)[o,l]=d,r.addEventListener(o,l);return v.draw_top()}})}),{shape:t,c:e}}};function W(e,t){return b(),w("canvas",{class:k([e.shape]),ref:"c"},null,2)}var j=y(E,[["render",W],["__scopeId","data-v-06942346"]]);export{j as default};
