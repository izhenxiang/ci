"use strict";var v=require("path"),d=require("fs"),f=require("electron");exports.png=o=exports.preload=__dirname;exports.preload=exports.preload;var o=o;exports.png=exports.png;var i,u,r;i="http://127.0.0.1:",u=o,r={htm:"text/html",js:"text/javascript",css:"text/css",svg:"image/svg+xml",woff2:"font/woff2"},r.html=r.htm,l=async()=>{var t,p;t=new(await Promise.resolve().then(function(){return require("./6.js")})).default,t.use((a,h)=>{var n,e,s;e=a.req.url.slice(1)||".htm",n=e.slice(e.lastIndexOf(".")+1),s=r[n],s?a.set("Content-Type",s):console.log(n),a.body=d.readFileSync(v.join(u,e))}),p=t.listen(),i+=p.address().port};var l=l,c=()=>i;(async()=>(await Promise.all([l(),f.app.whenReady()]),await Promise.resolve().then(function(){return require("./h.js")})))();var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module"});exports.http=c;exports.ready=m;
