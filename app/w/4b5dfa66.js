import{m as D}from"./513644be.js";import{c as u}from"./242a5e10.js";import{O as v,b as S,i as I}from"./19696688.js";import{s as R,e as N,B as V,o as q,x as z}from"./b2a71417.js";import{_ as A}from"./index.js";var _,k,T;({recbar:k}=I);v.stop=k.stop;T=new Promise(i=>{v.start=i});_="video";var C={setup:()=>{var i;return i=R(),N(async()=>{var n,w,c,j,x,b,e,d,t,B,f,l,m,M,g,O;d=[],B=["audio",_];for(e of B)if(w=localStorage[e],w&&(l=await D[e](w),l&&(e===_&&(i.value.srcObject=l),g=l.getTracks(),d=d.concat(g),!u[e])))for(M of g)M.enabled=!1;return m=new MediaStream(d),t=new MediaRecorder(m,{mimeType:"video/webm;codecs=h264",videoBitsPerSecond:512e3}),v.pause=a=>{var r,o,s,P,h,y,p;for(h=0,p=[],y=m.getTracks(),o=0,P=y.length;o<P;o++)e=y[o],a?r=!1:({kind:s}=e,s===_&&p.push(e),r=!!u[s],r&&(h+=1)),e.enabled=r;if(h===0&&a===!1){if(p.length){u.video=localStorage.video;for(e of p)e.enabled=!0}else S.pause(!0);return}switch(t.state){case"pause":a||t.resume();break;case"recording":a&&t.pause()}},V(()=>{var a,r,o,s;({video:s,audio:a}=u),!s&&!a&&S.pause(!0),r={video:s,audio:a},o=m.getTracks();for(e of o)e.enabled=!!r[e.kind]}),await T,f=new Map,n=+new Date,[O,j]=await E.upload("rec/camera",parseInt(n/1e3)),c=0,t.ondataavailable=({data:a})=>{var r;r=c,c=new Date-n,f.set(c,(async()=>{await O(r,a),f.delete(r)})())},b=void 0,x=new Promise(a=>{b=a}),v.stop=async()=>{t.stop(),await x,await j(),k.stop()},t.onstop=async()=>{await Promise.all(f.values()),b()},t.start(3e3)}),{v:i}}};const F={autoplay:"",ref:"v"};function G(i,n){return q(),z("video",F,null,512)}var U=A(C,[["render",G],["__scopeId","data-v-480e017f"]]);export{U as default};
