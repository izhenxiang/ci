import{i as _}from"./1.js";import"./0.js";import{D as c}from"./r.js";import{s as m,e as h,C as g,k as w,D as j,o as b}from"./-.js";import{_ as k}from"./d.js";import"./g.js";import"./..js";import"./e.js";var p,u;({recbar:u}=_);p={rect:e=>{var t,n,r,a,i,s;return a=t=i=s=0,e.lineWidth=2,e.strokeStyle="rgba(255,0,0,.8)",r=!1,n=void 0,{mousedown:o=>{r=!0,i=o.clientX,s=o.clientY},mousemove:o=>{var d,l;r&&({clientX:d,clientY:l}=o,a=d-i,t=l-s,n?e.putImageData(n,0,0):n=e.getImageData(0,0,innerWidth,innerHeight),e.strokeRect(i,s,a,t))},mouseup:o=>{a=0,r=!1,n=void 0}}},pen:e=>{var t,n;return e.lineWidth=3,e.lineCap="round",e.strokeStyle="rgba(255,70,30,.8)",n=!1,t=r=>{var a,i;return{clientX:a,clientY:i}=r,e.lineTo(a,i),e.stroke(),e.beginPath(),e.moveTo(a,i)},{mousedown:r=>{n=!0,t(r)},mouseup:r=>{n=!1,e.beginPath()},mousemove:r=>{n&&t(r)}}}};var y={setup:()=>{var e,t;return e=m(),t=m(),h(()=>{var n,r,a;r=e.value,r.height=innerHeight,r.width=innerWidth,n=r.getContext("2d"),a=void 0,r.addEventListener("mouseup",()=>{u.top()}),g(()=>{var i,s,o,d,l,v,f;if(i=c.shape,i!==t.value){if(a){o=Object.entries(a);for(f of o)[s,l]=f,r.removeEventListener(s,l)}t.value=i,a=p[i](n),d=Object.entries(a);for(v of d)[s,l]=v,r.addEventListener(s,l);return u.draw_top()}})}),{shape:t,c:e}}};function D(e,t){return b(),w("canvas",{class:j([e.shape]),ref:"c"},null,2)}var z=k(y,[["render",D],["__scopeId","data-v-5e72cd89"]]);export{z as default};
