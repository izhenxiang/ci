import{m as d,c as f}from"./q.js";var a,s=a=async function(e){var o,i,r,t;if(o=localStorage[e],o&&(i=await d[e](o),i)){if(t=i.getTracks(),!f[e])for(r of t)r.enabled=!1;return i}},c=a.bind(a,"audio");a.bind(a,"video");export{c as a,s as m};
