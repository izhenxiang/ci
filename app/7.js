import{m as d}from"./1.js";import{c as f}from"./$.js";var a,s=a=async function(o){var r,i,e,t;if(r=localStorage[o],r&&(i=await d[o](r),i)){if(t=i.getTracks(),!f[o])for(e of t)e.enabled=!1;return i}},c=a.bind(a,"audio");a.bind(a,"video");export{c as a,s as m};
