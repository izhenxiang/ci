"use strict";var Ar=Object.defineProperty;var bt=Object.getOwnPropertySymbols;var Pr=Object.prototype.hasOwnProperty,Ir=Object.prototype.propertyIsEnumerable;var St=(t,e,r)=>e in t?Ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,_t=(t,e)=>{for(var r in e||(e={}))Pr.call(e,r)&&St(t,r,e[r]);if(bt)for(var r of bt(e))Ir.call(e,r)&&St(t,r,e[r]);return t};var m=require("electron"),jr=require("os"),Y=require("fs"),q=require("path"),Rr=require("crypto"),Mt=require("zlib"),Dr=require("util"),te=require("./x.js"),we=require("fs/promises"),Ee=require("./r.js"),Ct=require("./s.js");function Mr(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var Cr=Mr(jr),zr="win32",le=t=>{if(!!t&&!t.isDestroyed()){t.close();try{t.destroy()}catch{}}},Lr=(t,e)=>{var r,n;for(r in e)n=e[r],t.on(r,n);return t};Xe=Ge=Ke=__dirname;var Ke=Ke,Ge=Ge,Xe=Xe,We,zt;We="127.0.0.1",zt="http://"+We,m.session.defaultSession.protocol.interceptStreamProtocol("http",(t,e)=>{var r,n,i,l,u,p,g,_,U;if(U=new URL(t.url),U.host===We)({pathname:u}=U),u==="/"&&(u+=".htm"),_=u.slice(u.lastIndexOf(".")+1),_.startsWith("htm")?l="text/html":l={js:"text/javascript",css:"text/css",svg:"image/svg+xml",woff2:"font/woff2"}[_]||"application/octet-stream",n=Y.createReadStream(Ge+u),e({data:n,statusCode:200,headers:{"content-type":l}});else{if(t.useSessionCookies=!0,t.partition="persist:I",p=m.net.request(t),p.on("response",k=>{var A,I;({headers:A,statusCode:I}=k),e({data:k},A,I)}),t.uploadData){g=t.uploadData;for(i of g)({bytes:r}=i),r&&p.write(r)}p.end()}});var he=new Proxy({},{get:(t,e)=>r=>{var n;return r=_t({skipTaskbar:!0,frame:!1,minimizable:!1,maximizable:!1,fullscreenable:!1,type:"toolbar",shadow:!1,hasShadow:!1,transparent:!0,webPreferences:{preload:q.join(Ke,"j.js"),webSecurity:!1}},r),n=new m.BrowserWindow(r),n.setMenu(null),e!=="main"&&n.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),n.loadURL(zt+"#"+e),n.once("ready-to-show",()=>n.show()),n.focus(),n}}),Lt;({main:Lt}=he);var ce=(t=!0)=>{var e,r,n;if(r=m.BrowserWindow.getAllWindows(),r.length){for(e of r)if(e.webContents.getURL().endsWith("/#main")){n=e,n.isMinimized()&&n.restore();break}}n||(n=Lt({type:"",resizable:!1,height:590,width:426,skipTaskbar:!1}),n.setAppDetails({appId:TITLE,appIconPath:execPath})),!(!t&&!n.isVisible())&&(n.show(),n.moveTop(),n.focus())},Wt={ID:""},Ve;try{Ve=new TextDecoder}catch{}var x,ee,s=0,F={},S,Q,N=0,K=0,z,X,$=[],b,kt={useRecords:!1,mapsAsObjects:!0};class Ft{}const $t=new Ft;$t.name="MessagePack 0xC1";var de=!1,Vt=2;try{new Function("")}catch{Vt=1/0}class ye{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0)),Object.assign(this,e)}unpack(e,r){if(x)return Kt(()=>(qe(),this?this.unpack(e,r):ye.prototype.unpack.call(kt,e,r)));ee=r>-1?r:e.length,s=0,K=0,Q=null,z=null,x=e;try{b=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw x=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof ye){if(F=this,this.structures)return S=this.structures,Oe();(!S||S.length>0)&&(S=[])}else F=kt,(!S||S.length>0)&&(S=[]);return Oe()}unpackMultiple(e,r){let n,i=0;try{de=!0;let l=e.length,u=this?this.unpack(e,l):Ie.unpack(e,l);if(r){for(r(u);s<l;)if(i=s,r(Oe())===!1)return}else{for(n=[u];s<l;)i=s,n.push(Oe());return n}}catch(l){throw l.lastPosition=i,l.values=n,l}finally{de=!1,qe()}}_mergeStructures(e,r){e=e||[];for(let n=0,i=e.length;n<i;n++){let l=e[n];l&&(l.isShared=!0,n>=32&&(l.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in r||[])if(n>=0){let i=e[n],l=r[n];l&&(i&&((e.restoreStructures||(e.restoreStructures=[]))[n]=i),e[n]=l)}return this.structures=e}decode(e,r){return this.unpack(e,r)}}function Oe(){try{if(!F.trusted&&!de){let e=S.sharedLength||0;e<S.length&&(S.length=e)}let t=R();if(z&&(s=z.postBundlePosition),s==ee)S.restoreStructures&&Ot(),S=null,x=null,X&&(X=null);else if(s>ee){let e=new Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}else if(!de)throw new Error("Data read, but end of buffer not reached");return t}catch(t){throw S.restoreStructures&&Ot(),qe(),(t instanceof RangeError||t.message.startsWith("Unexpected end of buffer"))&&(t.incomplete=!0),t}}function Ot(){for(let t in S.restoreStructures)S[t]=S.restoreStructures[t];S.restoreStructures=null}function R(){let t=x[s++];if(t<160)if(t<128){if(t<64)return t;{let e=S[t&63]||F.getStructures&&Nt()[t&63];return e?(e.read||(e.read=Ye(e,t&63)),e.read()):t}}else if(t<144)if(t-=128,F.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Jt()]=R();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(R(),R());return e}else{t-=144;let e=new Array(t);for(let r=0;r<t;r++)e[r]=R();return e}else if(t<192){let e=t-160;if(K>=s)return Q.slice(s-N,(s+=e)-N);if(K==0&&ee<140){let r=e<16?Qe(e):qt(e);if(r!=null)return r}return Ne(e)}else{let e;switch(t){case 192:return null;case 193:return z?(e=R(),e>0?z[1].slice(z.position1,z.position1+=e):z[0].slice(z.position0,z.position0-=e)):$t;case 194:return!1;case 195:return!0;case 196:return Fe(x[s++]);case 197:return e=b.getUint16(s),s+=2,Fe(e);case 198:return e=b.getUint32(s),s+=4,Fe(e);case 199:return se(x[s++]);case 200:return e=b.getUint16(s),s+=2,se(e);case 201:return e=b.getUint32(s),s+=4,se(e);case 202:if(e=b.getFloat32(s),F.useFloat32>2){let r=et[(x[s]&127)<<1|x[s+1]>>7];return s+=4,(r*e+(e>0?.5:-.5)>>0)/r}return s+=4,e;case 203:return e=b.getFloat64(s),s+=8,e;case 204:return x[s++];case 205:return e=b.getUint16(s),s+=2,e;case 206:return e=b.getUint32(s),s+=4,e;case 207:return F.int64AsNumber?(e=b.getUint32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigUint64(s),s+=8,e;case 208:return b.getInt8(s++);case 209:return e=b.getInt16(s),s+=2,e;case 210:return e=b.getInt32(s),s+=4,e;case 211:return F.int64AsNumber?(e=b.getInt32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigInt64(s),s+=8,e;case 212:if(e=x[s++],e==114)return Pt(x[s++]&63);{let r=$[e];if(r)return r.read?(s++,r.read(R())):r.noBuffer?(s++,r()):r(x.subarray(s,++s));throw new Error("Unknown extension "+e)}case 213:return e=x[s],e==114?(s++,Pt(x[s++]&63,x[s++])):se(2);case 214:return se(4);case 215:return se(8);case 216:return se(16);case 217:return e=x[s++],K>=s?Q.slice(s-N,(s+=e)-N):Fr(e);case 218:return e=b.getUint16(s),s+=2,K>=s?Q.slice(s-N,(s+=e)-N):$r(e);case 219:return e=b.getUint32(s),s+=4,K>=s?Q.slice(s-N,(s+=e)-N):Vr(e);case 220:return e=b.getUint16(s),s+=2,Tt(e);case 221:return e=b.getUint32(s),s+=4,Tt(e);case 222:return e=b.getUint16(s),s+=2,Bt(e);case 223:return e=b.getUint32(s),s+=4,Bt(e);default:if(t>=224)return t-256;if(t===void 0){let r=new Error("Unexpected end of MessagePack data");throw r.incomplete=!0,r}throw new Error("Unknown MessagePack token "+t)}}}const Wr=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function Ye(t,e){function r(){if(r.count++>Vt){let i=t.read=new Function("r","return function(){return {"+t.map(l=>Wr.test(l)?l+":r()":"["+JSON.stringify(l)+"]:r()").join(",")+"}}")(R);return t.highByte===0&&(t.read=Ut(e,t.read)),i()}let n={};for(let i=0,l=t.length;i<l;i++){let u=t[i];n[u]=R()}return n}return r.count=0,t.highByte===0?Ut(e,r):r}const Ut=(t,e)=>function(){let r=x[s++];if(r===0)return e();let n=t<32?-(t+(r<<5)):t+(r<<5),i=S[n]||Nt()[n];if(!i)throw new Error("Record id is not defined for "+n);return i.read||(i.read=Ye(i,t)),i.read()};function Nt(){let t=Kt(()=>(x=null,F.getStructures()));return S=F._mergeStructures(t,S)}var Ne=_e,Fr=_e,$r=_e,Vr=_e;function _e(t){let e;if(t<16&&(e=Qe(t)))return e;if(t>64&&Ve)return Ve.decode(x.subarray(s,s+=t));const r=s+t,n=[];for(e="";s<r;){const i=x[s++];if((i&128)===0)n.push(i);else if((i&224)===192){const l=x[s++]&63;n.push((i&31)<<6|l)}else if((i&240)===224){const l=x[s++]&63,u=x[s++]&63;n.push((i&31)<<12|l<<6|u)}else if((i&248)===240){const l=x[s++]&63,u=x[s++]&63,p=x[s++]&63;let g=(i&7)<<18|l<<12|u<<6|p;g>65535&&(g-=65536,n.push(g>>>10&1023|55296),g=56320|g&1023),n.push(g)}else n.push(i);n.length>=4096&&(e+=M.apply(String,n),n.length=0)}return n.length>0&&(e+=M.apply(String,n)),e}function Tt(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=R();return e}function Bt(t){if(F.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Jt()]=R();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(R(),R());return e}}var M=String.fromCharCode;function qt(t){let e=s,r=new Array(t);for(let n=0;n<t;n++){const i=x[s++];if((i&128)>0){s=e;return}r[n]=i}return M.apply(String,r)}function Qe(t){if(t<4)if(t<2){if(t===0)return"";{let e=x[s++];if((e&128)>1){s-=1;return}return M(e)}}else{let e=x[s++],r=x[s++];if((e&128)>0||(r&128)>0){s-=2;return}if(t<3)return M(e,r);let n=x[s++];if((n&128)>0){s-=3;return}return M(e,r,n)}else{let e=x[s++],r=x[s++],n=x[s++],i=x[s++];if((e&128)>0||(r&128)>0||(n&128)>0||(i&128)>0){s-=4;return}if(t<6){if(t===4)return M(e,r,n,i);{let l=x[s++];if((l&128)>0){s-=5;return}return M(e,r,n,i,l)}}else if(t<8){let l=x[s++],u=x[s++];if((l&128)>0||(u&128)>0){s-=6;return}if(t<7)return M(e,r,n,i,l,u);let p=x[s++];if((p&128)>0){s-=7;return}return M(e,r,n,i,l,u,p)}else{let l=x[s++],u=x[s++],p=x[s++],g=x[s++];if((l&128)>0||(u&128)>0||(p&128)>0||(g&128)>0){s-=8;return}if(t<10){if(t===8)return M(e,r,n,i,l,u,p,g);{let _=x[s++];if((_&128)>0){s-=9;return}return M(e,r,n,i,l,u,p,g,_)}}else if(t<12){let _=x[s++],U=x[s++];if((_&128)>0||(U&128)>0){s-=10;return}if(t<11)return M(e,r,n,i,l,u,p,g,_,U);let k=x[s++];if((k&128)>0){s-=11;return}return M(e,r,n,i,l,u,p,g,_,U,k)}else{let _=x[s++],U=x[s++],k=x[s++],A=x[s++];if((_&128)>0||(U&128)>0||(k&128)>0||(A&128)>0){s-=12;return}if(t<14){if(t===12)return M(e,r,n,i,l,u,p,g,_,U,k,A);{let I=x[s++];if((I&128)>0){s-=13;return}return M(e,r,n,i,l,u,p,g,_,U,k,A,I)}}else{let I=x[s++],J=x[s++];if((I&128)>0||(J&128)>0){s-=14;return}if(t<15)return M(e,r,n,i,l,u,p,g,_,U,k,A,I,J);let H=x[s++];if((H&128)>0){s-=15;return}return M(e,r,n,i,l,u,p,g,_,U,k,A,I,J,H)}}}}}function Et(){let t=x[s++],e;if(t<192)e=t-160;else switch(t){case 217:e=x[s++];break;case 218:e=b.getUint16(s),s+=2;break;case 219:e=b.getUint32(s),s+=4;break;default:throw new Error("Expected string")}return _e(e)}function Fe(t){return F.copyBuffers?Uint8Array.prototype.slice.call(x,s,s+=t):x.subarray(s,s+=t)}function se(t){let e=x[s++];if($[e])return $[e](x.subarray(s,s+=t));throw new Error("Unknown extension type "+e)}var At=new Array(4096);function Jt(){let t=x[s++];if(t>=160&&t<192){if(t=t-160,K>=s)return Q.slice(s-N,(s+=t)-N);if(!(K==0&&ee<180))return Ne(t)}else return s--,R();let e=(t<<5^(t>1?b.getUint16(s):t>0?x[s]:0))&4095,r=At[e],n=s,i=s+t-3,l,u=0;if(r&&r.bytes==t){for(;n<i;){if(l=b.getUint32(n),l!=r[u++]){n=1879048192;break}n+=4}for(i+=3;n<i;)if(l=x[n++],l!=r[u++]){n=1879048192;break}if(n===i)return s=n,r.string;i-=3,n=s}for(r=[],At[e]=r,r.bytes=t;n<i;)l=b.getUint32(n),r.push(l),n+=4;for(i+=3;n<i;)l=x[n++],r.push(l);let p=t<16?Qe(t):qt(t);return p!=null?r.string=p:r.string=Ne(t)}const Pt=(t,e)=>{var r=R();let n=t;e!==void 0&&(t=t<32?-((e<<5)+t):(e<<5)+t,r.highByte=e);let i=S[t];return i&&i.isShared&&((S.restoreStructures||(S.restoreStructures=[]))[t]=i),S[t]=r,r.read=Ye(r,n),r.read()};var Ht=typeof self=="object"?self:global;$[0]=()=>{};$[0].noBuffer=!0;$[101]=()=>{let t=R();return(Ht[t[0]]||Error)(t[1])};$[105]=t=>{let e=b.getUint32(s-4);X||(X=new Map);let r=x[s],n;r>=144&&r<160||r==220||r==221?n=[]:n={};let i={target:n};X.set(e,i);let l=R();return i.used?Object.assign(n,l):(i.target=l,l)};$[112]=t=>{let e=b.getUint32(s-4),r=X.get(e);return r.used=!0,r.target};$[115]=()=>new Set(R());const Zt=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(t=>t+"Array");$[116]=t=>{let e=t[0],r=Zt[e];if(!r)throw new Error("Could not find typed array for code "+e);return new Ht[r](Uint8Array.prototype.slice.call(t,1).buffer)};$[120]=()=>{let t=R();return new RegExp(t[0],t[1])};const Nr=[];$[98]=t=>{let e=(t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3],r=s;return s+=e-t.length,z=Nr,z=[Et(),Et()],z.position0=0,z.position1=0,z.postBundlePosition=s,s=r,R()};$[255]=t=>t.length==4?new Date((t[0]*16777216+(t[1]<<16)+(t[2]<<8)+t[3])*1e3):t.length==8?new Date(((t[0]<<22)+(t[1]<<14)+(t[2]<<6)+(t[3]>>2))/1e6+((t[3]&3)*4294967296+t[4]*16777216+(t[5]<<16)+(t[6]<<8)+t[7])*1e3):t.length==12?new Date(((t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3])/1e6+((t[4]&128?-281474976710656:0)+t[6]*1099511627776+t[7]*4294967296+t[8]*16777216+(t[9]<<16)+(t[10]<<8)+t[11])*1e3):new Date("invalid");function Kt(t){let e=ee,r=s,n=N,i=K,l=Q,u=X,p=z,g=new Uint8Array(x.slice(0,ee)),_=S,U=S.slice(0,S.length),k=F,A=de,I=t();return ee=e,s=r,N=n,K=i,Q=l,X=u,z=p,x=g,de=A,S=_,S.splice(0,S.length,...U),F=k,b=new DataView(x.buffer,x.byteOffset,x.byteLength),I}function qe(){x=null,X=null,S=null}const et=new Array(147);for(let t=0;t<256;t++)et[t]=+("1e"+Math.floor(45.15-t*.30103));var Ie=new ye({useRecords:!1});const qr=Ie.unpack;Ie.unpackMultiple;Ie.unpack;let Jr=new Float32Array(1);new Uint8Array(Jr.buffer,0,4);let Te;try{Te=new TextEncoder}catch{}let Je,Gt;const je=typeof Buffer!="undefined",Ue=je?Buffer.allocUnsafeSlow:Uint8Array,Xt=je?Buffer:Uint8Array,It=je?4294967296:2144337920;let o,ge,P,a=0,W,C=null;const Hr=61440,Zr=/[\u0080-\uFFFF]/,oe=Symbol("record-id");class Kr extends ye{constructor(e){super(e);this.offset=0;let r,n,i,l,u=0,p=Xt.prototype.utf8Write?function(f,y,d){return o.utf8Write(f,y,d)}:Te&&Te.encodeInto?function(f,y){return Te.encodeInto(f,o.subarray(y)).written}:!1,g=this;e||(e={});let _=e&&e.sequential,U=e.structures||e.saveStructures,k=e.maxSharedStructures;if(k==null&&(k=U?32:0),k>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(e.moreTypes=!0);let A=e.maxOwnStructures;A==null&&(A=U?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let I=k>32||A+k>64,J=k+64,H=k+A+64;if(H>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let V=[],re=0,Z=0;this.pack=this.encode=function(f,y){if(o||(o=new Ue(8192),P=new DataView(o.buffer,0,8192),a=0),W=o.length-10,W-a<2048?(o=new Ue(o.length),P=new DataView(o.buffer,0,o.length),W=o.length-10,a=0):a=a+7&2147483640,r=a,l=g.structuredClone?new Map:null,g.bundleStrings&&typeof f!="string"?(C=[],C.size=1/0):C=null,i=g.structures,i){i.uninitialized&&(i=g._mergeStructures(g.getStructures()));let d=i.sharedLength||0;if(d>k)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+i.sharedLength);if(!i.transitions){i.transitions=Object.create(null);for(let c=0;c<d;c++){let h=i[c];if(!h)continue;let O,v=i.transitions;for(let w=0,D=h.length;w<D;w++){let T=h[w];O=v[T],O||(O=v[T]=Object.create(null)),v=O}v[oe]=c+64}u=d}_||(i.nextId=d+64)}n&&(n=!1);try{if(B(f),C&&Dt(r,B),g.offset=a,l&&l.idsToInsert){a+=l.idsToInsert.length*6,a>W&&ne(a),g.offset=a;let d=Xr(o.subarray(r,a),l.idsToInsert);return l=null,d}return y&Yr?(o.start=r,o.end=a,o):o.subarray(r,a)}finally{if(i){Z<10&&Z++;let d=i.sharedLength||k;if(i.length>d&&(i.length=d),re>1e4)i.transitions=null,Z=0,re=0,V.length>0&&(V=[]);else if(V.length>0&&!_){for(let c=0,h=V.length;c<h;c++)V[c][oe]=0;V=[]}if(n&&g.saveStructures){let c=o.subarray(r,a);return g.saveStructures(i,u)===!1?(g._mergeStructures(g.getStructures()),g.pack(f)):(u=d,c)}}y&Qr&&(a=r)}};const B=f=>{a>W&&(o=ne(a));var y=typeof f,d;if(y==="string"){let c=f.length;if(C&&c>=4&&c<4096){if((C.size+=c)>Hr){let w,D=(C[0]?C[0].length*3+C[1].length:0)+10;a+D>W&&(o=ne(a+D)),C.position?(o[a]=200,a+=3,o[a++]=98,w=a-r,a+=4,Dt(r,B),P.setUint16(w+r-3,a-r-w)):(o[a++]=214,o[a++]=98,w=a-r,a+=4),C=["",""],C.size=0,C.position=w}let v=Zr.test(f);C[v?0:1]+=f,o[a++]=193,B(v?-c:c);return}let h;c<32?h=1:c<256?h=2:c<65536?h=3:h=5;let O=c*3;if(a+O>W&&(o=ne(a+O)),c<64||!p){let v,w,D,T=a+h;for(v=0;v<c;v++)w=f.charCodeAt(v),w<128?o[T++]=w:w<2048?(o[T++]=w>>6|192,o[T++]=w&63|128):(w&64512)===55296&&((D=f.charCodeAt(v+1))&64512)===56320?(w=65536+((w&1023)<<10)+(D&1023),v++,o[T++]=w>>18|240,o[T++]=w>>12&63|128,o[T++]=w>>6&63|128,o[T++]=w&63|128):(o[T++]=w>>12|224,o[T++]=w>>6&63|128,o[T++]=w&63|128);d=T-a-h}else d=p(f,a+h,O);d<32?o[a++]=160|d:d<256?(h<2&&o.copyWithin(a+2,a+1,a+1+d),o[a++]=217,o[a++]=d):d<65536?(h<3&&o.copyWithin(a+3,a+2,a+2+d),o[a++]=218,o[a++]=d>>8,o[a++]=d&255):(h<5&&o.copyWithin(a+5,a+3,a+3+d),o[a++]=219,P.setUint32(a,d),a+=4),a+=d}else if(y==="number")if(f>>>0===f)f<64?o[a++]=f:f<256?(o[a++]=204,o[a++]=f):f<65536?(o[a++]=205,o[a++]=f>>8,o[a++]=f&255):(o[a++]=206,P.setUint32(a,f),a+=4);else if(f>>0===f)f>=-32?o[a++]=256+f:f>=-128?(o[a++]=208,o[a++]=f+256):f>=-32768?(o[a++]=209,P.setInt16(a,f),a+=2):(o[a++]=210,P.setInt32(a,f),a+=4);else{let c;if((c=this.useFloat32)>0&&f<4294967296&&f>=-2147483648){o[a++]=202,P.setFloat32(a,f);let h;if(c<4||(h=f*et[(o[a]&127)<<1|o[a+1]>>7])>>0===h){a+=4;return}else a--}o[a++]=203,P.setFloat64(a,f),a+=8}else if(y==="object")if(!f)o[a++]=192;else{if(l){let h=l.get(f);if(h){if(!h.id){let O=l.idsToInsert||(l.idsToInsert=[]);h.id=O.push(h)}o[a++]=214,o[a++]=112,P.setUint32(a,h.id),a+=4;return}else l.set(f,{offset:a-r})}let c=f.constructor;if(c===Object)mt(f,!0);else if(c===Array){d=f.length,d<16?o[a++]=144|d:d<65536?(o[a++]=220,o[a++]=d>>8,o[a++]=d&255):(o[a++]=221,P.setUint32(a,d),a+=4);for(let h=0;h<d;h++)B(f[h])}else if(c===Map){d=f.size,d<16?o[a++]=128|d:d<65536?(o[a++]=222,o[a++]=d>>8,o[a++]=d&255):(o[a++]=223,P.setUint32(a,d),a+=4);for(let[h,O]of f)B(h),B(O)}else{for(let h=0,O=Je.length;h<O;h++){let v=Gt[h];if(f instanceof v){let w=Je[h];if(w.write){w.type&&(o[a++]=212,o[a++]=w.type,o[a++]=0),B(w.write.call(this,f));return}let D=o,T=P,G=a;o=null;let ie;try{ie=w.pack.call(this,f,pe=>(o=D,D=null,a+=pe,a>W&&ne(a),{target:o,targetView:P,position:a-pe}),B)}finally{D&&(o=D,P=T,a=G,W=o.length-10)}ie&&(ie.length+a>W&&ne(ie.length+a),a=Gr(ie,o,a,w.type));return}}mt(f,!f.hasOwnProperty)}}else if(y==="boolean")o[a++]=f?195:194;else if(y==="bigint"){if(f<BigInt(1)<<BigInt(63)&&f>=-(BigInt(1)<<BigInt(63)))o[a++]=211,P.setBigInt64(a,f);else if(f<BigInt(1)<<BigInt(64)&&f>0)o[a++]=207,P.setBigUint64(a,f);else if(this.largeBigIntToFloat)o[a++]=203,P.setFloat64(a,Number(f));else throw new RangeError(f+" was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");a+=8}else if(y==="undefined")this.encodeUndefinedAsNil?o[a++]=192:(o[a++]=212,o[a++]=0,o[a++]=0);else if(y==="function")B(this.writeFunction&&this.writeFunction());else throw new Error("Unknown type: "+y)},mt=this.useRecords===!1?this.variableMapSize?f=>{let y=Object.keys(f),d=y.length;d<16?o[a++]=128|d:d<65536?(o[a++]=222,o[a++]=d>>8,o[a++]=d&255):(o[a++]=223,P.setUint32(a,d),a+=4);let c;for(let h=0;h<d;h++)B(c=y[h]),B(f[c])}:(f,y)=>{o[a++]=222;let d=a-r;a+=2;let c=0;for(let h in f)(y||f.hasOwnProperty(h))&&(B(h),B(f[h]),c++);o[d+++r]=c>>8,o[d+r]=c&255}:e.progressiveRecords&&!I?(f,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=a++-r,O;for(let v in f)if(y||f.hasOwnProperty(v)){if(d=c[v],d)c=d;else{let w=Object.keys(f),D=c;c=i.transitions;let T=0;for(let G=0,ie=w.length;G<ie;G++){let pe=w[G];d=c[pe],d||(d=c[pe]=Object.create(null),T++),c=d}h+r+1==a?(a--,Le(c,w,T)):vt(c,w,h,T),O=!0,c=D[v]}B(f[v])}if(!O){let v=c[oe];v?o[h+r]=v:vt(c,Object.keys(f),h,0)}}:(f,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=0;for(let v in f)(y||f.hasOwnProperty(v))&&(d=c[v],d||(d=c[v]=Object.create(null),h++),c=d);let O=c[oe];O?O>=96&&I?(o[a++]=((O-=96)&31)+96,o[a++]=O>>5):o[a++]=O:Le(c,c.__keys__||Object.keys(f),h);for(let v in f)(y||f.hasOwnProperty(v))&&B(f[v])},ne=f=>{let y;if(f>16777216){if(f-r>It)throw new Error("Packed buffer would be larger than maximum buffer size");y=Math.min(It,Math.round(Math.max((f-r)*(f>67108864?1.25:2),4194304)/4096)*4096)}else y=(Math.max(f-r<<2,o.length-1)>>12)+1<<12;let d=new Ue(y);return P=new DataView(d.buffer,0,y),o.copy?o.copy(d,0,r,f):d.set(o.slice(r,f)),a-=r,r=0,W=d.length-10,o=d},Le=(f,y,d)=>{let c=i.nextId;c||(c=64),c<J&&this.shouldShareStructure&&!this.shouldShareStructure(y)?(c=i.nextOwnId,c<H||(c=J),i.nextOwnId=c+1):(c>=H&&(c=J),i.nextId=c+1);let h=y.highByte=c>=96&&I?c-96>>5:-1;f[oe]=c,f.__keys__=y,i[c-64]=y,c<J?(y.isShared=!0,i.sharedLength=c-63,n=!0,h>=0?(o[a++]=(c&31)+96,o[a++]=h):o[a++]=c):(h>=0?(o[a++]=213,o[a++]=114,o[a++]=(c&31)+96,o[a++]=h):(o[a++]=212,o[a++]=114,o[a++]=c),d&&(re+=Z*d),V.length>=A&&(V.shift()[oe]=0),V.push(f),B(y))},vt=(f,y,d,c)=>{let h=o,O=a,v=W,w=r;o=ge,a=0,r=0,o||(ge=o=new Ue(8192)),W=o.length-10,Le(f,y,c),ge=o;let D=a;if(o=h,a=O,W=v,r=w,D>1){let T=a+D-1;T>W&&ne(T);let G=d+r;o.copyWithin(G+D,G+1,a),o.set(ge.slice(0,D),G),a=T}else o[d+r]=ge[0]}}useBuffer(e){o=e,P=new DataView(o.buffer,o.byteOffset,o.byteLength),a=0}clearSharedData(){this.structures&&(this.structures=[])}}Gt=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,Ft];Je=[{pack(t,e,r){let n=t.getTime()/1e3;if((this.useTimestamp32||t.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:i,targetView:l,position:u}=e(6);i[u++]=214,i[u++]=255,l.setUint32(u,n)}else if(n>0&&n<17179869184){let{target:i,targetView:l,position:u}=e(10);i[u++]=215,i[u++]=255,l.setUint32(u,t.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),l.setUint32(u+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),r(this.onInvalidDate());let{target:i,targetView:l,position:u}=e(3);i[u++]=212,i[u++]=255,i[u++]=255}else{let{target:i,targetView:l,position:u}=e(15);i[u++]=199,i[u++]=12,i[u++]=255,l.setUint32(u,t.getMilliseconds()*1e6),l.setBigInt64(u+4,BigInt(Math.floor(n)))}}},{pack(t,e,r){let n=Array.from(t),{target:i,position:l}=e(this.moreTypes?3:0);this.moreTypes&&(i[l++]=212,i[l++]=115,i[l++]=0),r(n)}},{pack(t,e,r){let{target:n,position:i}=e(this.moreTypes?3:0);this.moreTypes&&(n[i++]=212,n[i++]=101,n[i++]=0),r([t.name,t.message])}},{pack(t,e,r){let{target:n,position:i}=e(this.moreTypes?3:0);this.moreTypes&&(n[i++]=212,n[i++]=120,n[i++]=0),r([t.source,t.flags])}},{pack(t,e){this.moreTypes?jt(t,16,e):Rt(je?Buffer.from(t):new Uint8Array(t),e)}},{pack(t,e){let r=t.constructor;r!==Xt&&this.moreTypes?jt(t,Zt.indexOf(r.name),e):Rt(t,e)}},{pack(t,e){let{target:r,position:n}=e(1);r[n]=193}}];function jt(t,e,r,n){let i=t.byteLength;if(i+1<256){var{target:l,position:u}=r(4+i);l[u++]=199,l[u++]=i+1}else if(i+1<65536){var{target:l,position:u}=r(5+i);l[u++]=200,l[u++]=i+1>>8,l[u++]=i+1&255}else{var{target:l,position:u,targetView:p}=r(7+i);l[u++]=201,p.setUint32(u,i+1),u+=4}l[u++]=116,l[u++]=e,l.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),u)}function Rt(t,e){let r=t.byteLength;var n,i;if(r<256){var{target:n,position:i}=e(r+2);n[i++]=196,n[i++]=r}else if(r<65536){var{target:n,position:i}=e(r+3);n[i++]=197,n[i++]=r>>8,n[i++]=r&255}else{var{target:n,position:i,targetView:l}=e(r+5);n[i++]=198,l.setUint32(i,r),i+=4}n.set(t,i)}function Gr(t,e,r,n){let i=t.length;switch(i){case 1:e[r++]=212;break;case 2:e[r++]=213;break;case 4:e[r++]=214;break;case 8:e[r++]=215;break;case 16:e[r++]=216;break;default:i<256?(e[r++]=199,e[r++]=i):i<65536?(e[r++]=200,e[r++]=i>>8,e[r++]=i&255):(e[r++]=201,e[r++]=i>>24,e[r++]=i>>16&255,e[r++]=i>>8&255,e[r++]=i&255)}return e[r++]=n,e.set(t,r),r+=i,r}function Xr(t,e){let r,n=e.length*6,i=t.length-n;for(e.sort((l,u)=>l.offset>u.offset?1:-1);r=e.pop();){let l=r.offset,u=r.id;t.copyWithin(l+n,l,i),n-=6;let p=l+n;t[p++]=214,t[p++]=105,t[p++]=u>>24,t[p++]=u>>16&255,t[p++]=u>>8&255,t[p++]=u&255,i=l}return t}function Dt(t,e){P.setUint32(C.position+t,a-C.position-t);let r=C;C=null,e(r[0]),e(r[1])}let Yt=new Kr({useRecords:!1});Yt.pack;Yt.pack;const Yr=512,Qr=1024;var en="https://izhenxiang.com/",Qt="https://desk-ver.izhenxiang.com/",er,tn=async t=>{var e,r;return t=await t,r=[],e=r.push.bind(r),t.on("data",e),new Promise((n,i)=>(t.on("end",()=>{n(Buffer.concat(r))}),t.on("error",i)))},rn=t=>tn(tr(t));er=t=>{var e;return e=m.net.request(t),e.end(),new Promise((r,n)=>(e.on("error",i=>{n(i)}),e.on("response",i=>{if(i.statusCode!==200){n(i);return}r(i)})))};var tr=t=>er(t),ke={};ke.version="1.0.0";ke.encode=function(e){return e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};ke.decode=function(e){return e+=Array(5-e.length%4).join("="),e=e.replace(/\-/g,"+").replace(/\_/g,"/"),new Buffer(e,"base64")};ke.validate=function(e){return/^[A-Za-z0-9\-_]+$/.test(e)};var $e=ke;var ue,rr,Be,Re,tt,me,rt,nr,ir,nt,Ae,sr,it,st,Pe,He,De;ir=Dr.promisify(Mt.brotliDecompress);var nn=()=>(m.app.relaunch(),m.app.exit());ue=q.join(Ct.ROOT,"v");Y.mkdirSync(ue,{recursive:!0});rr="sha512";Pe=void 0;var ar=()=>{le(Pe),Pe=void 0},lr=()=>{ar(),Pe=he.update({width:400,height:500,resizable:!1})};Ae=t=>rn(Qt+t);sr=t=>{var e;return e=Rr.createHash(rr),new Promise(r=>Y.createReadStream(t).on("data",e.update.bind(e)).on("end",()=>{r(e.digest().slice(0,8))}))};He=(()=>{var t;return{v:t}=Ee.default,t&&te.decode(t)})();var or=()=>te.PACKAGE_JSON().version;rt=zr+"/";De=te.ver_int(or());me=0;st=async()=>{var t;return t=te.encode(parseInt(new Date/1e3)),me=await Ae(rt+"v?"+t),me};nr=async t=>{var e,r,n,i,l,u,p,g,_,U,k,A,I,J,H,V,re,Z;if(t||(t=me||await st()),Z=t.readUintBE(0,6),!(De>=Z)){if(n=te.encode(Z),e=q.join(ue,n),Y.existsSync(q.join(e,te.package_json))&&Z===He)return e;for(V=$e.encode(await Ae(rt+$e.encode(t))),[r,i,p]=qr(await ir(await Ae(V))),A=B=>we.mkdir(q.join(e,B),{recursive:!0}),await Promise.all(r.map(A)),J=q.dirname(__dirname),I=_=0,U=i.length;_<U;I=++_)if(g=i[I],l=q.join(e,g),u=p[I],H=async B=>Buffer.compare(u,await sr(B))===0,!(Y.existsSync(l)&&await H(l))){if(await A(q.dirname(g)),k=q.join(J,g),Y.existsSync(k)&&await H(k)){await we.copyFile(k,l);continue}if(re=Y.createWriteStream(l),(await tr(Qt+$e.encode(u))).pipe(Mt.createBrotliDecompress()).pipe(re),await new Promise(B=>{re.on("finish",B)}),!await H(l))return}return Ee.default.v=n,He=Z,e}};var fr=async()=>{var t,e,r;try{t=await st()}catch(n){return e=n,console.trace(e),0}return r=De<t.readUintBE(0,6),r?t:0};nt=async()=>{var t;(t=await fr())&&await ur(t)};setInterval(nt,864e5);Be=Re=tt=void 0;it=()=>Re=new Promise(t=>tt=t);it();var sn=()=>Re,ur=(...t)=>(Be||(Be=nr(...t).then(async e=>{e&&(tt([me,JSON.parse(await we.readFile(q.join(e,te.package_json),"utf8")).description]),it())}).finally(()=>{Be=!1})),Re);setTimeout(async()=>{var t,e,r,n;if(Y.existsSync(ue)){n=await we.readdir(ue,{withFileTypes:!0});for(e of n)e.isDirectory()&&({name:r}=e,te.decode(r)<De&&await we.rm(q.join(ue,r),{recursive:!0,force:!0}))}if(t=parseInt(new Date/864e5),t!==Ee.default.update_check)return Ee.default.update_check=t,await nt()},15e3);var an=Object.freeze(Object.defineProperty({__proto__:null,relaunch:nn,x:ar,show:lr,ver_now:or,update_check:fr,update_promise:sn,update:ur},Symbol.toStringTag,{value:"Module"}));var Me,at,cr,dr,lt,ln,ot,xr,hr,ve;Cr.default.platform();({Menu:at,Tray:cr,app:dr,globalShortcut:ln}=require("electron"));ve=new cr(q.join(Xe,"trayTemplate.png"));ot=[{label:"\u5A92\u4F53\u5E93",click:()=>{m.shell.openExternal(en+"video_library.html?user_token="+Wt.ID)}},{label:"\u68C0\u6D4B\u66F4\u65B0",click:lr},{type:"separator"}];Me=xr=at.buildFromTemplate([{label:"\u663E\u793A\u754C\u9762",click:ce},...ot,{label:"\u9000\u51FA",click:()=>dr.quit()}]);hr=at.buildFromTemplate(ot);lt=["click",()=>{ce()}];ve.on("right-click",t=>{ve.popUpContextMenu(Me)});var on=()=>{ve.off(...lt),Me=hr},pr=()=>{ve.on(...lt),Me=xr};var gr;gr=t=>{var e,r,n,i,l,u,p,g;t&&(t.devToolsWebContents||({webContents:l}=t,e=new m.BrowserWindow({minimizable:!1,maximizable:!1}),[i,r]=t.getSize(),[p,g]=t.getPosition(),{width:u,height:n}=m.screen.getPrimaryDisplay().workArea,l.setDevToolsWebContents(e.webContents),l.openDevTools({mode:"detach"}),i>r?(g=0,i=0,r+=20,n-=r):(p=0,r=0,u-=i),e.setPosition(i,r),t.setPosition(p,g),e.setSize(u,n),t.focus()))};var fn=()=>{m.globalShortcut.register("CmdOrCtrl+Alt+I",()=>gr(m.BrowserWindow.getFocusedWindow()))},Ce=t=>{m.BrowserWindow.getAllWindows().forEach(e=>{var r,n;if(n=e.webContents.getURL(),n){if({hash:r}=new URL(n),r=r.slice(1),r.startsWith("main")){t?(e[t](),t==="show"&&e.once("show",()=>{e.setAlwaysOnTop(!0,"screen-saver"),setTimeout(()=>e.setAlwaysOnTop(!1,"screen-saver"),1e3)})):e.hide();return}if(r.startsWith("camera"))return}le(e)})},un=()=>{m.BrowserWindow.getAllWindows().forEach(t=>{var e,r;if(r=t.webContents.getURL(),r&&({hash:e}=new URL(r),e=e.slice(1),e.startsWith("main"))){t.hide();return}le(t)})},wr,ze,yr,ae,E,ft;({camera:yr}=he);E=void 0;ae=void 0;wr=204;var mr=()=>{E&&!E.isDestroyed()&&E.getSize()[0]!==800&&(ae=E.getPosition()),le(E)},cn=t=>{var e,r;r=E.getSize()[0],r!==t&&(ae=E.getPosition(),e=Math.round((t-r)/2),E.setBounds({x:ae[0]-e,y:ae[1]-e,width:t,height:t}))};ze=!1;var vr=()=>ft(800,500),dn=ft=(t,e)=>{E&&!E.isDestroyed()||(E=yr({width:t,height:e,center:!0,roundedCorners:!1,resizable:!1,transparent:!0}),ze&&ut())},xn=t=>{var e,r,n,i,l;E&&!E.isDestroyed()||(t=t||wr,ft(t,t),ae?[e,r]=ae:({width:l,height:n}=m.screen.getPrimaryDisplay().size,i=62,e=i,r=n-i-t),E.setPosition(e,r))},hn=()=>{mr(),vr()},ut=()=>{E&&!E.isDestroyed()&&(E.setAlwaysOnTop(!0,"pop-up-menu"),E.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0})),ze=!0},br=()=>{E&&!E.isDestroyed()&&(E.setAlwaysOnTop(!1),E.setVisibleOnAllWorkspaces(!1)),ze=!1},pn=Object.freeze(Object.defineProperty({__proto__:null,x:mr,size:cn,rect:vr,default:dn,circle:xn,x_rect:hn,top:ut,untop:br},Symbol.toStringTag,{value:"Module"})),ct=new Proxy({},{get:(t,e)=>()=>{var r,n,i;return{width:n,height:r}=m.screen.getPrimaryDisplay().size,i=he[e]({width:n,height:r,roundedCorners:!1,transparent:!0,resizable:!1,hasShadow:!1}),i.setAlwaysOnTop(!0,"screen-saver"),i.setPosition(0,0),i.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),i}}),dt,xe,Ze,xt,Sr,_r,kr,Or,j;({recbar:Or}=he);j=void 0;xe=void 0;({draw:kr}=ct);var gn=()=>{xe||(xe=kr(),Ur())},Ur=()=>{be(),xe.focus()},wn=()=>{le(xe),xe=void 0};Ze=["CommandOrControl+R","CommandOrControl+W","CommandOrControl+Q","Alt+F4","F5"];dt={"browser-window-focus":()=>{var t;for(t of Ze)m.globalShortcut.register(t,()=>{})},"browser-window-blur":()=>{var t;for(t of Ze)m.globalShortcut.unregister(t,()=>{})}};var ht=t=>{var e;return t==="camera"?e=452:e=552,Sr(e)};Sr=t=>{var e,r,n,i,l,u,p,g;l=Object.entries(dt);for(g of l)[n,e]=g,m.app.on(n,e);return on(),r=48,i={roundedCorners:!1,transparent:!0,resizable:!1,width:t,height:r},j=Or(i),j.on("close",()=>j=void 0),{width:p,height:u}=m.screen.getPrimaryDisplay().workArea,j.setBounds({x:Math.round((p-t)/2),y:u-28-r,width:t,height:r}),be(),ut(),new Promise(_=>j.webContents.on("did-finish-load",()=>{be(),j.focus(),_(j)}))};var be=()=>{j&&(j.setAlwaysOnTop(!0,"screen-saver"),j.moveTop())},yn=()=>{var t,e,r,n,i;n=j.getPosition(),[r,e]=j.getSize(),[i,t]=j.size,j.setBounds({x:n[0]+r-i,y:n[1],width:i,height:t})},mn=()=>{var t,e,r,n;e=j.getPosition(),j.size=r=j.getSize(),n=162,t=48,j.setBounds({x:e[0]+r[0]-n,y:e[1],width:n,height:t})};xt=()=>{var t,e,r,n;r=Object.entries(dt);for(n of r)[e,t]=n,m.app.off(e,t);pr(),br()};var vn=()=>{xt(),Ce("show")},bn=()=>{xt(),Ce()},Sn=()=>{j.hide()};_r=(...t)=>m.desktopCapturer.getSources({types:t,thumbnailSize:{width:0,height:0}});var _n=async()=>{var t,e;e=await _r("screen");for(t of e)return t.id},kn=t=>{m.BrowserWindow.getAllWindows().forEach(e=>{var r;if({hash:r}=new URL(e.webContents.getURL()),!t&&r.slice(1)==="camera"){le(e);return}return e.hide()})},On=Object.freeze(Object.defineProperty({__proto__:null,draw:gn,draw_top:Ur,draw_x:wn,\u5DE5\u5177\u6761:ht,top:be,expand:yn,left:mn,cancel:vn,end:bn,hide:Sn,screen_source:_n,stop:kn},Symbol.toStringTag,{value:"Module"})),Tr,L;({count_down:Tr}=he);L=void 0;var Br=()=>{var t;if(L){L.focus();return}t=240,L=Tr({width:t,height:t,transparent:!0,resizable:!1,hasShadow:!1}),L.on("close",()=>{L=void 0}),L.setAlwaysOnTop(!0,"screen-saver"),L.on("show",()=>{var e,r,n,i;i=m.BrowserWindow.getAllWindows();for(r of i)r.webContents.getURL().endsWith("/#main")||r.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0});n=setInterval(()=>L?L.moveTop():e(),300),e=()=>{clearInterval(n)},L.on("hide",e),L.on("close",e)})},Un={hide:()=>{L!=null&&L.hide()},close:()=>{L!=null&&L.close(),be()}};var Se,pt,gt,wt,yt;Se=gt=pt=void 0;wt=()=>{pt=new Promise(t=>{gt=t})};wt();yt=t=>{Se.once("closed",()=>{gt(t),wt()}),le(Se)};var Tn=()=>{yt(!0)},Bn=()=>{yt(!1)},En=t=>(Se=ct["confirm_"+t]({width:275,height:190,modal:!0,isAlwaysOnTop:!0,visibleOnAllWorkspaces:!0}),Se.setAlwaysOnTop(!0,"screen-saver"),pt),An=Object.freeze(Object.defineProperty({__proto__:null,y:Tn,n:Bn,show:En},Symbol.toStringTag,{value:"Module"})),Pn=t=>{Wt.ID=t},In=Object.freeze(Object.defineProperty({__proto__:null,ID:Pn},Symbol.toStringTag,{value:"Module"})),jn=function(){var t,e,r;return r=this.sender.getOwnerBrowserWindow(),e=r.getBounds(),t=n=>{var i,l;if(l=r[n],i=e[n],l&&i>l&&i-l<3){e[n]=l;return}r[n]=i},["height","width"].map(t),e},Rn=function(t,e,r,n){var i;i=this.sender.getOwnerBrowserWindow(),i.setBounds({x:Math.round(t),y:Math.round(e),width:r,height:n})},Dn=Object.freeze(Object.defineProperty({__proto__:null,getBounds:jn,setBounds:Rn},Symbol.toStringTag,{value:"Module"}));var Er,fe;({area:Er}=ct);fe=void 0;var Mn=()=>{fe=Er(),fe.setAlwaysOnTop(!0,"screen-saver"),fe.on("close",()=>fe=void 0)},Cn=()=>{ht(),fe.setIgnoreMouseEvents(!0,{forward:!0}),Br()},zn=()=>{var t,e;return{x:t,y:e}=m.screen.getCursorScreenPoint(),[t,e]};function Ln(t,e,r,n){var i,l;if(i=t==="camera",i||(l=n===1),l){Mn();return}else Br();ht(t)}var Wn=(t,e,r,n)=>{Ce(),Ln(t,e,r,n)},Fn=t=>{m.shell.openExternal(t)},$n=()=>Ct.ROOT,Vn=Object.freeze(Object.defineProperty({__proto__:null,userData:$n,close:Ce,x:un,count_down:Un,confirm:An,auto_update:an,recbar:On,USER:In,camera:pn,drag:Dn,area:Cn,main:ce,mouse:zn,rec:Wn,open:Fn},Symbol.toStringTag,{value:"Module"}));process.on("exit",()=>{m.app.quit()});m.app.requestSingleInstanceLock()||(m.app.quit(),process.exit(0));(async()=>{var t;t=await Promise.resolve().then(function(){return require("./o.js")}),t.init({dsn:"https://54c0fbe278e049c8a9635fc0fa612836@sentry.dalukuankuan.com/6"})})();m.app.commandLine.appendSwitch("webrtc-max-cpu-consumption-percentage","100");m.app.commandLine.appendSwitch("js-flags","--expose_gc --max-old-space-size=512");(()=>{var t,e,r,n,i;ce(),process,t=(l,u)=>{var p,g,_,U;u instanceof Function&&m.ipcMain.handle(l.join("."),(k,A)=>u.apply(k,A)),_=Object.entries(u);for(U of _)[g,p]=U,t([...l,g],p)},r=Object.entries(Vn);for(i of r)[e,n]=i,t([e],n);pr(),fn()})();Lr(m.app,{"second-instance":()=>{var t;t=!0,m.BrowserWindow.getAllWindows().forEach(e=>{var r,n;n=e.webContents.getURL();try{({hash:r}=new URL(n))}catch{return}r.startsWith("#recbar")&&(t=!1)}),t&&ce()},activate:ce});
