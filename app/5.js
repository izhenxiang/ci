"use strict";exports[Symbol.toStringTag]="Module";var o=require("fs"),e=require("path"),s=require("os"),a,r;({name:r}=JSON.parse(o.readFileSync(e.join(process.dir,"package.json"),"utf8")));a=r.replace(/\./g,"_");var i=process.env[a+"_root"]||e.join(s.homedir(),"."+r);exports.ROOT=i;
