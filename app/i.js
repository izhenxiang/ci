import p from"./5.js";import{c as e}from"./.js";import{a as n}from"./3.js";import{v as j}from"./s.js";import{i as w}from"./0.js";import{C as b,w as k}from"./$.js";import"./..js";import"./9.js";import"./g.js";import"./-.js";import"./d.js";import"./1.js";function l(){return new Worker("/q.js",{type:"module"})}var o,i,t,c,m,d,f,r;({camera:i}=w);m=await j();r=m.getVideoTracks()[0];e.area-1==0&&(f=new MediaStreamTrackProcessor({track:r}),r=new MediaStreamTrackGenerator({kind:"video"}),t=[f.readable,r.writable],c=()=>{new l().postMessage([...t,...JSON.parse(localStorage.area)],t)});o=(await n()).getTracks();d=new MediaStream([r,...o]);b(()=>{var a,s;a=!!e.audio;for(s of o)s.enabled=a});k(()=>e.video,async()=>{var a;({video:a}=e),a?await i.circle():await i.x()});p(d,c);
