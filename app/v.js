import{i as t}from"./5.js";var o;({recbar:o}=t);var c=async()=>{var e,r,a;a={audio:{mandatory:{chromeMediaSource:"desktop"}},video:{mandatory:{chromeMediaSourceId:await o.screen_source(),chromeMediaSource:"desktop"}}},e=()=>navigator.mediaDevices.getUserMedia(a);try{r=await e()}catch{delete a.audio,r=await e()}return r};export{c as v};
