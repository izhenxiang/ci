import f from"./8.js";import{c as e}from"./7.js";import{a as w}from"./k.js";import{v as l}from"./z.js";import{i as u}from"./5.js";import{C as k,w as v}from"./q.js";import"./4.js";import"./$.js";import"./e.js";import"./n.js";import"./3.js";import"./j.js";import"./6.js";function g(){return new Worker("/x.js",{type:"module"})}var i,m,t,o,s,d,n,p,a;({camera:t}=u);d=await l();a=d.getVideoTracks()[0];e.area-1===0&&(p=new MediaStreamTrackProcessor({track:a}),a=new MediaStreamTrackGenerator({kind:"video"}),o=[p.readable,a.writable],s=()=>{new g().postMessage([...o,...JSON.parse(localStorage.area)],o)});i=await w();m=i?i.getTracks():[];n=new MediaStream([a,...m]);k(()=>{var r,c;r=!!e.audio;for(c of m)c.enabled=r});v(()=>e.video,async()=>{var r;({video:r}=e),r?await t.circle(!0,localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):await t.x()});f(n,s);
