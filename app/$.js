import{h as f,c as r}from"./-.js";var i=new Proxy(()=>{},{get:(s,o)=>(...t)=>{var e;for(e of f)typeof e[o]=="function"&&e[o](...t);t.unshift(o),r.postMessage(t)}});export{i as b};
