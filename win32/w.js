import{N as H}from"./..js";import{s as M}from"./y.js";import{c as p}from"./u.js";import{i as x}from"./0.js";import{H as $}from"./2.js";import"./f.js";import"./$.js";import"./x.js";import"./j.js";var N,m,s,S,t=H(!0);({recbar:s,camera:N}=x);t.stop=s.cancel;m=()=>p.src==="camera";S=new Promise(i=>{t.start=i});var D=async(i,_)=>{var v,b,k,u,o,c,a,n,P;a=new MediaRecorder(i,{mimeType:"video/x-matroska;codecs=avc1",videoBitsPerSecond:2048e3}),await S,typeof _=="function"&&_(),t.pause=e=>{var l,r,f,w,T,g,y,h,d;if(m()){for(g=0,d=[],y=i.getTracks(),f=0,T=y.length;f<T;f++)r=y[f],e?l=!1:({kind:w}=r,w==="video"&&d.push(r),l=!!p[w],l&&(g+=1)),r.enabled=l;if(g===0&&e===!1)if(d.length){p.video=localStorage.video;for(r of d)r.enabled=!0}else{broadcast.pause(!0);return}}({state:h}=a),h.startsWith("pause")?e||a.resume():h==="recording"&&e&&a.pause()},n=new Map,[P,b,v]=await E.upload("rec/"+p.src),o=0,a.ondataavailable=({data:e})=>{n.set(o,(async()=>{await P(o,e),n.delete(o)})()),++o},u=void 0,k=new Promise(e=>{u=e}),c=()=>{try{a.stop()}catch{}},t.cancel=async()=>{c(),await v(),s.cancel()},t.reset=()=>{c(),v().finally(async()=>{if(M(),m())return await N.x_rect()})},t.stop=async()=>{c(),s.stop(m()),gc(),await k,i.getTracks().map(e=>{e.stop()}),gc(),await x.open($+`video_details.html?user_token=${localStorage.uid}&id=`+await b()),await s.end()},a.onstop=async()=>{await Promise.all(n.values()),u()},a.start(5e3)};export{t as ON,D as default};
