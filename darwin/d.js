import f from"./f.js";import{c as e}from"./3.js";import{a as l}from"./e.js";import{v as w}from"./7.js";import{i as u}from"./1.js";import{q as k,K as S}from"./y.js";import"./0.js";import"./l.js";import"./6.js";import"./c.js";import"./..js";import"./z.js";function g(){return new Worker("/w.js",{type:"module"})}var i,c,t,o,s,d,n,p,r;({camera:t}=u);d=await w();r=d.getVideoTracks()[0];e.area-1===0&&(p=new MediaStreamTrackProcessor({track:r,maxBufferSize:1}),r=new MediaStreamTrackGenerator({kind:"video"}),o=[p.readable,r.writable],s=()=>{new g().postMessage([localStorage.ppi-0,...o,...JSON.parse(localStorage.area)],o)});r.contentHint="detail";i=await l();c=i?i.getTracks():[];n=new MediaStream([r,...c]);k(()=>{var a,m;a=!!e.audio;for(m of c)m.enabled=a});S(()=>e.video,async()=>{var a;({video:a}=e),a?await t.circle(localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):await t.x()});f(n,s);
