import{N}from"./..js";import{e as S}from"./c.js";import{c as v}from"./4.js";import{i as T}from"./0.js";import{m as D}from"./1.js";var p,P,u=N(!0);({recbar:p}=T);u.stop=p.cancel;P=new Promise(e=>{u.start=e});var R=async(e,s)=>{var a,o,d,h,w,i,f,b,j;i=new MediaRecorder(e,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:1024e4}),await P,typeof s=="function"&&s(),u.pause=r=>{var t,n,l,g,k,y,_,m;for(y=0,m=[],_=e.getTracks(),l=0,k=_.length;l<k;l++)n=_[l],r?t=!1:({kind:g}=n,g==="video"&&m.push(n),t=!!v[g],t&&(y+=1)),n.enabled=t;if(y===0&&r===!1){if(m.length){v.video=localStorage.video;for(n of m)n.enabled=!0}else broadcast.pause(!0);return}switch(i.state){case"pause":r||i.resume();break;case"recording":r&&i.pause()}},f=new Map,a=+new Date,b=S(parseInt(a/1e3)),[j,d]=await E.upload("rec/"+v.src,b),o=0,i.ondataavailable=({data:r})=>{var t;t=o,o=new Date-a,f.set(o,(async()=>{await j(t,r),f.delete(t)})())},w=void 0,h=new Promise(r=>{w=r}),u.stop=async()=>{i.stop(),p.stop(b),await h,await d(),p.end()},i.onstop=async()=>{await Promise.all(f.values()),w()},i.start(5e3)},c,q=c=async function(e){var s,a,o,d;if(s=localStorage[e],s&&(a=await D[e](s),a)){if(d=a.getTracks(),!v[e])for(o of d)o.enabled=!1;return a}return[]},z=c.bind(c,"audio");c.bind(c,"video");export{z as a,q as m,R as r};
