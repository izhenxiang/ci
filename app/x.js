"use strict";exports[Symbol.toStringTag]="Module";var t=require("path"),i=require("fs"),s=require("./k.js");require("electron");var f,a;f=t.join(s.ROOT,"conf");a=n=>{var r;return r=t.join(f,n),i.mkdirSync(t.dirname(r),{recursive:!0}),r};var u=new Proxy({},{set:function(n,r,e){return i.writeFileSync(a(r),JSON.stringify(e)),e},get:(n,r)=>{var e;if(e=a(r),i.existsSync(e))return JSON.parse(i.readFileSync(e))}});exports.default=u;
