import n from"./v.js";import{c as e}from"./1.js";import{a as l}from"./g.js";import{v as w}from"./9.js";import{i as u}from"./..js";import{q as k,K as S}from"./w.js";import"./-.js";import"./l.js";import"./8.js";import"./e.js";import"./$.js";import"./y.js";function g(){return new Worker("/f.js",{type:"module"})}var i,m,t,o,s,d,f,p,a;({camera:t}=u);d=await w();a=d.getVideoTracks()[0];e.area-1===0&&(await a.applyConstraints({frameRate:{ideal:15,max:15}}),p=new MediaStreamTrackProcessor({track:a,maxBufferSize:1}),a=new MediaStreamTrackGenerator({kind:"video"}),o=[p.readable,a.writable],s=()=>{new g().postMessage([localStorage.ppi-0,...o,...JSON.parse(localStorage.area)],o)});i=await l();m=i?i.getTracks():[];f=new MediaStream([a,...m]);k(()=>{var r,c;r=!!e.audio;for(c of m)c.enabled=r});S(()=>e.video,async()=>{var r;({video:r}=e),r?await t.circle(localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):await t.x()});n(f,s);
