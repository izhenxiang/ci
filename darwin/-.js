import{N as H}from"./0.js";import{s as M}from"./n.js";import{c as p}from"./7.js";import{i as N}from"./1.js";import{H as $}from"./c.js";import"./g.js";import"./..js";import"./x.js";import"./v.js";var S,m,s,x,i=H(!0);({recbar:s,camera:S}=N);i.stop=s.cancel;m=()=>p.src==="camera";x=new Promise(t=>{i.start=t});var D=async(t,b)=>{var v,_,P,u,o,c,a,n,T;a=new MediaRecorder(t,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:3048e3}),await x,typeof b=="function"&&b(),i.pause=e=>{var l,r,f,w,k,g,y,h,d;if(m()){for(g=0,d=[],y=t.getTracks(),f=0,k=y.length;f<k;f++)r=y[f],e?l=!1:({kind:w}=r,w==="video"&&d.push(r),l=!!p[w],l&&(g+=1)),r.enabled=l;if(g===0&&e===!1)if(d.length){p.video=localStorage.video;for(r of d)r.enabled=!0}else{broadcast.pause(!0);return}}({state:h}=a),h.startsWith("pause")?e||a.resume():h==="recording"&&e&&a.pause()},n=new Map,[T,_,v]=await E.upload("rec/"+p.src),o=0,a.ondataavailable=({data:e})=>{n.set(o,(async()=>{await T(o,e),n.delete(o)})()),++o},u=void 0,P=new Promise(e=>{u=e}),c=()=>{try{a.stop()}catch{}},i.cancel=async()=>{c(),await v(),s.cancel()},i.reset=()=>{c(),v().finally(async()=>{if(M(),m())return await S.x_rect()})},i.stop=async()=>{c(),s.stop(m()),gc(),await P,t.getTracks().map(e=>{e.stop()}),gc(),await N.open($+`video_details.html?user_token=${localStorage.uid}&id=`+await _()),await s.end()},a.onstop=async()=>{await Promise.all(n.values()),u()},a.start(5e3)};export{i as ON,D as default};
