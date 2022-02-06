"use strict";var lr=Object.defineProperty;var tt=Object.getOwnPropertySymbols;var fr=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable;var rt=(t,e,r)=>e in t?lr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,nt=(t,e)=>{for(var r in e||(e={}))fr.call(e,r)&&rt(t,r,e[r]);if(tt)for(var r of tt(e))or.call(e,r)&&rt(t,r,e[r]);return t};var ur=require("os"),U=require("electron"),z=require("path"),te=require("fs"),it=require("./v.js"),cr=require("crypto"),st=require("zlib"),dr=require("util"),fe=require("fs/promises"),me=require("./q.js");function xr(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var hr=xr(ur),pr=(t,e)=>{var r,n;for(r in e)n=e[r],t.on(r,n);return t};Se=Me=__dirname;var Me=Me,Se=Se,je,at,De,lt,Ce,ve;Ce="persist:win";lt=U.session.fromPartition(Ce,{cache:!0});ve="https",je=ve+"://i.tk/",at=Se,De=U.session.fromPartition("file",{cache:!1}),De.protocol.interceptFileProtocol(ve,(t,e)=>{var r,n;({pathname:n}=new URL(t.url)),r=z.join(at,n.slice(1)||".htm"),e({path:r})}),lt.protocol.interceptHttpProtocol(ve,(t,e)=>{var r,n;({url:n}=t),n.startsWith(je)?r=De:r=null,t.session=r,e(t)});var oe=new Proxy({},{get:(t,e)=>r=>{var n;return r=nt({skipTaskbar:!0,frame:!1,minimizable:!1,maximizable:!1,webPreferences:{preload:z.join(Me,"o.js"),partition:Ce,webSecurity:!1}},r),n=new U.BrowserWindow(r),n.setVisibleOnAllWorkspaces(!0),n.loadURL(je+"#"+e),n.once("ready-to-show",()=>n.show()),n.focus(),n}}),ft;({main:ft}=oe);var ue=()=>{var t,e,r,n;if(e=U.BrowserWindow.getAllWindows(),e.length){for(t of e)if(t.webContents.getURL().endsWith("/#main")){n=t,n.isMinimized()&&n.restore(),n.show();break}}else n=ft({resizable:!1,height:585,width:426});r=()=>{n.show(),n.setAlwaysOnTop(!0,"pop-up-menu"),n.moveTop(),n.focus()},r(),setTimeout(r,1e3)};var ot,ut,ct,gr,Re;({Menu:ot,Tray:ut,app:ct,globalShortcut:gr}=require("electron"));Re=void 0;var wr=()=>{var t;Re=new ut(z.join(Se,"-.png")),t=ot.buildFromTemplate([{label:"\u663E\u793A\u754C\u9762",click:ue,accelerator:"CmdOrCtrl+Shift+R"},{type:"separator"},{accelerator:"CmdOrCtrl+Shift+Q",label:"\u9000\u51FA",click:()=>ct.quit()}]),Re.setContextMenu(t)};var dt;dt=t=>{var e,r,n,i,l,o,h,y;t&&(t.devToolsWebContents||({webContents:l}=t,e=new U.BrowserWindow({minimizable:!1,maximizable:!1}),[i,r]=t.getSize(),[h,y]=t.getPosition(),{width:o,height:n}=U.screen.getPrimaryDisplay().workArea,l.setDevToolsWebContents(e.webContents),l.openDevTools({mode:"detach"}),i>r?(y=0,i=0,r+=20,n-=r):(h=0,r=0,o-=i),e.setPosition(i,r),t.setPosition(h,y),e.setSize(o,n),t.focus()))};var yr=()=>{U.globalShortcut.register("CmdOrCtrl+Alt+I",()=>dt(U.BrowserWindow.getFocusedWindow()))},be=t=>{U.BrowserWindow.getAllWindows().forEach(e=>{var r,n;if(n=e.webContents.getURL(),n){if({hash:r}=new URL(n),r=r.slice(1),r.startsWith("camera"))return;if(r.startsWith("main")){t?e[t]():e.hide();return}}e.close(),e.destroy()})};var xt,L;({count_down:xt}=oe);L=void 0;var ht=()=>{var t;if(L){L.focus();return}t=240,L=xt({width:t,height:t,transparent:!0,resizable:!1,hasShadow:!1}),L.on("close",()=>{L=void 0}),L.moveTop(),L.setAlwaysOnTop(!0,"screen-saver"),L.webContents.on("did-finish-load",()=>{L.setAlwaysOnTop(!0,"screen-saver"),L.focus()})},mr={close:()=>{L!=null&&L.close()}},ze;try{ze=new TextDecoder}catch{}var d,X,s=0,C={},S,Y,q=0,J=0,F,K,N=[],b,pt={useRecords:!1,mapsAsObjects:!0};class gt{}const wt=new gt;wt.name="MessagePack 0xC1";var ne=!1;class ce{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0)),Object.assign(this,e)}unpack(e,r){if(d)return At(()=>(Ve(),this?this.unpack(e,r):ce.prototype.unpack.call(pt,e,r)));X=r>-1?r:e.length,s=0,J=0,Y=null,F=null,d=e;try{b=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw d=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof ce){if(C=this,this.structures)return S=this.structures,_e();(!S||S.length>0)&&(S=[])}else C=pt,(!S||S.length>0)&&(S=[]);return _e()}unpackMultiple(e,r){let n,i=0;try{ne=!0;let l=e.length,o=this?this.unpack(e,l):Ue.unpack(e,l);if(r){for(r(o);s<l;)if(i=s,r(_e())===!1)return}else{for(n=[o];s<l;)i=s,n.push(_e());return n}}catch(l){throw l.lastPosition=i,l.values=n,l}finally{ne=!1,Ve()}}_mergeStructures(e,r){e=e||[];for(let n=0,i=e.length;n<i;n++){let l=e[n];l&&(l.isShared=!0,n>=32&&(l.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in r||[])if(n>=0){let i=e[n],l=r[n];l&&(i&&((e.restoreStructures||(e.restoreStructures=[]))[n]=i),e[n]=l)}return this.structures=e}decode(e,r){return this.unpack(e,r)}}function _e(){try{if(!C.trusted&&!ne){let e=S.sharedLength||0;e<S.length&&(S.length=e)}let t=I();if(s==X)S.restoreStructures&&yt(),S=null,d=null,K&&(K=null);else if(s>X){let e=new Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}else if(!ne)throw new Error("Data read, but end of buffer not reached");return t}catch(t){throw S.restoreStructures&&yt(),Ve(),(t instanceof RangeError||t.message.startsWith("Unexpected end of buffer"))&&(t.incomplete=!0),t}}function yt(){for(let t in S.restoreStructures)S[t]=S.restoreStructures[t];S.restoreStructures=null}function I(){let t=d[s++];if(t<160)if(t<128){if(t<64)return t;{let e=S[t&63]||C.getStructures&&St()[t&63];return e?(e.read||(e.read=Le(e,t&63)),e.read()):t}}else if(t<144)if(t-=128,C.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Ut()]=I();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(I(),I());return e}else{t-=144;let e=new Array(t);for(let r=0;r<t;r++)e[r]=I();return e}else if(t<192){let e=t-160;if(J>=s)return Y.slice(s-q,(s+=e)-q);if(J==0&&X<140){let r=e<16?Ne(e):_t(e);if(r!=null)return r}return Fe(e)}else{let e;switch(t){case 192:return null;case 193:return F?(e=I(),e>0?F[1].slice(F.position1,F.position1+=e):F[0].slice(F.position0,F.position0-=e)):wt;case 194:return!1;case 195:return!0;case 196:return $e(d[s++]);case 197:return e=b.getUint16(s),s+=2,$e(e);case 198:return e=b.getUint32(s),s+=4,$e(e);case 199:return re(d[s++]);case 200:return e=b.getUint16(s),s+=2,re(e);case 201:return e=b.getUint32(s),s+=4,re(e);case 202:if(e=b.getFloat32(s),C.useFloat32>2){let r=qe[(d[s]&127)<<1|d[s+1]>>7];return s+=4,(r*e+(e>0?.5:-.5)>>0)/r}return s+=4,e;case 203:return e=b.getFloat64(s),s+=8,e;case 204:return d[s++];case 205:return e=b.getUint16(s),s+=2,e;case 206:return e=b.getUint32(s),s+=4,e;case 207:return C.int64AsNumber?(e=b.getUint32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigUint64(s),s+=8,e;case 208:return b.getInt8(s++);case 209:return e=b.getInt16(s),s+=2,e;case 210:return e=b.getInt32(s),s+=4,e;case 211:return C.int64AsNumber?(e=b.getInt32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigInt64(s),s+=8,e;case 212:if(e=d[s++],e==114)return Et(d[s++]&63);{let r=N[e];if(r)return r.read?(s++,r.read(I())):r.noBuffer?(s++,r()):r(d.subarray(s,++s));throw new Error("Unknown extension "+e)}case 213:return e=d[s],e==114?(s++,Et(d[s++]&63,d[s++])):re(2);case 214:return re(4);case 215:return re(8);case 216:return re(16);case 217:return e=d[s++],J>=s?Y.slice(s-q,(s+=e)-q):vr(e);case 218:return e=b.getUint16(s),s+=2,J>=s?Y.slice(s-q,(s+=e)-q):br(e);case 219:return e=b.getUint32(s),s+=4,J>=s?Y.slice(s-q,(s+=e)-q):_r(e);case 220:return e=b.getUint16(s),s+=2,vt(e);case 221:return e=b.getUint32(s),s+=4,vt(e);case 222:return e=b.getUint16(s),s+=2,bt(e);case 223:return e=b.getUint32(s),s+=4,bt(e);default:if(t>=224)return t-256;if(t===void 0){let r=new Error("Unexpected end of MessagePack data");throw r.incomplete=!0,r}throw new Error("Unknown MessagePack token "+t)}}}const Sr=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function Le(t,e){function r(){if(r.count++>2){let i=t.read=new Function("r","return function(){return {"+t.map(l=>Sr.test(l)?l+":r()":"["+JSON.stringify(l)+"]:r()").join(",")+"}}")(I);return t.highByte===0&&(t.read=mt(e,t.read)),i()}let n={};for(let i=0,l=t.length;i<l;i++){let o=t[i];n[o]=I()}return n}return r.count=0,t.highByte===0?mt(e,r):r}const mt=(t,e)=>function(){let r=d[s++];if(r===0)return e();let n=t<32?-(t+(r<<5)):t+(r<<5),i=S[n]||St()[n];if(!i)throw new Error("Record id is not defined for "+n);return i.read||(i.read=Le(i,t)),i.read()};function St(){let t=At(()=>(d=null,C.getStructures()));return S=C._mergeStructures(t,S)}var Fe=ke,vr=ke,br=ke,_r=ke;function ke(t){let e;if(t<16&&(e=Ne(t)))return e;if(t>64&&ze)return ze.decode(d.subarray(s,s+=t));const r=s+t,n=[];for(e="";s<r;){const i=d[s++];if((i&128)==0)n.push(i);else if((i&224)==192){const l=d[s++]&63;n.push((i&31)<<6|l)}else if((i&240)==224){const l=d[s++]&63,o=d[s++]&63;n.push((i&31)<<12|l<<6|o)}else if((i&248)==240){const l=d[s++]&63,o=d[s++]&63,h=d[s++]&63;let y=(i&7)<<18|l<<12|o<<6|h;y>65535&&(y-=65536,n.push(y>>>10&1023|55296),y=56320|y&1023),n.push(y)}else n.push(i);n.length>=4096&&(e+=T.apply(String,n),n.length=0)}return n.length>0&&(e+=T.apply(String,n)),e}function vt(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=I();return e}function bt(t){if(C.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Ut()]=I();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(I(),I());return e}}var T=String.fromCharCode;function _t(t){let e=s,r=new Array(t);for(let n=0;n<t;n++){const i=d[s++];if((i&128)>0){s=e;return}r[n]=i}return T.apply(String,r)}function Ne(t){if(t<4)if(t<2){if(t===0)return"";{let e=d[s++];if((e&128)>1){s-=1;return}return T(e)}}else{let e=d[s++],r=d[s++];if((e&128)>0||(r&128)>0){s-=2;return}if(t<3)return T(e,r);let n=d[s++];if((n&128)>0){s-=3;return}return T(e,r,n)}else{let e=d[s++],r=d[s++],n=d[s++],i=d[s++];if((e&128)>0||(r&128)>0||(n&128)>0||(i&128)>0){s-=4;return}if(t<6){if(t===4)return T(e,r,n,i);{let l=d[s++];if((l&128)>0){s-=5;return}return T(e,r,n,i,l)}}else if(t<8){let l=d[s++],o=d[s++];if((l&128)>0||(o&128)>0){s-=6;return}if(t<7)return T(e,r,n,i,l,o);let h=d[s++];if((h&128)>0){s-=7;return}return T(e,r,n,i,l,o,h)}else{let l=d[s++],o=d[s++],h=d[s++],y=d[s++];if((l&128)>0||(o&128)>0||(h&128)>0||(y&128)>0){s-=8;return}if(t<10){if(t===8)return T(e,r,n,i,l,o,h,y);{let m=d[s++];if((m&128)>0){s-=9;return}return T(e,r,n,i,l,o,h,y,m)}}else if(t<12){let m=d[s++],O=d[s++];if((m&128)>0||(O&128)>0){s-=10;return}if(t<11)return T(e,r,n,i,l,o,h,y,m,O);let B=d[s++];if((B&128)>0){s-=11;return}return T(e,r,n,i,l,o,h,y,m,O,B)}else{let m=d[s++],O=d[s++],B=d[s++],k=d[s++];if((m&128)>0||(O&128)>0||(B&128)>0||(k&128)>0){s-=12;return}if(t<14){if(t===12)return T(e,r,n,i,l,o,h,y,m,O,B,k);{let P=d[s++];if((P&128)>0){s-=13;return}return T(e,r,n,i,l,o,h,y,m,O,B,k,P)}}else{let P=d[s++],R=d[s++];if((P&128)>0||(R&128)>0){s-=14;return}if(t<15)return T(e,r,n,i,l,o,h,y,m,O,B,k,P,R);let W=d[s++];if((W&128)>0){s-=15;return}return T(e,r,n,i,l,o,h,y,m,O,B,k,P,R,W)}}}}}function $e(t){return C.copyBuffers?Uint8Array.prototype.slice.call(d,s,s+=t):d.subarray(s,s+=t)}function re(t){let e=d[s++];if(N[e])return N[e](d.subarray(s,s+=t));throw new Error("Unknown extension type "+e)}var kt=new Array(4096);function Ut(){let t=d[s++];if(t>=160&&t<192){if(t=t-160,J>=s)return Y.slice(s-q,(s+=t)-q);if(!(J==0&&X<180))return Fe(t)}else return s--,I();let e=(t<<5^(t>1?b.getUint16(s):t>0?d[s]:0))&4095,r=kt[e],n=s,i=s+t-3,l,o=0;if(r&&r.bytes==t){for(;n<i;){if(l=b.getUint32(n),l!=r[o++]){n=1879048192;break}n+=4}for(i+=3;n<i;)if(l=d[n++],l!=r[o++]){n=1879048192;break}if(n===i)return s=n,r.string;i-=3,n=s}for(r=[],kt[e]=r,r.bytes=t;n<i;)l=b.getUint32(n),r.push(l),n+=4;for(i+=3;n<i;)l=d[n++],r.push(l);let h=t<16?Ne(t):_t(t);return h!=null?r.string=h:r.string=Fe(t)}const Et=(t,e)=>{var r=I();let n=t;e!==void 0&&(t=t<32?-((e<<5)+t):(e<<5)+t,r.highByte=e);let i=S[t];return i&&i.isShared&&((S.restoreStructures||(S.restoreStructures=[]))[t]=i),S[t]=r,r.read=Le(r,n),r.read()};var Ot=typeof self=="object"?self:global;N[0]=()=>{};N[0].noBuffer=!0;N[101]=()=>{let t=I();return(Ot[t[0]]||Error)(t[1])};N[105]=t=>{let e=b.getUint32(s-4);K||(K=new Map);let r=d[s],n;r>=144&&r<160||r==220||r==221?n=[]:n={};let i={target:n};K.set(e,i);let l=I();return i.used?Object.assign(n,l):(i.target=l,l)};N[112]=t=>{let e=b.getUint32(s-4),r=K.get(e);return r.used=!0,r.target};N[115]=()=>new Set(I());const It=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(t=>t+"Array");N[116]=t=>{let e=t[0],r=It[e];if(!r)throw new Error("Could not find typed array for code "+e);return new Ot[r](Uint8Array.prototype.slice.call(t,1).buffer)};N[120]=()=>{let t=I();return new RegExp(t[0],t[1])};N[98]=t=>{let e=(t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3],r=s;s+=e-4,F=[I(),I()],F.position0=0,F.position1=0;let n=s;s=r;try{return I()}finally{s=n}};N[255]=t=>t.length==4?new Date((t[0]*16777216+(t[1]<<16)+(t[2]<<8)+t[3])*1e3):t.length==8?new Date(((t[0]<<22)+(t[1]<<14)+(t[2]<<6)+(t[3]>>2))/1e6+((t[3]&3)*4294967296+t[4]*16777216+(t[5]<<16)+(t[6]<<8)+t[7])*1e3):t.length==12?new Date(((t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3])/1e6+((t[4]&128?-281474976710656:0)+t[6]*1099511627776+t[7]*4294967296+t[8]*16777216+(t[9]<<16)+(t[10]<<8)+t[11])*1e3):new Date("invalid");function At(t){let e=X,r=s,n=q,i=J,l=Y,o=K,h=F,y=new Uint8Array(d.slice(0,X)),m=S,O=S.slice(0,S.length),B=C,k=ne,P=t();return X=e,s=r,q=n,J=i,Y=l,K=o,F=h,d=y,ne=k,S=m,S.splice(0,S.length,...O),C=B,b=new DataView(d.buffer,d.byteOffset,d.byteLength),P}function Ve(){d=null,K=null,S=null}const qe=new Array(147);for(let t=0;t<256;t++)qe[t]=+("1e"+Math.floor(45.15-t*.30103));var Ue=new ce({useRecords:!1});const kr=Ue.unpack;Ue.unpackMultiple;Ue.unpack;let Ur=new Float32Array(1);new Uint8Array(Ur.buffer,0,4);let Ee;try{Ee=new TextEncoder}catch{}let We,Bt;const Oe=typeof Buffer!="undefined",He=Oe?Buffer.allocUnsafeSlow:Uint8Array,Pt=Oe?Buffer:Uint8Array,Tt=Oe?4294967296:2144337920;let f,A,a=0,Z,G=null;const Er=/[\u0080-\uFFFF]/,de=Symbol("record-id");class Or extends ce{constructor(e){super(e);this.offset=0;let r,n,i,l,o,h=0,y=Pt.prototype.utf8Write?function(u,w,c){return f.utf8Write(u,w,c)}:Ee&&Ee.encodeInto?function(u,w){return Ee.encodeInto(u,f.subarray(w)).written}:!1,m=this;e||(e={});let O=e&&e.sequential,B=e.structures||e.saveStructures,k=e.maxSharedStructures;if(k==null&&(k=B?32:0),k>8160)throw new Error("Maximum maxSharedStructure is 8160");let P=e.maxOwnStructures;P==null&&(P=B?32:64),O&&!e.saveStructures&&(this.structures=[]);let R=k>32||P+k>64,W=k+64,Q=k+P+64;if(Q>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let $=[],ee=0,H=0;this.pack=this.encode=function(u,w){if(f||(f=new He(8192),A=new DataView(f.buffer,0,8192),a=0),Z=f.length-10,Z-a<2048?(f=new He(f.length),A=new DataView(f.buffer,0,f.length),Z=f.length-10,a=0):a=a+7&2147483640,r=a,o=m.structuredClone?new Map:null,m.bundleStrings?(G=["",""],f[a++]=214,f[a++]=98,G.position=a-r,a+=4):G=null,n=m.structures,n){n.uninitialized&&(n=m._mergeStructures(m.getStructures()));let c=n.sharedLength||0;if(c>k)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+n.sharedLength);if(!n.transitions){n.transitions=Object.create(null);for(let g=0;g<c;g++){let x=n[g];if(!x)continue;let p,_=n.transitions;for(let v=0,V=x.length;v<V;v++){let D=x[v];p=_[D],p||(p=_[D]=Object.create(null)),_=p}_[de]=g+64}h=c}O||(n.nextId=c+64)}i&&(i=!1),l=n||[];try{if(j(u),G){A.setUint32(G.position+r,a-G.position-r);let c=G;G=null,j(c[0]),j(c[1])}if(m.offset=a,o&&o.idsToInsert){a+=o.idsToInsert.length*6,a>Z&&ae(a),m.offset=a;let c=Ar(f.subarray(r,a),o.idsToInsert);return o=null,c}return w&Br?(f.start=r,f.end=a,f):f.subarray(r,a)}finally{if(n){if(H<10&&H++,ee>1e4)n.transitions=null,H=0,ee=0,$.length>0&&($=[]);else if($.length>0&&!O){for(let c=0,g=$.length;c<g;c++)$[c][de]=0;$=[]}if(i&&m.saveStructures){let c=n.sharedLength||k;n.length>c&&(n=n.slice(0,c));let g=f.subarray(r,a);return m.saveStructures(n,h)===!1?(m._mergeStructures(m.getStructures()),m.pack(u)):(h=c,g)}}w&Pr&&(a=r)}};const j=u=>{a>Z&&(f=ae(a));var w=typeof u,c;if(w==="string"){let g=u.length;if(G&&g>=8&&g<4096){let _=Er.test(u);G[_?0:1]+=u,f[a++]=193,j(_?-g:g);return}let x;g<32?x=1:g<256?x=2:g<65536?x=3:x=5;let p=g*3;if(a+p>Z&&(f=ae(a+p)),g<64||!y){let _,v,V,D=a+x;for(_=0;_<g;_++)v=u.charCodeAt(_),v<128?f[D++]=v:v<2048?(f[D++]=v>>6|192,f[D++]=v&63|128):(v&64512)==55296&&((V=u.charCodeAt(_+1))&64512)==56320?(v=65536+((v&1023)<<10)+(V&1023),_++,f[D++]=v>>18|240,f[D++]=v>>12&63|128,f[D++]=v>>6&63|128,f[D++]=v&63|128):(f[D++]=v>>12|224,f[D++]=v>>6&63|128,f[D++]=v&63|128);c=D-a-x}else c=y(u,a+x,p);c<32?f[a++]=160|c:c<256?(x<2&&f.copyWithin(a+2,a+1,a+1+c),f[a++]=217,f[a++]=c):c<65536?(x<3&&f.copyWithin(a+3,a+2,a+2+c),f[a++]=218,f[a++]=c>>8,f[a++]=c&255):(x<5&&f.copyWithin(a+5,a+3,a+3+c),f[a++]=219,A.setUint32(a,c),a+=4),a+=c}else if(w==="number")if(u>>>0===u)u<64?f[a++]=u:u<256?(f[a++]=204,f[a++]=u):u<65536?(f[a++]=205,f[a++]=u>>8,f[a++]=u&255):(f[a++]=206,A.setUint32(a,u),a+=4);else if(u>>0===u)u>=-32?f[a++]=256+u:u>=-128?(f[a++]=208,f[a++]=u+256):u>=-32768?(f[a++]=209,A.setInt16(a,u),a+=2):(f[a++]=210,A.setInt32(a,u),a+=4);else{let g;if((g=this.useFloat32)>0&&u<4294967296&&u>=-2147483648){f[a++]=202,A.setFloat32(a,u);let x;if(g<4||(x=u*qe[(f[a]&127)<<1|f[a+1]>>7])>>0===x){a+=4;return}else a--}f[a++]=203,A.setFloat64(a,u),a+=8}else if(w==="object")if(!u)f[a++]=192;else{if(o){let x=o.get(u);if(x){if(!x.id){let p=o.idsToInsert||(o.idsToInsert=[]);x.id=p.push(x)}f[a++]=214,f[a++]=112,A.setUint32(a,x.id),a+=4;return}else o.set(u,{offset:a-r})}let g=u.constructor;if(g===Object)Ye(u,!0);else if(g===Array){c=u.length,c<16?f[a++]=144|c:c<65536?(f[a++]=220,f[a++]=c>>8,f[a++]=c&255):(f[a++]=221,A.setUint32(a,c),a+=4);for(let x=0;x<c;x++)j(u[x])}else if(g===Map){c=u.size,c<16?f[a++]=128|c:c<65536?(f[a++]=222,f[a++]=c>>8,f[a++]=c&255):(f[a++]=223,A.setUint32(a,c),a+=4);for(let[x,p]of u)j(x),j(p)}else{for(let x=0,p=We.length;x<p;x++){let _=Bt[x];if(u instanceof _){let v=We[x];if(v.write){v.type&&(f[a++]=212,f[a++]=v.type,f[a++]=0),j(v.write.call(this,u));return}let V=f,D=A,ar=a;f=null;let le;try{le=v.pack.call(this,u,et=>(f=V,V=null,a+=et,a>Z&&ae(a),{target:f,targetView:A,position:a-et}),j)}finally{V&&(f=V,A=D,a=ar,Z=f.length-10)}le&&(le.length+a>Z&&ae(le.length+a),a=Ir(le,f,a,v.type));return}}Ye(u,!u.hasOwnProperty)}}else if(w==="boolean")f[a++]=u?195:194;else if(w==="bigint"){if(u<BigInt(1)<<BigInt(63)&&u>=-(BigInt(1)<<BigInt(63)))f[a++]=211,A.setBigInt64(a,u);else if(u<BigInt(1)<<BigInt(64)&&u>0)f[a++]=207,A.setBigUint64(a,u);else if(this.largeBigIntToFloat)f[a++]=203,A.setFloat64(a,Number(u));else throw new RangeError(u+" was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");a+=8}else if(w==="undefined")this.encodeUndefinedAsNil?f[a++]=192:(f[a++]=212,f[a++]=0,f[a++]=0);else if(w==="function")j(this.writeFunction&&this.writeFunction());else throw new Error("Unknown type: "+w)},Ye=this.useRecords===!1?this.variableMapSize?u=>{let w=Object.keys(u),c=w.length;c<16?f[a++]=128|c:c<65536?(f[a++]=222,f[a++]=c>>8,f[a++]=c&255):(f[a++]=223,A.setUint32(a,c),a+=4);let g;for(let x=0;x<c;x++)j(g=w[x]),j(u[g])}:(u,w)=>{f[a++]=222;let c=a-r;a+=2;let g=0;for(let x in u)(w||u.hasOwnProperty(x))&&(j(x),j(u[x]),g++);f[c+++r]=g>>8,f[c+r]=g&255}:u=>{let w=Object.keys(u),c,g=l.transitions||(l.transitions=Object.create(null)),x=0;for(let _=0,v=w.length;_<v;_++){let V=w[_];c=g[V],c||(c=g[V]=Object.create(null),x++),g=c}let p=g[de];if(p)p>=96&&R?(f[a++]=((p-=96)&31)+96,f[a++]=p>>5):f[a++]=p;else{p=l.nextId,p||(p=64),p<W&&this.shouldShareStructure&&!this.shouldShareStructure(w)?(p=l.nextOwnId,p<Q||(p=W),l.nextOwnId=p+1):(p>=Q&&(p=W),l.nextId=p+1);let _=w.highByte=p>=96&&R?p-96>>5:-1;g[de]=p,l[p-64]=w,p<W?(w.isShared=!0,l.sharedLength=p-63,i=!0,_>=0?(f[a++]=(p&31)+96,f[a++]=_):f[a++]=p):(_>=0?(f[a++]=213,f[a++]=114,f[a++]=(p&31)+96,f[a++]=_):(f[a++]=212,f[a++]=114,f[a++]=p),x&&(ee+=H*x),$.length>=P&&($.shift()[de]=0),$.push(g),j(w))}for(let _=0,v=w.length;_<v;_++)j(u[w[_]])},ae=u=>{let w;if(u>16777216){if(u-r>Tt)throw new Error("Packed buffer would be larger than maximum buffer size");w=Math.min(Tt,Math.round(Math.max((u-r)*(u>67108864?1.25:2),4194304)/4096)*4096)}else w=(Math.max(u-r<<2,f.length-1)>>12)+1<<12;let c=new He(w);return A=new DataView(c.buffer,0,w),f.copy?f.copy(c,0,r,u):c.set(f.slice(r,u)),a-=r,r=0,Z=c.length-10,f=c}}useBuffer(e){f=e,A=new DataView(f.buffer,f.byteOffset,f.byteLength),a=0}}Bt=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,gt];We=[{pack(t,e,r){let n=t.getTime()/1e3;if((this.useTimestamp32||t.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:i,targetView:l,position:o}=e(6);i[o++]=214,i[o++]=255,l.setUint32(o,n)}else if(n>0&&n<17179869184){let{target:i,targetView:l,position:o}=e(10);i[o++]=215,i[o++]=255,l.setUint32(o,t.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),l.setUint32(o+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),r(this.onInvalidDate());let{target:i,targetView:l,position:o}=e(3);i[o++]=212,i[o++]=255,i[o++]=255}else{let{target:i,targetView:l,position:o}=e(15);i[o++]=199,i[o++]=12,i[o++]=255,l.setUint32(o,t.getMilliseconds()*1e6),l.setBigInt64(o+4,BigInt(Math.floor(n)))}}},{pack(t,e,r){let n=Array.from(t),{target:i,position:l}=e(this.structuredClone?3:0);this.structuredClone&&(i[l++]=212,i[l++]=115,i[l++]=0),r(n)}},{pack(t,e,r){let{target:n,position:i}=e(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=101,n[i++]=0),r([t.name,t.message])}},{pack(t,e,r){let{target:n,position:i}=e(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=120,n[i++]=0),r([t.source,t.flags])}},{pack(t,e){this.structuredClone?Mt(t,16,e):jt(Oe?Buffer.from(t):new Uint8Array(t),e)}},{pack(t,e){let r=t.constructor;r!==Pt&&this.structuredClone?Mt(t,It.indexOf(r.name),e):jt(t,e)}},{pack(t,e){let{target:r,position:n}=e(1);r[n]=193}}];function Mt(t,e,r,n){let i=t.byteLength;if(i+1<256){var{target:l,position:o}=r(4+i);l[o++]=199,l[o++]=i+1}else if(i+1<65536){var{target:l,position:o}=r(5+i);l[o++]=200,l[o++]=i+1>>8,l[o++]=i+1&255}else{var{target:l,position:o,targetView:h}=r(7+i);l[o++]=201,h.setUint32(o,i+1),o+=4}l[o++]=116,l[o++]=e,l.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),o)}function jt(t,e){let r=t.byteLength;var n,i;if(r<256){var{target:n,position:i}=e(r+2);n[i++]=196,n[i++]=r}else if(r<65536){var{target:n,position:i}=e(r+3);n[i++]=197,n[i++]=r>>8,n[i++]=r&255}else{var{target:n,position:i,targetView:l}=e(r+5);n[i++]=198,l.setUint32(i,r),i+=4}n.set(t,i)}function Ir(t,e,r,n){let i=t.length;switch(i){case 1:e[r++]=212;break;case 2:e[r++]=213;break;case 4:e[r++]=214;break;case 8:e[r++]=215;break;case 16:e[r++]=216;break;default:i<256?(e[r++]=199,e[r++]=i):i<65536?(e[r++]=200,e[r++]=i>>8,e[r++]=i&255):(e[r++]=201,e[r++]=i>>24,e[r++]=i>>16&255,e[r++]=i>>8&255,e[r++]=i&255)}return e[r++]=n,e.set(t,r),r+=i,r}function Ar(t,e){let r,n=e.length*6,i=t.length-n;for(e.sort((l,o)=>l.offset>o.offset?1:-1);r=e.pop();){let l=r.offset,o=r.id;t.copyWithin(l+n,l,i),n-=6;let h=l+n;t[h++]=214,t[h++]=105,t[h++]=o>>24,t[h++]=o>>16&255,t[h++]=o>>8&255,t[h++]=o&255,i=l}return t}let Dt=new Or({useRecords:!1});Dt.pack;Dt.pack;const Br=512,Pr=1024,Je="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ct=Je.split(""),Rt=new Array(123);for(let t=0;t<Je.length;t++)Rt[Je.charCodeAt(t)]=t;const zt=t=>{if(t<0)return`-${ntob(-t)}`;let e=t>>>0,r=t/4294967296>>>0,n="";for(;r>0;)n=Ct[63&e]+n,e>>>=6,e|=(63&r)<<26,r>>>=6;let i="";do i=Ct[63&e]+i,e>>>=6;while(e>0);return i+n},Lt=t=>{let e=0;const r=t.charAt(0)==="-"?1:0;for(let n=r;n<t.length;n++)e=e*64+Rt[t.charCodeAt(n)];return r?-e:e};var Ft="https://i-ver.oss-cn-beijing.aliyuncs.com/",Nt,Tr=async t=>{var e,r;return t=await t,r=[],e=r.push.bind(r),t.on("data",e),new Promise((n,i)=>(t.on("end",()=>{n(Buffer.concat(r))}),t.on("error",i)))},Mr=t=>Tr($t(t));Nt=t=>{var e;return e=U.net.request(t),e.end(),new Promise((r,n)=>(e.on("error",i=>{n(i)}),e.on("response",i=>{if(i.statusCode!==200){n(i);return}r(i)})))};var $t=t=>Nt(t),xe={};xe.version="1.0.0";xe.encode=function(e){return e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};xe.decode=function(e){return e+=Array(5-e.length%4).join("="),e=e.replace(/\-/g,"+").replace(/\_/g,"/"),new Buffer(e,"base64")};xe.validate=function(e){return/^[A-Za-z0-9\-_]+$/.test(e)};var Ze=xe,Vt=JSON.parse(te.readFileSync(z.join(__dirname,"package.json"),"utf8"));var ie,qt,Ie,Ae,Ge,Be,he,Pe,Wt,Ht,Ke,Te,Jt,Qe,Zt,Xe;Ht=dr.promisify(st.brotliDecompress);var jr=()=>(U.app.relaunch(),U.app.exit());ie=z.join(it.ROOT,"v");te.mkdirSync(ie,{recursive:!0});qt="sha512";Te=t=>Mr(Ft+t);Zt=t=>{var e,r,n;t=t.split("."),e=Buffer.allocUnsafe(2*t.length),n=0;for(r of t)e.writeUIntBE(r-0,n,2),n+=2;return e.readUintBE(0,6)};Jt=t=>{var e;return e=cr.createHash(qt),new Promise(r=>te.createReadStream(t).on("data",e.update.bind(e)).on("end",()=>{r(e.digest().slice(0,8))}))};Pe=(()=>{var t;return{v:t}=me.default,t&&Lt(t)})();Be=Zt(Vt.version);he=0;Xe=async()=>{var t;return t=zt(parseInt(new Date/1e3)),he=await Te("v?"+t),he};Wt=async t=>{var e,r,n,i,l,o,h,y,m,O,B,k,P,R,W,Q,$,ee;if(t||(t=he||await Xe()),O=t.readUintBE(0,6),Be!==Pe){if(n=zt(O),e=z.join(ie,n),O===Pe)return e;for($=Ze.encode(await Te(Ze.encode(t))),[r,i,h]=kr(await Ht(await Te($))),P=H=>fe.mkdir(z.join(e,H),{recursive:!0}),await Promise.all(r.map(P)),W=z.dirname(__dirname),R=m=0,B=i.length;m<B;R=++m)if(y=i[R],l=z.join(e,y),o=h[R],Q=async H=>Buffer.compare(o,await Jt(H))===0,!(te.existsSync(l)&&await Q(l))){if(await P(z.dirname(y)),k=z.join(W,y),te.existsSync(k)&&await Q(k)){await fe.copyFile(k,l);continue}if(ee=te.createWriteStream(l),(await $t(Ft+Ze.encode(o))).pipe(st.createBrotliDecompress()).pipe(ee),await new Promise(H=>{ee.on("finish",H)}),!await Q(l))return}return me.default.v=n,Pe=O,e}};var Gt=async()=>{var t,e,r;try{t=await Xe()}catch(n){return e=n,console.trace(e),0}return r=Be<t.readUintBE(0,6),r?t:0},Dr=()=>Vt.version;Ke=async()=>{var t;(t=await Gt())&&await Kt(t)};setInterval(Ke,864e5);Ie=Ae=Ge=void 0;Qe=()=>Ae=new Promise(t=>Ge=t);Qe();var Cr=()=>Ae,Kt=(...t)=>(Ie||(Ie=Wt(...t).then(async e=>{e&&(Ge([he,JSON.parse(await fe.readFile(z.join(e,"package.json"),"utf8")).description]),Qe())}).finally(()=>{Ie=!1})),Ae);setTimeout(async()=>{var t,e,r,n;if(te.existsSync(ie)){n=await fe.readdir(ie,{withFileTypes:!0});for(e of n)e.isDirectory()&&({name:r}=e,Lt(r)<Be&&await fe.rm(z.join(ie,r),{recursive:!0,force:!0}))}if(t=parseInt(new Date/864e5),t!==me.default.update_check)return me.default.update_check=t,await Ke()},15e3);var Rr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",relaunch:jr,update_check:Gt,ver_now:Dr,update_promise:Cr,update:Kt}),zr={ID:""},Qt=new Proxy({},{get:(t,e)=>()=>{var r,n,i;return{width:n,height:r}=U.screen.getPrimaryDisplay().size,i=oe[e]({width:n,height:r,roundedCorners:!1,transparent:!0,resizable:!1,hasShadow:!1}),i.setAlwaysOnTop(!0,"screen-saver"),i.setPosition(0,0),i}}),Xt=t=>{if(!!t&&!t.isDestroyed()){t.close();try{t.destroy()}catch{}}},se,Yt,er,E;({recbar:er}=oe);E=void 0;se=void 0;({draw:Yt}=Qt);var Lr=()=>{se||(se=Yt(),tr())},tr=()=>{pe(),se.focus()},Fr=()=>{Xt(se),se=void 0},rr=()=>{var t,e,r;return e={width:568,height:48,roundedCorners:!1,transparent:!0,shadow:!1,resizable:!1,hasShadow:!1},{width:r,height:t}=U.screen.getPrimaryDisplay().workArea,E=er(e),E.setPosition((r-e.width)/2,t-28-e.height),E.on("close",()=>E=void 0),E.on("system-context-menu",(n,i)=>{n.preventDefault()}),pe(),new Promise(n=>E.webContents.on("did-finish-load",()=>{pe(),E.focus(),n(E)}))},pe=()=>{E.setAlwaysOnTop(!0,"screen-saver")},Nr=()=>{var t,e,r,n,i;n=E.getPosition(),[r,e]=E.getSize(),[i,t]=E.size,E.setSize(i,t),E.setPosition(n[0]+r-i,n[1]),E.setHasShadow(!0)},$r=()=>{var t,e,r,n;e=E.getPosition(),E.size=r=E.getSize(),n=170,t=48,E.setMinimumSize(n,t),E.setSize(n,t),E.setPosition(e[0]+r[0]-n,e[1]),E.setHasShadow(!1)},Vr=()=>{be("show")},qr=()=>{be("showInactive")},Wr=()=>{E.hide()},Hr=async()=>{var t,e;e=await U.desktopCapturer.getSources({types:["screen"],thumbnailSize:{width:0,height:0}});for(t of e)return t.id},Jr=()=>{U.BrowserWindow.getAllWindows().forEach(t=>t.hide())},Zr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",draw:Lr,draw_top:tr,draw_x:Fr,\u5DE5\u5177\u6761:rr,top:pe,expand:Nr,left:$r,cancel:Vr,end:qr,hide:Wr,screen_source:Hr,stop:Jr}),Gr=t=>{zr.ID=t},Kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ID:Gr}),nr,ge,M,ir;({camera:nr}=oe);M=void 0;ge=void 0;var we=()=>{M&&!M.isDestroyed()&&M.getSize()[0]!==800&&(ge=M.getPosition()),Xt(M)},Qr=t=>{var e,r;r=M.getSize(),e=M.getPosition(),M.setSize(t,t),M.setPosition(Math.max(e[0]-(t-r[0])/2,0),Math.max(e[1]-(t-r[1]),0))},Xr=ir=(t,e)=>{M&&!M.isDestroyed()||(M=nr({width:t,height:e,shadow:!1,center:!0,roundedCorners:!1,resizable:!1,hasShadow:!1,transparent:!0}),M.setAlwaysOnTop(!0,"pop-up-menu"))},Yr=t=>{var e,r,n,i,l;M&&!M.isDestroyed()||(t!==void 0&&(ge=void 0),n=200,ir(n,n),ge?[we,l]=ge:({width:i,height:e}=U.screen.getPrimaryDisplay().size,t?(r=30,we=Math.round((i-546*1.57)/2+r+21),l=Math.round(e/2+546/2-n-r-21)):(r=62,we=r,l=e-r-n)),M.setPosition(we,l))},en=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",get x(){return we},size:Qr,default:Xr,circle:Yr});var sr,ye;({area:sr}=Qt);ye=void 0;var tn=()=>{ye=sr(),ye.on("close",()=>ye=void 0)},rn=()=>{ye.setIgnoreMouseEvents(!0,{forward:!0}),ht(),pe()};function nn(t,e,r,n){var i,l;i=t!=="camera",l=n===1&&i,l?tn():ht(),rr()}var sn=(t,e,r,n)=>{be(),nn(t,e,r,n)},an=t=>{U.shell.openExternal(t)},ln=()=>it.ROOT,fn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",userData:ln,close:be,count_down:mr,auto_update:Rr,recbar:Zr,USER:Kr,camera:en,area:rn,main:ue,rec:sn,open:an});(()=>{var t,e,r,n,i,l,o;r=hr.default.platform(),ue(),r==="darwin"&&(n=U.app.dock)!=null&&n.hide(),t=(h,y)=>{var m,O,B,k;y instanceof Function&&U.ipcMain.handle(h.join("."),(P,R)=>y(...R)),B=Object.entries(y);for(k of B)[O,m]=k,t([...h,O],m)},i=Object.entries(fn);for(o of i)[e,l]=o,t([e],l);wr(),yr()})();pr(U.app,{"window-all-closed":()=>{if(process.platform!=="darwin")return U.app.quit()},"second-instance":ue,activate:ue});U.app.requestSingleInstanceLock()||(U.app.quit(),process.exit(0));
