import{i as s}from"./0.js";var m=(e,a)=>{var r;return r=9437184/(e*a),r<1&&(e=parseInt(e*r),a=parseInt(a*r)),[e,a]},c;({recbar:c}=s);var p=async()=>{var e,a,r,i,o,t,d;({width:d,height:r}=screen),[t,a]=m(d*2,r*2),localStorage.ppi=t/d,o={audio:{mandatory:{chromeMediaSource:"desktop"}},video:{mandatory:{maxFrameRate:24,minWidth:t,minHeight:a,maxWidth:t,maxHeight:a,chromeMediaSourceId:await c.screen_source(),chromeMediaSource:"desktop"}}},e=()=>navigator.mediaDevices.getUserMedia(o);try{i=await e()}catch{delete o.audio,i=await e()}return i};export{p as v};
