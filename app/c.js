"use strict";var vr=Object.defineProperty;var yt=Object.getOwnPropertySymbols;var br=Object.prototype.hasOwnProperty,Sr=Object.prototype.propertyIsEnumerable;var mt=(t,e,r)=>e in t?vr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,vt=(t,e)=>{for(var r in e||(e={}))br.call(e,r)&&mt(t,r,e[r]);if(yt)for(var r of yt(e))Sr.call(e,r)&&mt(t,r,e[r]);return t};var S=require("electron"),_r=require("os"),Y=require("fs"),H=require("path"),Rt=require("./x.js"),kr=require("crypto"),Dt=require("zlib"),Ur=require("util"),te=require("./$..js"),we=require("fs/promises"),Ie=require("./w.js");function Or(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var Mt=Or(_r),Er=(t,e)=>{var r,n;for(r in e)n=e[r],t.on(r,n);return t};Ye=Xe=Ge=__dirname;var Ge=Ge,Xe=Xe,Ye=Ye,$e,Ct;$e="127.0.0.1",Ct="http://"+$e,S.session.defaultSession.protocol.interceptStreamProtocol("http",(t,e)=>{var r,n,i,f,u,g,p,k,U;if(U=new URL(t.url),U.host===$e)({pathname:u}=U),u==="/"&&(u+=".htm"),k=u.slice(u.lastIndexOf(".")+1),k.startsWith("htm")?f="text/html":f={js:"text/javascript",css:"text/css",svg:"image/svg+xml",woff2:"font/woff2"}[k]||"application/octet-stream",n=Y.createReadStream(Xe+u),e({data:n,statusCode:200,headers:{"content-type":f}});else{if(t.useSessionCookies=!0,t.partition="persist:I",g=S.net.request(t),g.on("response",_=>{var E,I;({headers:E,statusCode:I}=_),e({data:_},E,I)}),t.uploadData){p=t.uploadData;for(i of p)({bytes:r}=i),r&&g.write(r)}g.end()}});var de=new Proxy({},{get:(t,e)=>r=>{var n;return r=vt({skipTaskbar:!0,frame:!1,minimizable:!1,maximizable:!1,fullscreenable:!1,type:"toolbar",webPreferences:{preload:H.join(Ge,"o.js"),webSecurity:!1}},r),n=new S.BrowserWindow(r),e!=="main"&&n.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),n.loadURL(Ct+"#"+e),n.once("ready-to-show",()=>n.show()),n.focus(),n}}),jt;({main:jt}=de);var oe=(t=!0)=>{var e,r,n;if(r=S.BrowserWindow.getAllWindows(),r.length){for(e of r)if(e.webContents.getURL().endsWith("/#main")){n=e,n.isMinimized()&&n.restore();break}}n||(n=jt({resizable:!1,height:606,width:426})),!(!t&&!n.isVisible())&&(n.show(),n.setAlwaysOnTop(!0),n.moveTop(),n.focus())},zt={ID:""},Br="https://testing.izhenxiang.com/";var De,Qe,Lt,Ft,et,Tr,tt,Wt,Vt,ye;Mt.default.platform();({Menu:Qe,Tray:Lt,app:Ft,globalShortcut:Tr}=require("electron"));ye=new Lt(H.join(Ye,"trayTemplate.png"));tt=[{label:"\u5A92\u4F53\u5E93",click:()=>{S.shell.openExternal(Br+"?user_token="+zt.ID)}},{label:"\u68C0\u6D4B\u66F4\u65B0",click:()=>{var t;t=de.update({closable:!0,frame:!0,width:400,height:500}),t.setAlwaysOnTop(!0,"screen-saver")}},{type:"separator"}];De=Wt=Qe.buildFromTemplate([{label:"\u663E\u793A\u754C\u9762",click:oe},...tt,{label:"\u9000\u51FA",click:()=>Ft.quit()}]);Vt=Qe.buildFromTemplate(tt);et=["click",()=>{oe()}];ye.on("right-click",t=>{ye.popUpContextMenu(De)});var Ar=()=>{ye.off(...et),De=Vt},rt=()=>{ye.on(...et),De=Wt};var $t;$t=t=>{var e,r,n,i,f,u,g,p;t&&(t.devToolsWebContents||({webContents:f}=t,e=new S.BrowserWindow({minimizable:!1,maximizable:!1}),[i,r]=t.getSize(),[g,p]=t.getPosition(),{width:u,height:n}=S.screen.getPrimaryDisplay().workArea,f.setDevToolsWebContents(e.webContents),f.openDevTools({mode:"detach"}),i>r?(p=0,i=0,r+=20,n-=r):(g=0,r=0,u-=i),e.setPosition(i,r),t.setPosition(g,p),e.setSize(u,n),t.focus()))};var Ir=()=>{S.globalShortcut.register("CmdOrCtrl+Alt+I",()=>$t(S.BrowserWindow.getFocusedWindow()))},Se=t=>{if(!!t&&!t.isDestroyed()){t.close();try{t.destroy()}catch{}}},Me=t=>{S.BrowserWindow.getAllWindows().forEach(e=>{var r,n;if(n=e.webContents.getURL(),n){if({hash:r}=new URL(n),r=r.slice(1),r.startsWith("main")){t?setTimeout(()=>{e[t]()}):e.hide();return}if(r.startsWith("camera")){e.setVisibleOnAllWorkspaces(!1,{visibleOnFullScreen:!1});return}}Se(e)})},Pr=()=>{S.BrowserWindow.getAllWindows().forEach(t=>{var e,r;if(r=t.webContents.getURL(),r&&({hash:e}=new URL(r),e=e.slice(1),e.startsWith("main"))){t.hide();return}Se(t)})},Nt,N;({count_down:Nt}=de);N=void 0;var qt=()=>{var t;if(N){N.focus();return}t=240,N=Nt({width:t,height:t,transparent:!0,resizable:!1,hasShadow:!1}),N.on("close",()=>{N=void 0}),N.setAlwaysOnTop(!0,"screen-saver"),N.webContents.on("did-finish-load",()=>{var e,r;r=S.BrowserWindow.getAllWindows();for(e of r)e.webContents.getURL().endsWith("/#main")||e.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0});N.moveTop(),N.focus()})},Rr={close:()=>{N!=null&&N.close()}},nt=new Proxy({},{get:(t,e)=>()=>{var r,n,i;return{width:n,height:r}=S.screen.getPrimaryDisplay().size,i=de[e]({width:n,height:r,roundedCorners:!1,transparent:!0,resizable:!1,hasShadow:!1}),i.setAlwaysOnTop(!0,"screen-saver"),i.setPosition(0,0),i.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),i}});var Pe,it,st,at,lt;Pe=st=it=void 0;at=()=>{it=new Promise(t=>{st=t})};at();lt=t=>{st(t),at(),Se(Pe)};var Dr=()=>{lt(!0)},Mr=()=>{lt(!1)},Cr=t=>(Pe=nt["confirm_"+t]({width:275,height:190,modal:!0,isAlwaysOnTop:!0,visibleOnAllWorkspaces:!0}),Pe.setAlwaysOnTop(!0,"screen-saver"),it),jr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",y:Dr,n:Mr,show:Cr}),He;try{He=new TextDecoder}catch{}var x,ee,s=0,V={},b,Q,q=0,J=0,z,G,$=[],v,bt={useRecords:!1,mapsAsObjects:!0};class Ht{}const Jt=new Ht;Jt.name="MessagePack 0xC1";var ue=!1;class me{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0)),Object.assign(this,e)}unpack(e,r){if(x)return Qt(()=>(Ze(),this?this.unpack(e,r):me.prototype.unpack.call(bt,e,r)));ee=r>-1?r:e.length,s=0,J=0,Q=null,z=null,x=e;try{v=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw x=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof me){if(V=this,this.structures)return b=this.structures,Ue();(!b||b.length>0)&&(b=[])}else V=bt,(!b||b.length>0)&&(b=[]);return Ue()}unpackMultiple(e,r){let n,i=0;try{ue=!0;let f=e.length,u=this?this.unpack(e,f):Ce.unpack(e,f);if(r){for(r(u);s<f;)if(i=s,r(Ue())===!1)return}else{for(n=[u];s<f;)i=s,n.push(Ue());return n}}catch(f){throw f.lastPosition=i,f.values=n,f}finally{ue=!1,Ze()}}_mergeStructures(e,r){e=e||[];for(let n=0,i=e.length;n<i;n++){let f=e[n];f&&(f.isShared=!0,n>=32&&(f.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in r||[])if(n>=0){let i=e[n],f=r[n];f&&(i&&((e.restoreStructures||(e.restoreStructures=[]))[n]=i),e[n]=f)}return this.structures=e}decode(e,r){return this.unpack(e,r)}}function Ue(){try{if(!V.trusted&&!ue){let e=b.sharedLength||0;e<b.length&&(b.length=e)}let t=P();if(z&&(s=z.postBundlePosition),s==ee)b.restoreStructures&&St(),b=null,x=null,G&&(G=null);else if(s>ee){let e=new Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}else if(!ue)throw new Error("Data read, but end of buffer not reached");return t}catch(t){throw b.restoreStructures&&St(),Ze(),(t instanceof RangeError||t.message.startsWith("Unexpected end of buffer"))&&(t.incomplete=!0),t}}function St(){for(let t in b.restoreStructures)b[t]=b.restoreStructures[t];b.restoreStructures=null}function P(){let t=x[s++];if(t<160)if(t<128){if(t<64)return t;{let e=b[t&63]||V.getStructures&&Zt()[t&63];return e?(e.read||(e.read=ft(e,t&63)),e.read()):t}}else if(t<144)if(t-=128,V.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Gt()]=P();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(P(),P());return e}else{t-=144;let e=new Array(t);for(let r=0;r<t;r++)e[r]=P();return e}else if(t<192){let e=t-160;if(J>=s)return Q.slice(s-q,(s+=e)-q);if(J==0&&ee<140){let r=e<16?ot(e):Kt(e);if(r!=null)return r}return Je(e)}else{let e;switch(t){case 192:return null;case 193:return z?(e=P(),e>0?z[1].slice(z.position1,z.position1+=e):z[0].slice(z.position0,z.position0-=e)):Jt;case 194:return!1;case 195:return!0;case 196:return Ne(x[s++]);case 197:return e=v.getUint16(s),s+=2,Ne(e);case 198:return e=v.getUint32(s),s+=4,Ne(e);case 199:return ie(x[s++]);case 200:return e=v.getUint16(s),s+=2,ie(e);case 201:return e=v.getUint32(s),s+=4,ie(e);case 202:if(e=v.getFloat32(s),V.useFloat32>2){let r=ut[(x[s]&127)<<1|x[s+1]>>7];return s+=4,(r*e+(e>0?.5:-.5)>>0)/r}return s+=4,e;case 203:return e=v.getFloat64(s),s+=8,e;case 204:return x[s++];case 205:return e=v.getUint16(s),s+=2,e;case 206:return e=v.getUint32(s),s+=4,e;case 207:return V.int64AsNumber?(e=v.getUint32(s)*4294967296,e+=v.getUint32(s+4)):e=v.getBigUint64(s),s+=8,e;case 208:return v.getInt8(s++);case 209:return e=v.getInt16(s),s+=2,e;case 210:return e=v.getInt32(s),s+=4,e;case 211:return V.int64AsNumber?(e=v.getInt32(s)*4294967296,e+=v.getUint32(s+4)):e=v.getBigInt64(s),s+=8,e;case 212:if(e=x[s++],e==114)return Bt(x[s++]&63);{let r=$[e];if(r)return r.read?(s++,r.read(P())):r.noBuffer?(s++,r()):r(x.subarray(s,++s));throw new Error("Unknown extension "+e)}case 213:return e=x[s],e==114?(s++,Bt(x[s++]&63,x[s++])):ie(2);case 214:return ie(4);case 215:return ie(8);case 216:return ie(16);case 217:return e=x[s++],J>=s?Q.slice(s-q,(s+=e)-q):Lr(e);case 218:return e=v.getUint16(s),s+=2,J>=s?Q.slice(s-q,(s+=e)-q):Fr(e);case 219:return e=v.getUint32(s),s+=4,J>=s?Q.slice(s-q,(s+=e)-q):Wr(e);case 220:return e=v.getUint16(s),s+=2,kt(e);case 221:return e=v.getUint32(s),s+=4,kt(e);case 222:return e=v.getUint16(s),s+=2,Ut(e);case 223:return e=v.getUint32(s),s+=4,Ut(e);default:if(t>=224)return t-256;if(t===void 0){let r=new Error("Unexpected end of MessagePack data");throw r.incomplete=!0,r}throw new Error("Unknown MessagePack token "+t)}}}const zr=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function ft(t,e){function r(){if(r.count++>2){let i=t.read=new Function("r","return function(){return {"+t.map(f=>zr.test(f)?f+":r()":"["+JSON.stringify(f)+"]:r()").join(",")+"}}")(P);return t.highByte===0&&(t.read=_t(e,t.read)),i()}let n={};for(let i=0,f=t.length;i<f;i++){let u=t[i];n[u]=P()}return n}return r.count=0,t.highByte===0?_t(e,r):r}const _t=(t,e)=>function(){let r=x[s++];if(r===0)return e();let n=t<32?-(t+(r<<5)):t+(r<<5),i=b[n]||Zt()[n];if(!i)throw new Error("Record id is not defined for "+n);return i.read||(i.read=ft(i,t)),i.read()};function Zt(){let t=Qt(()=>(x=null,V.getStructures()));return b=V._mergeStructures(t,b)}var Je=_e,Lr=_e,Fr=_e,Wr=_e;function _e(t){let e;if(t<16&&(e=ot(t)))return e;if(t>64&&He)return He.decode(x.subarray(s,s+=t));const r=s+t,n=[];for(e="";s<r;){const i=x[s++];if((i&128)===0)n.push(i);else if((i&224)===192){const f=x[s++]&63;n.push((i&31)<<6|f)}else if((i&240)===224){const f=x[s++]&63,u=x[s++]&63;n.push((i&31)<<12|f<<6|u)}else if((i&248)===240){const f=x[s++]&63,u=x[s++]&63,g=x[s++]&63;let p=(i&7)<<18|f<<12|u<<6|g;p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p)}else n.push(i);n.length>=4096&&(e+=M.apply(String,n),n.length=0)}return n.length>0&&(e+=M.apply(String,n)),e}function kt(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=P();return e}function Ut(t){if(V.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Gt()]=P();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(P(),P());return e}}var M=String.fromCharCode;function Kt(t){let e=s,r=new Array(t);for(let n=0;n<t;n++){const i=x[s++];if((i&128)>0){s=e;return}r[n]=i}return M.apply(String,r)}function ot(t){if(t<4)if(t<2){if(t===0)return"";{let e=x[s++];if((e&128)>1){s-=1;return}return M(e)}}else{let e=x[s++],r=x[s++];if((e&128)>0||(r&128)>0){s-=2;return}if(t<3)return M(e,r);let n=x[s++];if((n&128)>0){s-=3;return}return M(e,r,n)}else{let e=x[s++],r=x[s++],n=x[s++],i=x[s++];if((e&128)>0||(r&128)>0||(n&128)>0||(i&128)>0){s-=4;return}if(t<6){if(t===4)return M(e,r,n,i);{let f=x[s++];if((f&128)>0){s-=5;return}return M(e,r,n,i,f)}}else if(t<8){let f=x[s++],u=x[s++];if((f&128)>0||(u&128)>0){s-=6;return}if(t<7)return M(e,r,n,i,f,u);let g=x[s++];if((g&128)>0){s-=7;return}return M(e,r,n,i,f,u,g)}else{let f=x[s++],u=x[s++],g=x[s++],p=x[s++];if((f&128)>0||(u&128)>0||(g&128)>0||(p&128)>0){s-=8;return}if(t<10){if(t===8)return M(e,r,n,i,f,u,g,p);{let k=x[s++];if((k&128)>0){s-=9;return}return M(e,r,n,i,f,u,g,p,k)}}else if(t<12){let k=x[s++],U=x[s++];if((k&128)>0||(U&128)>0){s-=10;return}if(t<11)return M(e,r,n,i,f,u,g,p,k,U);let _=x[s++];if((_&128)>0){s-=11;return}return M(e,r,n,i,f,u,g,p,k,U,_)}else{let k=x[s++],U=x[s++],_=x[s++],E=x[s++];if((k&128)>0||(U&128)>0||(_&128)>0||(E&128)>0){s-=12;return}if(t<14){if(t===12)return M(e,r,n,i,f,u,g,p,k,U,_,E);{let I=x[s++];if((I&128)>0){s-=13;return}return M(e,r,n,i,f,u,g,p,k,U,_,E,I)}}else{let I=x[s++],L=x[s++];if((I&128)>0||(L&128)>0){s-=14;return}if(t<15)return M(e,r,n,i,f,u,g,p,k,U,_,E,I,L);let Z=x[s++];if((Z&128)>0){s-=15;return}return M(e,r,n,i,f,u,g,p,k,U,_,E,I,L,Z)}}}}}function Ot(){let t=x[s++],e;if(t<192)e=t-160;else switch(t){case 217:e=x[s++];break;case 218:e=v.getUint16(s),s+=2;break;case 219:e=v.getUint32(s),s+=4;break;default:throw new Error("Expected string")}return _e(e)}function Ne(t){return V.copyBuffers?Uint8Array.prototype.slice.call(x,s,s+=t):x.subarray(s,s+=t)}function ie(t){let e=x[s++];if($[e])return $[e](x.subarray(s,s+=t));throw new Error("Unknown extension type "+e)}var Et=new Array(4096);function Gt(){let t=x[s++];if(t>=160&&t<192){if(t=t-160,J>=s)return Q.slice(s-q,(s+=t)-q);if(!(J==0&&ee<180))return Je(t)}else return s--,P();let e=(t<<5^(t>1?v.getUint16(s):t>0?x[s]:0))&4095,r=Et[e],n=s,i=s+t-3,f,u=0;if(r&&r.bytes==t){for(;n<i;){if(f=v.getUint32(n),f!=r[u++]){n=1879048192;break}n+=4}for(i+=3;n<i;)if(f=x[n++],f!=r[u++]){n=1879048192;break}if(n===i)return s=n,r.string;i-=3,n=s}for(r=[],Et[e]=r,r.bytes=t;n<i;)f=v.getUint32(n),r.push(f),n+=4;for(i+=3;n<i;)f=x[n++],r.push(f);let g=t<16?ot(t):Kt(t);return g!=null?r.string=g:r.string=Je(t)}const Bt=(t,e)=>{var r=P();let n=t;e!==void 0&&(t=t<32?-((e<<5)+t):(e<<5)+t,r.highByte=e);let i=b[t];return i&&i.isShared&&((b.restoreStructures||(b.restoreStructures=[]))[t]=i),b[t]=r,r.read=ft(r,n),r.read()};var Xt=typeof self=="object"?self:global;$[0]=()=>{};$[0].noBuffer=!0;$[101]=()=>{let t=P();return(Xt[t[0]]||Error)(t[1])};$[105]=t=>{let e=v.getUint32(s-4);G||(G=new Map);let r=x[s],n;r>=144&&r<160||r==220||r==221?n=[]:n={};let i={target:n};G.set(e,i);let f=P();return i.used?Object.assign(n,f):(i.target=f,f)};$[112]=t=>{let e=v.getUint32(s-4),r=G.get(e);return r.used=!0,r.target};$[115]=()=>new Set(P());const Yt=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(t=>t+"Array");$[116]=t=>{let e=t[0],r=Yt[e];if(!r)throw new Error("Could not find typed array for code "+e);return new Xt[r](Uint8Array.prototype.slice.call(t,1).buffer)};$[120]=()=>{let t=P();return new RegExp(t[0],t[1])};const Vr=[];$[98]=t=>{let e=(t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3],r=s;return s+=e-t.length,z=Vr,z=[Ot(),Ot()],z.position0=0,z.position1=0,z.postBundlePosition=s,s=r,P()};$[255]=t=>t.length==4?new Date((t[0]*16777216+(t[1]<<16)+(t[2]<<8)+t[3])*1e3):t.length==8?new Date(((t[0]<<22)+(t[1]<<14)+(t[2]<<6)+(t[3]>>2))/1e6+((t[3]&3)*4294967296+t[4]*16777216+(t[5]<<16)+(t[6]<<8)+t[7])*1e3):t.length==12?new Date(((t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3])/1e6+((t[4]&128?-281474976710656:0)+t[6]*1099511627776+t[7]*4294967296+t[8]*16777216+(t[9]<<16)+(t[10]<<8)+t[11])*1e3):new Date("invalid");function Qt(t){let e=ee,r=s,n=q,i=J,f=Q,u=G,g=z,p=new Uint8Array(x.slice(0,ee)),k=b,U=b.slice(0,b.length),_=V,E=ue,I=t();return ee=e,s=r,q=n,J=i,Q=f,G=u,z=g,x=p,ue=E,b=k,b.splice(0,b.length,...U),V=_,v=new DataView(x.buffer,x.byteOffset,x.byteLength),I}function Ze(){x=null,G=null,b=null}const ut=new Array(147);for(let t=0;t<256;t++)ut[t]=+("1e"+Math.floor(45.15-t*.30103));var Ce=new me({useRecords:!1});const $r=Ce.unpack;Ce.unpackMultiple;Ce.unpack;let Nr=new Float32Array(1);new Uint8Array(Nr.buffer,0,4);let Ee;try{Ee=new TextEncoder}catch{}let Ke,er;const je=typeof Buffer!="undefined",Oe=je?Buffer.allocUnsafeSlow:Uint8Array,tr=je?Buffer:Uint8Array,Tt=je?4294967296:2144337920;let l,he,A,a=0,F,C=null;const qr=61440,Hr=/[\u0080-\uFFFF]/,le=Symbol("record-id");class Jr extends me{constructor(e){super(e);this.offset=0;let r,n,i,f,u=0,g=tr.prototype.utf8Write?function(o,y,d){return l.utf8Write(o,y,d)}:Ee&&Ee.encodeInto?function(o,y){return Ee.encodeInto(o,l.subarray(y)).written}:!1,p=this;e||(e={});let k=e&&e.sequential,U=e.structures||e.saveStructures,_=e.maxSharedStructures;if(_==null&&(_=U?32:0),_>8160)throw new Error("Maximum maxSharedStructure is 8160");let E=e.maxOwnStructures;E==null&&(E=U?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let I=_>32||E+_>64,L=_+64,Z=_+E+64;if(Z>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let W=[],ae=0,X=0;this.pack=this.encode=function(o,y){if(l||(l=new Oe(8192),A=new DataView(l.buffer,0,8192),a=0),F=l.length-10,F-a<2048?(l=new Oe(l.length),A=new DataView(l.buffer,0,l.length),F=l.length-10,a=0):a=a+7&2147483640,r=a,f=p.structuredClone?new Map:null,p.bundleStrings&&typeof o!="string"?(C=[],C.size=1/0):C=null,i=p.structures,i){i.uninitialized&&(i=p._mergeStructures(p.getStructures()));let d=i.sharedLength||0;if(d>_)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+i.sharedLength);if(!i.transitions){i.transitions=Object.create(null);for(let c=0;c<d;c++){let h=i[c];if(!h)continue;let O,m=i.transitions;for(let w=0,R=h.length;w<R;w++){let B=h[w];O=m[B],O||(O=m[B]=Object.create(null)),m=O}m[le]=c+64}u=d}k||(i.nextId=d+64)}n&&(n=!1);try{if(T(o),C&&Pt(r,T),p.offset=a,f&&f.idsToInsert){a+=f.idsToInsert.length*6,a>F&&re(a),p.offset=a;let d=Kr(l.subarray(r,a),f.idsToInsert);return f=null,d}return y&Gr?(l.start=r,l.end=a,l):l.subarray(r,a)}finally{if(i){X<10&&X++;let d=i.sharedLength||_;if(i.length>d&&(i.length=d),ae>1e4)i.transitions=null,X=0,ae=0,W.length>0&&(W=[]);else if(W.length>0&&!k){for(let c=0,h=W.length;c<h;c++)W[c][le]=0;W=[]}if(n&&p.saveStructures){let c=l.subarray(r,a);return p.saveStructures(i,u)===!1?(p._mergeStructures(p.getStructures()),p.pack(o)):(u=d,c)}}y&Xr&&(a=r)}};const T=o=>{a>F&&(l=re(a));var y=typeof o,d;if(y==="string"){let c=o.length;if(C&&c>=4&&c<4096){if((C.size+=c)>qr){let w,R=(C[0]?C[0].length*3+C[1].length:0)+10;a+R>F&&(l=re(a+R)),C.position?(l[a]=200,a+=3,l[a++]=98,w=a-r,a+=4,Pt(r,T),A.setUint16(w+r-3,a-r-w)):(l[a++]=214,l[a++]=98,w=a-r,a+=4),C=["",""],C.size=0,C.position=w}let m=Hr.test(o);C[m?0:1]+=o,l[a++]=193,T(m?-c:c);return}let h;c<32?h=1:c<256?h=2:c<65536?h=3:h=5;let O=c*3;if(a+O>F&&(l=re(a+O)),c<64||!g){let m,w,R,B=a+h;for(m=0;m<c;m++)w=o.charCodeAt(m),w<128?l[B++]=w:w<2048?(l[B++]=w>>6|192,l[B++]=w&63|128):(w&64512)===55296&&((R=o.charCodeAt(m+1))&64512)===56320?(w=65536+((w&1023)<<10)+(R&1023),m++,l[B++]=w>>18|240,l[B++]=w>>12&63|128,l[B++]=w>>6&63|128,l[B++]=w&63|128):(l[B++]=w>>12|224,l[B++]=w>>6&63|128,l[B++]=w&63|128);d=B-a-h}else d=g(o,a+h,O);d<32?l[a++]=160|d:d<256?(h<2&&l.copyWithin(a+2,a+1,a+1+d),l[a++]=217,l[a++]=d):d<65536?(h<3&&l.copyWithin(a+3,a+2,a+2+d),l[a++]=218,l[a++]=d>>8,l[a++]=d&255):(h<5&&l.copyWithin(a+5,a+3,a+3+d),l[a++]=219,A.setUint32(a,d),a+=4),a+=d}else if(y==="number")if(o>>>0===o)o<64?l[a++]=o:o<256?(l[a++]=204,l[a++]=o):o<65536?(l[a++]=205,l[a++]=o>>8,l[a++]=o&255):(l[a++]=206,A.setUint32(a,o),a+=4);else if(o>>0===o)o>=-32?l[a++]=256+o:o>=-128?(l[a++]=208,l[a++]=o+256):o>=-32768?(l[a++]=209,A.setInt16(a,o),a+=2):(l[a++]=210,A.setInt32(a,o),a+=4);else{let c;if((c=this.useFloat32)>0&&o<4294967296&&o>=-2147483648){l[a++]=202,A.setFloat32(a,o);let h;if(c<4||(h=o*ut[(l[a]&127)<<1|l[a+1]>>7])>>0===h){a+=4;return}else a--}l[a++]=203,A.setFloat64(a,o),a+=8}else if(y==="object")if(!o)l[a++]=192;else{if(f){let h=f.get(o);if(h){if(!h.id){let O=f.idsToInsert||(f.idsToInsert=[]);h.id=O.push(h)}l[a++]=214,l[a++]=112,A.setUint32(a,h.id),a+=4;return}else f.set(o,{offset:a-r})}let c=o.constructor;if(c===Object)gt(o,!0);else if(c===Array){d=o.length,d<16?l[a++]=144|d:d<65536?(l[a++]=220,l[a++]=d>>8,l[a++]=d&255):(l[a++]=221,A.setUint32(a,d),a+=4);for(let h=0;h<d;h++)T(o[h])}else if(c===Map){d=o.size,d<16?l[a++]=128|d:d<65536?(l[a++]=222,l[a++]=d>>8,l[a++]=d&255):(l[a++]=223,A.setUint32(a,d),a+=4);for(let[h,O]of o)T(h),T(O)}else{for(let h=0,O=Ke.length;h<O;h++){let m=er[h];if(o instanceof m){let w=Ke[h];if(w.write){w.type&&(l[a++]=212,l[a++]=w.type,l[a++]=0),T(w.write.call(this,o));return}let R=l,B=A,K=a;l=null;let ne;try{ne=w.pack.call(this,o,xe=>(l=R,R=null,a+=xe,a>F&&re(a),{target:l,targetView:A,position:a-xe}),T)}finally{R&&(l=R,A=B,a=K,F=l.length-10)}ne&&(ne.length+a>F&&re(ne.length+a),a=Zr(ne,l,a,w.type));return}}gt(o,!o.hasOwnProperty)}}else if(y==="boolean")l[a++]=o?195:194;else if(y==="bigint"){if(o<BigInt(1)<<BigInt(63)&&o>=-(BigInt(1)<<BigInt(63)))l[a++]=211,A.setBigInt64(a,o);else if(o<BigInt(1)<<BigInt(64)&&o>0)l[a++]=207,A.setBigUint64(a,o);else if(this.largeBigIntToFloat)l[a++]=203,A.setFloat64(a,Number(o));else throw new RangeError(o+" was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");a+=8}else if(y==="undefined")this.encodeUndefinedAsNil?l[a++]=192:(l[a++]=212,l[a++]=0,l[a++]=0);else if(y==="function")T(this.writeFunction&&this.writeFunction());else throw new Error("Unknown type: "+y)},gt=this.useRecords===!1?this.variableMapSize?o=>{let y=Object.keys(o),d=y.length;d<16?l[a++]=128|d:d<65536?(l[a++]=222,l[a++]=d>>8,l[a++]=d&255):(l[a++]=223,A.setUint32(a,d),a+=4);let c;for(let h=0;h<d;h++)T(c=y[h]),T(o[c])}:(o,y)=>{l[a++]=222;let d=a-r;a+=2;let c=0;for(let h in o)(y||o.hasOwnProperty(h))&&(T(h),T(o[h]),c++);l[d+++r]=c>>8,l[d+r]=c&255}:e.progressiveRecords&&!I?(o,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=a++-r,O;for(let m in o)if(y||o.hasOwnProperty(m)){if(d=c[m],d)c=d;else{let w=Object.keys(o),R=c;c=i.transitions;let B=0;for(let K=0,ne=w.length;K<ne;K++){let xe=w[K];d=c[xe],d||(d=c[xe]=Object.create(null),B++),c=d}h+r+1==a?(a--,Ve(c,w,B)):wt(c,w,h,B),O=!0,c=R[m]}T(o[m])}if(!O){let m=c[le];m?l[h+r]=m:wt(c,Object.keys(o),h,0)}}:(o,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=0;for(let m in o)(y||o.hasOwnProperty(m))&&(d=c[m],d||(d=c[m]=Object.create(null),h++),c=d);let O=c[le];O?O>=96&&I?(l[a++]=((O-=96)&31)+96,l[a++]=O>>5):l[a++]=O:Ve(c,c.__keys__||Object.keys(o),h);for(let m in o)(y||o.hasOwnProperty(m))&&T(o[m])},re=o=>{let y;if(o>16777216){if(o-r>Tt)throw new Error("Packed buffer would be larger than maximum buffer size");y=Math.min(Tt,Math.round(Math.max((o-r)*(o>67108864?1.25:2),4194304)/4096)*4096)}else y=(Math.max(o-r<<2,l.length-1)>>12)+1<<12;let d=new Oe(y);return A=new DataView(d.buffer,0,y),l.copy?l.copy(d,0,r,o):d.set(l.slice(r,o)),a-=r,r=0,F=d.length-10,l=d},Ve=(o,y,d)=>{let c=i.nextId;c||(c=64),c<L&&this.shouldShareStructure&&!this.shouldShareStructure(y)?(c=i.nextOwnId,c<Z||(c=L),i.nextOwnId=c+1):(c>=Z&&(c=L),i.nextId=c+1);let h=y.highByte=c>=96&&I?c-96>>5:-1;o[le]=c,o.__keys__=y,i[c-64]=y,c<L?(y.isShared=!0,i.sharedLength=c-63,n=!0,h>=0?(l[a++]=(c&31)+96,l[a++]=h):l[a++]=c):(h>=0?(l[a++]=213,l[a++]=114,l[a++]=(c&31)+96,l[a++]=h):(l[a++]=212,l[a++]=114,l[a++]=c),d&&(ae+=X*d),W.length>=E&&(W.shift()[le]=0),W.push(o),T(y))},wt=(o,y,d,c)=>{let h=l,O=a,m=F,w=r;l=he,a=0,r=0,l||(he=l=new Oe(8192)),F=l.length-10,Ve(o,y,c),he=l;let R=a;if(l=h,a=O,F=m,r=w,R>1){let B=a+R-1;B>F&&re(B);let K=d+r;l.copyWithin(K+R,K+1,a),l.set(he.slice(0,R),K),a=B}else l[d+r]=he[0]}}useBuffer(e){l=e,A=new DataView(l.buffer,l.byteOffset,l.byteLength),a=0}clearSharedData(){this.structures&&(this.structures=[])}}er=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,Ht];Ke=[{pack(t,e,r){let n=t.getTime()/1e3;if((this.useTimestamp32||t.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:i,targetView:f,position:u}=e(6);i[u++]=214,i[u++]=255,f.setUint32(u,n)}else if(n>0&&n<17179869184){let{target:i,targetView:f,position:u}=e(10);i[u++]=215,i[u++]=255,f.setUint32(u,t.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),f.setUint32(u+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),r(this.onInvalidDate());let{target:i,targetView:f,position:u}=e(3);i[u++]=212,i[u++]=255,i[u++]=255}else{let{target:i,targetView:f,position:u}=e(15);i[u++]=199,i[u++]=12,i[u++]=255,f.setUint32(u,t.getMilliseconds()*1e6),f.setBigInt64(u+4,BigInt(Math.floor(n)))}}},{pack(t,e,r){let n=Array.from(t),{target:i,position:f}=e(this.structuredClone?3:0);this.structuredClone&&(i[f++]=212,i[f++]=115,i[f++]=0),r(n)}},{pack(t,e,r){let{target:n,position:i}=e(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=101,n[i++]=0),r([t.name,t.message])}},{pack(t,e,r){let{target:n,position:i}=e(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=120,n[i++]=0),r([t.source,t.flags])}},{pack(t,e){this.structuredClone?At(t,16,e):It(je?Buffer.from(t):new Uint8Array(t),e)}},{pack(t,e){let r=t.constructor;r!==tr&&this.structuredClone?At(t,Yt.indexOf(r.name),e):It(t,e)}},{pack(t,e){let{target:r,position:n}=e(1);r[n]=193}}];function At(t,e,r,n){let i=t.byteLength;if(i+1<256){var{target:f,position:u}=r(4+i);f[u++]=199,f[u++]=i+1}else if(i+1<65536){var{target:f,position:u}=r(5+i);f[u++]=200,f[u++]=i+1>>8,f[u++]=i+1&255}else{var{target:f,position:u,targetView:g}=r(7+i);f[u++]=201,g.setUint32(u,i+1),u+=4}f[u++]=116,f[u++]=e,f.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),u)}function It(t,e){let r=t.byteLength;var n,i;if(r<256){var{target:n,position:i}=e(r+2);n[i++]=196,n[i++]=r}else if(r<65536){var{target:n,position:i}=e(r+3);n[i++]=197,n[i++]=r>>8,n[i++]=r&255}else{var{target:n,position:i,targetView:f}=e(r+5);n[i++]=198,f.setUint32(i,r),i+=4}n.set(t,i)}function Zr(t,e,r,n){let i=t.length;switch(i){case 1:e[r++]=212;break;case 2:e[r++]=213;break;case 4:e[r++]=214;break;case 8:e[r++]=215;break;case 16:e[r++]=216;break;default:i<256?(e[r++]=199,e[r++]=i):i<65536?(e[r++]=200,e[r++]=i>>8,e[r++]=i&255):(e[r++]=201,e[r++]=i>>24,e[r++]=i>>16&255,e[r++]=i>>8&255,e[r++]=i&255)}return e[r++]=n,e.set(t,r),r+=i,r}function Kr(t,e){let r,n=e.length*6,i=t.length-n;for(e.sort((f,u)=>f.offset>u.offset?1:-1);r=e.pop();){let f=r.offset,u=r.id;t.copyWithin(f+n,f,i),n-=6;let g=f+n;t[g++]=214,t[g++]=105,t[g++]=u>>24,t[g++]=u>>16&255,t[g++]=u>>8&255,t[g++]=u&255,i=f}return t}function Pt(t,e){A.setUint32(C.position+t,a-C.position-t);let r=C;C=null,e(r[0]),e(r[1])}let rr=new Jr({useRecords:!1});rr.pack;rr.pack;const Gr=512,Xr=1024;var nr="https://i-ver.oss-cn-beijing.aliyuncs.com/",ir,Yr=async t=>{var e,r;return t=await t,r=[],e=r.push.bind(r),t.on("data",e),new Promise((n,i)=>(t.on("end",()=>{n(Buffer.concat(r))}),t.on("error",i)))},Qr=t=>Yr(sr(t));ir=t=>{var e;return e=S.net.request(t),e.end(),new Promise((r,n)=>(e.on("error",i=>{n(i)}),e.on("response",i=>{if(i.statusCode!==200){n(i);return}r(i)})))};var sr=t=>ir(t),ke={};ke.version="1.0.0";ke.encode=function(e){return e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};ke.decode=function(e){return e+=Array(5-e.length%4).join("="),e=e.replace(/\-/g,"+").replace(/\_/g,"/"),new Buffer(e,"base64")};ke.validate=function(e){return/^[A-Za-z0-9\-_]+$/.test(e)};var qe=ke;var fe,ar,Be,ze,ct,Le,ve,Te,lr,fr,dt,Re,or,xt,ht;fr=Ur.promisify(Dt.brotliDecompress);var en=()=>(S.app.relaunch(),S.app.exit());fe=H.join(Rt.ROOT,"v");Y.mkdirSync(fe,{recursive:!0});ar="sha512";Re=t=>Qr(nr+t);or=t=>{var e;return e=kr.createHash(ar),new Promise(r=>Y.createReadStream(t).on("data",e.update.bind(e)).on("end",()=>{r(e.digest().slice(0,8))}))};Te=(()=>{var t;return{v:t}=Ie.default,t&&te.decode(t)})();var ur=()=>te.PACKAGE_JSON().version;Le=te.ver_int(ur());ve=0;ht=async()=>{var t;return t=te.encode(parseInt(new Date/1e3)),ve=await Re("v?"+t),ve};lr=async t=>{var e,r,n,i,f,u,g,p,k,U,_,E,I,L,Z,W,ae,X;if(t||(t=ve||await ht()),U=t.readUintBE(0,6),!(Le>=Te)){if(n=te.encode(U),e=H.join(fe,n),Y.existsSync(H.join(e,te.package_json))&&U===Te)return e;for(ae=qe.encode(await Re(qe.encode(t))),[r,i,g]=$r(await fr(await Re(ae))),I=T=>we.mkdir(H.join(e,T),{recursive:!0}),await Promise.all(r.map(I)),Z=H.dirname(__dirname),L=k=0,_=i.length;k<_;L=++k)if(p=i[L],f=H.join(e,p),u=g[L],W=async T=>Buffer.compare(u,await or(T))===0,!(Y.existsSync(f)&&await W(f))){if(await I(H.dirname(p)),E=H.join(Z,p),Y.existsSync(E)&&await W(E)){await we.copyFile(E,f);continue}if(X=Y.createWriteStream(f),(await sr(nr+qe.encode(u))).pipe(Dt.createBrotliDecompress()).pipe(X),await new Promise(T=>{X.on("finish",T)}),!await W(f))return}return Ie.default.v=n,Te=U,e}};var cr=async()=>{var t,e,r;try{t=await ht()}catch(n){return e=n,console.trace(e),0}return r=Le<t.readUintBE(0,6),r?t:0};dt=async()=>{var t;(t=await cr())&&await dr(t)};setInterval(dt,864e5);Be=ze=ct=void 0;xt=()=>ze=new Promise(t=>ct=t);xt();var tn=()=>ze,dr=(...t)=>(Be||(Be=lr(...t).then(async e=>{e&&(ct([ve,JSON.parse(await we.readFile(H.join(e,te.package_json),"utf8")).description]),xt())}).finally(()=>{Be=!1})),ze);setTimeout(async()=>{var t,e,r,n;if(Y.existsSync(fe)){n=await we.readdir(fe,{withFileTypes:!0});for(e of n)e.isDirectory()&&({name:r}=e,te.decode(r)<Le&&await we.rm(H.join(fe,r),{recursive:!0,force:!0}))}if(t=parseInt(new Date/864e5),t!==Ie.default.update_check)return Ie.default.update_check=t,await dt()},15e3);var rn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",relaunch:en,ver_now:ur,update_check:cr,update_promise:tn,update:dr}),ce,xr,hr,j;({recbar:hr}=de);j=void 0;ce=void 0;({draw:xr}=nt);var nn=()=>{ce||(ce=xr(),pr())},pr=()=>{be(),ce.focus()},sn=()=>{Se(ce),ce=void 0},gr=t=>{var e,r,n,i;return Ar(),e=48,r={roundedCorners:!1,transparent:!0,shadow:!1,resizable:!1,hasShadow:!1,width:t,height:e},j=hr(r),j.on("close",()=>j=void 0),{width:i,height:n}=S.screen.getPrimaryDisplay().workArea,j.setBounds({x:Math.round((i-t)/2),y:n-28-e,width:t,height:e}),be(),new Promise(f=>j.webContents.on("did-finish-load",()=>{be(),j.focus(),f(j)}))},be=()=>{j.setAlwaysOnTop(!0,"screen-saver")},an=()=>{var t,e,r,n,i;n=j.getPosition(),[r,e]=j.getSize(),[i,t]=j.size,j.setBounds({x:n[0]+r-i,y:n[1],width:i,height:t})},ln=()=>{var t,e,r,n;e=j.getPosition(),j.size=r=j.getSize(),n=170,t=48,j.setBounds({x:e[0]+r[0]-n,y:e[1],width:n,height:t})},fn=()=>{Me("show"),rt()},on=()=>{rt(),Me("showInactive")},un=()=>{j.hide()},cn=async()=>{var t,e;e=await S.desktopCapturer.getSources({types:["screen"],thumbnailSize:{width:0,height:0}});for(t of e)return t.id},dn=()=>{S.BrowserWindow.getAllWindows().forEach(t=>t.hide())},xn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",draw:nn,draw_top:pr,draw_x:sn,\u5DE5\u5177\u6761:gr,top:be,expand:an,left:ln,cancel:fn,end:on,hide:un,screen_source:cn,stop:dn}),hn=t=>{zt.ID=t},pn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ID:hn}),pt,wr,Fe,pe,We,se,D,yr;({camera:wr}=de);D=void 0;se=void 0;pt=204;We=Fe=pt;pe=void 0;var gn=(t,e)=>{t+=pe[0],e+=pe[1];try{D.setBounds({x:Math.round(t),y:Math.round(e),width:We,height:Fe})}catch{console.error(t,e,pe)}return[t,e]},wn=()=>{pe=D.getPosition()},Ae=()=>{D&&!D.isDestroyed()&&D.getSize()[0]!==800&&(se=D.getPosition()),Se(D)},yn=t=>{var e,r;We=Fe=t,r=D.getSize()[0],r!==t&&(se=D.getPosition(),e=Math.round((t-r)/2),D.setBounds({x:se[0]-e,y:se[1]-e,width:t,height:t}))},mn=yr=(t,e,r=!1)=>{D&&!D.isDestroyed()||(We=t,Fe=e,D=wr({width:t,height:e,shadow:!1,center:!0,roundedCorners:!1,resizable:!1,hasShadow:!1,transparent:!0}),D.setAlwaysOnTop(!0),D.setVisibleOnAllWorkspaces(r,{visibleOnFullScreen:r}))},vn=(t,e)=>{var r,n,i,f;D&&!D.isDestroyed()||(e=e||pt,yr(e,e,t),se?[Ae,f]=se:({width:i,height:r}=S.screen.getPrimaryDisplay().size,n=62,Ae=n,f=r-n-e),D.setPosition(Ae,f))},bn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",move:gn,init:wn,get x(){return Ae},size:yn,default:mn,circle:vn});var mr,ge;({area:mr}=nt);ge=void 0;var Sn=()=>{ge=mr(),ge.on("close",()=>ge=void 0)},_n=()=>{ge.setIgnoreMouseEvents(!0,{forward:!0}),qt(),be()},kn=()=>{var t,e;return{x:t,y:e}=S.screen.getCursorScreenPoint(),[t,e]};function Un(t,e,r,n){var i,f;i=t!=="camera",f=n===1&&i,f?Sn():qt(),gr(t!=="camera"?530:450)}var On=(t,e,r,n)=>{Me(),Un(t,e,r,n)},En=t=>{S.shell.openExternal(t)},Bn=()=>Rt.ROOT,Tn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",userData:Bn,close:Me,x:Pr,count_down:Rr,confirm:jr,auto_update:rn,recbar:xn,USER:pn,camera:bn,area:_n,main:oe,mouse:kn,rec:On,open:En});process.on("exit",()=>{S.app.quit()});(async()=>{var t;t=await Promise.resolve().then(function(){return require("./5.js")}),t.init({dsn:"https://54c0fbe278e049c8a9635fc0fa612836@sentry.dalukuankuan.com/6"})})();S.app.commandLine.appendSwitch("js-flags","--expose_gc --max-old-space-size=512");(()=>{var t,e,r,n,i,f,u;r=Mt.default.platform(),oe(),r==="darwin"&&(n=S.app.dock)!=null&&n.hide(),t=(g,p)=>{var k,U,_,E;p instanceof Function&&S.ipcMain.handle(g.join("."),(I,L)=>p(...L)),_=Object.entries(p);for(E of _)[U,k]=E,t([...g,U],k)},i=Object.entries(Tn);for(u of i)[e,f]=u,t([e],f);rt(),Ir()})();Er(S.app,{"window-all-closed":()=>{if(process.platform!=="darwin")return S.app.quit()},"second-instance":oe,activate:oe});S.app.requestSingleInstanceLock()||(S.app.quit(),process.exit(0));
