import{v as T}from"./k.js";import{i as _}from"./1.js";var w=(r,n)=>{var e,o;for(e in n)o=n[e],r.addEventListener(e,o);return()=>{var i;i=[];for(e in n)o=n[e],i.push(r.removeEventListener(e,o));return i}},L=(r,n)=>{var e;return e=w(r,n),T(e),e};var g,c,E,h;({drag:{setBounds:h}}=_);c="pointermove";g=new Set("SELECT BUTTON A INPUT TEXTAREA".split(" "));({round:E}=Math);var I=r=>{var n,e,o,i,v,d,f,m,p,u;r.style.appRegion="no-drag",u=!1,v=e=d=f=i=o=void 0,n=t=>{var s,a;({screenX:s,screenY:a}=t),h(E(s-d+o),E(a-f+i),v,e)},m=t=>{var s,a;if(t.button===0){for(a=t.target;;){if({nodeName:s}=a,g.has(s))return;if(s==="BODY")break;a=a.parentNode}u=!0,{screenX:d,screenY:f}=t,r.setPointerCapture(t.pointerId),r.addEventListener(c,n),i=screenTop,o=screenLeft,v=outerWidth,e=outerHeight}},p=async t=>{u&&(await n(t),r.releasePointerCapture(t.pointerId),r.removeEventListener(c,n),u=!1)},L(r,{lostpointercapture:p,pointercancel:p,pointerdown:m,pointerup:p})};export{I as d};
