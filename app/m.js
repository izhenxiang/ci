"use strict";var o=require("path"),s=require("fs");function a(e){if(e&&e.__esModule)return e;var r={__proto__:null,[Symbol.toStringTag]:"Module"};return e&&Object.keys(e).forEach(function(t){if(t!=="default"){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}}),r.default=e,Object.freeze(r)}(async()=>{var e,r,t,n,i;if({dir:r}=process,!r&&(r=__dirname,process.dir=r,{v:i}=(await Promise.resolve().then(function(){return require("./o.js")})).default,i&&({ROOT:e}=await Promise.resolve().then(function(){return require("./w.js")}),n=o.join(e,"v",i),t=o.join(n,"m.js"),s.existsSync(t)))){process.chdir(n),await function(u){return Promise.resolve().then(function(){return a(require(u))})}(t);return}await Promise.resolve().then(function(){return require("./k.js")})})();
