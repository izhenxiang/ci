"use strict";var g=require("electron"),h=require("path"),N=require("fs"),p=require("fs/promises");function q(e=["complete","interactive"]){return new Promise(t=>{e.includes(document.readyState)?t(!0):document.addEventListener("readystatechange",()=>{e.includes(document.readyState)&&t(!0)})})}function z(){var e=document.createElement("div"),t;return e.setAttribute("style",`position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;background:url('data:image/svg+xml,%0A%3Csvg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"%3E%3Ccircle cx="27.5" cy="57.5" r="5" fill="%23fd9e4b"%3E%3Canimate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="3.0303030303030303s" begin="-1.8181818181818181s"/%3E%3C/circle%3E%3Ccircle cx="42.5" cy="57.5" r="5" fill="%23fd9e4b"%3E%3Canimate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="3.0303030303030303s" begin="-1.3636363636363635s"/%3E%3C/circle%3E%3Ccircle cx="57.5" cy="57.5" r="5" fill="%23fd9e4b"%3E%3Canimate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="3.0303030303030303s" begin="-.9090909090909091s"/%3E%3C/circle%3E%3Ccircle cx="72.5" cy="57.5" r="5" fill="%23fd9e4b"%3E%3Canimate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="3.0303030303030303s" begin="-.45454545454545453s"/%3E%3C/circle%3E%3C/svg%3E') 50% 50% / 96px no-repeat;z-index:9;`),{ing(){t||(t=setTimeout(()=>{t=void 0,document.body.appendChild(e)},500))},xing(){if(t)clearTimeout(t),t=void 0;else try{document.body.removeChild(e)}catch{}}}}var F=e=>new Promise(t=>setTimeout(t,e)),R="https://testing.izhenxiang.com/",S,_,T;S=(e,t)=>fetch(R+e+".do",t);T=(e,t)=>{var r,i,a,s,d;if(e){r=new FormData,a=Object.entries(e);for(d of a)[i,s]=d,r.append(i,s);return t.body=r,!0}};_=()=>{var e;return e=new Headers,e.append("user_token",localStorage.uid),{method:"POST",headers:e}};var B=async(e,t)=>{var r;return r=await v(e,t),(await r.json()).data},v=(e,t)=>{var r;return r=_(),T(t,r),S(e,r)};const y="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",E=y.split(""),j=new Array(123);for(let e=0;e<y.length;e++)j[y.charCodeAt(e)]=e;const D=e=>{if(e<0)return`-${ntob(-e)}`;let t=e>>>0,r=e/4294967296>>>0,i="";for(;r>0;)i=E[63&t]+i,t>>>=6,t|=(63&r)<<26,r>>>=6;let a="";do a=E[63&t]+a,t>>>=6;while(t>0);return a+i},O=e=>{let t=0;const r=e.charAt(0)==="-"?1:0;for(let i=r;i<e.length;i++)t=t*64+j[e.charCodeAt(i)];return r?-t:t};var w;w=e=>p.rm(e,{recursive:!0,force:!0});var H=e=>{var t;return t=e(),r=>{var i,a,s,d,b,u,k,f,c;return u=new Set,f=!1,d=a=i=c=void 0,s=new Promise(n=>{d=n}),b=(async()=>{var n,o;c=await B("upload/start"),{uid:o}=localStorage,n=[o,c],i=h.join(await t,"upload",r,...n),n.join("/"),await p.mkdir(i,{recursive:!0})})(),k=async()=>{for(var n,o,l,m,C;u.size;){C=u.values();for(l of C){if(o=h.join(i,l),N.existsSync(o))for(;;){try{if(m=await v("upload/post",{id:c,chunkNum:parseInt(O(l)),file:new File([await p.readFile(o)],"blob")}),m.status!==200)throw new Error(await m.text())}catch(P){n=P,console.trace(n),await F(1e3);continue}await w(o);break}u.delete(l)}}},[async(n,o)=>{var l;await b,n=D(n),l=h.join(i,n),await p.writeFile(l,new DataView(await o.arrayBuffer())),u.add(n),!f&&(f=k().then(()=>{f=!1,a&&d()}))},async()=>(a=!0,await s,await w(i),await v("upload/complete",{id:c}),c),async()=>{await w(i),v("upload/cancel",{id:c})}]}},I=e=>{var t;return t=r=>new Proxy(()=>{},{apply:(i,a,s)=>e(r.join("."),s),get:(i,a)=>t([...r,a])}),t([])},L=I(g.ipcRenderer.invoke),A,x,M;({ing:x,xing:M}=z());A=Object.freeze({drag:()=>{},upload:H(L.userData),invoke:(e,t)=>g.ipcRenderer.invoke(e,t),xing:M,ing:x});(()=>{var e,t,r;t={E:A};for(e in t)r=t[e],g.contextBridge.exposeInMainWorld(e,r);q().then(x)})();
