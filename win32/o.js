import{N as x}from"./..js";import{s as H}from"./3.js";import{c}from"./.js";import{i as N}from"./0.js";import{H as M}from"./9.js";import"./n.js";import"./-.js";import"./y.js";import"./q.js";var S,m,n,$,i=x(!0);({recbar:n,camera:S}=N);i.stop=n.cancel;m=()=>c.src==="camera";$=new Promise(t=>{i.start=t});var D=async(t,b)=>{var v,_,P,u,s,l,r,d,T;r=new MediaRecorder(t,{mimeType:"video/webm;codecs="+(c.area?"h264":"vp9"),videoBitsPerSecond:2048e3}),await $,typeof b=="function"&&b(),i.pause=e=>{var a,o,f,w,k,g,y,h,p;if(m()){for(g=0,p=[],y=t.getTracks(),f=0,k=y.length;f<k;f++)o=y[f],e?a=!1:({kind:w}=o,w==="video"&&p.push(o),a=!!c[w],a&&(g+=1)),o.enabled=a;if(g===0&&e===!1)if(p.length){c.video=localStorage.video;for(o of p)o.enabled=!0}else{broadcast.pause(!0);return}}({state:h}=r),h.startsWith("pause")?e||r.resume():h==="recording"&&e&&r.pause()},d=new Map,[T,_,v]=await E.upload("rec/"+c.src),s=0,r.ondataavailable=({data:e})=>{d.set(s,(async()=>{await T(s,e),d.delete(s)})()),++s},u=void 0,P=new Promise(e=>{u=e}),l=()=>{var e;try{r.stop()}catch(a){e=a,console.error(e)}},i.cancel=async()=>{l(),await v(),n.cancel()},i.reset=()=>{l(),v().finally(async()=>{if(H(),m())return await S.x_rect()})},i.stop=async()=>{l(),n.stop(m()),gc(),await P,t.getTracks().map(e=>{e.stop()}),gc(),await N.open(M+`video_details.html?user_token=${localStorage.uid}&id=`+await _()),await n.end()},r.onstop=async()=>{await Promise.all(d.values()),u()},r.onerror=e=>{console.error(`record \u274C ${e.error.name}`)},r.start(5e3)};export{i as ON,D as default};
