import f from"./v.js";import{c as e}from"./b.js";import{a as l}from"./c.js";import{v as w}from"./4.js";import{i as k}from"./6.js";import{k as u,H as S}from"./e.js";import"./2.js";import"./u.js";import"./-.js";import"./1.js";import"./0.js";import"./y.js";function g(){return new Worker("/w.js",{type:"module"})}var i,c,t,o,s,d,n,p,r;({camera:t}=k);d=await w();r=d.getVideoTracks()[0];e.area-1===0&&(p=new MediaStreamTrackProcessor({track:r,maxBufferSize:15}),r=new MediaStreamTrackGenerator({kind:"video"}),o=[p.readable,r.writable],s=()=>{new g().postMessage([localStorage.ppi-0,...o,...JSON.parse(localStorage.area)],o)});r.contentHint="detail";i=await l();c=i?i.getTracks():[];n=new MediaStream([r,...c]);u(()=>{var a,m;a=!!e.audio;for(m of c)m.enabled=a});S(()=>e.video,async()=>{var a;({video:a}=e),a?await t.circle(localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):await t.x()});f(n,s);
