import{N as S}from"./2.js";import{s as H}from"./$.js";import{c as f}from"./5.js";import{i as k}from"./3.js";import{H as M}from"./b.js";import"./i.js";import"./1.js";import"./g.js";import"./l.js";var o,N,i=S(!0);({recbar:o}=k);i.stop=o.cancel;N=new Promise(s=>{i.start=s});var A=async(s,h)=>{var p,b,P,m,t,v,a,n,_;a=new MediaRecorder(s,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:2e6}),await N,typeof h=="function"&&h(),i.pause=e=>{var c,r,l,w,T,u,y,g,d;if(f.src==="camera"){for(u=0,d=[],y=s.getTracks(),l=0,T=y.length;l<T;l++)r=y[l],e?c=!1:({kind:w}=r,w==="video"&&d.push(r),c=!!f[w],c&&(u+=1)),r.enabled=c;if(u===0&&e===!1)if(d.length){f.video=localStorage.video;for(r of d)r.enabled=!0}else{broadcast.pause(!0);return}}({state:g}=a),g.startsWith("pause")?e||a.resume():g==="recording"&&e&&a.pause()},n=new Map,[_,b,p]=await E.upload("rec/"+f.src),t=0,a.ondataavailable=({data:e})=>{n.set(t,(async()=>{await _(t,e),n.delete(t)})()),++t},m=void 0,P=new Promise(e=>{m=e}),v=()=>{try{a.stop()}catch{}},i.cancel=async()=>{v(),await p(),o.cancel()},i.reset=()=>{p().finally(H)},i.stop=async()=>{v(),o.stop(),await P,await k.open(M+`video_details.html?user_token=${localStorage.uid}&id=`+await b()),await o.end()},a.onstop=async()=>{await Promise.all(n.values()),m()},a.start(5e3)};export{i as ON,A as default};
