import{a as u,r as w}from"./..js";import{c as d}from"./4.js";import{i as b}from"./0.js";import{C as k}from"./d.js";import"./-.js";import"./f.js";import"./1.js";import"./$.js";function g(){return new Worker("/l.js",{type:"module"})}var a,o,i,m,n,t,c,p,f,e;({recbar:n}=b);c={audio:{mandatory:{chromeMediaSource:"desktop"}},video:{mandatory:{chromeMediaSourceId:await n.screen_source(),chromeMediaSource:"desktop"}}};o=()=>navigator.mediaDevices.getUserMedia(c);try{t=await o()}catch{delete c.audio,t=await o()}e=t.getVideoTracks()[0];d.area-1==0&&(f=new MediaStreamTrackProcessor({track:e}),e=new MediaStreamTrackGenerator({kind:"video"}),i=[f.readable,e.writable],m=()=>{new g().postMessage([...i,...JSON.parse(localStorage.area)],i)});a=(await u()).getTracks();p=new MediaStream([e,...a]);k(()=>{var r,s;r=!!d.audio;for(s of a)s.enabled=r});w(p,m);
