import p from"./6.js";import{c as e}from"./k.js";import{a as n}from"./n.js";import{v as j}from"./w.js";import{i as w}from"./3.js";import{C as b,w as k}from"./s.js";import"./2.js";import"./c.js";import"./j.js";import"./1.js";import"./f.js";import"./4.js";function l(){return new Worker("/u.js",{type:"module"})}var o,i,t,c,m,d,f,r;({camera:i}=w);m=await j();r=m.getVideoTracks()[0];e.area-1==0&&(f=new MediaStreamTrackProcessor({track:r}),r=new MediaStreamTrackGenerator({kind:"video"}),t=[f.readable,r.writable],c=()=>{new l().postMessage([...t,...JSON.parse(localStorage.area)],t)});o=(await n()).getTracks();d=new MediaStream([r,...o]);b(()=>{var a,s;a=!!e.audio;for(s of o)s.enabled=a});k(()=>e.video,async()=>{var a;({video:a}=e),a?await i.circle():await i.x()});p(d,c);
