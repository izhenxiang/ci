"use strict";exports[Symbol.toStringTag]="Module";var t=require("path"),i=require("fs"),a=require("./0.js");require("os");var u,s;u=t.join(a.ROOT,"conf");s=n=>{var r;return r=t.join(u,n),i.mkdirSync(t.dirname(r),{recursive:!0}),r};var f=new Proxy({},{set:function(n,r,e){return i.writeFileSync(s(r),JSON.stringify(e)),e},get:(n,r)=>{var e;if(e=s(r),i.existsSync(e))return JSON.parse(i.readFileSync(e))}});exports.default=f;
