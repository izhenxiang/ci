import{N as S}from"./4.js";import{s as H}from"./8.js";import{c as f}from"./2.js";import{i as k}from"./5.js";import{H as M}from"./_.js";import"./.js";import"./3.js";import"./f.js";import"./b.js";var o,N,i=S(!0);({recbar:o}=k);i.stop=o.cancel;N=new Promise(s=>{i.start=s});var A=async(s,g)=>{var p,b,P,m,t,v,a,n,_;a=new MediaRecorder(s,{mimeType:"video/webm;codecs=h264",videoBitsPerSecond:2048e3}),await N,typeof g=="function"&&g(),i.pause=e=>{var c,r,l,w,T,u,h,y,d;if(f.src==="camera"){for(u=0,d=[],h=s.getTracks(),l=0,T=h.length;l<T;l++)r=h[l],e?c=!1:({kind:w}=r,w==="video"&&d.push(r),c=!!f[w],c&&(u+=1)),r.enabled=c;if(u===0&&e===!1)if(d.length){f.video=localStorage.video;for(r of d)r.enabled=!0}else{broadcast.pause(!0);return}}({state:y}=a),y.startsWith("pause")?e||a.resume():y==="recording"&&e&&a.pause()},n=new Map,[_,b,p]=await E.upload("rec/"+f.src),t=0,a.ondataavailable=({data:e})=>{n.set(t,(async()=>{await _(t,e),n.delete(t)})()),++t},m=void 0,P=new Promise(e=>{m=e}),v=()=>{try{a.stop()}catch{}},i.cancel=async()=>{v(),await p(),o.cancel()},i.reset=()=>{p().finally(H)},i.stop=async()=>{v(),o.stop(),await P,await k.open(M+`video_details.html?user_token=${localStorage.uid}&id=`+await b()),await o.end()},a.onstop=async()=>{await Promise.all(n.values()),m()},a.start(5e3)};export{i as ON,A as default};
