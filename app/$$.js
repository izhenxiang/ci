import f from"./y.js";import{c as e}from"./r.js";import{a as w}from"./t.js";import{v as u}from"./v.js";import{i as k}from"./..js";import{C as l,w as v}from"./7.js";import"./-.js";import"./_.js";import"./w.js";import"./$.js";import"./c.js";import"./0.js";function g(){return new Worker("/u.js",{type:"module"})}var i,m,t,o,p,d,n,s,a;({camera:t}=k);d=await u();a=d.getVideoTracks()[0];e.area-1===0&&(s=new MediaStreamTrackProcessor({track:a}),a=new MediaStreamTrackGenerator({kind:"video"}),o=[s.readable,a.writable],p=()=>{new g().postMessage([...o,...JSON.parse(localStorage.area)],o)});i=await w();m=i?i.getTracks():[];n=new MediaStream([a,...m]);l(()=>{var r,c;r=!!e.audio;for(c of m)c.enabled=r});v(()=>e.video,async()=>{var r;({video:r}=e),r?await t.circle(!0):await t.x()});f(n,p);
