import f from"./o.js";import{c as e}from"./.js";import{a as l}from"./-.js";import{v as w}from"./_.js";import{i as u}from"./2.js";import{q as k,K as S}from"./q.js";import"./0.js";import"./7.js";import"./9.js";import"./k.js";import"./..js";import"./y.js";function g(){return new Worker("/d.js",{type:"module"})}var i,m,t,o,s,d,n,p,a;({camera:t}=u);d=await w();a=d.getVideoTracks()[0];a.contentHint="detail";e.area-1===0&&(await a.applyConstraints({frameRate:{ideal:15,max:15}}),p=new MediaStreamTrackProcessor({track:a,maxBufferSize:1}),a=new MediaStreamTrackGenerator({kind:"video"}),o=[p.readable,a.writable],s=()=>{new g().postMessage([localStorage.ppi-0,...o,...JSON.parse(localStorage.area)],o)});i=await l();m=i?i.getTracks():[];n=new MediaStream([a,...m]);k(()=>{var r,c;r=!!e.audio;for(c of m)c.enabled=r});S(()=>e.video,async()=>{var r;({video:r}=e),r?await t.circle(localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):await t.x()});f(n,s);
