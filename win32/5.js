import n from"./h.js";import{c as e}from"./-.js";import{a as l}from"./0.js";import{v as w}from"./b.js";import{i as u}from"./3.js";import{q as k,K as S}from"./t.js";import"./2.js";import"./8.js";import"./_.js";import"./n.js";import"./1.js";import"./z.js";function g(){return new Worker("/x.js",{type:"module"})}var i,m,t,o,s,d,f,p,a;({camera:t}=u);d=await w();a=d.getVideoTracks()[0];e.area-1===0&&(await a.applyConstraints({frameRate:{ideal:5,max:6}}),p=new MediaStreamTrackProcessor({track:a,maxBufferSize:1}),a=new MediaStreamTrackGenerator({kind:"video"}),o=[p.readable,a.writable],s=()=>{new g().postMessage([localStorage.ppi-0,...o,...JSON.parse(localStorage.area)],o)});i=await l();m=i?i.getTracks():[];f=new MediaStream([a,...m]);k(()=>{var r,c;r=!!e.audio;for(c of m)c.enabled=r});S(()=>e.video,async()=>{var r;({video:r}=e),r?await t.circle(localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):await t.x()});n(f,s);
