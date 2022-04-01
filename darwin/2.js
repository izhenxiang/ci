"use strict";var Pr=Object.defineProperty;var bt=Object.getOwnPropertySymbols;var Ir=Object.prototype.hasOwnProperty,jr=Object.prototype.propertyIsEnumerable;var St=(t,e,r)=>e in t?Pr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,_t=(t,e)=>{for(var r in e||(e={}))Ir.call(e,r)&&St(t,r,e[r]);if(bt)for(var r of bt(e))jr.call(e,r)&&St(t,r,e[r]);return t};var m=require("electron"),Rr=require("os"),Y=require("fs"),J=require("path"),Dr=require("crypto"),Mt=require("zlib"),Mr=require("util"),te=require("./n.js"),we=require("fs/promises"),Be=require("./u.js"),Ct=require("./v.js");function Cr(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var zt=Cr(Rr),oe=t=>{if(!!t&&!t.isDestroyed()){t.close();try{t.destroy()}catch{}}},zr=(t,e)=>{var r,n;for(r in e)n=e[r],t.on(r,n);return t};Xe=Ge=Ke=__dirname;var Ke=Ke,Ge=Ge,Xe=Xe,We,Lt;We="127.0.0.1",Lt="http://"+We,m.session.defaultSession.protocol.interceptStreamProtocol("http",(t,e)=>{var r,n,i,l,u,g,p,k,U;if(U=new URL(t.url),U.host===We)({pathname:u}=U),u==="/"&&(u+=".htm"),k=u.slice(u.lastIndexOf(".")+1),k.startsWith("htm")?l="text/html":l={js:"text/javascript",css:"text/css",svg:"image/svg+xml",woff2:"font/woff2"}[k]||"application/octet-stream",n=Y.createReadStream(Ge+u),e({data:n,statusCode:200,headers:{"content-type":l}});else{if(t.useSessionCookies=!0,t.partition="persist:I",g=m.net.request(t),g.on("response",_=>{var B,P;({headers:B,statusCode:P}=_),e({data:_},B,P)}),t.uploadData){p=t.uploadData;for(i of p)({bytes:r}=i),r&&g.write(r)}g.end()}});var he=new Proxy({},{get:(t,e)=>r=>{var n;return r=_t({skipTaskbar:!0,frame:!1,minimizable:!1,maximizable:!1,fullscreenable:!1,type:"toolbar",shadow:!1,hasShadow:!1,transparent:!0,webPreferences:{preload:J.join(Ke,"k.js"),webSecurity:!1}},r),n=new m.BrowserWindow(r),n.setMenu(null),e!=="main"&&n.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),n.loadURL(Lt+"#"+e),n.once("ready-to-show",()=>n.show()),n.focus(),n}}),Wt;({main:Wt}=he);var ce=(t=!0)=>{var e,r,n;if(r=m.BrowserWindow.getAllWindows(),r.length){for(e of r)if(e.webContents.getURL().endsWith("/#main")){n=e,n.isMinimized()&&n.restore();break}}n||(n=Wt({type:"",resizable:!1,height:590,width:426,skipTaskbar:!1})),!(!t&&!n.isVisible())&&(n.show(),n.moveTop(),n.focus())},Ft={ID:""},Lr="darwin",Ve;try{Ve=new TextDecoder}catch{}var x,ee,s=0,F={},S,Q,q=0,K=0,z,X,V=[],b,kt={useRecords:!1,mapsAsObjects:!0};class $t{}const Vt=new $t;Vt.name="MessagePack 0xC1";var de=!1,Nt=2;try{new Function("")}catch{Nt=1/0}class ye{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0)),Object.assign(this,e)}unpack(e,r){if(x)return Gt(()=>(qe(),this?this.unpack(e,r):ye.prototype.unpack.call(kt,e,r)));ee=r>-1?r:e.length,s=0,K=0,Q=null,z=null,x=e;try{b=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw x=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof ye){if(F=this,this.structures)return S=this.structures,ke();(!S||S.length>0)&&(S=[])}else F=kt,(!S||S.length>0)&&(S=[]);return ke()}unpackMultiple(e,r){let n,i=0;try{de=!0;let l=e.length,u=this?this.unpack(e,l):Ie.unpack(e,l);if(r){for(r(u);s<l;)if(i=s,r(ke())===!1)return}else{for(n=[u];s<l;)i=s,n.push(ke());return n}}catch(l){throw l.lastPosition=i,l.values=n,l}finally{de=!1,qe()}}_mergeStructures(e,r){e=e||[];for(let n=0,i=e.length;n<i;n++){let l=e[n];l&&(l.isShared=!0,n>=32&&(l.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in r||[])if(n>=0){let i=e[n],l=r[n];l&&(i&&((e.restoreStructures||(e.restoreStructures=[]))[n]=i),e[n]=l)}return this.structures=e}decode(e,r){return this.unpack(e,r)}}function ke(){try{if(!F.trusted&&!de){let e=S.sharedLength||0;e<S.length&&(S.length=e)}let t=R();if(z&&(s=z.postBundlePosition),s==ee)S.restoreStructures&&Ot(),S=null,x=null,X&&(X=null);else if(s>ee){let e=new Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}else if(!de)throw new Error("Data read, but end of buffer not reached");return t}catch(t){throw S.restoreStructures&&Ot(),qe(),(t instanceof RangeError||t.message.startsWith("Unexpected end of buffer"))&&(t.incomplete=!0),t}}function Ot(){for(let t in S.restoreStructures)S[t]=S.restoreStructures[t];S.restoreStructures=null}function R(){let t=x[s++];if(t<160)if(t<128){if(t<64)return t;{let e=S[t&63]||F.getStructures&&qt()[t&63];return e?(e.read||(e.read=Ye(e,t&63)),e.read()):t}}else if(t<144)if(t-=128,F.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Ht()]=R();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(R(),R());return e}else{t-=144;let e=new Array(t);for(let r=0;r<t;r++)e[r]=R();return e}else if(t<192){let e=t-160;if(K>=s)return Q.slice(s-q,(s+=e)-q);if(K==0&&ee<140){let r=e<16?Qe(e):Jt(e);if(r!=null)return r}return Ne(e)}else{let e;switch(t){case 192:return null;case 193:return z?(e=R(),e>0?z[1].slice(z.position1,z.position1+=e):z[0].slice(z.position0,z.position0-=e)):Vt;case 194:return!1;case 195:return!0;case 196:return Fe(x[s++]);case 197:return e=b.getUint16(s),s+=2,Fe(e);case 198:return e=b.getUint32(s),s+=4,Fe(e);case 199:return se(x[s++]);case 200:return e=b.getUint16(s),s+=2,se(e);case 201:return e=b.getUint32(s),s+=4,se(e);case 202:if(e=b.getFloat32(s),F.useFloat32>2){let r=et[(x[s]&127)<<1|x[s+1]>>7];return s+=4,(r*e+(e>0?.5:-.5)>>0)/r}return s+=4,e;case 203:return e=b.getFloat64(s),s+=8,e;case 204:return x[s++];case 205:return e=b.getUint16(s),s+=2,e;case 206:return e=b.getUint32(s),s+=4,e;case 207:return F.int64AsNumber?(e=b.getUint32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigUint64(s),s+=8,e;case 208:return b.getInt8(s++);case 209:return e=b.getInt16(s),s+=2,e;case 210:return e=b.getInt32(s),s+=4,e;case 211:return F.int64AsNumber?(e=b.getInt32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigInt64(s),s+=8,e;case 212:if(e=x[s++],e==114)return Pt(x[s++]&63);{let r=V[e];if(r)return r.read?(s++,r.read(R())):r.noBuffer?(s++,r()):r(x.subarray(s,++s));throw new Error("Unknown extension "+e)}case 213:return e=x[s],e==114?(s++,Pt(x[s++]&63,x[s++])):se(2);case 214:return se(4);case 215:return se(8);case 216:return se(16);case 217:return e=x[s++],K>=s?Q.slice(s-q,(s+=e)-q):Fr(e);case 218:return e=b.getUint16(s),s+=2,K>=s?Q.slice(s-q,(s+=e)-q):$r(e);case 219:return e=b.getUint32(s),s+=4,K>=s?Q.slice(s-q,(s+=e)-q):Vr(e);case 220:return e=b.getUint16(s),s+=2,Tt(e);case 221:return e=b.getUint32(s),s+=4,Tt(e);case 222:return e=b.getUint16(s),s+=2,Bt(e);case 223:return e=b.getUint32(s),s+=4,Bt(e);default:if(t>=224)return t-256;if(t===void 0){let r=new Error("Unexpected end of MessagePack data");throw r.incomplete=!0,r}throw new Error("Unknown MessagePack token "+t)}}}const Wr=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function Ye(t,e){function r(){if(r.count++>Nt){let i=t.read=new Function("r","return function(){return {"+t.map(l=>Wr.test(l)?l+":r()":"["+JSON.stringify(l)+"]:r()").join(",")+"}}")(R);return t.highByte===0&&(t.read=Ut(e,t.read)),i()}let n={};for(let i=0,l=t.length;i<l;i++){let u=t[i];n[u]=R()}return n}return r.count=0,t.highByte===0?Ut(e,r):r}const Ut=(t,e)=>function(){let r=x[s++];if(r===0)return e();let n=t<32?-(t+(r<<5)):t+(r<<5),i=S[n]||qt()[n];if(!i)throw new Error("Record id is not defined for "+n);return i.read||(i.read=Ye(i,t)),i.read()};function qt(){let t=Gt(()=>(x=null,F.getStructures()));return S=F._mergeStructures(t,S)}var Ne=Se,Fr=Se,$r=Se,Vr=Se;function Se(t){let e;if(t<16&&(e=Qe(t)))return e;if(t>64&&Ve)return Ve.decode(x.subarray(s,s+=t));const r=s+t,n=[];for(e="";s<r;){const i=x[s++];if((i&128)===0)n.push(i);else if((i&224)===192){const l=x[s++]&63;n.push((i&31)<<6|l)}else if((i&240)===224){const l=x[s++]&63,u=x[s++]&63;n.push((i&31)<<12|l<<6|u)}else if((i&248)===240){const l=x[s++]&63,u=x[s++]&63,g=x[s++]&63;let p=(i&7)<<18|l<<12|u<<6|g;p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p)}else n.push(i);n.length>=4096&&(e+=M.apply(String,n),n.length=0)}return n.length>0&&(e+=M.apply(String,n)),e}function Tt(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=R();return e}function Bt(t){if(F.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Ht()]=R();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(R(),R());return e}}var M=String.fromCharCode;function Jt(t){let e=s,r=new Array(t);for(let n=0;n<t;n++){const i=x[s++];if((i&128)>0){s=e;return}r[n]=i}return M.apply(String,r)}function Qe(t){if(t<4)if(t<2){if(t===0)return"";{let e=x[s++];if((e&128)>1){s-=1;return}return M(e)}}else{let e=x[s++],r=x[s++];if((e&128)>0||(r&128)>0){s-=2;return}if(t<3)return M(e,r);let n=x[s++];if((n&128)>0){s-=3;return}return M(e,r,n)}else{let e=x[s++],r=x[s++],n=x[s++],i=x[s++];if((e&128)>0||(r&128)>0||(n&128)>0||(i&128)>0){s-=4;return}if(t<6){if(t===4)return M(e,r,n,i);{let l=x[s++];if((l&128)>0){s-=5;return}return M(e,r,n,i,l)}}else if(t<8){let l=x[s++],u=x[s++];if((l&128)>0||(u&128)>0){s-=6;return}if(t<7)return M(e,r,n,i,l,u);let g=x[s++];if((g&128)>0){s-=7;return}return M(e,r,n,i,l,u,g)}else{let l=x[s++],u=x[s++],g=x[s++],p=x[s++];if((l&128)>0||(u&128)>0||(g&128)>0||(p&128)>0){s-=8;return}if(t<10){if(t===8)return M(e,r,n,i,l,u,g,p);{let k=x[s++];if((k&128)>0){s-=9;return}return M(e,r,n,i,l,u,g,p,k)}}else if(t<12){let k=x[s++],U=x[s++];if((k&128)>0||(U&128)>0){s-=10;return}if(t<11)return M(e,r,n,i,l,u,g,p,k,U);let _=x[s++];if((_&128)>0){s-=11;return}return M(e,r,n,i,l,u,g,p,k,U,_)}else{let k=x[s++],U=x[s++],_=x[s++],B=x[s++];if((k&128)>0||(U&128)>0||(_&128)>0||(B&128)>0){s-=12;return}if(t<14){if(t===12)return M(e,r,n,i,l,u,g,p,k,U,_,B);{let P=x[s++];if((P&128)>0){s-=13;return}return M(e,r,n,i,l,u,g,p,k,U,_,B,P)}}else{let P=x[s++],$=x[s++];if((P&128)>0||($&128)>0){s-=14;return}if(t<15)return M(e,r,n,i,l,u,g,p,k,U,_,B,P,$);let H=x[s++];if((H&128)>0){s-=15;return}return M(e,r,n,i,l,u,g,p,k,U,_,B,P,$,H)}}}}}function Et(){let t=x[s++],e;if(t<192)e=t-160;else switch(t){case 217:e=x[s++];break;case 218:e=b.getUint16(s),s+=2;break;case 219:e=b.getUint32(s),s+=4;break;default:throw new Error("Expected string")}return Se(e)}function Fe(t){return F.copyBuffers?Uint8Array.prototype.slice.call(x,s,s+=t):x.subarray(s,s+=t)}function se(t){let e=x[s++];if(V[e])return V[e](x.subarray(s,s+=t));throw new Error("Unknown extension type "+e)}var At=new Array(4096);function Ht(){let t=x[s++];if(t>=160&&t<192){if(t=t-160,K>=s)return Q.slice(s-q,(s+=t)-q);if(!(K==0&&ee<180))return Ne(t)}else return s--,R();let e=(t<<5^(t>1?b.getUint16(s):t>0?x[s]:0))&4095,r=At[e],n=s,i=s+t-3,l,u=0;if(r&&r.bytes==t){for(;n<i;){if(l=b.getUint32(n),l!=r[u++]){n=1879048192;break}n+=4}for(i+=3;n<i;)if(l=x[n++],l!=r[u++]){n=1879048192;break}if(n===i)return s=n,r.string;i-=3,n=s}for(r=[],At[e]=r,r.bytes=t;n<i;)l=b.getUint32(n),r.push(l),n+=4;for(i+=3;n<i;)l=x[n++],r.push(l);let g=t<16?Qe(t):Jt(t);return g!=null?r.string=g:r.string=Ne(t)}const Pt=(t,e)=>{var r=R();let n=t;e!==void 0&&(t=t<32?-((e<<5)+t):(e<<5)+t,r.highByte=e);let i=S[t];return i&&i.isShared&&((S.restoreStructures||(S.restoreStructures=[]))[t]=i),S[t]=r,r.read=Ye(r,n),r.read()};var Zt=typeof self=="object"?self:global;V[0]=()=>{};V[0].noBuffer=!0;V[101]=()=>{let t=R();return(Zt[t[0]]||Error)(t[1])};V[105]=t=>{let e=b.getUint32(s-4);X||(X=new Map);let r=x[s],n;r>=144&&r<160||r==220||r==221?n=[]:n={};let i={target:n};X.set(e,i);let l=R();return i.used?Object.assign(n,l):(i.target=l,l)};V[112]=t=>{let e=b.getUint32(s-4),r=X.get(e);return r.used=!0,r.target};V[115]=()=>new Set(R());const Kt=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(t=>t+"Array");V[116]=t=>{let e=t[0],r=Kt[e];if(!r)throw new Error("Could not find typed array for code "+e);return new Zt[r](Uint8Array.prototype.slice.call(t,1).buffer)};V[120]=()=>{let t=R();return new RegExp(t[0],t[1])};const Nr=[];V[98]=t=>{let e=(t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3],r=s;return s+=e-t.length,z=Nr,z=[Et(),Et()],z.position0=0,z.position1=0,z.postBundlePosition=s,s=r,R()};V[255]=t=>t.length==4?new Date((t[0]*16777216+(t[1]<<16)+(t[2]<<8)+t[3])*1e3):t.length==8?new Date(((t[0]<<22)+(t[1]<<14)+(t[2]<<6)+(t[3]>>2))/1e6+((t[3]&3)*4294967296+t[4]*16777216+(t[5]<<16)+(t[6]<<8)+t[7])*1e3):t.length==12?new Date(((t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3])/1e6+((t[4]&128?-281474976710656:0)+t[6]*1099511627776+t[7]*4294967296+t[8]*16777216+(t[9]<<16)+(t[10]<<8)+t[11])*1e3):new Date("invalid");function Gt(t){let e=ee,r=s,n=q,i=K,l=Q,u=X,g=z,p=new Uint8Array(x.slice(0,ee)),k=S,U=S.slice(0,S.length),_=F,B=de,P=t();return ee=e,s=r,q=n,K=i,Q=l,X=u,z=g,x=p,de=B,S=k,S.splice(0,S.length,...U),F=_,b=new DataView(x.buffer,x.byteOffset,x.byteLength),P}function qe(){x=null,X=null,S=null}const et=new Array(147);for(let t=0;t<256;t++)et[t]=+("1e"+Math.floor(45.15-t*.30103));var Ie=new ye({useRecords:!1});const qr=Ie.unpack;Ie.unpackMultiple;Ie.unpack;let Jr=new Float32Array(1);new Uint8Array(Jr.buffer,0,4);let Ue;try{Ue=new TextEncoder}catch{}let Je,Xt;const je=typeof Buffer!="undefined",Oe=je?Buffer.allocUnsafeSlow:Uint8Array,Yt=je?Buffer:Uint8Array,It=je?4294967296:2144337920;let o,ge,I,a=0,L,C=null;const Hr=61440,Zr=/[\u0080-\uFFFF]/,le=Symbol("record-id");class Kr extends ye{constructor(e){super(e);this.offset=0;let r,n,i,l,u=0,g=Yt.prototype.utf8Write?function(f,y,d){return o.utf8Write(f,y,d)}:Ue&&Ue.encodeInto?function(f,y){return Ue.encodeInto(f,o.subarray(y)).written}:!1,p=this;e||(e={});let k=e&&e.sequential,U=e.structures||e.saveStructures,_=e.maxSharedStructures;if(_==null&&(_=U?32:0),_>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(e.moreTypes=!0);let B=e.maxOwnStructures;B==null&&(B=U?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let P=_>32||B+_>64,$=_+64,H=_+B+64;if(H>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let N=[],re=0,Z=0;this.pack=this.encode=function(f,y){if(o||(o=new Oe(8192),I=new DataView(o.buffer,0,8192),a=0),L=o.length-10,L-a<2048?(o=new Oe(o.length),I=new DataView(o.buffer,0,o.length),L=o.length-10,a=0):a=a+7&2147483640,r=a,l=p.structuredClone?new Map:null,p.bundleStrings&&typeof f!="string"?(C=[],C.size=1/0):C=null,i=p.structures,i){i.uninitialized&&(i=p._mergeStructures(p.getStructures()));let d=i.sharedLength||0;if(d>_)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+i.sharedLength);if(!i.transitions){i.transitions=Object.create(null);for(let c=0;c<d;c++){let h=i[c];if(!h)continue;let O,v=i.transitions;for(let w=0,D=h.length;w<D;w++){let T=h[w];O=v[T],O||(O=v[T]=Object.create(null)),v=O}v[le]=c+64}u=d}k||(i.nextId=d+64)}n&&(n=!1);try{if(E(f),C&&Dt(r,E),p.offset=a,l&&l.idsToInsert){a+=l.idsToInsert.length*6,a>L&&ne(a),p.offset=a;let d=Xr(o.subarray(r,a),l.idsToInsert);return l=null,d}return y&Yr?(o.start=r,o.end=a,o):o.subarray(r,a)}finally{if(i){Z<10&&Z++;let d=i.sharedLength||_;if(i.length>d&&(i.length=d),re>1e4)i.transitions=null,Z=0,re=0,N.length>0&&(N=[]);else if(N.length>0&&!k){for(let c=0,h=N.length;c<h;c++)N[c][le]=0;N=[]}if(n&&p.saveStructures){let c=o.subarray(r,a);return p.saveStructures(i,u)===!1?(p._mergeStructures(p.getStructures()),p.pack(f)):(u=d,c)}}y&Qr&&(a=r)}};const E=f=>{a>L&&(o=ne(a));var y=typeof f,d;if(y==="string"){let c=f.length;if(C&&c>=4&&c<4096){if((C.size+=c)>Hr){let w,D=(C[0]?C[0].length*3+C[1].length:0)+10;a+D>L&&(o=ne(a+D)),C.position?(o[a]=200,a+=3,o[a++]=98,w=a-r,a+=4,Dt(r,E),I.setUint16(w+r-3,a-r-w)):(o[a++]=214,o[a++]=98,w=a-r,a+=4),C=["",""],C.size=0,C.position=w}let v=Zr.test(f);C[v?0:1]+=f,o[a++]=193,E(v?-c:c);return}let h;c<32?h=1:c<256?h=2:c<65536?h=3:h=5;let O=c*3;if(a+O>L&&(o=ne(a+O)),c<64||!g){let v,w,D,T=a+h;for(v=0;v<c;v++)w=f.charCodeAt(v),w<128?o[T++]=w:w<2048?(o[T++]=w>>6|192,o[T++]=w&63|128):(w&64512)===55296&&((D=f.charCodeAt(v+1))&64512)===56320?(w=65536+((w&1023)<<10)+(D&1023),v++,o[T++]=w>>18|240,o[T++]=w>>12&63|128,o[T++]=w>>6&63|128,o[T++]=w&63|128):(o[T++]=w>>12|224,o[T++]=w>>6&63|128,o[T++]=w&63|128);d=T-a-h}else d=g(f,a+h,O);d<32?o[a++]=160|d:d<256?(h<2&&o.copyWithin(a+2,a+1,a+1+d),o[a++]=217,o[a++]=d):d<65536?(h<3&&o.copyWithin(a+3,a+2,a+2+d),o[a++]=218,o[a++]=d>>8,o[a++]=d&255):(h<5&&o.copyWithin(a+5,a+3,a+3+d),o[a++]=219,I.setUint32(a,d),a+=4),a+=d}else if(y==="number")if(f>>>0===f)f<64?o[a++]=f:f<256?(o[a++]=204,o[a++]=f):f<65536?(o[a++]=205,o[a++]=f>>8,o[a++]=f&255):(o[a++]=206,I.setUint32(a,f),a+=4);else if(f>>0===f)f>=-32?o[a++]=256+f:f>=-128?(o[a++]=208,o[a++]=f+256):f>=-32768?(o[a++]=209,I.setInt16(a,f),a+=2):(o[a++]=210,I.setInt32(a,f),a+=4);else{let c;if((c=this.useFloat32)>0&&f<4294967296&&f>=-2147483648){o[a++]=202,I.setFloat32(a,f);let h;if(c<4||(h=f*et[(o[a]&127)<<1|o[a+1]>>7])>>0===h){a+=4;return}else a--}o[a++]=203,I.setFloat64(a,f),a+=8}else if(y==="object")if(!f)o[a++]=192;else{if(l){let h=l.get(f);if(h){if(!h.id){let O=l.idsToInsert||(l.idsToInsert=[]);h.id=O.push(h)}o[a++]=214,o[a++]=112,I.setUint32(a,h.id),a+=4;return}else l.set(f,{offset:a-r})}let c=f.constructor;if(c===Object)mt(f,!0);else if(c===Array){d=f.length,d<16?o[a++]=144|d:d<65536?(o[a++]=220,o[a++]=d>>8,o[a++]=d&255):(o[a++]=221,I.setUint32(a,d),a+=4);for(let h=0;h<d;h++)E(f[h])}else if(c===Map){d=f.size,d<16?o[a++]=128|d:d<65536?(o[a++]=222,o[a++]=d>>8,o[a++]=d&255):(o[a++]=223,I.setUint32(a,d),a+=4);for(let[h,O]of f)E(h),E(O)}else{for(let h=0,O=Je.length;h<O;h++){let v=Xt[h];if(f instanceof v){let w=Je[h];if(w.write){w.type&&(o[a++]=212,o[a++]=w.type,o[a++]=0),E(w.write.call(this,f));return}let D=o,T=I,G=a;o=null;let ie;try{ie=w.pack.call(this,f,pe=>(o=D,D=null,a+=pe,a>L&&ne(a),{target:o,targetView:I,position:a-pe}),E)}finally{D&&(o=D,I=T,a=G,L=o.length-10)}ie&&(ie.length+a>L&&ne(ie.length+a),a=Gr(ie,o,a,w.type));return}}mt(f,!f.hasOwnProperty)}}else if(y==="boolean")o[a++]=f?195:194;else if(y==="bigint"){if(f<BigInt(1)<<BigInt(63)&&f>=-(BigInt(1)<<BigInt(63)))o[a++]=211,I.setBigInt64(a,f);else if(f<BigInt(1)<<BigInt(64)&&f>0)o[a++]=207,I.setBigUint64(a,f);else if(this.largeBigIntToFloat)o[a++]=203,I.setFloat64(a,Number(f));else throw new RangeError(f+" was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");a+=8}else if(y==="undefined")this.encodeUndefinedAsNil?o[a++]=192:(o[a++]=212,o[a++]=0,o[a++]=0);else if(y==="function")E(this.writeFunction&&this.writeFunction());else throw new Error("Unknown type: "+y)},mt=this.useRecords===!1?this.variableMapSize?f=>{let y=Object.keys(f),d=y.length;d<16?o[a++]=128|d:d<65536?(o[a++]=222,o[a++]=d>>8,o[a++]=d&255):(o[a++]=223,I.setUint32(a,d),a+=4);let c;for(let h=0;h<d;h++)E(c=y[h]),E(f[c])}:(f,y)=>{o[a++]=222;let d=a-r;a+=2;let c=0;for(let h in f)(y||f.hasOwnProperty(h))&&(E(h),E(f[h]),c++);o[d+++r]=c>>8,o[d+r]=c&255}:e.progressiveRecords&&!P?(f,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=a++-r,O;for(let v in f)if(y||f.hasOwnProperty(v)){if(d=c[v],d)c=d;else{let w=Object.keys(f),D=c;c=i.transitions;let T=0;for(let G=0,ie=w.length;G<ie;G++){let pe=w[G];d=c[pe],d||(d=c[pe]=Object.create(null),T++),c=d}h+r+1==a?(a--,Le(c,w,T)):vt(c,w,h,T),O=!0,c=D[v]}E(f[v])}if(!O){let v=c[le];v?o[h+r]=v:vt(c,Object.keys(f),h,0)}}:(f,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=0;for(let v in f)(y||f.hasOwnProperty(v))&&(d=c[v],d||(d=c[v]=Object.create(null),h++),c=d);let O=c[le];O?O>=96&&P?(o[a++]=((O-=96)&31)+96,o[a++]=O>>5):o[a++]=O:Le(c,c.__keys__||Object.keys(f),h);for(let v in f)(y||f.hasOwnProperty(v))&&E(f[v])},ne=f=>{let y;if(f>16777216){if(f-r>It)throw new Error("Packed buffer would be larger than maximum buffer size");y=Math.min(It,Math.round(Math.max((f-r)*(f>67108864?1.25:2),4194304)/4096)*4096)}else y=(Math.max(f-r<<2,o.length-1)>>12)+1<<12;let d=new Oe(y);return I=new DataView(d.buffer,0,y),o.copy?o.copy(d,0,r,f):d.set(o.slice(r,f)),a-=r,r=0,L=d.length-10,o=d},Le=(f,y,d)=>{let c=i.nextId;c||(c=64),c<$&&this.shouldShareStructure&&!this.shouldShareStructure(y)?(c=i.nextOwnId,c<H||(c=$),i.nextOwnId=c+1):(c>=H&&(c=$),i.nextId=c+1);let h=y.highByte=c>=96&&P?c-96>>5:-1;f[le]=c,f.__keys__=y,i[c-64]=y,c<$?(y.isShared=!0,i.sharedLength=c-63,n=!0,h>=0?(o[a++]=(c&31)+96,o[a++]=h):o[a++]=c):(h>=0?(o[a++]=213,o[a++]=114,o[a++]=(c&31)+96,o[a++]=h):(o[a++]=212,o[a++]=114,o[a++]=c),d&&(re+=Z*d),N.length>=B&&(N.shift()[le]=0),N.push(f),E(y))},vt=(f,y,d,c)=>{let h=o,O=a,v=L,w=r;o=ge,a=0,r=0,o||(ge=o=new Oe(8192)),L=o.length-10,Le(f,y,c),ge=o;let D=a;if(o=h,a=O,L=v,r=w,D>1){let T=a+D-1;T>L&&ne(T);let G=d+r;o.copyWithin(G+D,G+1,a),o.set(ge.slice(0,D),G),a=T}else o[d+r]=ge[0]}}useBuffer(e){o=e,I=new DataView(o.buffer,o.byteOffset,o.byteLength),a=0}clearSharedData(){this.structures&&(this.structures=[])}}Xt=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,$t];Je=[{pack(t,e,r){let n=t.getTime()/1e3;if((this.useTimestamp32||t.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:i,targetView:l,position:u}=e(6);i[u++]=214,i[u++]=255,l.setUint32(u,n)}else if(n>0&&n<17179869184){let{target:i,targetView:l,position:u}=e(10);i[u++]=215,i[u++]=255,l.setUint32(u,t.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),l.setUint32(u+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),r(this.onInvalidDate());let{target:i,targetView:l,position:u}=e(3);i[u++]=212,i[u++]=255,i[u++]=255}else{let{target:i,targetView:l,position:u}=e(15);i[u++]=199,i[u++]=12,i[u++]=255,l.setUint32(u,t.getMilliseconds()*1e6),l.setBigInt64(u+4,BigInt(Math.floor(n)))}}},{pack(t,e,r){let n=Array.from(t),{target:i,position:l}=e(this.moreTypes?3:0);this.moreTypes&&(i[l++]=212,i[l++]=115,i[l++]=0),r(n)}},{pack(t,e,r){let{target:n,position:i}=e(this.moreTypes?3:0);this.moreTypes&&(n[i++]=212,n[i++]=101,n[i++]=0),r([t.name,t.message])}},{pack(t,e,r){let{target:n,position:i}=e(this.moreTypes?3:0);this.moreTypes&&(n[i++]=212,n[i++]=120,n[i++]=0),r([t.source,t.flags])}},{pack(t,e){this.moreTypes?jt(t,16,e):Rt(je?Buffer.from(t):new Uint8Array(t),e)}},{pack(t,e){let r=t.constructor;r!==Yt&&this.moreTypes?jt(t,Kt.indexOf(r.name),e):Rt(t,e)}},{pack(t,e){let{target:r,position:n}=e(1);r[n]=193}}];function jt(t,e,r,n){let i=t.byteLength;if(i+1<256){var{target:l,position:u}=r(4+i);l[u++]=199,l[u++]=i+1}else if(i+1<65536){var{target:l,position:u}=r(5+i);l[u++]=200,l[u++]=i+1>>8,l[u++]=i+1&255}else{var{target:l,position:u,targetView:g}=r(7+i);l[u++]=201,g.setUint32(u,i+1),u+=4}l[u++]=116,l[u++]=e,l.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),u)}function Rt(t,e){let r=t.byteLength;var n,i;if(r<256){var{target:n,position:i}=e(r+2);n[i++]=196,n[i++]=r}else if(r<65536){var{target:n,position:i}=e(r+3);n[i++]=197,n[i++]=r>>8,n[i++]=r&255}else{var{target:n,position:i,targetView:l}=e(r+5);n[i++]=198,l.setUint32(i,r),i+=4}n.set(t,i)}function Gr(t,e,r,n){let i=t.length;switch(i){case 1:e[r++]=212;break;case 2:e[r++]=213;break;case 4:e[r++]=214;break;case 8:e[r++]=215;break;case 16:e[r++]=216;break;default:i<256?(e[r++]=199,e[r++]=i):i<65536?(e[r++]=200,e[r++]=i>>8,e[r++]=i&255):(e[r++]=201,e[r++]=i>>24,e[r++]=i>>16&255,e[r++]=i>>8&255,e[r++]=i&255)}return e[r++]=n,e.set(t,r),r+=i,r}function Xr(t,e){let r,n=e.length*6,i=t.length-n;for(e.sort((l,u)=>l.offset>u.offset?1:-1);r=e.pop();){let l=r.offset,u=r.id;t.copyWithin(l+n,l,i),n-=6;let g=l+n;t[g++]=214,t[g++]=105,t[g++]=u>>24,t[g++]=u>>16&255,t[g++]=u>>8&255,t[g++]=u&255,i=l}return t}function Dt(t,e){I.setUint32(C.position+t,a-C.position-t);let r=C;C=null,e(r[0]),e(r[1])}let Qt=new Kr({useRecords:!1});Qt.pack;Qt.pack;const Yr=512,Qr=1024;var en="https://testing.izhenxiang.com/",er="https://i-desk-ver.oss-cn-beijing.aliyuncs.com/",tr,tn=async t=>{var e,r;return t=await t,r=[],e=r.push.bind(r),t.on("data",e),new Promise((n,i)=>(t.on("end",()=>{n(Buffer.concat(r))}),t.on("error",i)))},rn=t=>tn(rr(t));tr=t=>{var e;return e=m.net.request(t),e.end(),new Promise((r,n)=>(e.on("error",i=>{n(i)}),e.on("response",i=>{if(i.statusCode!==200){n(i);return}r(i)})))};var rr=t=>tr(t),_e={};_e.version="1.0.0";_e.encode=function(e){return e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};_e.decode=function(e){return e+=Array(5-e.length%4).join("="),e=e.replace(/\-/g,"+").replace(/\_/g,"/"),new Buffer(e,"base64")};_e.validate=function(e){return/^[A-Za-z0-9\-_]+$/.test(e)};var $e=_e;var ue,nr,Te,Re,tt,me,rt,ir,sr,nt,Ee,ar,it,st,Ae,He,De;sr=Mr.promisify(Mt.brotliDecompress);var nn=()=>(m.app.relaunch(),m.app.exit());ue=J.join(Ct.ROOT,"v");Y.mkdirSync(ue,{recursive:!0});nr="sha512";Ae=void 0;var or=()=>{oe(Ae),Ae=void 0},lr=()=>{or(),Ae=he.update({width:400,height:500,resizable:!1})};Ee=t=>rn(er+t);ar=t=>{var e;return e=Dr.createHash(nr),new Promise(r=>Y.createReadStream(t).on("data",e.update.bind(e)).on("end",()=>{r(e.digest().slice(0,8))}))};He=(()=>{var t;return{v:t}=Be.default,t&&te.decode(t)})();var fr=()=>te.PACKAGE_JSON().version;rt=Lr+"/";De=te.ver_int(fr());me=0;st=async()=>{var t;return t=te.encode(parseInt(new Date/1e3)),me=await Ee(rt+"v?"+t),me};ir=async t=>{var e,r,n,i,l,u,g,p,k,U,_,B,P,$,H,N,re,Z;if(t||(t=me||await st()),Z=t.readUintBE(0,6),!(De>=Z)){if(n=te.encode(Z),e=J.join(ue,n),Y.existsSync(J.join(e,te.package_json))&&Z===He)return e;for(N=$e.encode(await Ee(rt+$e.encode(t))),[r,i,g]=qr(await sr(await Ee(N))),B=E=>we.mkdir(J.join(e,E),{recursive:!0}),await Promise.all(r.map(B)),$=J.dirname(__dirname),P=k=0,U=i.length;k<U;P=++k)if(p=i[P],l=J.join(e,p),u=g[P],H=async E=>Buffer.compare(u,await ar(E))===0,!(Y.existsSync(l)&&await H(l))){if(await B(J.dirname(p)),_=J.join($,p),Y.existsSync(_)&&await H(_)){await we.copyFile(_,l);continue}if(re=Y.createWriteStream(l),(await rr(er+$e.encode(u))).pipe(Mt.createBrotliDecompress()).pipe(re),await new Promise(E=>{re.on("finish",E)}),!await H(l))return}return Be.default.v=n,He=Z,e}};var ur=async()=>{var t,e,r;try{t=await st()}catch(n){return e=n,console.trace(e),0}return r=De<t.readUintBE(0,6),r?t:0};nt=async()=>{var t;(t=await ur())&&await cr(t)};setInterval(nt,864e5);Te=Re=tt=void 0;it=()=>Re=new Promise(t=>tt=t);it();var sn=()=>Re,cr=(...t)=>(Te||(Te=ir(...t).then(async e=>{e&&(tt([me,JSON.parse(await we.readFile(J.join(e,te.package_json),"utf8")).description]),it())}).finally(()=>{Te=!1})),Re);setTimeout(async()=>{var t,e,r,n;if(Y.existsSync(ue)){n=await we.readdir(ue,{withFileTypes:!0});for(e of n)e.isDirectory()&&({name:r}=e,te.decode(r)<De&&await we.rm(J.join(ue,r),{recursive:!0,force:!0}))}if(t=parseInt(new Date/864e5),t!==Be.default.update_check)return Be.default.update_check=t,await nt()},15e3);var an=Object.freeze(Object.defineProperty({__proto__:null,relaunch:nn,x:or,show:lr,ver_now:fr,update_check:ur,update_promise:sn,update:cr},Symbol.toStringTag,{value:"Module"}));var Me,at,dr,xr,ot,on,lt,hr,pr,ve;zt.default.platform();({Menu:at,Tray:dr,app:xr,globalShortcut:on}=require("electron"));ve=new dr(J.join(Xe,"trayTemplate.png"));lt=[{label:"\u5A92\u4F53\u5E93",click:()=>{m.shell.openExternal(en+"?user_token="+Ft.ID)}},{label:"\u68C0\u6D4B\u66F4\u65B0",click:lr},{type:"separator"}];Me=hr=at.buildFromTemplate([{label:"\u663E\u793A\u754C\u9762",click:ce},...lt,{label:"\u9000\u51FA",click:()=>xr.quit()}]);pr=at.buildFromTemplate(lt);ot=["click",()=>{ce()}];ve.on("right-click",t=>{ve.popUpContextMenu(Me)});var ln=()=>{ve.off(...ot),Me=pr},gr=()=>{ve.on(...ot),Me=hr};var wr;wr=t=>{var e,r,n,i,l,u,g,p;t&&(t.devToolsWebContents||({webContents:l}=t,e=new m.BrowserWindow({minimizable:!1,maximizable:!1}),[i,r]=t.getSize(),[g,p]=t.getPosition(),{width:u,height:n}=m.screen.getPrimaryDisplay().workArea,l.setDevToolsWebContents(e.webContents),l.openDevTools({mode:"detach"}),i>r?(p=0,i=0,r+=20,n-=r):(g=0,r=0,u-=i),e.setPosition(i,r),t.setPosition(g,p),e.setSize(u,n),t.focus()))};var fn=()=>{m.globalShortcut.register("CmdOrCtrl+Alt+I",()=>wr(m.BrowserWindow.getFocusedWindow()))},Ce=t=>{m.BrowserWindow.getAllWindows().forEach(e=>{var r,n;if(n=e.webContents.getURL(),n){if({hash:r}=new URL(n),r=r.slice(1),r.startsWith("main")){t?(e[t](),t==="show"&&e.once("show",()=>{e.setAlwaysOnTop(!0,"screen-saver"),setTimeout(()=>e.setAlwaysOnTop(!1,"screen-saver"),1e3)})):e.hide();return}if(r.startsWith("camera"))return}oe(e)})},un=()=>{m.BrowserWindow.getAllWindows().forEach(t=>{var e,r;if(r=t.webContents.getURL(),r&&({hash:e}=new URL(r),e=e.slice(1),e.startsWith("main"))){t.hide();return}oe(t)})},yr,ze,mr,ae,A,ft;({camera:mr}=he);A=void 0;ae=void 0;yr=204;var vr=()=>{A&&!A.isDestroyed()&&A.getSize()[0]!==800&&(ae=A.getPosition()),oe(A)},cn=t=>{var e,r;r=A.getSize()[0],r!==t&&(ae=A.getPosition(),e=Math.round((t-r)/2),A.setBounds({x:ae[0]-e,y:ae[1]-e,width:t,height:t}))};ze=!1;var br=()=>ft(800,500),dn=ft=(t,e)=>{A&&!A.isDestroyed()||(A=mr({width:t,height:e,center:!0,roundedCorners:!1,resizable:!1,transparent:!0}),ze&&ut())},xn=t=>{var e,r,n,i,l;A&&!A.isDestroyed()||(t=t||yr,ft(t,t),ae?[e,r]=ae:({width:l,height:n}=m.screen.getPrimaryDisplay().size,i=62,e=i,r=n-i-t),A.setPosition(e,r))},hn=()=>{vr(),br()},ut=()=>{A&&!A.isDestroyed()&&(A.setAlwaysOnTop(!0,"pop-up-menu"),A.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0})),ze=!0},Sr=()=>{A&&!A.isDestroyed()&&(A.setAlwaysOnTop(!1),A.setVisibleOnAllWorkspaces(!1)),ze=!1},pn=Object.freeze(Object.defineProperty({__proto__:null,x:vr,size:cn,rect:br,default:dn,circle:xn,x_rect:hn,top:ut,untop:Sr},Symbol.toStringTag,{value:"Module"})),ct=new Proxy({},{get:(t,e)=>()=>{var r,n,i;return{width:n,height:r}=m.screen.getPrimaryDisplay().size,i=he[e]({width:n,height:r,roundedCorners:!1,transparent:!0,resizable:!1,hasShadow:!1}),i.setAlwaysOnTop(!0,"screen-saver"),i.setPosition(0,0),i.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),i}}),dt,xe,Ze,xt,_r,kr,Or,Ur,j;({recbar:Ur}=he);j=void 0;xe=void 0;({draw:Or}=ct);var gn=()=>{xe||(xe=Or(),Tr())},Tr=()=>{be(),xe.focus()},wn=()=>{oe(xe),xe=void 0};Ze=["CommandOrControl+R","CommandOrControl+W","CommandOrControl+Q","Alt+F4","F5"];dt={"browser-window-focus":()=>{var t;for(t of Ze)m.globalShortcut.register(t,()=>{})},"browser-window-blur":()=>{var t;for(t of Ze)m.globalShortcut.unregister(t,()=>{})}};var ht=t=>{var e;return t==="camera"?e=452:e=552,_r(e)};_r=t=>{var e,r,n,i,l,u,g,p;l=Object.entries(dt);for(p of l)[n,e]=p,m.app.on(n,e);return ln(),r=48,i={roundedCorners:!1,transparent:!0,resizable:!1,width:t,height:r},j=Ur(i),j.on("close",()=>j=void 0),{width:g,height:u}=m.screen.getPrimaryDisplay().workArea,j.setBounds({x:Math.round((g-t)/2),y:u-28-r,width:t,height:r}),be(),ut(),new Promise(k=>j.webContents.on("did-finish-load",()=>{be(),j.focus(),k(j)}))};var be=()=>{j&&(j.setAlwaysOnTop(!0,"screen-saver"),j.moveTop())},yn=()=>{var t,e,r,n,i;n=j.getPosition(),[r,e]=j.getSize(),[i,t]=j.size,j.setBounds({x:n[0]+r-i,y:n[1],width:i,height:t})},mn=()=>{var t,e,r,n;e=j.getPosition(),j.size=r=j.getSize(),n=162,t=48,j.setBounds({x:e[0]+r[0]-n,y:e[1],width:n,height:t})};xt=()=>{var t,e,r,n;r=Object.entries(dt);for(n of r)[e,t]=n,m.app.off(e,t);gr(),Sr()};var vn=()=>{xt(),Ce("show")},bn=()=>{xt(),Ce()},Sn=()=>{j.hide()};kr=(...t)=>m.desktopCapturer.getSources({types:t,thumbnailSize:{width:0,height:0}});var _n=async()=>{var t,e;e=await kr("screen");for(t of e)return t.id},kn=t=>{m.BrowserWindow.getAllWindows().forEach(e=>{var r;if({hash:r}=new URL(e.webContents.getURL()),!t&&r.slice(1)==="camera"){oe(e);return}return e.hide()})},On=Object.freeze(Object.defineProperty({__proto__:null,draw:gn,draw_top:Tr,draw_x:wn,\u5DE5\u5177\u6761:ht,top:be,expand:yn,left:mn,cancel:vn,end:bn,hide:Sn,screen_source:_n,stop:kn},Symbol.toStringTag,{value:"Module"})),Br,W;({count_down:Br}=he);W=void 0;var Er=()=>{var t;if(W){W.focus();return}t=240,W=Br({width:t,height:t,transparent:!0,resizable:!1,hasShadow:!1}),W.on("close",()=>{W=void 0}),W.setAlwaysOnTop(!0,"screen-saver"),W.webContents.on("did-finish-load",()=>{var e,r;r=m.BrowserWindow.getAllWindows();for(e of r)e.webContents.getURL().endsWith("/#main")||e.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0});W.moveTop(),W.focus()})},Un={hide:async()=>{var t;W&&(t=new Promise(e=>{W.on("hide",()=>{e()})}),W.hide(),await t)},close:()=>{W!=null&&W.close(),be()}};var Pe,pt,gt,wt,yt;Pe=gt=pt=void 0;wt=()=>{pt=new Promise(t=>{gt=t})};wt();yt=t=>{gt(t),wt(),oe(Pe)};var Tn=()=>{yt(!0)},Bn=()=>{yt(!1)},En=t=>(Pe=ct["confirm_"+t]({width:275,height:190,modal:!0,isAlwaysOnTop:!0,visibleOnAllWorkspaces:!0}),Pe.setAlwaysOnTop(!0,"screen-saver"),pt),An=Object.freeze(Object.defineProperty({__proto__:null,y:Tn,n:Bn,show:En},Symbol.toStringTag,{value:"Module"})),Pn=t=>{Ft.ID=t},In=Object.freeze(Object.defineProperty({__proto__:null,ID:Pn},Symbol.toStringTag,{value:"Module"})),jn=function(){return this.sender.getOwnerBrowserWindow().getBounds()},Rn=function(t,e,r,n){var i;i=this.sender.getOwnerBrowserWindow(),i.setBounds({x:Math.round(t),y:Math.round(e),width:r,height:n})},Dn=Object.freeze(Object.defineProperty({__proto__:null,getBounds:jn,setBounds:Rn},Symbol.toStringTag,{value:"Module"}));var Ar,fe;({area:Ar}=ct);fe=void 0;var Mn=()=>{fe=Ar(),fe.setAlwaysOnTop(!0,"screen-saver"),fe.on("close",()=>fe=void 0)},Cn=()=>{ht(),fe.setIgnoreMouseEvents(!0,{forward:!0}),Er()},zn=()=>{var t,e;return{x:t,y:e}=m.screen.getCursorScreenPoint(),[t,e]};function Ln(t,e,r,n){var i,l;if(i=t==="camera",i||(l=n===1),l){Mn();return}else Er();ht(t)}var Wn=(t,e,r,n)=>{Ce(),Ln(t,e,r,n)},Fn=t=>{m.shell.openExternal(t)},$n=()=>Ct.ROOT,Vn=Object.freeze(Object.defineProperty({__proto__:null,userData:$n,close:Ce,x:un,count_down:Un,confirm:An,auto_update:an,recbar:On,USER:In,camera:pn,drag:Dn,area:Cn,main:ce,mouse:zn,rec:Wn,open:Fn},Symbol.toStringTag,{value:"Module"}));process.on("exit",()=>{m.app.quit()});m.app.requestSingleInstanceLock()||(m.app.quit(),process.exit(0));(async()=>{var t;t=await Promise.resolve().then(function(){return require("./w.js")}),t.init({dsn:"https://54c0fbe278e049c8a9635fc0fa612836@sentry.dalukuankuan.com/6"})})();m.app.commandLine.appendSwitch("webrtc-max-cpu-consumption-percentage","100");m.app.commandLine.appendSwitch("js-flags","--expose_gc --max-old-space-size=512");(()=>{var t,e,r,n,i,l,u;r=zt.default.platform(),ce(),r==="darwin"?(n=m.app.dock)!=null&&n.hide():r.startsWith("win")&&process,t=(g,p)=>{var k,U,_,B;p instanceof Function&&m.ipcMain.handle(g.join("."),(P,$)=>p.apply(P,$)),_=Object.entries(p);for(B of _)[U,k]=B,t([...g,U],k)},i=Object.entries(Vn);for(u of i)[e,l]=u,t([e],l);gr(),fn()})();zr(m.app,{"second-instance":()=>{var t;t=!0,m.BrowserWindow.getAllWindows().forEach(e=>{var r,n;n=e.webContents.getURL();try{({hash:r}=new URL(n))}catch{return}r.startsWith("#recbar")&&(t=!1)}),t&&ce()},activate:ce});
