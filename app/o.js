import{i as v}from"./0.js";import"./-.js";import{s as f,e as p,k as m,o as h}from"./d.js";import{_ as g}from"./9.js";var u;({recbar:u}=v);var x={components:{},setup:()=>{var a;return a=f(),p(()=>{var e,o,r,n,_,d,c,l;r=a.value,r.height=innerHeight,r.width=innerWidth,e=r.getContext("2d"),e.lineWidth=10,e.lineCap="round",e.strokeStyle="rgba(255,70,30,.8)",n=!1,o=t=>{var s,i;({clientX:s,clientY:i}=t),e.lineTo(s,i),e.stroke(),e.beginPath(),e.moveTo(s,i)},d=Object.entries({mousedown:t=>{n=!0,o(t)},mouseup:t=>{u.top(),n=!1,e.beginPath()},mousemove:t=>{n&&o(t)}});for(l of d)[_,c]=l,r.addEventListener(_,c)}),{c:a}}};const w={ref:"c"};function b(a,e){return h(),m("canvas",w,null,512)}var C=g(x,[["render",b],["__scopeId","data-v-67e1b9f5"]]);export{C as default};
