import{N as T}from"./0.js";import{c as w}from"./n.js";import{i as P}from"./1.js";import{H as _}from"./9.js";import"./v.js";import"./-.js";import"./b.js";import"./6.js";var d,k,l=T(!0);({recbar:d}=P);l.stop=d.cancel;k=new Promise(o=>{l.start=o});var R=async(o,u)=>{var b,g,f,r,a,t,h;a=new MediaRecorder(o,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:512e4}),await k,typeof u=="function"&&u(),l.pause=e=>{var s,i,n,p,y,m,v,c;for(m=0,c=[],v=o.getTracks(),n=0,y=v.length;n<y;n++)i=v[n],e?s=!1:({kind:p}=i,p==="video"&&c.push(i),s=!!w[p],s&&(m+=1)),i.enabled=s;if(m===0&&e===!1){if(c.length){w.video=localStorage.video;for(i of c)i.enabled=!0}else broadcast.pause(!0);return}switch(a.state){case"pause":e||a.resume();break;case"recording":e&&a.pause()}},t=new Map,[h,b]=await E.upload("rec/"+w.src),r=0,a.ondataavailable=({data:e})=>{t.set(r,(async()=>{await h(r,e),t.delete(r)})()),++r},f=void 0,g=new Promise(e=>{f=e}),l.stop=async()=>{try{a.stop()}catch{}d.stop(),await g,await P.open(_+`video_details.html?user_token=${localStorage.uid}&id=`+await b()),await d.end()},a.onstop=async()=>{await Promise.all(t.values()),f()},a.start(5e3)};export{l as ON,R as default};
