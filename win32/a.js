import f from"./8.js";import{c as e}from"./y.js";import{a as w}from"./x.js";import{v as l}from"./s.js";import{i as k}from"./..js";import{q as u,K as v}from"./o.js";import"./-.js";import"./$!.js";import"./4.js";import"./i.js";import"./$.js";import"./z.js";import"./0.js";function g(){return new Worker("/q.js",{type:"module"})}var i,m,t,o,s,d,n,p,a;({camera:t}=k);d=await l();a=d.getVideoTracks()[0];e.area-1===0&&(p=new MediaStreamTrackProcessor({track:a}),a=new MediaStreamTrackGenerator({kind:"video"}),o=[p.readable,a.writable],s=()=>{new g().postMessage([...o,...JSON.parse(localStorage.area)],o)});i=await w();m=i?i.getTracks():[];n=new MediaStream([a,...m]);u(()=>{var r,c;r=!!e.audio;for(c of m)c.enabled=r});v(()=>e.video,async()=>{var r;({video:r}=e),r?await t.circle(localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):await t.x()});f(n,s);