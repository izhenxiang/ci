"use strict";var Q=Object.defineProperty;var P=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var S=(e,r,a)=>r in e?Q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,x=(e,r)=>{for(var a in r||(r={}))U.call(r,a)&&S(e,a,r[a]);if(P)for(var a of P(r))G.call(r,a)&&S(e,a,r[a]);return e};var J=require("os"),o=require("electron"),T=require("path");function j(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var K=j(J),C=j(T),N=(e,r)=>{var a,t;for(a in r)t=r[a],e.on(a,t);return e},O,m,k;o.app.isPackaged?(O=C.default.join(__dirname,"../web/index.html"),m=(e,r)=>{e.loadFile(O,{hash:r})}):(k="http://127.0.0.1:54910/",m=(e,r)=>e.loadURL(k+"#"+r));var f=new Proxy({},{get:(e,r)=>a=>{var t;return a=x({skipTaskbar:!0,frame:!1,minimizable:!1,maximizable:!1,maximizable:!1,webPreferences:{preload:C.default.join(__dirname,"../preload/index.cjs")}},a),t=new o.BrowserWindow(a),m(t,r),t.once("ready-to-show",()=>t.show()),t}});var W;({main:W}=f);var p=()=>{var e,r;return e=o.BrowserWindow.getAllWindows(),e.length?(r=e[0],r.isMinimized()&&r.restore(),r.show(),r.focus()):W({resizable:!1,height:585,width:426})};var D,q,A,V,g;({Menu:D,Tray:q,app:A,globalShortcut:V}=require("electron"));g=void 0;var X=()=>{var e;g=new q(T.join(__dirname,"../web/tray/trayTemplate.png")),e=D.buildFromTemplate([{label:"\u663E\u793A\u754C\u9762",click:p,accelerator:"CmdOrCtrl+Shift+R"},{type:"separator"},{accelerator:"CmdOrCtrl+Shift+Q",label:"\u9000\u51FA",click:()=>A.quit()}]),g.setContextMenu(e)};var $;$=e=>{var r,a,t,s,l,d,n,u;e&&(e.devToolsWebContents||({webContents:l}=e,r=new o.BrowserWindow({minimizable:!1,maximizable:!1}),[s,a]=e.getSize(),[n,u]=e.getPosition(),{width:d,height:t}=o.screen.getPrimaryDisplay().workArea,l.setDevToolsWebContents(r.webContents),l.openDevTools({mode:"detach"}),s>a?(u=0,s=0,a+=20,t-=a):(n=0,a=0,d-=s),r.setPosition(s,a),e.setPosition(n,u),r.setSize(d,t),e.focus()))};var Y=()=>{o.globalShortcut.register("CmdOrCtrl+Alt+I",()=>$(o.BrowserWindow.getFocusedWindow()))};var b=()=>{o.BrowserWindow.getAllWindows().forEach(e=>{e.close(),e.destroy()})};var M,c;({count_down:M}=f);c=void 0;var Z=()=>{var e;e=240,c=M({width:e,height:e,transparent:!0,resizable:!1,hasShadow:!1}),c.setAlwaysOnTop(!0,"pop-up-menu")},ee={close:()=>{c!=null&&c.close(),c=void 0}};var B,w;({area:B}=f);w=void 0;var re=()=>{var e,r;({width:r,height:e}=o.screen.getPrimaryDisplay().size),w=B({width:r,height:e,roundedCorners:!1,transparent:!0,resizable:!1,hasShadow:!1}),w.setAlwaysOnTop(!0,"screen-saver"),w.setPosition(0,0)};var R,i;({recbar:R}=f);i=void 0;var F=()=>{var e,r,a;r={width:568,height:48,resizable:!1},{width:a,height:e}=o.screen.getPrimaryDisplay().workArea,i=R(r),i.setPosition((a-r.width)/2,e-28-r.height),I()},I=()=>{i.setAlwaysOnTop(!0,"screen-saver")},ae=()=>{var e,r,a;r=i.getPosition(),[a,e]=i.size,i.setSize(a,e),i.setPosition(r[0]-a+42,r[1]-e+42),i.setHasShadow(!0)},te=()=>{var e,r,a;e=i.getPosition(),i.size=r=i.getSize(),a=36,i.setSize(a,a),a+=6,i.setPosition(e[0]+r[0]-a,e[1]+r[1]-a),i.setHasShadow(!1)},oe=()=>{b(),p()},ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",\u5DE5\u5177\u6761:F,top:I,expand:ae,left:te,stop:oe}),h,se,L;({camera:L,area:se}=f);h={camera:(e,r)=>{var a;return a=L({width:800,height:500,center:!0,roundedCorners:!1,resizable:!1}),a.setAlwaysOnTop(!0),a},screen:(e,r,a)=>{},all:(e,r,a)=>{}};(()=>{var e,r,a,t,s;t=(l,d)=>function(n,u,v){v===1&&l!=="camera"?re():(Z(),d.apply(this,arguments)),F()},r=Object.entries(h);for(s of r)[e,a]=s,h[e]=t(e,a)})();var ne=Object.freeze(h),le=(e,r,a,t)=>{b(),ne[e](r,a,t)},de=()=>o.app.getPath("userData"),ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",userData:de,close:b,rec:le,count_down:ee,recbar:ie});var H;({isPackaged:H}=o.app);(async()=>{var e,r,a,t,s,l,d;H||await Promise.resolve().then(function(){return require("./register.js")}).then(function(n){return n.register}),a=K.default.platform(),await o.app.whenReady(),p(),a==="darwin"&&(t=o.app.dock)!=null&&t.hide(),e=(n,u)=>{var v,y,_,z;u instanceof Function&&o.ipcMain.handle(n.join("."),(ce,E)=>u(...E)),_=Object.entries(u);for(z of _)[y,v]=z,e([...n,y],v)},s=Object.entries(ue);for(d of s)[r,l]=d,e([r],l);X(),Y()})();N(o.app,{"window-all-closed":()=>{if(process.platform!=="darwin")return o.app.quit()},"second-instance":p,activate:p});o.app.requestSingleInstanceLock()||(o.app.quit(),process.exit(0));
