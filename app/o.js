import{m as f}from"./3.js";import{c as d}from"./l.js";var a,m=a=async function(e){var i,r,o,t;if(i=localStorage[e],i&&(r=await f[e](i),r)){if(t=r.getTracks(),!d[e])for(o of t)o.enabled=!1;return r}return[]},b=a.bind(a,"audio");a.bind(a,"video");export{b as a,m};
