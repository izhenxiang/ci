import{$ as N}from"./h.js";import{q as l}from"./g.js";import{i as B}from"./7.js";var I=(t,r)=>{var e;return e=N(t,r),l(e),e},E,_,s,d,T;({drag:{setBounds:T,getBounds:_}}=B);s="pointermove";E=new Set("SELECT BUTTON A INPUT TEXTAREA".split(" "));({round:d}=Math);var A=t=>{var r,e,i,o;t.style.appRegion="no-drag",i=!1,r=()=>{},e=async n=>{var u,v,f,c,g,m,p,a;if(!i&&n.button===0){for(a=n.target;;){if({nodeName:p}=a,E.has(p))return;if(p==="BODY")break;a=a.parentNode}i=!0,{screenX:g,screenY:m}=n,{x:v,y:f,height:u,width:c}=await _(),r=y=>{var w,h;({screenX:w,screenY:h}=y),T(d(w-g+v),d(h-m+f),c,u)},t.setPointerCapture(n.pointerId),t.addEventListener(s,r)}},o=async n=>{i&&(await r(n),t.releasePointerCapture(n.pointerId),t.removeEventListener(s,r),r=()=>{},i=!1)},I(t,{lostpointercapture:o,pointercancel:o,pointerdown:e,pointerup:o})};export{A as d};
