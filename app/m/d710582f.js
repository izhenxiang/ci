"use strict";exports[Symbol.toStringTag]="Module";var u=require("path"),e=require("fs"),a=require("./5cd9c764.js");require("os");var n,s;n=u.join(a.ROOT,"conf");e.mkdirSync(n,{recursive:!0});s=i=>u.join(n,i);var c=new Proxy({},{set:function(i,t,r){return e.writeFileSync(s(t),JSON.stringify(r)),r},get:(i,t)=>{var r;if(r=s(t),e.existsSync(r))return JSON.parse(e.readFileSync(r))}});exports.default=c;
