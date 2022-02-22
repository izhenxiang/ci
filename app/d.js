"use strict";var xr=Object.defineProperty;var at=Object.getOwnPropertySymbols;var hr=Object.prototype.hasOwnProperty,gr=Object.prototype.propertyIsEnumerable;var lt=(t,e,r)=>e in t?xr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ft=(t,e)=>{for(var r in e||(e={}))hr.call(e,r)&&lt(t,r,e[r]);if(at)for(var r of at(e))gr.call(e,r)&&lt(t,r,e[r]);return t};var wr=require("os"),S=require("electron"),H=require("path"),Q=require("fs"),St=require("./k.js"),pr=require("crypto"),_t=require("zlib"),yr=require("util"),we=require("fs/promises"),Ae=require("./x.js");function mr(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var kt=mr(wr),vr=(t,e)=>{var r,n;for(r in e)n=e[r],t.on(r,n);return t};Ge=Ke=Ze=__dirname;var Ze=Ze,Ke=Ke,Ge=Ge,Fe,Ut;Fe="127.0.0.1",Ut="http://"+Fe,S.session.defaultSession.protocol.interceptStreamProtocol("http",(t,e)=>{var r,n,i,f,u,w,g,k,U;if(U=new URL(t.url),U.host===Fe)({pathname:u}=U),u==="/"&&(u+=".htm"),k=u.slice(u.lastIndexOf(".")+1),k.startsWith("htm")?f="text/html":f={js:"text/javascript",css:"text/css",svg:"image/svg+xml",woff2:"font/woff2"}[k]||"application/octet-stream",n=Q.createReadStream(Ke+u),e({data:n,statusCode:200,headers:{"content-type":f}});else{if(t.useSessionCookies=!0,t.partition="persist:I",w=S.net.request(t),w.on("response",_=>{var B,I;({headers:B,statusCode:I}=_),e({data:_},B,I)}),t.uploadData){g=t.uploadData;for(i of g)({bytes:r}=i),r&&w.write(r)}w.end()}});var ce=new Proxy({},{get:(t,e)=>r=>{var n;return r=ft({skipTaskbar:!0,frame:!1,minimizable:!1,maximizable:!1,fullscreenable:!1,type:"toolbar",webPreferences:{preload:H.join(Ze,"t.js"),webSecurity:!1}},r),n=new S.BrowserWindow(r),e!=="main"&&n.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),n.loadURL(Ut+"#"+e),n.once("ready-to-show",()=>n.show()),n.focus(),n}}),Ot;({main:Ot}=ce);var fe=(t=!0)=>{var e,r,n;if(r=S.BrowserWindow.getAllWindows(),r.length){for(e of r)if(e.webContents.getURL().endsWith("/#main")){n=e,n.isMinimized()&&n.restore();break}}n||(n=Ot({resizable:!1,height:606,width:426})),!(!t&&!n.isVisible())&&(n.show(),n.setAlwaysOnTop(!0),n.moveTop(),n.focus())},Bt={ID:""},br="https://testing.izhenxiang.com/";var Et,At,Pt,Sr,ke;kt.default.platform();({Menu:Et,Tray:At,app:Pt,globalShortcut:Sr}=require("electron"));ke=void 0;var _r=()=>{var t;ke=new At(H.join(Ge,"trayTemplate.png")),t=Et.buildFromTemplate([{label:"\u663E\u793A\u754C\u9762",click:fe},{label:"\u5A92\u4F53\u5E93",click:()=>{S.shell.openExternal(br+"?user_token="+Bt.ID)}},{label:"\u68C0\u6D4B\u66F4\u65B0",click:()=>{var e;e=ce.update({closable:!0,frame:!0,width:400,height:500}),e.setAlwaysOnTop(!0,"screen-saver")}},{type:"separator"},{label:"\u9000\u51FA",click:()=>Pt.quit()}]),ke.on("click",()=>{fe()}),ke.setContextMenu(t)};var Tt;Tt=t=>{var e,r,n,i,f,u,w,g;t&&(t.devToolsWebContents||({webContents:f}=t,e=new S.BrowserWindow({minimizable:!1,maximizable:!1}),[i,r]=t.getSize(),[w,g]=t.getPosition(),{width:u,height:n}=S.screen.getPrimaryDisplay().workArea,f.setDevToolsWebContents(e.webContents),f.openDevTools({mode:"detach"}),i>r?(g=0,i=0,r+=20,n-=r):(w=0,r=0,u-=i),e.setPosition(i,r),t.setPosition(w,g),e.setSize(u,n),t.focus()))};var kr=()=>{S.globalShortcut.register("CmdOrCtrl+Alt+I",()=>Tt(S.BrowserWindow.getFocusedWindow()))},Te=t=>{if(!!t&&!t.isDestroyed()){t.close();try{t.destroy()}catch{}}},Ie=t=>{S.BrowserWindow.getAllWindows().forEach(e=>{var r,n;if(n=e.webContents.getURL(),n){if({hash:r}=new URL(n),r=r.slice(1),r.startsWith("main")){t?setTimeout(()=>{e[t]()}):e.hide();return}if(r.startsWith("camera")){e.setVisibleOnAllWorkspaces(!1,{visibleOnFullScreen:!1});return}}Te(e)})},Ur=()=>{S.BrowserWindow.getAllWindows().forEach(t=>{var e,r;if(r=t.webContents.getURL(),r&&({hash:e}=new URL(r),e=e.slice(1),e.startsWith("main"))){t.hide();return}Te(t)})},It,N;({count_down:It}=ce);N=void 0;var Mt=()=>{var t;if(N){N.focus();return}t=240,N=It({width:t,height:t,transparent:!0,resizable:!1,hasShadow:!1}),N.on("close",()=>{N=void 0}),N.setAlwaysOnTop(!0,"screen-saver"),N.webContents.on("did-finish-load",()=>{var e,r;r=S.BrowserWindow.getAllWindows();for(e of r)e.webContents.getURL().endsWith("/#main")||e.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0});N.moveTop(),N.focus()})},Or={close:()=>{N!=null&&N.close()}},$e;try{$e=new TextDecoder}catch{}var x,ee,s=0,V={},b,Y,q=0,J=0,z,G,$=[],v,ot={useRecords:!1,mapsAsObjects:!0};class Dt{}const Rt=new Dt;Rt.name="MessagePack 0xC1";var oe=!1;class pe{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0)),Object.assign(this,e)}unpack(e,r){if(x)return Wt(()=>(qe(),this?this.unpack(e,r):pe.prototype.unpack.call(ot,e,r)));ee=r>-1?r:e.length,s=0,J=0,Y=null,z=null,x=e;try{v=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw x=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof pe){if(V=this,this.structures)return b=this.structures,Se();(!b||b.length>0)&&(b=[])}else V=ot,(!b||b.length>0)&&(b=[]);return Se()}unpackMultiple(e,r){let n,i=0;try{oe=!0;let f=e.length,u=this?this.unpack(e,f):Me.unpack(e,f);if(r){for(r(u);s<f;)if(i=s,r(Se())===!1)return}else{for(n=[u];s<f;)i=s,n.push(Se());return n}}catch(f){throw f.lastPosition=i,f.values=n,f}finally{oe=!1,qe()}}_mergeStructures(e,r){e=e||[];for(let n=0,i=e.length;n<i;n++){let f=e[n];f&&(f.isShared=!0,n>=32&&(f.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in r||[])if(n>=0){let i=e[n],f=r[n];f&&(i&&((e.restoreStructures||(e.restoreStructures=[]))[n]=i),e[n]=f)}return this.structures=e}decode(e,r){return this.unpack(e,r)}}function Se(){try{if(!V.trusted&&!oe){let e=b.sharedLength||0;e<b.length&&(b.length=e)}let t=M();if(z&&(s=z.postBundlePosition),s==ee)b.restoreStructures&&ut(),b=null,x=null,G&&(G=null);else if(s>ee){let e=new Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}else if(!oe)throw new Error("Data read, but end of buffer not reached");return t}catch(t){throw b.restoreStructures&&ut(),qe(),(t instanceof RangeError||t.message.startsWith("Unexpected end of buffer"))&&(t.incomplete=!0),t}}function ut(){for(let t in b.restoreStructures)b[t]=b.restoreStructures[t];b.restoreStructures=null}function M(){let t=x[s++];if(t<160)if(t<128){if(t<64)return t;{let e=b[t&63]||V.getStructures&&Ct()[t&63];return e?(e.read||(e.read=Xe(e,t&63)),e.read()):t}}else if(t<144)if(t-=128,V.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[zt()]=M();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(M(),M());return e}else{t-=144;let e=new Array(t);for(let r=0;r<t;r++)e[r]=M();return e}else if(t<192){let e=t-160;if(J>=s)return Y.slice(s-q,(s+=e)-q);if(J==0&&ee<140){let r=e<16?Ye(e):jt(e);if(r!=null)return r}return Ne(e)}else{let e;switch(t){case 192:return null;case 193:return z?(e=M(),e>0?z[1].slice(z.position1,z.position1+=e):z[0].slice(z.position0,z.position0-=e)):Rt;case 194:return!1;case 195:return!0;case 196:return We(x[s++]);case 197:return e=v.getUint16(s),s+=2,We(e);case 198:return e=v.getUint32(s),s+=4,We(e);case 199:return ne(x[s++]);case 200:return e=v.getUint16(s),s+=2,ne(e);case 201:return e=v.getUint32(s),s+=4,ne(e);case 202:if(e=v.getFloat32(s),V.useFloat32>2){let r=Qe[(x[s]&127)<<1|x[s+1]>>7];return s+=4,(r*e+(e>0?.5:-.5)>>0)/r}return s+=4,e;case 203:return e=v.getFloat64(s),s+=8,e;case 204:return x[s++];case 205:return e=v.getUint16(s),s+=2,e;case 206:return e=v.getUint32(s),s+=4,e;case 207:return V.int64AsNumber?(e=v.getUint32(s)*4294967296,e+=v.getUint32(s+4)):e=v.getBigUint64(s),s+=8,e;case 208:return v.getInt8(s++);case 209:return e=v.getInt16(s),s+=2,e;case 210:return e=v.getInt32(s),s+=4,e;case 211:return V.int64AsNumber?(e=v.getInt32(s)*4294967296,e+=v.getUint32(s+4)):e=v.getBigInt64(s),s+=8,e;case 212:if(e=x[s++],e==114)return wt(x[s++]&63);{let r=$[e];if(r)return r.read?(s++,r.read(M())):r.noBuffer?(s++,r()):r(x.subarray(s,++s));throw new Error("Unknown extension "+e)}case 213:return e=x[s],e==114?(s++,wt(x[s++]&63,x[s++])):ne(2);case 214:return ne(4);case 215:return ne(8);case 216:return ne(16);case 217:return e=x[s++],J>=s?Y.slice(s-q,(s+=e)-q):Er(e);case 218:return e=v.getUint16(s),s+=2,J>=s?Y.slice(s-q,(s+=e)-q):Ar(e);case 219:return e=v.getUint32(s),s+=4,J>=s?Y.slice(s-q,(s+=e)-q):Pr(e);case 220:return e=v.getUint16(s),s+=2,dt(e);case 221:return e=v.getUint32(s),s+=4,dt(e);case 222:return e=v.getUint16(s),s+=2,xt(e);case 223:return e=v.getUint32(s),s+=4,xt(e);default:if(t>=224)return t-256;if(t===void 0){let r=new Error("Unexpected end of MessagePack data");throw r.incomplete=!0,r}throw new Error("Unknown MessagePack token "+t)}}}const Br=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function Xe(t,e){function r(){if(r.count++>2){let i=t.read=new Function("r","return function(){return {"+t.map(f=>Br.test(f)?f+":r()":"["+JSON.stringify(f)+"]:r()").join(",")+"}}")(M);return t.highByte===0&&(t.read=ct(e,t.read)),i()}let n={};for(let i=0,f=t.length;i<f;i++){let u=t[i];n[u]=M()}return n}return r.count=0,t.highByte===0?ct(e,r):r}const ct=(t,e)=>function(){let r=x[s++];if(r===0)return e();let n=t<32?-(t+(r<<5)):t+(r<<5),i=b[n]||Ct()[n];if(!i)throw new Error("Record id is not defined for "+n);return i.read||(i.read=Xe(i,t)),i.read()};function Ct(){let t=Wt(()=>(x=null,V.getStructures()));return b=V._mergeStructures(t,b)}var Ne=ve,Er=ve,Ar=ve,Pr=ve;function ve(t){let e;if(t<16&&(e=Ye(t)))return e;if(t>64&&$e)return $e.decode(x.subarray(s,s+=t));const r=s+t,n=[];for(e="";s<r;){const i=x[s++];if((i&128)===0)n.push(i);else if((i&224)===192){const f=x[s++]&63;n.push((i&31)<<6|f)}else if((i&240)===224){const f=x[s++]&63,u=x[s++]&63;n.push((i&31)<<12|f<<6|u)}else if((i&248)===240){const f=x[s++]&63,u=x[s++]&63,w=x[s++]&63;let g=(i&7)<<18|f<<12|u<<6|w;g>65535&&(g-=65536,n.push(g>>>10&1023|55296),g=56320|g&1023),n.push(g)}else n.push(i);n.length>=4096&&(e+=C.apply(String,n),n.length=0)}return n.length>0&&(e+=C.apply(String,n)),e}function dt(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=M();return e}function xt(t){if(V.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[zt()]=M();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(M(),M());return e}}var C=String.fromCharCode;function jt(t){let e=s,r=new Array(t);for(let n=0;n<t;n++){const i=x[s++];if((i&128)>0){s=e;return}r[n]=i}return C.apply(String,r)}function Ye(t){if(t<4)if(t<2){if(t===0)return"";{let e=x[s++];if((e&128)>1){s-=1;return}return C(e)}}else{let e=x[s++],r=x[s++];if((e&128)>0||(r&128)>0){s-=2;return}if(t<3)return C(e,r);let n=x[s++];if((n&128)>0){s-=3;return}return C(e,r,n)}else{let e=x[s++],r=x[s++],n=x[s++],i=x[s++];if((e&128)>0||(r&128)>0||(n&128)>0||(i&128)>0){s-=4;return}if(t<6){if(t===4)return C(e,r,n,i);{let f=x[s++];if((f&128)>0){s-=5;return}return C(e,r,n,i,f)}}else if(t<8){let f=x[s++],u=x[s++];if((f&128)>0||(u&128)>0){s-=6;return}if(t<7)return C(e,r,n,i,f,u);let w=x[s++];if((w&128)>0){s-=7;return}return C(e,r,n,i,f,u,w)}else{let f=x[s++],u=x[s++],w=x[s++],g=x[s++];if((f&128)>0||(u&128)>0||(w&128)>0||(g&128)>0){s-=8;return}if(t<10){if(t===8)return C(e,r,n,i,f,u,w,g);{let k=x[s++];if((k&128)>0){s-=9;return}return C(e,r,n,i,f,u,w,g,k)}}else if(t<12){let k=x[s++],U=x[s++];if((k&128)>0||(U&128)>0){s-=10;return}if(t<11)return C(e,r,n,i,f,u,w,g,k,U);let _=x[s++];if((_&128)>0){s-=11;return}return C(e,r,n,i,f,u,w,g,k,U,_)}else{let k=x[s++],U=x[s++],_=x[s++],B=x[s++];if((k&128)>0||(U&128)>0||(_&128)>0||(B&128)>0){s-=12;return}if(t<14){if(t===12)return C(e,r,n,i,f,u,w,g,k,U,_,B);{let I=x[s++];if((I&128)>0){s-=13;return}return C(e,r,n,i,f,u,w,g,k,U,_,B,I)}}else{let I=x[s++],L=x[s++];if((I&128)>0||(L&128)>0){s-=14;return}if(t<15)return C(e,r,n,i,f,u,w,g,k,U,_,B,I,L);let Z=x[s++];if((Z&128)>0){s-=15;return}return C(e,r,n,i,f,u,w,g,k,U,_,B,I,L,Z)}}}}}function ht(){let t=x[s++],e;if(t<192)e=t-160;else switch(t){case 217:e=x[s++];break;case 218:e=v.getUint16(s),s+=2;break;case 219:e=v.getUint32(s),s+=4;break;default:throw new Error("Expected string")}return ve(e)}function We(t){return V.copyBuffers?Uint8Array.prototype.slice.call(x,s,s+=t):x.subarray(s,s+=t)}function ne(t){let e=x[s++];if($[e])return $[e](x.subarray(s,s+=t));throw new Error("Unknown extension type "+e)}var gt=new Array(4096);function zt(){let t=x[s++];if(t>=160&&t<192){if(t=t-160,J>=s)return Y.slice(s-q,(s+=t)-q);if(!(J==0&&ee<180))return Ne(t)}else return s--,M();let e=(t<<5^(t>1?v.getUint16(s):t>0?x[s]:0))&4095,r=gt[e],n=s,i=s+t-3,f,u=0;if(r&&r.bytes==t){for(;n<i;){if(f=v.getUint32(n),f!=r[u++]){n=1879048192;break}n+=4}for(i+=3;n<i;)if(f=x[n++],f!=r[u++]){n=1879048192;break}if(n===i)return s=n,r.string;i-=3,n=s}for(r=[],gt[e]=r,r.bytes=t;n<i;)f=v.getUint32(n),r.push(f),n+=4;for(i+=3;n<i;)f=x[n++],r.push(f);let w=t<16?Ye(t):jt(t);return w!=null?r.string=w:r.string=Ne(t)}const wt=(t,e)=>{var r=M();let n=t;e!==void 0&&(t=t<32?-((e<<5)+t):(e<<5)+t,r.highByte=e);let i=b[t];return i&&i.isShared&&((b.restoreStructures||(b.restoreStructures=[]))[t]=i),b[t]=r,r.read=Xe(r,n),r.read()};var Lt=typeof self=="object"?self:global;$[0]=()=>{};$[0].noBuffer=!0;$[101]=()=>{let t=M();return(Lt[t[0]]||Error)(t[1])};$[105]=t=>{let e=v.getUint32(s-4);G||(G=new Map);let r=x[s],n;r>=144&&r<160||r==220||r==221?n=[]:n={};let i={target:n};G.set(e,i);let f=M();return i.used?Object.assign(n,f):(i.target=f,f)};$[112]=t=>{let e=v.getUint32(s-4),r=G.get(e);return r.used=!0,r.target};$[115]=()=>new Set(M());const Ft=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(t=>t+"Array");$[116]=t=>{let e=t[0],r=Ft[e];if(!r)throw new Error("Could not find typed array for code "+e);return new Lt[r](Uint8Array.prototype.slice.call(t,1).buffer)};$[120]=()=>{let t=M();return new RegExp(t[0],t[1])};const Tr=[];$[98]=t=>{let e=(t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3],r=s;return s+=e-t.length,z=Tr,z=[ht(),ht()],z.position0=0,z.position1=0,z.postBundlePosition=s,s=r,M()};$[255]=t=>t.length==4?new Date((t[0]*16777216+(t[1]<<16)+(t[2]<<8)+t[3])*1e3):t.length==8?new Date(((t[0]<<22)+(t[1]<<14)+(t[2]<<6)+(t[3]>>2))/1e6+((t[3]&3)*4294967296+t[4]*16777216+(t[5]<<16)+(t[6]<<8)+t[7])*1e3):t.length==12?new Date(((t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3])/1e6+((t[4]&128?-281474976710656:0)+t[6]*1099511627776+t[7]*4294967296+t[8]*16777216+(t[9]<<16)+(t[10]<<8)+t[11])*1e3):new Date("invalid");function Wt(t){let e=ee,r=s,n=q,i=J,f=Y,u=G,w=z,g=new Uint8Array(x.slice(0,ee)),k=b,U=b.slice(0,b.length),_=V,B=oe,I=t();return ee=e,s=r,q=n,J=i,Y=f,G=u,z=w,x=g,oe=B,b=k,b.splice(0,b.length,...U),V=_,v=new DataView(x.buffer,x.byteOffset,x.byteLength),I}function qe(){x=null,G=null,b=null}const Qe=new Array(147);for(let t=0;t<256;t++)Qe[t]=+("1e"+Math.floor(45.15-t*.30103));var Me=new pe({useRecords:!1});const Ir=Me.unpack;Me.unpackMultiple;Me.unpack;let Mr=new Float32Array(1);new Uint8Array(Mr.buffer,0,4);let Ue;try{Ue=new TextEncoder}catch{}let He,Vt;const De=typeof Buffer!="undefined",_e=De?Buffer.allocUnsafeSlow:Uint8Array,$t=De?Buffer:Uint8Array,pt=De?4294967296:2144337920;let l,xe,T,a=0,F,j=null;const Dr=61440,Rr=/[\u0080-\uFFFF]/,ae=Symbol("record-id");class Cr extends pe{constructor(e){super(e);this.offset=0;let r,n,i,f,u=0,w=$t.prototype.utf8Write?function(o,y,d){return l.utf8Write(o,y,d)}:Ue&&Ue.encodeInto?function(o,y){return Ue.encodeInto(o,l.subarray(y)).written}:!1,g=this;e||(e={});let k=e&&e.sequential,U=e.structures||e.saveStructures,_=e.maxSharedStructures;if(_==null&&(_=U?32:0),_>8160)throw new Error("Maximum maxSharedStructure is 8160");let B=e.maxOwnStructures;B==null&&(B=U?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let I=_>32||B+_>64,L=_+64,Z=_+B+64;if(Z>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let W=[],se=0,X=0;this.pack=this.encode=function(o,y){if(l||(l=new _e(8192),T=new DataView(l.buffer,0,8192),a=0),F=l.length-10,F-a<2048?(l=new _e(l.length),T=new DataView(l.buffer,0,l.length),F=l.length-10,a=0):a=a+7&2147483640,r=a,f=g.structuredClone?new Map:null,g.bundleStrings&&typeof o!="string"?(j=[],j.size=1/0):j=null,i=g.structures,i){i.uninitialized&&(i=g._mergeStructures(g.getStructures()));let d=i.sharedLength||0;if(d>_)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+i.sharedLength);if(!i.transitions){i.transitions=Object.create(null);for(let c=0;c<d;c++){let h=i[c];if(!h)continue;let O,m=i.transitions;for(let p=0,D=h.length;p<D;p++){let E=h[p];O=m[E],O||(O=m[E]=Object.create(null)),m=O}m[ae]=c+64}u=d}k||(i.nextId=d+64)}n&&(n=!1);try{if(P(o),j&&vt(r,P),g.offset=a,f&&f.idsToInsert){a+=f.idsToInsert.length*6,a>F&&te(a),g.offset=a;let d=zr(l.subarray(r,a),f.idsToInsert);return f=null,d}return y&Lr?(l.start=r,l.end=a,l):l.subarray(r,a)}finally{if(i){X<10&&X++;let d=i.sharedLength||_;if(i.length>d&&(i.length=d),se>1e4)i.transitions=null,X=0,se=0,W.length>0&&(W=[]);else if(W.length>0&&!k){for(let c=0,h=W.length;c<h;c++)W[c][ae]=0;W=[]}if(n&&g.saveStructures){let c=l.subarray(r,a);return g.saveStructures(i,u)===!1?(g._mergeStructures(g.getStructures()),g.pack(o)):(u=d,c)}}y&Fr&&(a=r)}};const P=o=>{a>F&&(l=te(a));var y=typeof o,d;if(y==="string"){let c=o.length;if(j&&c>=4&&c<4096){if((j.size+=c)>Dr){let p,D=(j[0]?j[0].length*3+j[1].length:0)+10;a+D>F&&(l=te(a+D)),j.position?(l[a]=200,a+=3,l[a++]=98,p=a-r,a+=4,vt(r,P),T.setUint16(p+r-3,a-r-p)):(l[a++]=214,l[a++]=98,p=a-r,a+=4),j=["",""],j.size=0,j.position=p}let m=Rr.test(o);j[m?0:1]+=o,l[a++]=193,P(m?-c:c);return}let h;c<32?h=1:c<256?h=2:c<65536?h=3:h=5;let O=c*3;if(a+O>F&&(l=te(a+O)),c<64||!w){let m,p,D,E=a+h;for(m=0;m<c;m++)p=o.charCodeAt(m),p<128?l[E++]=p:p<2048?(l[E++]=p>>6|192,l[E++]=p&63|128):(p&64512)===55296&&((D=o.charCodeAt(m+1))&64512)===56320?(p=65536+((p&1023)<<10)+(D&1023),m++,l[E++]=p>>18|240,l[E++]=p>>12&63|128,l[E++]=p>>6&63|128,l[E++]=p&63|128):(l[E++]=p>>12|224,l[E++]=p>>6&63|128,l[E++]=p&63|128);d=E-a-h}else d=w(o,a+h,O);d<32?l[a++]=160|d:d<256?(h<2&&l.copyWithin(a+2,a+1,a+1+d),l[a++]=217,l[a++]=d):d<65536?(h<3&&l.copyWithin(a+3,a+2,a+2+d),l[a++]=218,l[a++]=d>>8,l[a++]=d&255):(h<5&&l.copyWithin(a+5,a+3,a+3+d),l[a++]=219,T.setUint32(a,d),a+=4),a+=d}else if(y==="number")if(o>>>0===o)o<64?l[a++]=o:o<256?(l[a++]=204,l[a++]=o):o<65536?(l[a++]=205,l[a++]=o>>8,l[a++]=o&255):(l[a++]=206,T.setUint32(a,o),a+=4);else if(o>>0===o)o>=-32?l[a++]=256+o:o>=-128?(l[a++]=208,l[a++]=o+256):o>=-32768?(l[a++]=209,T.setInt16(a,o),a+=2):(l[a++]=210,T.setInt32(a,o),a+=4);else{let c;if((c=this.useFloat32)>0&&o<4294967296&&o>=-2147483648){l[a++]=202,T.setFloat32(a,o);let h;if(c<4||(h=o*Qe[(l[a]&127)<<1|l[a+1]>>7])>>0===h){a+=4;return}else a--}l[a++]=203,T.setFloat64(a,o),a+=8}else if(y==="object")if(!o)l[a++]=192;else{if(f){let h=f.get(o);if(h){if(!h.id){let O=f.idsToInsert||(f.idsToInsert=[]);h.id=O.push(h)}l[a++]=214,l[a++]=112,T.setUint32(a,h.id),a+=4;return}else f.set(o,{offset:a-r})}let c=o.constructor;if(c===Object)it(o,!0);else if(c===Array){d=o.length,d<16?l[a++]=144|d:d<65536?(l[a++]=220,l[a++]=d>>8,l[a++]=d&255):(l[a++]=221,T.setUint32(a,d),a+=4);for(let h=0;h<d;h++)P(o[h])}else if(c===Map){d=o.size,d<16?l[a++]=128|d:d<65536?(l[a++]=222,l[a++]=d>>8,l[a++]=d&255):(l[a++]=223,T.setUint32(a,d),a+=4);for(let[h,O]of o)P(h),P(O)}else{for(let h=0,O=He.length;h<O;h++){let m=Vt[h];if(o instanceof m){let p=He[h];if(p.write){p.type&&(l[a++]=212,l[a++]=p.type,l[a++]=0),P(p.write.call(this,o));return}let D=l,E=T,K=a;l=null;let re;try{re=p.pack.call(this,o,de=>(l=D,D=null,a+=de,a>F&&te(a),{target:l,targetView:T,position:a-de}),P)}finally{D&&(l=D,T=E,a=K,F=l.length-10)}re&&(re.length+a>F&&te(re.length+a),a=jr(re,l,a,p.type));return}}it(o,!o.hasOwnProperty)}}else if(y==="boolean")l[a++]=o?195:194;else if(y==="bigint"){if(o<BigInt(1)<<BigInt(63)&&o>=-(BigInt(1)<<BigInt(63)))l[a++]=211,T.setBigInt64(a,o);else if(o<BigInt(1)<<BigInt(64)&&o>0)l[a++]=207,T.setBigUint64(a,o);else if(this.largeBigIntToFloat)l[a++]=203,T.setFloat64(a,Number(o));else throw new RangeError(o+" was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");a+=8}else if(y==="undefined")this.encodeUndefinedAsNil?l[a++]=192:(l[a++]=212,l[a++]=0,l[a++]=0);else if(y==="function")P(this.writeFunction&&this.writeFunction());else throw new Error("Unknown type: "+y)},it=this.useRecords===!1?this.variableMapSize?o=>{let y=Object.keys(o),d=y.length;d<16?l[a++]=128|d:d<65536?(l[a++]=222,l[a++]=d>>8,l[a++]=d&255):(l[a++]=223,T.setUint32(a,d),a+=4);let c;for(let h=0;h<d;h++)P(c=y[h]),P(o[c])}:(o,y)=>{l[a++]=222;let d=a-r;a+=2;let c=0;for(let h in o)(y||o.hasOwnProperty(h))&&(P(h),P(o[h]),c++);l[d+++r]=c>>8,l[d+r]=c&255}:e.progressiveRecords&&!I?(o,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=a++-r,O;for(let m in o)if(y||o.hasOwnProperty(m)){if(d=c[m],d)c=d;else{let p=Object.keys(o),D=c;c=i.transitions;let E=0;for(let K=0,re=p.length;K<re;K++){let de=p[K];d=c[de],d||(d=c[de]=Object.create(null),E++),c=d}h+r+1==a?(a--,Le(c,p,E)):st(c,p,h,E),O=!0,c=D[m]}P(o[m])}if(!O){let m=c[ae];m?l[h+r]=m:st(c,Object.keys(o),h,0)}}:(o,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=0;for(let m in o)(y||o.hasOwnProperty(m))&&(d=c[m],d||(d=c[m]=Object.create(null),h++),c=d);let O=c[ae];O?O>=96&&I?(l[a++]=((O-=96)&31)+96,l[a++]=O>>5):l[a++]=O:Le(c,c.__keys__||Object.keys(o),h);for(let m in o)(y||o.hasOwnProperty(m))&&P(o[m])},te=o=>{let y;if(o>16777216){if(o-r>pt)throw new Error("Packed buffer would be larger than maximum buffer size");y=Math.min(pt,Math.round(Math.max((o-r)*(o>67108864?1.25:2),4194304)/4096)*4096)}else y=(Math.max(o-r<<2,l.length-1)>>12)+1<<12;let d=new _e(y);return T=new DataView(d.buffer,0,y),l.copy?l.copy(d,0,r,o):d.set(l.slice(r,o)),a-=r,r=0,F=d.length-10,l=d},Le=(o,y,d)=>{let c=i.nextId;c||(c=64),c<L&&this.shouldShareStructure&&!this.shouldShareStructure(y)?(c=i.nextOwnId,c<Z||(c=L),i.nextOwnId=c+1):(c>=Z&&(c=L),i.nextId=c+1);let h=y.highByte=c>=96&&I?c-96>>5:-1;o[ae]=c,o.__keys__=y,i[c-64]=y,c<L?(y.isShared=!0,i.sharedLength=c-63,n=!0,h>=0?(l[a++]=(c&31)+96,l[a++]=h):l[a++]=c):(h>=0?(l[a++]=213,l[a++]=114,l[a++]=(c&31)+96,l[a++]=h):(l[a++]=212,l[a++]=114,l[a++]=c),d&&(se+=X*d),W.length>=B&&(W.shift()[ae]=0),W.push(o),P(y))},st=(o,y,d,c)=>{let h=l,O=a,m=F,p=r;l=xe,a=0,r=0,l||(xe=l=new _e(8192)),F=l.length-10,Le(o,y,c),xe=l;let D=a;if(l=h,a=O,F=m,r=p,D>1){let E=a+D-1;E>F&&te(E);let K=d+r;l.copyWithin(K+D,K+1,a),l.set(xe.slice(0,D),K),a=E}else l[d+r]=xe[0]}}useBuffer(e){l=e,T=new DataView(l.buffer,l.byteOffset,l.byteLength),a=0}clearSharedData(){this.structures&&(this.structures=[])}}Vt=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,Dt];He=[{pack(t,e,r){let n=t.getTime()/1e3;if((this.useTimestamp32||t.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:i,targetView:f,position:u}=e(6);i[u++]=214,i[u++]=255,f.setUint32(u,n)}else if(n>0&&n<17179869184){let{target:i,targetView:f,position:u}=e(10);i[u++]=215,i[u++]=255,f.setUint32(u,t.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),f.setUint32(u+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),r(this.onInvalidDate());let{target:i,targetView:f,position:u}=e(3);i[u++]=212,i[u++]=255,i[u++]=255}else{let{target:i,targetView:f,position:u}=e(15);i[u++]=199,i[u++]=12,i[u++]=255,f.setUint32(u,t.getMilliseconds()*1e6),f.setBigInt64(u+4,BigInt(Math.floor(n)))}}},{pack(t,e,r){let n=Array.from(t),{target:i,position:f}=e(this.structuredClone?3:0);this.structuredClone&&(i[f++]=212,i[f++]=115,i[f++]=0),r(n)}},{pack(t,e,r){let{target:n,position:i}=e(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=101,n[i++]=0),r([t.name,t.message])}},{pack(t,e,r){let{target:n,position:i}=e(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=120,n[i++]=0),r([t.source,t.flags])}},{pack(t,e){this.structuredClone?yt(t,16,e):mt(De?Buffer.from(t):new Uint8Array(t),e)}},{pack(t,e){let r=t.constructor;r!==$t&&this.structuredClone?yt(t,Ft.indexOf(r.name),e):mt(t,e)}},{pack(t,e){let{target:r,position:n}=e(1);r[n]=193}}];function yt(t,e,r,n){let i=t.byteLength;if(i+1<256){var{target:f,position:u}=r(4+i);f[u++]=199,f[u++]=i+1}else if(i+1<65536){var{target:f,position:u}=r(5+i);f[u++]=200,f[u++]=i+1>>8,f[u++]=i+1&255}else{var{target:f,position:u,targetView:w}=r(7+i);f[u++]=201,w.setUint32(u,i+1),u+=4}f[u++]=116,f[u++]=e,f.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),u)}function mt(t,e){let r=t.byteLength;var n,i;if(r<256){var{target:n,position:i}=e(r+2);n[i++]=196,n[i++]=r}else if(r<65536){var{target:n,position:i}=e(r+3);n[i++]=197,n[i++]=r>>8,n[i++]=r&255}else{var{target:n,position:i,targetView:f}=e(r+5);n[i++]=198,f.setUint32(i,r),i+=4}n.set(t,i)}function jr(t,e,r,n){let i=t.length;switch(i){case 1:e[r++]=212;break;case 2:e[r++]=213;break;case 4:e[r++]=214;break;case 8:e[r++]=215;break;case 16:e[r++]=216;break;default:i<256?(e[r++]=199,e[r++]=i):i<65536?(e[r++]=200,e[r++]=i>>8,e[r++]=i&255):(e[r++]=201,e[r++]=i>>24,e[r++]=i>>16&255,e[r++]=i>>8&255,e[r++]=i&255)}return e[r++]=n,e.set(t,r),r+=i,r}function zr(t,e){let r,n=e.length*6,i=t.length-n;for(e.sort((f,u)=>f.offset>u.offset?1:-1);r=e.pop();){let f=r.offset,u=r.id;t.copyWithin(f+n,f,i),n-=6;let w=f+n;t[w++]=214,t[w++]=105,t[w++]=u>>24,t[w++]=u>>16&255,t[w++]=u>>8&255,t[w++]=u&255,i=f}return t}function vt(t,e){T.setUint32(j.position+t,a-j.position-t);let r=j;j=null,e(r[0]),e(r[1])}let Nt=new Cr({useRecords:!1});Nt.pack;Nt.pack;const Lr=512,Fr=1024,Je="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bt=Je.split(""),qt=new Array(123);for(let t=0;t<Je.length;t++)qt[Je.charCodeAt(t)]=t;const Ht=t=>{if(t<0)return`-${ntob(-t)}`;let e=t>>>0,r=t/4294967296>>>0,n="";for(;r>0;)n=bt[63&e]+n,e>>>=6,e|=(63&r)<<26,r>>>=6;let i="";do i=bt[63&e]+i,e>>>=6;while(e>0);return i+n},Jt=t=>{let e=0;const r=t.charAt(0)==="-"?1:0;for(let n=r;n<t.length;n++)e=e*64+qt[t.charCodeAt(n)];return r?-e:e};var Zt="https://i-ver.oss-cn-beijing.aliyuncs.com/",Kt,Wr=async t=>{var e,r;return t=await t,r=[],e=r.push.bind(r),t.on("data",e),new Promise((n,i)=>(t.on("end",()=>{n(Buffer.concat(r))}),t.on("error",i)))},Vr=t=>Wr(Gt(t));Kt=t=>{var e;return e=S.net.request(t),e.end(),new Promise((r,n)=>(e.on("error",i=>{n(i)}),e.on("response",i=>{if(i.statusCode!==200){n(i);return}r(i)})))};var Gt=t=>Kt(t),be={};be.version="1.0.0";be.encode=function(e){return e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};be.decode=function(e){return e+=Array(5-e.length%4).join("="),e=e.replace(/\-/g,"+").replace(/\_/g,"/"),new Buffer(e,"base64")};be.validate=function(e){return/^[A-Za-z0-9\-_]+$/.test(e)};var Ve=be,Xt=JSON.parse(Q.readFileSync(H.join(__dirname,"package.json"),"utf8"));var le,Yt,Oe,Re,et,Ce,ye,Be,Qt,er,tt,Pe,tr,rt,rr,nt;er=yr.promisify(_t.brotliDecompress);var $r=()=>(S.app.relaunch(),S.app.exit());le=H.join(St.ROOT,"v");Q.mkdirSync(le,{recursive:!0});Yt="sha512";Pe=t=>Vr(Zt+t);rr=t=>{var e,r,n;t=t.split("."),e=Buffer.allocUnsafe(2*t.length),n=0;for(r of t)e.writeUIntBE(r-0,n,2),n+=2;return e.readUintBE(0,6)};tr=t=>{var e;return e=pr.createHash(Yt),new Promise(r=>Q.createReadStream(t).on("data",e.update.bind(e)).on("end",()=>{r(e.digest().slice(0,8))}))};Be=(()=>{var t;return{v:t}=Ae.default,t&&Jt(t)})();Ce=rr(Xt.version);ye=0;nt=async()=>{var t;return t=Ht(parseInt(new Date/1e3)),ye=await Pe("v?"+t),ye};Qt=async t=>{var e,r,n,i,f,u,w,g,k,U,_,B,I,L,Z,W,se,X;if(t||(t=ye||await nt()),U=t.readUintBE(0,6),Ce!==Be){if(n=Ht(U),e=H.join(le,n),U===Be)return e;for(se=Ve.encode(await Pe(Ve.encode(t))),[r,i,w]=Ir(await er(await Pe(se))),I=P=>we.mkdir(H.join(e,P),{recursive:!0}),await Promise.all(r.map(I)),Z=H.dirname(__dirname),L=k=0,_=i.length;k<_;L=++k)if(g=i[L],f=H.join(e,g),u=w[L],W=async P=>Buffer.compare(u,await tr(P))===0,!(Q.existsSync(f)&&await W(f))){if(await I(H.dirname(g)),B=H.join(Z,g),Q.existsSync(B)&&await W(B)){await we.copyFile(B,f);continue}if(X=Q.createWriteStream(f),(await Gt(Zt+Ve.encode(u))).pipe(_t.createBrotliDecompress()).pipe(X),await new Promise(P=>{X.on("finish",P)}),!await W(f))return}return Ae.default.v=n,Be=U,e}};var nr=async()=>{var t,e,r;try{t=await nt()}catch(n){return e=n,console.trace(e),0}return r=Ce<t.readUintBE(0,6),r?t:0},Nr=()=>Xt.version;tt=async()=>{var t;(t=await nr())&&await ir(t)};setInterval(tt,864e5);Oe=Re=et=void 0;rt=()=>Re=new Promise(t=>et=t);rt();var qr=()=>Re,ir=(...t)=>(Oe||(Oe=Qt(...t).then(async e=>{e&&(et([ye,JSON.parse(await we.readFile(H.join(e,"package.json"),"utf8")).description]),rt())}).finally(()=>{Oe=!1})),Re);setTimeout(async()=>{var t,e,r,n;if(Q.existsSync(le)){n=await we.readdir(le,{withFileTypes:!0});for(e of n)e.isDirectory()&&({name:r}=e,Jt(r)<Ce&&await we.rm(H.join(le,r),{recursive:!0,force:!0}))}if(t=parseInt(new Date/864e5),t!==Ae.default.update_check)return Ae.default.update_check=t,await tt()},15e3);var Hr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",relaunch:$r,update_check:nr,ver_now:Nr,update_promise:qr,update:ir}),sr=new Proxy({},{get:(t,e)=>()=>{var r,n,i;return{width:n,height:r}=S.screen.getPrimaryDisplay().size,i=ce[e]({width:n,height:r,roundedCorners:!1,transparent:!0,resizable:!1,hasShadow:!1}),i.setAlwaysOnTop(!0,"screen-saver"),i.setPosition(0,0),i.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),i}}),ue,ar,lr,A;({recbar:lr}=ce);A=void 0;ue=void 0;({draw:ar}=sr);var Jr=async(t,e)=>{var r;return{response:r}=await S.dialog.showMessageBox(A,{title:"\u3000",message:t,buttons:e}),r},Zr=()=>{ue||(ue=ar(),fr())},fr=()=>{me(),ue.focus()},Kr=()=>{Te(ue),ue=void 0},or=()=>{var t,e,r,n,i;return i=568,t=48,e={roundedCorners:!1,transparent:!0,shadow:!1,resizable:!1,hasShadow:!1,width:i,height:t},A=lr(e),A.on("close",()=>A=void 0),{width:n,height:r}=S.screen.getPrimaryDisplay().workArea,A.setBounds({x:Math.round((n-i)/2),y:r-28-t,width:i,height:t}),me(),new Promise(f=>A.webContents.on("did-finish-load",()=>{me(),A.focus(),f(A)}))},me=()=>{A.setAlwaysOnTop(!0,"screen-saver")},Gr=()=>{var t,e,r,n,i;n=A.getPosition(),[r,e]=A.getSize(),[i,t]=A.size,A.setSize(i,t),A.setPosition(n[0]+r-i,n[1]),A.setHasShadow(!0)},Xr=()=>{var t,e,r,n;e=A.getPosition(),A.size=r=A.getSize(),n=170,t=48,A.setMinimumSize(n,t),A.setSize(n,t),A.setPosition(e[0]+r[0]-n,e[1]),A.setHasShadow(!1)},Yr=()=>{Ie("show")},Qr=()=>{Ie("showInactive")},en=()=>{A.hide()},tn=async()=>{var t,e;e=await S.desktopCapturer.getSources({types:["screen"],thumbnailSize:{width:0,height:0}});for(t of e)return t.id},rn=()=>{S.BrowserWindow.getAllWindows().forEach(t=>t.hide())},nn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",confirm:Jr,draw:Zr,draw_top:fr,draw_x:Kr,\u5DE5\u5177\u6761:or,top:me,expand:Gr,left:Xr,cancel:Yr,end:Qr,hide:en,screen_source:tn,stop:rn}),sn=t=>{Bt.ID=t},an=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ID:sn}),ur,je,he,ze,ie,R,cr;({camera:ur}=ce);R=void 0;ie=void 0;ze=je=200;he=void 0;var ln=(t,e)=>{t+=he[0],e+=he[1];try{R.setBounds({x:Math.round(t),y:Math.round(e),width:ze,height:je})}catch{console.error(t,e,he)}return[t,e]},fn=()=>{he=R.getPosition()},Ee=()=>{R&&!R.isDestroyed()&&R.getSize()[0]!==800&&(ie=R.getPosition()),Te(R)},on=t=>{var e,r;ze=je=t,r=R.getSize()[0],r!==t&&(ie=R.getPosition(),e=Math.round((t-r)/2),R.setBounds({x:ie[0]-e,y:ie[1]-e,width:t,height:t}))},un=cr=(t,e,r=!1)=>{R&&!R.isDestroyed()||(ze=t,je=e,R=ur({width:t,height:e,shadow:!1,center:!0,roundedCorners:!1,resizable:!1,hasShadow:!1,transparent:!0}),R.setAlwaysOnTop(!0),R.setVisibleOnAllWorkspaces(r,{visibleOnFullScreen:r}))},cn=t=>{var e,r,n,i,f;R&&!R.isDestroyed()||(n=200,cr(n,n,t),ie?[Ee,f]=ie:({width:i,height:e}=S.screen.getPrimaryDisplay().size,r=62,Ee=r,f=e-r-n),R.setPosition(Ee,f))},dn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",move:ln,init:fn,get x(){return Ee},size:on,default:un,circle:cn});var dr,ge;({area:dr}=sr);ge=void 0;var xn=()=>{ge=dr(),ge.on("close",()=>ge=void 0)},hn=()=>{ge.setIgnoreMouseEvents(!0,{forward:!0}),Mt(),me()},gn=()=>{var t,e;return{x:t,y:e}=S.screen.getCursorScreenPoint(),[t,e]};function wn(t,e,r,n){var i,f;i=t!=="camera",f=n===1&&i,f?xn():Mt(),or()}var pn=(t,e,r,n)=>{Ie(),wn(t,e,r,n)},yn=t=>{S.shell.openExternal(t)},mn=()=>St.ROOT,vn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",userData:mn,close:Ie,x:Ur,count_down:Or,auto_update:Hr,recbar:nn,USER:an,camera:dn,area:hn,main:fe,mouse:gn,rec:pn,open:yn});process.on("exit",()=>{S.app.quit()});(async()=>{var t;t=await Promise.resolve().then(function(){return require("./y.js")}),t.init({dsn:"http://87efcd705ef746db873a87c5721c9336@sentry.izhenxiang.com/2"})})();(()=>{var t,e,r,n,i,f,u;r=kt.default.platform(),fe(),r==="darwin"&&(n=S.app.dock)!=null&&n.hide(),t=(w,g)=>{var k,U,_,B;g instanceof Function&&S.ipcMain.handle(w.join("."),(I,L)=>g(...L)),_=Object.entries(g);for(B of _)[U,k]=B,t([...w,U],k)},i=Object.entries(vn);for(u of i)[e,f]=u,t([e],f);_r(),kr()})();vr(S.app,{"window-all-closed":()=>{if(process.platform!=="darwin")return S.app.quit()},"second-instance":fe,activate:fe});S.app.requestSingleInstanceLock()||(S.app.quit(),process.exit(0));
