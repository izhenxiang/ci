"use strict";var Ir=Object.defineProperty;var _t=Object.getOwnPropertySymbols;var Pr=Object.prototype.hasOwnProperty,Rr=Object.prototype.propertyIsEnumerable;var Ut=(t,e,r)=>e in t?Ir(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ot=(t,e)=>{for(var r in e||(e={}))Pr.call(e,r)&&Ut(t,r,e[r]);if(_t)for(var r of _t(e))Rr.call(e,r)&&Ut(t,r,e[r]);return t};var m=require("electron"),Dr=require("os"),Q=require("fs"),J=require("path"),jr=require("crypto"),Lt=require("zlib"),Mr=require("util"),re=require("./e.js"),ve=require("fs/promises"),Ae=require("./t.js"),Wt=require("./u.js");function Cr(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var Ft=Cr(Dr),zr=(t,e)=>{var r,n;for(r in e)n=e[r],t.on(r,n);return t};tt=et=Qe=__dirname;var Qe=Qe,et=et,tt=tt,qe,$t;qe="127.0.0.1",$t="http://"+qe,m.session.defaultSession.protocol.interceptStreamProtocol("http",(t,e)=>{var r,n,i,o,u,g,p,_,T;if(T=new URL(t.url),T.host===qe)({pathname:u}=T),u==="/"&&(u+=".htm"),_=u.slice(u.lastIndexOf(".")+1),_.startsWith("htm")?o="text/html":o={js:"text/javascript",css:"text/css",svg:"image/svg+xml",woff2:"font/woff2"}[_]||"application/octet-stream",n=Q.createReadStream(et+u),e({data:n,statusCode:200,headers:{"content-type":o}});else{if(t.useSessionCookies=!0,t.partition="persist:I",g=m.net.request(t),g.on("response",k=>{var B,P;({headers:B,statusCode:P}=k),e({data:k},B,P)}),t.uploadData){p=t.uploadData;for(i of p)({bytes:r}=i),r&&g.write(r)}g.end()}});var pe=new Proxy({},{get:(t,e)=>r=>{var n;return r=Ot({skipTaskbar:!0,frame:!1,minimizable:!1,maximizable:!1,fullscreenable:!1,type:"toolbar",webPreferences:{preload:J.join(Qe,"k.js"),webSecurity:!1}},r),n=new m.BrowserWindow(r),n.setMenu(null),e!=="main"&&n.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),n.loadURL($t+"#"+e),n.once("ready-to-show",()=>n.show()),n.focus(),n}}),Vt;({main:Vt}=pe);var de=(t=!0)=>{var e,r,n;if(r=m.BrowserWindow.getAllWindows(),r.length){for(e of r)if(e.webContents.getURL().endsWith("/#main")){n=e,n.isMinimized()&&n.restore();break}}n||(n=Vt({type:"",resizable:!1,height:590,width:426,skipTaskbar:!1})),!(!t&&!n.isVisible())&&(n.show(),n.moveTop(),n.focus())},qt={ID:""},fe=t=>{if(!!t&&!t.isDestroyed()){t.close();try{t.destroy()}catch{}}},He;try{He=new TextDecoder}catch{}var x,te,s=0,F={},S,ee,N=0,K=0,z,X,V=[],b,Tt={useRecords:!1,mapsAsObjects:!0};class Nt{}const Jt=new Nt;Jt.name="MessagePack 0xC1";var xe=!1,Ht=2;try{new Function("")}catch{Ht=1/0}class be{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0)),Object.assign(this,e)}unpack(e,r){if(x)return Qt(()=>(Ke(),this?this.unpack(e,r):be.prototype.unpack.call(Tt,e,r)));te=r>-1?r:e.length,s=0,K=0,ee=null,z=null,x=e;try{b=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw x=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof be){if(F=this,this.structures)return S=this.structures,Oe();(!S||S.length>0)&&(S=[])}else F=Tt,(!S||S.length>0)&&(S=[]);return Oe()}unpackMultiple(e,r){let n,i=0;try{xe=!0;let o=e.length,u=this?this.unpack(e,o):De.unpack(e,o);if(r){for(r(u);s<o;)if(i=s,r(Oe())===!1)return}else{for(n=[u];s<o;)i=s,n.push(Oe());return n}}catch(o){throw o.lastPosition=i,o.values=n,o}finally{xe=!1,Ke()}}_mergeStructures(e,r){e=e||[];for(let n=0,i=e.length;n<i;n++){let o=e[n];o&&(o.isShared=!0,n>=32&&(o.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in r||[])if(n>=0){let i=e[n],o=r[n];o&&(i&&((e.restoreStructures||(e.restoreStructures=[]))[n]=i),e[n]=o)}return this.structures=e}decode(e,r){return this.unpack(e,r)}}function Oe(){try{if(!F.trusted&&!xe){let e=S.sharedLength||0;e<S.length&&(S.length=e)}let t=D();if(z&&(s=z.postBundlePosition),s==te)S.restoreStructures&&Et(),S=null,x=null,X&&(X=null);else if(s>te){let e=new Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}else if(!xe)throw new Error("Data read, but end of buffer not reached");return t}catch(t){throw S.restoreStructures&&Et(),Ke(),(t instanceof RangeError||t.message.startsWith("Unexpected end of buffer"))&&(t.incomplete=!0),t}}function Et(){for(let t in S.restoreStructures)S[t]=S.restoreStructures[t];S.restoreStructures=null}function D(){let t=x[s++];if(t<160)if(t<128){if(t<64)return t;{let e=S[t&63]||F.getStructures&&Zt()[t&63];return e?(e.read||(e.read=rt(e,t&63)),e.read()):t}}else if(t<144)if(t-=128,F.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Gt()]=D();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(D(),D());return e}else{t-=144;let e=new Array(t);for(let r=0;r<t;r++)e[r]=D();return e}else if(t<192){let e=t-160;if(K>=s)return ee.slice(s-N,(s+=e)-N);if(K==0&&te<140){let r=e<16?nt(e):Kt(e);if(r!=null)return r}return Ze(e)}else{let e;switch(t){case 192:return null;case 193:return z?(e=D(),e>0?z[1].slice(z.position1,z.position1+=e):z[0].slice(z.position0,z.position0-=e)):Jt;case 194:return!1;case 195:return!0;case 196:return Ne(x[s++]);case 197:return e=b.getUint16(s),s+=2,Ne(e);case 198:return e=b.getUint32(s),s+=4,Ne(e);case 199:return le(x[s++]);case 200:return e=b.getUint16(s),s+=2,le(e);case 201:return e=b.getUint32(s),s+=4,le(e);case 202:if(e=b.getFloat32(s),F.useFloat32>2){let r=it[(x[s]&127)<<1|x[s+1]>>7];return s+=4,(r*e+(e>0?.5:-.5)>>0)/r}return s+=4,e;case 203:return e=b.getFloat64(s),s+=8,e;case 204:return x[s++];case 205:return e=b.getUint16(s),s+=2,e;case 206:return e=b.getUint32(s),s+=4,e;case 207:return F.int64AsNumber?(e=b.getUint32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigUint64(s),s+=8,e;case 208:return b.getInt8(s++);case 209:return e=b.getInt16(s),s+=2,e;case 210:return e=b.getInt32(s),s+=4,e;case 211:return F.int64AsNumber?(e=b.getInt32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigInt64(s),s+=8,e;case 212:if(e=x[s++],e==114)return Dt(x[s++]&63);{let r=V[e];if(r)return r.read?(s++,r.read(D())):r.noBuffer?(s++,r()):r(x.subarray(s,++s));throw new Error("Unknown extension "+e)}case 213:return e=x[s],e==114?(s++,Dt(x[s++]&63,x[s++])):le(2);case 214:return le(4);case 215:return le(8);case 216:return le(16);case 217:return e=x[s++],K>=s?ee.slice(s-N,(s+=e)-N):Wr(e);case 218:return e=b.getUint16(s),s+=2,K>=s?ee.slice(s-N,(s+=e)-N):Fr(e);case 219:return e=b.getUint32(s),s+=4,K>=s?ee.slice(s-N,(s+=e)-N):$r(e);case 220:return e=b.getUint16(s),s+=2,At(e);case 221:return e=b.getUint32(s),s+=4,At(e);case 222:return e=b.getUint16(s),s+=2,It(e);case 223:return e=b.getUint32(s),s+=4,It(e);default:if(t>=224)return t-256;if(t===void 0){let r=new Error("Unexpected end of MessagePack data");throw r.incomplete=!0,r}throw new Error("Unknown MessagePack token "+t)}}}const Lr=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function rt(t,e){function r(){if(r.count++>Ht){let i=t.read=new Function("r","return function(){return {"+t.map(o=>Lr.test(o)?o+":r()":"["+JSON.stringify(o)+"]:r()").join(",")+"}}")(D);return t.highByte===0&&(t.read=Bt(e,t.read)),i()}let n={};for(let i=0,o=t.length;i<o;i++){let u=t[i];n[u]=D()}return n}return r.count=0,t.highByte===0?Bt(e,r):r}const Bt=(t,e)=>function(){let r=x[s++];if(r===0)return e();let n=t<32?-(t+(r<<5)):t+(r<<5),i=S[n]||Zt()[n];if(!i)throw new Error("Record id is not defined for "+n);return i.read||(i.read=rt(i,t)),i.read()};function Zt(){let t=Qt(()=>(x=null,F.getStructures()));return S=F._mergeStructures(t,S)}var Ze=_e,Wr=_e,Fr=_e,$r=_e;function _e(t){let e;if(t<16&&(e=nt(t)))return e;if(t>64&&He)return He.decode(x.subarray(s,s+=t));const r=s+t,n=[];for(e="";s<r;){const i=x[s++];if((i&128)===0)n.push(i);else if((i&224)===192){const o=x[s++]&63;n.push((i&31)<<6|o)}else if((i&240)===224){const o=x[s++]&63,u=x[s++]&63;n.push((i&31)<<12|o<<6|u)}else if((i&248)===240){const o=x[s++]&63,u=x[s++]&63,g=x[s++]&63;let p=(i&7)<<18|o<<12|u<<6|g;p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p)}else n.push(i);n.length>=4096&&(e+=M.apply(String,n),n.length=0)}return n.length>0&&(e+=M.apply(String,n)),e}function At(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=D();return e}function It(t){if(F.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Gt()]=D();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(D(),D());return e}}var M=String.fromCharCode;function Kt(t){let e=s,r=new Array(t);for(let n=0;n<t;n++){const i=x[s++];if((i&128)>0){s=e;return}r[n]=i}return M.apply(String,r)}function nt(t){if(t<4)if(t<2){if(t===0)return"";{let e=x[s++];if((e&128)>1){s-=1;return}return M(e)}}else{let e=x[s++],r=x[s++];if((e&128)>0||(r&128)>0){s-=2;return}if(t<3)return M(e,r);let n=x[s++];if((n&128)>0){s-=3;return}return M(e,r,n)}else{let e=x[s++],r=x[s++],n=x[s++],i=x[s++];if((e&128)>0||(r&128)>0||(n&128)>0||(i&128)>0){s-=4;return}if(t<6){if(t===4)return M(e,r,n,i);{let o=x[s++];if((o&128)>0){s-=5;return}return M(e,r,n,i,o)}}else if(t<8){let o=x[s++],u=x[s++];if((o&128)>0||(u&128)>0){s-=6;return}if(t<7)return M(e,r,n,i,o,u);let g=x[s++];if((g&128)>0){s-=7;return}return M(e,r,n,i,o,u,g)}else{let o=x[s++],u=x[s++],g=x[s++],p=x[s++];if((o&128)>0||(u&128)>0||(g&128)>0||(p&128)>0){s-=8;return}if(t<10){if(t===8)return M(e,r,n,i,o,u,g,p);{let _=x[s++];if((_&128)>0){s-=9;return}return M(e,r,n,i,o,u,g,p,_)}}else if(t<12){let _=x[s++],T=x[s++];if((_&128)>0||(T&128)>0){s-=10;return}if(t<11)return M(e,r,n,i,o,u,g,p,_,T);let k=x[s++];if((k&128)>0){s-=11;return}return M(e,r,n,i,o,u,g,p,_,T,k)}else{let _=x[s++],T=x[s++],k=x[s++],B=x[s++];if((_&128)>0||(T&128)>0||(k&128)>0||(B&128)>0){s-=12;return}if(t<14){if(t===12)return M(e,r,n,i,o,u,g,p,_,T,k,B);{let P=x[s++];if((P&128)>0){s-=13;return}return M(e,r,n,i,o,u,g,p,_,T,k,B,P)}}else{let P=x[s++],$=x[s++];if((P&128)>0||($&128)>0){s-=14;return}if(t<15)return M(e,r,n,i,o,u,g,p,_,T,k,B,P,$);let H=x[s++];if((H&128)>0){s-=15;return}return M(e,r,n,i,o,u,g,p,_,T,k,B,P,$,H)}}}}}function Pt(){let t=x[s++],e;if(t<192)e=t-160;else switch(t){case 217:e=x[s++];break;case 218:e=b.getUint16(s),s+=2;break;case 219:e=b.getUint32(s),s+=4;break;default:throw new Error("Expected string")}return _e(e)}function Ne(t){return F.copyBuffers?Uint8Array.prototype.slice.call(x,s,s+=t):x.subarray(s,s+=t)}function le(t){let e=x[s++];if(V[e])return V[e](x.subarray(s,s+=t));throw new Error("Unknown extension type "+e)}var Rt=new Array(4096);function Gt(){let t=x[s++];if(t>=160&&t<192){if(t=t-160,K>=s)return ee.slice(s-N,(s+=t)-N);if(!(K==0&&te<180))return Ze(t)}else return s--,D();let e=(t<<5^(t>1?b.getUint16(s):t>0?x[s]:0))&4095,r=Rt[e],n=s,i=s+t-3,o,u=0;if(r&&r.bytes==t){for(;n<i;){if(o=b.getUint32(n),o!=r[u++]){n=1879048192;break}n+=4}for(i+=3;n<i;)if(o=x[n++],o!=r[u++]){n=1879048192;break}if(n===i)return s=n,r.string;i-=3,n=s}for(r=[],Rt[e]=r,r.bytes=t;n<i;)o=b.getUint32(n),r.push(o),n+=4;for(i+=3;n<i;)o=x[n++],r.push(o);let g=t<16?nt(t):Kt(t);return g!=null?r.string=g:r.string=Ze(t)}const Dt=(t,e)=>{var r=D();let n=t;e!==void 0&&(t=t<32?-((e<<5)+t):(e<<5)+t,r.highByte=e);let i=S[t];return i&&i.isShared&&((S.restoreStructures||(S.restoreStructures=[]))[t]=i),S[t]=r,r.read=rt(r,n),r.read()};var Xt=typeof self=="object"?self:global;V[0]=()=>{};V[0].noBuffer=!0;V[101]=()=>{let t=D();return(Xt[t[0]]||Error)(t[1])};V[105]=t=>{let e=b.getUint32(s-4);X||(X=new Map);let r=x[s],n;r>=144&&r<160||r==220||r==221?n=[]:n={};let i={target:n};X.set(e,i);let o=D();return i.used?Object.assign(n,o):(i.target=o,o)};V[112]=t=>{let e=b.getUint32(s-4),r=X.get(e);return r.used=!0,r.target};V[115]=()=>new Set(D());const Yt=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(t=>t+"Array");V[116]=t=>{let e=t[0],r=Yt[e];if(!r)throw new Error("Could not find typed array for code "+e);return new Xt[r](Uint8Array.prototype.slice.call(t,1).buffer)};V[120]=()=>{let t=D();return new RegExp(t[0],t[1])};const Vr=[];V[98]=t=>{let e=(t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3],r=s;return s+=e-t.length,z=Vr,z=[Pt(),Pt()],z.position0=0,z.position1=0,z.postBundlePosition=s,s=r,D()};V[255]=t=>t.length==4?new Date((t[0]*16777216+(t[1]<<16)+(t[2]<<8)+t[3])*1e3):t.length==8?new Date(((t[0]<<22)+(t[1]<<14)+(t[2]<<6)+(t[3]>>2))/1e6+((t[3]&3)*4294967296+t[4]*16777216+(t[5]<<16)+(t[6]<<8)+t[7])*1e3):t.length==12?new Date(((t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3])/1e6+((t[4]&128?-281474976710656:0)+t[6]*1099511627776+t[7]*4294967296+t[8]*16777216+(t[9]<<16)+(t[10]<<8)+t[11])*1e3):new Date("invalid");function Qt(t){let e=te,r=s,n=N,i=K,o=ee,u=X,g=z,p=new Uint8Array(x.slice(0,te)),_=S,T=S.slice(0,S.length),k=F,B=xe,P=t();return te=e,s=r,N=n,K=i,ee=o,X=u,z=g,x=p,xe=B,S=_,S.splice(0,S.length,...T),F=k,b=new DataView(x.buffer,x.byteOffset,x.byteLength),P}function Ke(){x=null,X=null,S=null}const it=new Array(147);for(let t=0;t<256;t++)it[t]=+("1e"+Math.floor(45.15-t*.30103));var De=new be({useRecords:!1});const qr=De.unpack;De.unpackMultiple;De.unpack;let Nr=new Float32Array(1);new Uint8Array(Nr.buffer,0,4);let Ee;try{Ee=new TextEncoder}catch{}let Ge,er;const je=typeof Buffer!="undefined",Te=je?Buffer.allocUnsafeSlow:Uint8Array,tr=je?Buffer:Uint8Array,jt=je?4294967296:2144337920;let l,we,I,a=0,L,C=null;const Jr=61440,Hr=/[\u0080-\uFFFF]/,ue=Symbol("record-id");class Zr extends be{constructor(e){super(e);this.offset=0;let r,n,i,o,u=0,g=tr.prototype.utf8Write?function(f,y,d){return l.utf8Write(f,y,d)}:Ee&&Ee.encodeInto?function(f,y){return Ee.encodeInto(f,l.subarray(y)).written}:!1,p=this;e||(e={});let _=e&&e.sequential,T=e.structures||e.saveStructures,k=e.maxSharedStructures;if(k==null&&(k=T?32:0),k>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(e.moreTypes=!0);let B=e.maxOwnStructures;B==null&&(B=T?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let P=k>32||B+k>64,$=k+64,H=k+B+64;if(H>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let q=[],ie=0,Z=0;this.pack=this.encode=function(f,y){if(l||(l=new Te(8192),I=new DataView(l.buffer,0,8192),a=0),L=l.length-10,L-a<2048?(l=new Te(l.length),I=new DataView(l.buffer,0,l.length),L=l.length-10,a=0):a=a+7&2147483640,r=a,o=p.structuredClone?new Map:null,p.bundleStrings&&typeof f!="string"?(C=[],C.size=1/0):C=null,i=p.structures,i){i.uninitialized&&(i=p._mergeStructures(p.getStructures()));let d=i.sharedLength||0;if(d>k)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+i.sharedLength);if(!i.transitions){i.transitions=Object.create(null);for(let c=0;c<d;c++){let h=i[c];if(!h)continue;let U,v=i.transitions;for(let w=0,j=h.length;w<j;w++){let E=h[w];U=v[E],U||(U=v[E]=Object.create(null)),v=U}v[ue]=c+64}u=d}_||(i.nextId=d+64)}n&&(n=!1);try{if(A(f),C&&zt(r,A),p.offset=a,o&&o.idsToInsert){a+=o.idsToInsert.length*6,a>L&&se(a),p.offset=a;let d=Gr(l.subarray(r,a),o.idsToInsert);return o=null,d}return y&Xr?(l.start=r,l.end=a,l):l.subarray(r,a)}finally{if(i){Z<10&&Z++;let d=i.sharedLength||k;if(i.length>d&&(i.length=d),ie>1e4)i.transitions=null,Z=0,ie=0,q.length>0&&(q=[]);else if(q.length>0&&!_){for(let c=0,h=q.length;c<h;c++)q[c][ue]=0;q=[]}if(n&&p.saveStructures){let c=l.subarray(r,a);return p.saveStructures(i,u)===!1?(p._mergeStructures(p.getStructures()),p.pack(f)):(u=d,c)}}y&Yr&&(a=r)}};const A=f=>{a>L&&(l=se(a));var y=typeof f,d;if(y==="string"){let c=f.length;if(C&&c>=4&&c<4096){if((C.size+=c)>Jr){let w,j=(C[0]?C[0].length*3+C[1].length:0)+10;a+j>L&&(l=se(a+j)),C.position?(l[a]=200,a+=3,l[a++]=98,w=a-r,a+=4,zt(r,A),I.setUint16(w+r-3,a-r-w)):(l[a++]=214,l[a++]=98,w=a-r,a+=4),C=["",""],C.size=0,C.position=w}let v=Hr.test(f);C[v?0:1]+=f,l[a++]=193,A(v?-c:c);return}let h;c<32?h=1:c<256?h=2:c<65536?h=3:h=5;let U=c*3;if(a+U>L&&(l=se(a+U)),c<64||!g){let v,w,j,E=a+h;for(v=0;v<c;v++)w=f.charCodeAt(v),w<128?l[E++]=w:w<2048?(l[E++]=w>>6|192,l[E++]=w&63|128):(w&64512)===55296&&((j=f.charCodeAt(v+1))&64512)===56320?(w=65536+((w&1023)<<10)+(j&1023),v++,l[E++]=w>>18|240,l[E++]=w>>12&63|128,l[E++]=w>>6&63|128,l[E++]=w&63|128):(l[E++]=w>>12|224,l[E++]=w>>6&63|128,l[E++]=w&63|128);d=E-a-h}else d=g(f,a+h,U);d<32?l[a++]=160|d:d<256?(h<2&&l.copyWithin(a+2,a+1,a+1+d),l[a++]=217,l[a++]=d):d<65536?(h<3&&l.copyWithin(a+3,a+2,a+2+d),l[a++]=218,l[a++]=d>>8,l[a++]=d&255):(h<5&&l.copyWithin(a+5,a+3,a+3+d),l[a++]=219,I.setUint32(a,d),a+=4),a+=d}else if(y==="number")if(f>>>0===f)f<64?l[a++]=f:f<256?(l[a++]=204,l[a++]=f):f<65536?(l[a++]=205,l[a++]=f>>8,l[a++]=f&255):(l[a++]=206,I.setUint32(a,f),a+=4);else if(f>>0===f)f>=-32?l[a++]=256+f:f>=-128?(l[a++]=208,l[a++]=f+256):f>=-32768?(l[a++]=209,I.setInt16(a,f),a+=2):(l[a++]=210,I.setInt32(a,f),a+=4);else{let c;if((c=this.useFloat32)>0&&f<4294967296&&f>=-2147483648){l[a++]=202,I.setFloat32(a,f);let h;if(c<4||(h=f*it[(l[a]&127)<<1|l[a+1]>>7])>>0===h){a+=4;return}else a--}l[a++]=203,I.setFloat64(a,f),a+=8}else if(y==="object")if(!f)l[a++]=192;else{if(o){let h=o.get(f);if(h){if(!h.id){let U=o.idsToInsert||(o.idsToInsert=[]);h.id=U.push(h)}l[a++]=214,l[a++]=112,I.setUint32(a,h.id),a+=4;return}else o.set(f,{offset:a-r})}let c=f.constructor;if(c===Object)St(f,!0);else if(c===Array){d=f.length,d<16?l[a++]=144|d:d<65536?(l[a++]=220,l[a++]=d>>8,l[a++]=d&255):(l[a++]=221,I.setUint32(a,d),a+=4);for(let h=0;h<d;h++)A(f[h])}else if(c===Map){d=f.size,d<16?l[a++]=128|d:d<65536?(l[a++]=222,l[a++]=d>>8,l[a++]=d&255):(l[a++]=223,I.setUint32(a,d),a+=4);for(let[h,U]of f)A(h),A(U)}else{for(let h=0,U=Ge.length;h<U;h++){let v=er[h];if(f instanceof v){let w=Ge[h];if(w.write){w.type&&(l[a++]=212,l[a++]=w.type,l[a++]=0),A(w.write.call(this,f));return}let j=l,E=I,G=a;l=null;let ae;try{ae=w.pack.call(this,f,ge=>(l=j,j=null,a+=ge,a>L&&se(a),{target:l,targetView:I,position:a-ge}),A)}finally{j&&(l=j,I=E,a=G,L=l.length-10)}ae&&(ae.length+a>L&&se(ae.length+a),a=Kr(ae,l,a,w.type));return}}St(f,!f.hasOwnProperty)}}else if(y==="boolean")l[a++]=f?195:194;else if(y==="bigint"){if(f<BigInt(1)<<BigInt(63)&&f>=-(BigInt(1)<<BigInt(63)))l[a++]=211,I.setBigInt64(a,f);else if(f<BigInt(1)<<BigInt(64)&&f>0)l[a++]=207,I.setBigUint64(a,f);else if(this.largeBigIntToFloat)l[a++]=203,I.setFloat64(a,Number(f));else throw new RangeError(f+" was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");a+=8}else if(y==="undefined")this.encodeUndefinedAsNil?l[a++]=192:(l[a++]=212,l[a++]=0,l[a++]=0);else if(y==="function")A(this.writeFunction&&this.writeFunction());else throw new Error("Unknown type: "+y)},St=this.useRecords===!1?this.variableMapSize?f=>{let y=Object.keys(f),d=y.length;d<16?l[a++]=128|d:d<65536?(l[a++]=222,l[a++]=d>>8,l[a++]=d&255):(l[a++]=223,I.setUint32(a,d),a+=4);let c;for(let h=0;h<d;h++)A(c=y[h]),A(f[c])}:(f,y)=>{l[a++]=222;let d=a-r;a+=2;let c=0;for(let h in f)(y||f.hasOwnProperty(h))&&(A(h),A(f[h]),c++);l[d+++r]=c>>8,l[d+r]=c&255}:e.progressiveRecords&&!P?(f,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=a++-r,U;for(let v in f)if(y||f.hasOwnProperty(v)){if(d=c[v],d)c=d;else{let w=Object.keys(f),j=c;c=i.transitions;let E=0;for(let G=0,ae=w.length;G<ae;G++){let ge=w[G];d=c[ge],d||(d=c[ge]=Object.create(null),E++),c=d}h+r+1==a?(a--,Ve(c,w,E)):kt(c,w,h,E),U=!0,c=j[v]}A(f[v])}if(!U){let v=c[ue];v?l[h+r]=v:kt(c,Object.keys(f),h,0)}}:(f,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=0;for(let v in f)(y||f.hasOwnProperty(v))&&(d=c[v],d||(d=c[v]=Object.create(null),h++),c=d);let U=c[ue];U?U>=96&&P?(l[a++]=((U-=96)&31)+96,l[a++]=U>>5):l[a++]=U:Ve(c,c.__keys__||Object.keys(f),h);for(let v in f)(y||f.hasOwnProperty(v))&&A(f[v])},se=f=>{let y;if(f>16777216){if(f-r>jt)throw new Error("Packed buffer would be larger than maximum buffer size");y=Math.min(jt,Math.round(Math.max((f-r)*(f>67108864?1.25:2),4194304)/4096)*4096)}else y=(Math.max(f-r<<2,l.length-1)>>12)+1<<12;let d=new Te(y);return I=new DataView(d.buffer,0,y),l.copy?l.copy(d,0,r,f):d.set(l.slice(r,f)),a-=r,r=0,L=d.length-10,l=d},Ve=(f,y,d)=>{let c=i.nextId;c||(c=64),c<$&&this.shouldShareStructure&&!this.shouldShareStructure(y)?(c=i.nextOwnId,c<H||(c=$),i.nextOwnId=c+1):(c>=H&&(c=$),i.nextId=c+1);let h=y.highByte=c>=96&&P?c-96>>5:-1;f[ue]=c,f.__keys__=y,i[c-64]=y,c<$?(y.isShared=!0,i.sharedLength=c-63,n=!0,h>=0?(l[a++]=(c&31)+96,l[a++]=h):l[a++]=c):(h>=0?(l[a++]=213,l[a++]=114,l[a++]=(c&31)+96,l[a++]=h):(l[a++]=212,l[a++]=114,l[a++]=c),d&&(ie+=Z*d),q.length>=B&&(q.shift()[ue]=0),q.push(f),A(y))},kt=(f,y,d,c)=>{let h=l,U=a,v=L,w=r;l=we,a=0,r=0,l||(we=l=new Te(8192)),L=l.length-10,Ve(f,y,c),we=l;let j=a;if(l=h,a=U,L=v,r=w,j>1){let E=a+j-1;E>L&&se(E);let G=d+r;l.copyWithin(G+j,G+1,a),l.set(we.slice(0,j),G),a=E}else l[d+r]=we[0]}}useBuffer(e){l=e,I=new DataView(l.buffer,l.byteOffset,l.byteLength),a=0}clearSharedData(){this.structures&&(this.structures=[])}}er=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,Nt];Ge=[{pack(t,e,r){let n=t.getTime()/1e3;if((this.useTimestamp32||t.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:i,targetView:o,position:u}=e(6);i[u++]=214,i[u++]=255,o.setUint32(u,n)}else if(n>0&&n<17179869184){let{target:i,targetView:o,position:u}=e(10);i[u++]=215,i[u++]=255,o.setUint32(u,t.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),o.setUint32(u+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),r(this.onInvalidDate());let{target:i,targetView:o,position:u}=e(3);i[u++]=212,i[u++]=255,i[u++]=255}else{let{target:i,targetView:o,position:u}=e(15);i[u++]=199,i[u++]=12,i[u++]=255,o.setUint32(u,t.getMilliseconds()*1e6),o.setBigInt64(u+4,BigInt(Math.floor(n)))}}},{pack(t,e,r){let n=Array.from(t),{target:i,position:o}=e(this.moreTypes?3:0);this.moreTypes&&(i[o++]=212,i[o++]=115,i[o++]=0),r(n)}},{pack(t,e,r){let{target:n,position:i}=e(this.moreTypes?3:0);this.moreTypes&&(n[i++]=212,n[i++]=101,n[i++]=0),r([t.name,t.message])}},{pack(t,e,r){let{target:n,position:i}=e(this.moreTypes?3:0);this.moreTypes&&(n[i++]=212,n[i++]=120,n[i++]=0),r([t.source,t.flags])}},{pack(t,e){this.moreTypes?Mt(t,16,e):Ct(je?Buffer.from(t):new Uint8Array(t),e)}},{pack(t,e){let r=t.constructor;r!==tr&&this.moreTypes?Mt(t,Yt.indexOf(r.name),e):Ct(t,e)}},{pack(t,e){let{target:r,position:n}=e(1);r[n]=193}}];function Mt(t,e,r,n){let i=t.byteLength;if(i+1<256){var{target:o,position:u}=r(4+i);o[u++]=199,o[u++]=i+1}else if(i+1<65536){var{target:o,position:u}=r(5+i);o[u++]=200,o[u++]=i+1>>8,o[u++]=i+1&255}else{var{target:o,position:u,targetView:g}=r(7+i);o[u++]=201,g.setUint32(u,i+1),u+=4}o[u++]=116,o[u++]=e,o.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),u)}function Ct(t,e){let r=t.byteLength;var n,i;if(r<256){var{target:n,position:i}=e(r+2);n[i++]=196,n[i++]=r}else if(r<65536){var{target:n,position:i}=e(r+3);n[i++]=197,n[i++]=r>>8,n[i++]=r&255}else{var{target:n,position:i,targetView:o}=e(r+5);n[i++]=198,o.setUint32(i,r),i+=4}n.set(t,i)}function Kr(t,e,r,n){let i=t.length;switch(i){case 1:e[r++]=212;break;case 2:e[r++]=213;break;case 4:e[r++]=214;break;case 8:e[r++]=215;break;case 16:e[r++]=216;break;default:i<256?(e[r++]=199,e[r++]=i):i<65536?(e[r++]=200,e[r++]=i>>8,e[r++]=i&255):(e[r++]=201,e[r++]=i>>24,e[r++]=i>>16&255,e[r++]=i>>8&255,e[r++]=i&255)}return e[r++]=n,e.set(t,r),r+=i,r}function Gr(t,e){let r,n=e.length*6,i=t.length-n;for(e.sort((o,u)=>o.offset>u.offset?1:-1);r=e.pop();){let o=r.offset,u=r.id;t.copyWithin(o+n,o,i),n-=6;let g=o+n;t[g++]=214,t[g++]=105,t[g++]=u>>24,t[g++]=u>>16&255,t[g++]=u>>8&255,t[g++]=u&255,i=o}return t}function zt(t,e){I.setUint32(C.position+t,a-C.position-t);let r=C;C=null,e(r[0]),e(r[1])}let rr=new Zr({useRecords:!1});rr.pack;rr.pack;const Xr=512,Yr=1024;var Qr="https://testing.izhenxiang.com/",nr="https://i-desk-ver.oss-cn-beijing.aliyuncs.com/",ir,en=async t=>{var e,r;return t=await t,r=[],e=r.push.bind(r),t.on("data",e),new Promise((n,i)=>(t.on("end",()=>{n(Buffer.concat(r))}),t.on("error",i)))},tn=t=>en(sr(t));ir=t=>{var e;return e=m.net.request(t),e.end(),new Promise((r,n)=>(e.on("error",i=>{n(i)}),e.on("response",i=>{if(i.statusCode!==200){n(i);return}r(i)})))};var sr=t=>ir(t),Ue={};Ue.version="1.0.0";Ue.encode=function(e){return e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};Ue.decode=function(e){return e+=Array(5-e.length%4).join("="),e=e.replace(/\-/g,"+").replace(/\_/g,"/"),new Buffer(e,"base64")};Ue.validate=function(e){return/^[A-Za-z0-9\-_]+$/.test(e)};var Je=Ue;var ce,ar,Be,Me,st,Se,lr,or,at,Ie,fr,lt,ot,Pe,Xe,Ce;or=Mr.promisify(Lt.brotliDecompress);var rn=()=>(m.app.relaunch(),m.app.exit());ce=J.join(Wt.ROOT,"v");Q.mkdirSync(ce,{recursive:!0});ar="sha512";Pe=void 0;var ur=()=>{fe(Pe),Pe=void 0},cr=()=>{ur(),Pe=pe.update({width:400,height:500,resizable:!1})};Ie=t=>tn(nr+t);fr=t=>{var e;return e=jr.createHash(ar),new Promise(r=>Q.createReadStream(t).on("data",e.update.bind(e)).on("end",()=>{r(e.digest().slice(0,8))}))};Xe=(()=>{var t;return{v:t}=Ae.default,t&&re.decode(t)})();var dr=()=>re.PACKAGE_JSON().version;Ce=re.ver_int(dr());Se=0;ot=async()=>{var t;return t=re.encode(parseInt(new Date/1e3)),Se=await Ie("v?"+t),Se};lr=async t=>{var e,r,n,i,o,u,g,p,_,T,k,B,P,$,H,q,ie,Z;if(t||(t=Se||await ot()),Z=t.readUintBE(0,6),!(Ce>=Z)){if(n=re.encode(Z),e=J.join(ce,n),Q.existsSync(J.join(e,re.package_json))&&Z===Xe)return e;for(q=Je.encode(await Ie(Je.encode(t))),[r,i,g]=qr(await or(await Ie(q))),B=A=>ve.mkdir(J.join(e,A),{recursive:!0}),await Promise.all(r.map(B)),$=J.dirname(__dirname),P=_=0,T=i.length;_<T;P=++_)if(p=i[P],o=J.join(e,p),u=g[P],H=async A=>Buffer.compare(u,await fr(A))===0,!(Q.existsSync(o)&&await H(o))){if(await B(J.dirname(p)),k=J.join($,p),Q.existsSync(k)&&await H(k)){await ve.copyFile(k,o);continue}if(ie=Q.createWriteStream(o),(await sr(nr+Je.encode(u))).pipe(Lt.createBrotliDecompress()).pipe(ie),await new Promise(A=>{ie.on("finish",A)}),!await H(o))return}return Ae.default.v=n,Xe=Z,e}};var xr=async()=>{var t,e,r;try{t=await ot()}catch(n){return e=n,console.trace(e),0}return r=Ce<t.readUintBE(0,6),r?t:0};at=async()=>{var t;(t=await xr())&&await hr(t)};setInterval(at,864e5);Be=Me=st=void 0;lt=()=>Me=new Promise(t=>st=t);lt();var nn=()=>Me,hr=(...t)=>(Be||(Be=lr(...t).then(async e=>{e&&(st([Se,JSON.parse(await ve.readFile(J.join(e,re.package_json),"utf8")).description]),lt())}).finally(()=>{Be=!1})),Me);setTimeout(async()=>{var t,e,r,n;if(Q.existsSync(ce)){n=await ve.readdir(ce,{withFileTypes:!0});for(e of n)e.isDirectory()&&({name:r}=e,re.decode(r)<Ce&&await ve.rm(J.join(ce,r),{recursive:!0,force:!0}))}if(t=parseInt(new Date/864e5),t!==Ae.default.update_check)return Ae.default.update_check=t,await at()},15e3);var sn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",relaunch:rn,x:ur,show:cr,ver_now:dr,update_check:xr,update_promise:nn,update:hr});var ze,ft,pr,gr,ut,an,ct,wr,yr,ke;Ft.default.platform();({Menu:ft,Tray:pr,app:gr,globalShortcut:an}=require("electron"));ke=new pr(J.join(tt,"trayTemplate.png"));ct=[{label:"\u5A92\u4F53\u5E93",click:()=>{m.shell.openExternal(Qr+"?user_token="+qt.ID)}},{label:"\u68C0\u6D4B\u66F4\u65B0",click:cr},{type:"separator"}];ze=wr=ft.buildFromTemplate([{label:"\u663E\u793A\u754C\u9762",click:de},...ct,{label:"\u9000\u51FA",click:()=>gr.quit()}]);yr=ft.buildFromTemplate(ct);ut=["click",()=>{de()}];ke.on("right-click",t=>{ke.popUpContextMenu(ze)});var ln=()=>{ke.off(...ut),ze=yr},mr=()=>{ke.on(...ut),ze=wr};var vr;vr=t=>{var e,r,n,i,o,u,g,p;t&&(t.devToolsWebContents||({webContents:o}=t,e=new m.BrowserWindow({minimizable:!1,maximizable:!1}),[i,r]=t.getSize(),[g,p]=t.getPosition(),{width:u,height:n}=m.screen.getPrimaryDisplay().workArea,o.setDevToolsWebContents(e.webContents),o.openDevTools({mode:"detach"}),i>r?(p=0,i=0,r+=20,n-=r):(g=0,r=0,u-=i),e.setPosition(i,r),t.setPosition(g,p),e.setSize(u,n),t.focus()))};var on=()=>{m.globalShortcut.register("CmdOrCtrl+Alt+I",()=>vr(m.BrowserWindow.getFocusedWindow()))},Le=t=>{m.BrowserWindow.getAllWindows().forEach(e=>{var r,n;if(n=e.webContents.getURL(),n){if({hash:r}=new URL(n),r=r.slice(1),r.startsWith("main")){if(t){e[t]();return}else e.hide();return}if(r.startsWith("camera"))return}fe(e)})},fn=()=>{m.BrowserWindow.getAllWindows().forEach(t=>{var e,r;if(r=t.webContents.getURL(),r&&({hash:e}=new URL(r),e=e.slice(1),e.startsWith("main"))){t.hide();return}fe(t)})},dt,We,br,Fe,ye,$e,oe,O,xt;({camera:br}=pe);O=void 0;oe=void 0;dt=204;$e=Fe=dt;ye=void 0;var un=(t,e)=>{t+=ye[0],e+=ye[1];try{O.setBounds({x:Math.round(t),y:Math.round(e),width:$e,height:Fe})}catch{console.error(t,e,ye)}return[t,e]},cn=()=>{ye=O.getPosition()},me=()=>{O&&!O.isDestroyed()&&O.getSize()[0]!==800&&(oe=O.getPosition()),fe(O)},dn=t=>{var e,r;$e=Fe=t,r=O.getSize()[0],r!==t&&(oe=O.getPosition(),e=Math.round((t-r)/2),O.setBounds({x:oe[0]-e,y:oe[1]-e,width:t,height:t}))};We=!1;var Sr=()=>xt(800,500),xn=xt=(t,e)=>{O&&!O.isDestroyed()||($e=t,Fe=e,O=br({width:t,height:e,shadow:!1,center:!0,roundedCorners:!1,resizable:!1,hasShadow:!1,transparent:!0}),We&&ht())},hn=t=>{var e,r,n,i;O&&!O.isDestroyed()||(t=t||dt,xt(t,t),oe?[me,i]=oe:({width:n,height:e}=m.screen.getPrimaryDisplay().size,r=62,me=r,i=e-r-t),O.setPosition(me,i))},ht=()=>{O&&!O.isDestroyed()&&(O.setAlwaysOnTop(!0),O.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0})),We=!0},kr=()=>{O&&!O.isDestroyed()&&(O.setAlwaysOnTop(!1),O.setVisibleOnAllWorkspaces(!1)),We=!1},pn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",move:un,init:cn,get x(){return me},size:dn,rect:Sr,default:xn,circle:hn,top:ht,untop:kr}),pt=new Proxy({},{get:(t,e)=>()=>{var r,n,i;return{width:n,height:r}=m.screen.getPrimaryDisplay().size,i=pe[e]({width:n,height:r,roundedCorners:!1,transparent:!0,resizable:!1,hasShadow:!1}),i.setAlwaysOnTop(!0,"screen-saver"),i.setPosition(0,0),i.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),i}}),gt,he,Ye,wt,_r,Ur,R;({recbar:Ur}=pe);R=void 0;he=void 0;({draw:_r}=pt);var gn=()=>{he||(he=_r(),Or())},Or=()=>{ne(),he.focus()},wn=()=>{fe(he),he=void 0};Ye=["CommandOrControl+R","CommandOrControl+W","CommandOrControl+Q","Alt+F4","F5"];gt={"browser-window-focus":()=>{var t;for(t of Ye)m.globalShortcut.register(t,()=>{})},"browser-window-blur":()=>{var t;for(t of Ye)m.globalShortcut.unregister(t,()=>{})}};var Tr=t=>{var e,r,n,i,o,u,g,p;o=Object.entries(gt);for(p of o)[n,e]=p,m.app.on(n,e);return ln(),r=48,i={roundedCorners:!1,transparent:!0,shadow:!1,resizable:!1,hasShadow:!1,width:t,height:r},R=Ur(i),R.on("close",()=>R=void 0),{width:g,height:u}=m.screen.getPrimaryDisplay().workArea,R.setBounds({x:Math.round((g-t)/2),y:u-28-r,width:t,height:r}),ne(),ht(),new Promise(_=>R.webContents.on("did-finish-load",()=>{ne(),R.focus(),_(R)}))},ne=()=>{R&&(R.setAlwaysOnTop(!0,"screen-saver"),R.moveTop())},yn=()=>{var t,e,r,n,i;n=R.getPosition(),[r,e]=R.getSize(),[i,t]=R.size,R.setBounds({x:n[0]+r-i,y:n[1],width:i,height:t})},mn=()=>{var t,e,r,n;e=R.getPosition(),R.size=r=R.getSize(),n=170,t=48,R.setBounds({x:e[0]+r[0]-n,y:e[1],width:n,height:t})};wt=()=>{var t,e,r,n;r=Object.entries(gt);for(n of r)[e,t]=n,m.app.off(e,t);mr(),kr()};var vn=()=>{wt(),Le("show")},bn=()=>{wt(),Le()},Sn=()=>{R.hide()},kn=async()=>{var t,e;e=await m.desktopCapturer.getSources({types:["screen"],thumbnailSize:{width:0,height:0}});for(t of e)return t.id},_n=t=>{m.BrowserWindow.getAllWindows().forEach(e=>{var r;if({hash:r}=new URL(e.webContents.getURL()),!t&&r.slice(1)!=="recbar"){fe(e);return}return e.hide()})},Un=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",draw:gn,draw_top:Or,draw_x:wn,\u5DE5\u5177\u6761:Tr,top:ne,expand:yn,left:mn,cancel:vn,end:bn,hide:Sn,screen_source:kn,stop:_n}),Er,W;({count_down:Er}=pe);W=void 0;var Br=()=>{var t;if(W){W.focus();return}t=240,W=Er({width:t,height:t,transparent:!0,resizable:!1,hasShadow:!1}),W.on("close",()=>{W=void 0}),W.setAlwaysOnTop(!0,"screen-saver"),W.webContents.on("did-finish-load",()=>{var e,r;r=m.BrowserWindow.getAllWindows();for(e of r)e.webContents.getURL().endsWith("/#main")||e.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0});W.moveTop(),W.focus()})},On={hide:()=>{W!=null&&W.hide()},close:()=>{W!=null&&W.close(),ne()}};var Re,yt,mt,vt,bt;Re=mt=yt=void 0;vt=()=>{yt=new Promise(t=>{mt=t})};vt();bt=t=>{mt(t),vt(),fe(Re)};var Tn=()=>{bt(!0)},En=()=>{bt(!1)},Bn=t=>(Re=pt["confirm_"+t]({width:275,height:190,modal:!0,isAlwaysOnTop:!0,visibleOnAllWorkspaces:!0}),Re.setAlwaysOnTop(!0,"screen-saver"),yt),An=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",y:Tn,n:En,show:Bn}),In=t=>{qt.ID=t},Pn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ID:In});var Ar,Y;({area:Ar}=pt);Y=void 0;var Rn=()=>{Y=Ar(),Y.on("did-finish-load",ne),Y.on("focus",ne),Y.setAlwaysOnTop(!0,"pop-up-menu"),Y.on("close",()=>Y=void 0)},Dn=()=>{Y.setIgnoreMouseEvents(!0,{forward:!0}),Br(),ne()},jn=()=>{var t,e;return{x:t,y:e}=m.screen.getCursorScreenPoint(),[t,e]};function Mn(t,e,r,n){var i,o;i=t==="camera",i?(me(),Sr()):o=n===1,o?Rn():Br(),Tr(t!=="camera"?552:452)}var Cn=(t,e,r,n)=>{Le(),Mn(t,e,r,n)},zn=t=>{m.shell.openExternal(t)},Ln=()=>Wt.ROOT,Wn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",userData:Ln,close:Le,x:fn,count_down:On,confirm:An,auto_update:sn,recbar:Un,USER:Pn,camera:pn,area:Dn,main:de,mouse:jn,rec:Cn,open:zn});process.on("exit",()=>{m.app.quit()});m.app.requestSingleInstanceLock()||(m.app.quit(),process.exit(0));(async()=>{var t;t=await Promise.resolve().then(function(){return require("./n.js")}),t.init({dsn:"https://54c0fbe278e049c8a9635fc0fa612836@sentry.dalukuankuan.com/6"})})();m.app.commandLine.appendSwitch("js-flags","--expose_gc --max-old-space-size=512");(()=>{var t,e,r,n,i,o,u;r=Ft.default.platform(),de(),r==="darwin"?(n=m.app.dock)!=null&&n.hide():r.startsWith("win")&&process,t=(g,p)=>{var _,T,k,B;p instanceof Function&&m.ipcMain.handle(g.join("."),(P,$)=>p(...$)),k=Object.entries(p);for(B of k)[T,_]=B,t([...g,T],_)},i=Object.entries(Wn);for(u of i)[e,o]=u,t([e],o);mr(),on()})();zr(m.app,{"window-all-closed":()=>{if(process.platform!=="darwin")return m.app.quit()},"second-instance":()=>{var t;t=!0,m.BrowserWindow.getAllWindows().forEach(e=>{var r,n;n=e.webContents.getURL(),{hash:r}=new URL(n),r.startsWith("#recbar")&&(t=!1)}),t&&de()},activate:de});
