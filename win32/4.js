import{i as h}from"./3.js";var m=(e,a)=>{var i,r,t;return r=4096,i=2304,(a>i||e>r)&&(t=a/e,t>i/r?(a=i,e=Math.round(i/t)):(e=r,a=Math.round(r*t))),[e,a]},c;({recbar:c}=h);var v=async()=>{var e,a,i,r,t,o,d;({width:d,height:i}=screen),[o,a]=m(d*devicePixelRatio,i*devicePixelRatio),localStorage.ppi=o/d,t={audio:{mandatory:{chromeMediaSource:"desktop"}},video:{mandatory:{minWidth:o,minHeight:a,maxWidth:o,maxHeight:a,chromeMediaSourceId:await c.screen_source(),chromeMediaSource:"desktop"}}},e=()=>navigator.mediaDevices.getUserMedia(t);try{r=await e()}catch{delete t.audio,r=await e()}return r};export{v};
