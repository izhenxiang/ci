import{i as _}from"./4.js";import"./3.js";import{D as c}from"./n.js";import{s as v,e as h,C as g,k as b,D as w,o as k}from"./0.js";import{_ as j}from"./e.js";import"./g.js";import"./1.js";import"./f.js";var m,u;({recbar:u}=_);m={rect:e=>{var s,o,r,a,t,n;return a=o=t=n=0,e.lineWidth=2,e.strokeStyle=s="rgba(255,0,0,.8)",r=!1,{mousedown:i=>{r=!0,t=i.clientX,n=i.clientY},mousemove:i=>{var f,l;r&&(a&&(e.globalCompositeOperation="destination-out",e.strokeStyle="#fff",e.strokeRect(t,n,a,o),e.fillRect(t,n,a,o),e.globalCompositeOperation="source-over",e.strokeStyle=s),{clientX:f,clientY:l}=i,a=f-t,o=l-n,e.strokeRect(t,n,a,o))},mouseup:i=>{a=0,r=!1}}},pen:e=>{var s,o;return e.lineWidth=3,e.lineCap="round",e.strokeStyle="rgba(255,70,30,.8)",o=!1,s=r=>{var a,t;return{clientX:a,clientY:t}=r,e.lineTo(a,t),e.stroke(),e.beginPath(),e.moveTo(a,t)},{mousedown:r=>{o=!0,s(r)},mouseup:r=>{o=!1,e.beginPath()},mousemove:r=>{o&&s(r)}}}};var y={setup:()=>{var e,s;return e=v(),s=v(),h(()=>{var o,r,a;r=e.value,r.height=innerHeight,r.width=innerWidth,o=r.getContext("2d"),a=void 0,r.addEventListener("mouseup",()=>{u.top()}),g(()=>{var t,n,i,f,l,p,d;if(t=c.shape,t!==s.value){if(a){i=Object.entries(a);for(d of i)[n,l]=d,r.removeEventListener(n,l)}s.value=t,a=m[t](o),f=Object.entries(a);for(p of f)[n,l]=p,r.addEventListener(n,l);return u.draw_top()}})}),{shape:s,c:e}}};function C(e,s){return k(),b("canvas",{class:w([e.shape]),ref:"c"},null,2)}var Y=j(y,[["render",C],["__scopeId","data-v-161ab5e8"]]);export{Y as default};
