import f from"./1.js";import{c as e}from"./g.js";import{a as l}from"./w.js";import{v as w}from"./f.js";import{i as k}from"./4.js";import{k as u,G as S}from"./d.js";import"./3.js";import"./y.js";import"./e.js";import"./j.js";import"./0.js";import"./v.js";function g(){return new Worker("/u.js",{type:"module"})}var i,c,t,o,s,d,n,p,r;({camera:t}=k);d=await w();r=d.getVideoTracks()[0];e.area-1===0&&(p=new MediaStreamTrackProcessor({track:r,maxBufferSize:15}),r=new MediaStreamTrackGenerator({kind:"video"}),o=[p.readable,r.writable],s=()=>{new g().postMessage([localStorage.ppi-0,...o,...JSON.parse(localStorage.area)],o)});r.contentHint="detail";i=await l();c=i?i.getTracks():[];n=new MediaStream([r,...c]);u(()=>{var a,m;a=!!e.audio;for(m of c)m.enabled=a});S(()=>e.video,async()=>{var a;({video:a}=e),a?await t.circle(localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):await t.x()});f(n,s);
